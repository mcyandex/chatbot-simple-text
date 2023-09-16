import { Service } from "typedi";
// import OpenAI from "openai";
import { OpenAI } from "langchain/llms/openai";
import { ChatOpenAI } from "langchain/chat_models/openai";
import { HumanMessage } from "langchain/schema";

const model = new OpenAI({
  temperature: 0,
  modelName: "gpt-3.5-turbo",
});

@Service()
export default class ChatbotService {
  constructor() {}

  public async CallOpenAPI(message: string): Promise<string> {
    try {
      console.log("Calling OpenAPI service with message: %o", message);

      const chat = new ChatOpenAI();
      const response = await chat.call([new HumanMessage(message)]);
      //   console.log("Response: %o", response);
      if (!response.content) {
        throw new Error("Failed to get response from OpenAI");
      }
      return response.content;
    } catch (e) {
      console.log("🔥 error: %o", e);
      throw e;
    }
  }
}
