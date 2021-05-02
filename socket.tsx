import { get, set, has } from './location';
import { io, Socket } from 'socket.io-client';

if (!has('socket')) {
    let socket = io('http://mc.firecraftgaming.com:25565');
    set('socket', socket);
}

let socket = get('socket') as Socket;

export { socket }