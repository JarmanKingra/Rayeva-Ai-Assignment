import dotenv from "dotenv";

dotenv.config();

export const callGroqLLM = async (messages) => {
  const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.GROQ_API_KEY}`
    },
    body: JSON.stringify({
      model: "llama-3.1-8b-instant",
      messages,
      temperature: 0.3
    })
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.error?.message || "Groq API error");
  }

  return data.choices[0].message.content;
};