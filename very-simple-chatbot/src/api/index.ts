import { Router } from "express";
import chatbot from "./routes/chatbot";

// guaranteed to get dependencies
export default () => {
  const app = Router();
  chatbot(app);
  return app;
};
