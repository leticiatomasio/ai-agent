import type { ToolFn } from '../../types'
import { z } from 'zod'
import { openai } from '../ai'

export const imageGeneratorToolDefinition = {
  name: 'generate_image',
  parameters: z.object({
    prompt: z
      .string()
      .describe(
        `prompt for the image. Be sure to consider the user's original message when making the prompt. If you are unsure, then as the user to provide more details.`
      ),
  }),
  description: 'generate an image',
}

type Args = z.infer<typeof imageGeneratorToolDefinition.parameters>

export const generateImage: ToolFn<Args, string> = async ({
  toolArgs,
  userMessage,
}) => {
  const response = await openai.images.generate({
    model: 'dall-e-3',
    prompt: toolArgs.prompt,
    n: 1,
    size: '1024x1024',
  })

  return response.data[0].url!
}
