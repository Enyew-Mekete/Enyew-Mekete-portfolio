
import { GoogleGenAI } from "@google/genai";

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  async askAboutDeveloper(question: string): Promise<string> {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: question,
        config: {
          systemInstruction: `You are a professional AI assistant named "En-Bot AI" for a developer whose portfolio this is. 
          The developer is Enyew Mekete, a Full Stack Expert with skills in React, Node.js, Next.js, Express, and MySQL.
          He is the Founder and CEO of En-Tech S.C.
          The primary theme color is #1B5E7F.
          Be helpful, concise, and highlight the developer's expertise in high-performance web applications. 
          If you don't know a specific detail, promote their general skills and invite the user to use the contact form.`,
        },
      });
      return response.text || "I'm sorry, I couldn't process that. Please contact me directly!";
    } catch (error) {
      console.error("Gemini Error:", error);
      return "I'm having trouble connecting to my brain. Please try again later!";
    }
  }
}

export const geminiService = new GeminiService();
