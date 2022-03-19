import { EncryptStorage } from 'encrypt-storage';

// Example of secret_key variable in an .env file
// const encryptStorage = new EncryptStorage(process.env.SECRET_KEY, options);
export const encryptStorage = new EncryptStorage(process.env.REACT_APP_ENCRYPT_STORAGE, {
  prefix: '@encrypted',
});
