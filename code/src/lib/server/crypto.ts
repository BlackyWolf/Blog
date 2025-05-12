import { ARGON2_SECRET, AUTH_SECRET } from "$env/static/private";
import { argon2id, hash, verify } from "argon2";
import { createCipheriv, createDecipheriv, createHash, randomBytes } from "crypto";

const ALGORITHM = "aes-256-gcm";
const IV_LENGTH = 12;

function deriveKey() {
    return createHash("sha256")
        .update(AUTH_SECRET)
        .digest();
}

export function decrypt(encryptedText: string) {
    if (!encryptedText) {
        throw new Error("Encrypted text is empty.");
    }

    const encryptedBytes = Buffer.from(encryptedText, "hex");

    const iv = encryptedBytes.subarray(0, IV_LENGTH);
    const cipherText = encryptedBytes.subarray(IV_LENGTH, encryptedBytes.length - 16);
    const authTag = encryptedBytes.subarray(encryptedBytes.length - 16);

    const decipher = createDecipheriv(ALGORITHM, deriveKey(), iv);

    decipher.setAuthTag(authTag);

    const textBytes = Buffer.concat([
        decipher.update(cipherText),
        decipher.final()
    ]);

    return textBytes.toString();
}

export function encrypt(text: string) {
    const iv = randomBytes(IV_LENGTH);

    const cipher = createCipheriv(ALGORITHM, deriveKey(), iv);

    const cipherText = Buffer.concat([
        iv,
        cipher.update(text, "utf8"),
        cipher.final(),
        cipher.getAuthTag(),
    ]);

    return cipherText.toString("hex");
}

export async function hashPassword(password: string): Promise<string> {
    return await hash(password, {
        hashLength: 64,
        memoryCost: 2 ** 16,
        secret: Buffer.from(ARGON2_SECRET),
        type: argon2id,
    });
}

export async function verifyPassword(
    password: string,
    hashedPassword: string,
): Promise<boolean> {
    return await verify(hashedPassword, password, {
        secret: Buffer.from(ARGON2_SECRET),
    });
}
