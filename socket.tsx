import { get, set, has, remove } from './location';
import { io, Socket } from 'socket.io-client';

if (!has('socket')) {
    let socket = io('http://mc.firecraftgaming.com:25565');
    set('socket', socket);
}

let socket = get('socket') as Socket;
interface Request {
    success: Function;
    error: Function;
}

let requests = new Map<number, Request>()
let reqid = 0;
function request(action: string, ...args: any[]) { 
    return new Promise((res: (response: any) => any, rej: (error: any) => any) => {
        let req = reqid++;

        requests.set(req, {
            success: res,
            error: rej
        });
        socket.emit(action, req, ...args);
    });
}

socket.on('success', (req, response) => {
    requests.get(req)?.success(response);
    requests.delete(req);
});
socket.on('error', (req, response) => {
    requests.get(req)?.error(response);
    requests.delete(req);
});
socket.on('disconnect', _ => remove('socket'))

export { socket, request }