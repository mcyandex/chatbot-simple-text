import { Router, Request, Response, NextFunction } from "express";
import { Container } from "typedi";
import ChatbotService from "../services/chatbot";

const route = Router();

export default (app: Router) => {
  app.use("/chatbot", route);

  route.get("/", async (req: Request, res: Response, next: NextFunction) => {
    console.log("Calling Chatbot endpoint with query: %o", req.query);
    try {
      const ChatbotServiceInstance = Container.get(ChatbotService);
      if (!req.query.message) {
        return res
          .status(400)
          .json({
            message:
              "message is required please provide it as a query parameter, for example: /chatbot?message=hello",
          });
      }
      const message = req.query.message as string;
      const response = await ChatbotServiceInstance.CallOpenAPI(message);
      return res.status(200).json({ message: response });
    } catch (e) {
      console.log("🔥 error: %o", e);
      return next(e);
    }
  });
};
