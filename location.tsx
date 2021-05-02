declare module globalThis {
    let data: Map<string, any>;
}

globalThis.data = new Map<string, any>();

function get(key: string) : any {
    return globalThis.data.get(key);
}
function set(key: string, value: any) {
    globalThis.data.set(key, value);
}
function has(key: string) {
    return globalThis.data.has(key);
}

export { set, get, has };