export type AuthErrorType =
    "cookie:delete_failed"
    | "cookie:get_failed"
    | "cookie:set_failed"
    | "session:expired"
    | "session:too_many"
    | "user:authentication_failed"
    | "user:unauthorized_access"
;

export class AuthError extends Error {
    constructor(public type: AuthErrorType, message: string) {
        super(message);

        this.name = "AuthCookieError";
    }
}
