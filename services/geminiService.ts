
// Removed unused Type import to adhere to clean code principles
import { GoogleGenAI } from "@google/genai";
import { MENU_DATA } from "../constants";

export class GeminiService {
  private model = "gemini-3-flash-preview";

  async recommendDrink(userInput: string) {
    // Create a new GoogleGenAI instance right before making an API call to ensure it always uses 
    // the most up-to-date API key from the environment.
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const menuContext = JSON.stringify(MENU_DATA);
    const systemInstruction = `
      You are the Ro AI Barista for "Ro Coffee" in Mersin. 
      Your goal is to suggest the perfect drink or treat from our menu based on the user's mood or preference.
      Our menu is in Turkish: ${menuContext}.
      
      Key signature items to promote:
      - Hibiscus Sparkling (Böğürtlen, Limon, Hibiscus)
      - Green Ro (Elma, Lime)
      - Matcha Bar items (Iced Matcha Latte)
      - Magnolia (Classic favorite)
      
      Guidelines:
      1. Be elegant, minimalist, and helpful.
      2. Respond in the language the user uses (Turkish or English).
      3. If a user is indecisive, suggest one drink and one dessert (like San Sebastian or Magnolia).
      4. Mention that we are located in Yenişehir, Mersin if they ask about visiting.
      5. Keep responses concise.
    `;

    try {
      // Using ai.models.generateContent directly as per latest SDK guidelines
      const response = await ai.models.generateContent({
        model: this.model,
        contents: userInput,
        config: {
          systemInstruction,
          temperature: 0.7,
        },
      });
      // Correctly accessing the .text property of GenerateContentResponse
      return response.text || "I'm sorry, I couldn't process that. How about our signature Hibiscus Sparkling?";
    } catch (error) {
      console.error("Gemini Error:", error);
      return "I'm having a little trouble connecting to my barista brain. Try again in a moment!";
    }
  }
}

export const geminiService = new GeminiService();
