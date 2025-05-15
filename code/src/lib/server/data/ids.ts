import { ALLOWED_ID_CAHARCTERS } from "$env/static/private";
import Sqids from "sqids";
import { DbError } from "./errors";

const sqids = new Sqids({
    alphabet: ALLOWED_ID_CAHARCTERS,
    minLength: 10,
});

export function decodeId(id: string) {
    const ids = sqids.decode(id);

    if (ids.length === 0) {
        throw new DbError("db:id_decoding_failed", "Length of IDs array is 0");
    }

    const encodedIdCheck = encodeId(ids);

    if (encodedIdCheck !== id) {
        throw new DbError("db:spoofed_id", "Re-encoded ID does not match the original ID");
    }

    return ids;
}

export function encodeId(id: number | number[]) {
    if (Array.isArray(id)) {
        return sqids.encode(id);
    }

    return sqids.encode([id]);
}
