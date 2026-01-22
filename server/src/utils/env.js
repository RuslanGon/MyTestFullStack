import dotenv  from 'dotenv';

dotenv.config();

export const env = (envName) => {
    const value = process.env[envName];
    if (!value) {
      throw new Error(`Environment variable ${envName} is not defined`);
    }
    return value;
  };

