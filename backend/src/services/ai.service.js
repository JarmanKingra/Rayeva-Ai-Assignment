import { callGroqLLM } from "../utils/aiClient.js";

export const generateCategoryTags = async (prompt) => {
  const response = await callGroqLLM([
    {
      role: "user",
      content: prompt
    }
  ]);

  return response;
};

export const generateProposal = async (prompt) => {
  const response = await callGroqLLM([
    {
      role: "user",
      content: prompt
    }
  ]);

  return response;
};