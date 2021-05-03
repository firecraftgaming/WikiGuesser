import { sessionStorage } from './Storage';

function get(key: string) {
    return sessionStorage.getItem(key);
}
function set(key: string, value: any) {
    sessionStorage.setItem(key, value);
}
function has(key: string) {
    return sessionStorage.getItem(key) !== undefined;
}
function remove(key: string) {
    sessionStorage.removeItem(key);
}

export { set, get, has, remove };