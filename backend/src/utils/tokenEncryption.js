import crypto from "node:crypto";

const algorithm = "aes-256-gcm";

const getEncryptionKey = () => {
  const key = process.env.GOOGLE_TOKEN_ENCRYPTION_KEY;

  if (!key || !/^[0-9a-fA-F]{64}$/.test(key)) {
    throw new Error("Invalid Google token encryption key");
  }

  return Buffer.from(key, "hex");
};

export const encryptToken = (token) => {
  const iv = crypto.randomBytes(12);

  const cipher = crypto.createCipheriv(
    algorithm,
    getEncryptionKey(),
    iv
  );

  const encrypted = Buffer.concat([
    cipher.update(token, "utf8"),
    cipher.final()
  ]);

  const authTag = cipher.getAuthTag();

  return [
    iv.toString("hex"),
    authTag.toString("hex"),
    encrypted.toString("hex")
  ].join(":");
};

export const decryptToken = (encryptedToken) => {
  const [ivHex, authTagHex, dataHex] = encryptedToken.split(":");

  const decipher = crypto.createDecipheriv(
    algorithm,
    getEncryptionKey(),
    Buffer.from(ivHex, "hex")
  );

  decipher.setAuthTag(Buffer.from(authTagHex, "hex"));

  const decrypted = Buffer.concat([
    decipher.update(Buffer.from(dataHex, "hex")),
    decipher.final()
  ]);

  return decrypted.toString("utf8");
};