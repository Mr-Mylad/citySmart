// place files you want to import through the `$lib` alias in this folder.

import { GoogleGenerativeAI } from "@google/generative-ai";
import { onMount } from "svelte";
import { marked } from "marked";

/**
 * Performs the initial analysis that is used to start off the conversation
 * @param location - The city. Usually in the form of "City/ State"
 * @returns A string in the form of the answer.
 */
async function initialAnalysis(client, location) {
    let hasFinished = false;
    const result = (await client.generateContent(`You are an AI assistant focused on smart city solutions. When a user selects a city, provide:

1. A brief overview of existing smart city practices related to sustainability, transportation, and technology.
2. Suggestions for future implementations, especially in sustainability and technology.
3. Keep the response clear and actionable, inviting the user to ask follow-up questions for more details or specific examples.

If city-specific data is unavailable, offer general smart city examples from similar urban areas.

Start:

Hey! I'd like to know about ${location}`)).response.candidates[0].content.parts[0].text;
    return result;
}

export { initialAnalysis }