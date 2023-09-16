import dotenv from 'dotenv';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config();
if (envFound.error) {
  // This error should crash whole process

  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

export default {
  /**
   * Your favorite port
   */
  port: parseInt(process.env.PORT, 10),

  /**
   * Open API config
   */
  openApi: {
    key : process.env.OPEN_API_KEY,
  },

  /**
   * API configs
   */
  api: {
    prefix: '/api',
  },
 
};
