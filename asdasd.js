export function input(msg = "") {
    const buf = new Uint8Array(1024);
    Deno.stdout.write(new TextEncoder().encode(msg));
    const n = Deno.stdin.read(buf);
    return new TextDecoder().decode(buf.subarray(0, n)).trim();
}

export function print(msg = "") {
    console.log(msg);
}

export function randomInt(min = 0, max = 1) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}
