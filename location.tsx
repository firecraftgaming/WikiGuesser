declare module globalThis {
    let data: string;
}

globalThis.data = '';

function get() : string {
    return globalThis.data;
}
function set(value: string) {
    globalThis.data = value;
}

export {set, get};