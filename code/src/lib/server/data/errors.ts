export type DbErrorType =
    "db:id_decoding_failed"
    | "db:id_encoding_failed"
    | "db:spoofed_id"
;

export class DbError extends Error {
    constructor(
        public type: DbErrorType,
        message: string,
        public data?: unknown
    ) {
        super(message);

        this.name = "DbError";
    }
}
