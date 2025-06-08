import type OpenAI from 'openai'
import {
  generateImage,
  imageGeneratorToolDefinition,
} from './tools/imageGenerator'
import { getDadJoke, dadJokeGetterToolDefinition } from './tools/dadJokeGetter'

export const runTool = async (
  toolCall: OpenAI.Chat.Completions.ChatCompletionMessageToolCall,
  userMessage: string
) => {
  const input = {
    userMessage,
    toolArgs: JSON.parse(toolCall.function.arguments || '{}'),
  }

  switch (toolCall.function.name) {
    case imageGeneratorToolDefinition.name:
      return generateImage(input)

    case dadJokeGetterToolDefinition.name:
      return getDadJoke(input)

    default:
      return `The tool ${toolCall.function.name} does not exist.`
  }
}
