'use server';

/**
 * @fileOverview Generates example prompts for the chatbot to help users understand how to interact with it.
 *
 * - generateChatbotPrompt - A function that generates example prompts for the chatbot.
 * - GenerateChatbotPromptInput - The input type for the generateChatbotPrompt function.
 * - GenerateChatbotPromptOutput - The return type for the generateChatbotPrompt function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateChatbotPromptInputSchema = z.object({
  topic: z
    .string()
    .describe('The topic or area of interest for which to generate example prompts.'),
});
export type GenerateChatbotPromptInput = z.infer<typeof GenerateChatbotPromptInputSchema>;

const GenerateChatbotPromptOutputSchema = z.object({
  examplePrompts: z
    .array(z.string())
    .describe('An array of example prompts related to the specified topic.'),
});
export type GenerateChatbotPromptOutput = z.infer<typeof GenerateChatbotPromptOutputSchema>;

export async function generateChatbotPrompt(input: GenerateChatbotPromptInput): Promise<GenerateChatbotPromptOutput> {
  return generateChatbotPromptFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateChatbotPromptPrompt',
  input: {schema: GenerateChatbotPromptInputSchema},
  output: {schema: GenerateChatbotPromptOutputSchema},
  prompt: `You are an AI assistant designed to help users understand how to interact with a chatbot.
  Your task is to generate a list of example prompts that a user can use to ask questions or get information about a specific topic.

  Topic: {{{topic}}}

  Provide 3 diverse example prompts that a user might find helpful. The prompts should be clear, concise, and demonstrate the range of questions the chatbot can answer.

  Example Prompts:
  `,
});

const generateChatbotPromptFlow = ai.defineFlow(
  {
    name: 'generateChatbotPromptFlow',
    inputSchema: GenerateChatbotPromptInputSchema,
    outputSchema: GenerateChatbotPromptOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
