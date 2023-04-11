function hex (buffer: ArrayBuffer) {
    return Array.from(new Uint8Array(buffer))
        .map(b => b.toString(16).padStart(2, '00'))
        .join('');
}

export async function hash256(value: string) {
    var buffer = await crypto.subtle.digest(
        'SHA-1',
        new TextEncoder().encode(value)
    );

    return hex(buffer);
}
