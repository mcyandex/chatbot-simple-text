# Building Chatbots with Langchain and Node.js

## Features

- Simple text chatbot with OpenAI API

## Roadmap

- Chat from user's pdf file (in progress)
- Show user's message with response when returning a response
- Show previous messages when returning a response
- Chat from user's other documents (i.e txt, csv, html, etc)
- Chat from user's web page (i.e. url)

# Installation

- Use `node` version `18.0.0` or higher.

1. Clone the repository

- run `git clone https://github.com/fredygerman/generative-ai-meetup.git`

2. Go to the very-simple-chatbot folder

- run `cd generative-ai-meetup/very-simple-chatbot`

3. Set up the environment variables

- run `cp .env.example .env`. or create a `.env` file and copy the contents of `.env.example` to `.env`.
- Go to your .env file and update the `OPENAI_API_KEY` value with your OpenAI API key. You can get your API key from [here](https://platform.openai.com/account/api-keys).

4. Install dependencies in package.json

- run `npm install`

5. Run the server

- run `npm start`.

# Usage

1. Go to `http://localhost:3169/api/chatbot?message=hi` in your browser.
   Remember to replace `hi` with your message.

2. You should see a response like this:

```
{
    Human : hi
    Ai : Hello, how are you?
}
```

# Note

I know it should be a very simple example but i mainly used a format of a project that i have been working on for a while. So this is ready for easy improvements and additions.

Please let me know if you would a much simple example. maybe a single file with just the code.

I will also be adding more comments to the code to make it easier to understand.

Any feedback and Contributions are welcome ❤️
