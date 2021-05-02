import { get, set, has } from './location';
import { io, Socket } from 'socket.io-client';

if (!has('socket')) {
    let socket = io('http://mc.firecraftgaming.com:25565');
    set('socket', socket);
}

let socket = get('socket') as Socket;

// TODO: Meant to be a request system: client sends message that ends with reqid and then server respond with msg that ends with reqid then client method returns
let reqid = 0;
function request(...args: any[]) {
    reqid++;
    return new Promise((res, rej) => {

    });
}

export { socket }