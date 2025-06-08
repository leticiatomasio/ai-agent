# AI Agent: Dad Joke Generator & Image Creator

This project is a fun and interactive AI agent built with OpenAI and DALL·E. It takes a user prompt, fetches a dad joke from an external API, and then uses DALL·E to generate an image inspired by the joke — all through intelligent decision-making powered by OpenAI’s function calling system.

## Setup Instructions

This repo requires **Node.js version 22+**. You will need an [API Key from OpenAI](https://platform.openai.com/settings/organization/api-keys) to make this work.

To get all dependencies needed, run:

```bash
npm install
```

Create an [API Key from OpenAI](https://platform.openai.com/settings/organization/api-keys) and save it in a `.env` file:

```
OPENAI_API_KEY='YOUR_API_KEY'
```

To run the project:

```bash
npm start 'type your prompt here'
```

## State Management

The agent stores memory in a db.json file. If you change the code or behavior of the tools, you may need to reset db.json to clear previous state and avoid errors.
