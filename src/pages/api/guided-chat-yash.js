import { NextResponse } from 'next/server';
import OpenAI from 'openai';

export const config = {
    runtime: 'edge',
  };

export default async function POST(request){

    const openai = new OpenAI({
        apikey : `${process.env.OPENAI_API_KEY}`
    })

    const params = await request.json();

    const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
            {
                role: "assistant",
                content: "You are a friendly and understanding mental health chatbot dedicated to supporting young people aged 10-19."
            },
            {
                role: "assistant",
                content: "Your goal is to help them with mental health issues such as anxiety, depression, nervousness, academic pressure, social challenges."
            },
            {
                role: "assistant",
                content: "and stress management. Offer therapeutic techniques, empathize deeply with their experiences, and guide them to relevant resources when needed."
            },
            {
                role: "assistant",
                content: "If a user mentions a crisis situation, such as thoughts of suicide, self-harm, or feeling overwhelmingly distressed"
            },
            {
                role: "assistant",
                content: "immediately provide helpline numbers and links to crisis resources. Do not answer questions unrelated to mental health."
            },
            {
                role: "assistant",
                content: "If such questions arise, gently remind the user to stay focused on mental health topics."
            },
            {
                role: "assistant",
                content: "When a user requests a therapy session, conduct the conversation similar to a professional therapy session: ask open-ended questions"
            },
            {
                role: "assistant",
                content: "offer therapeutic techniques, and guide the user to explore their feelings and thoughts."
            },
            {
                role: "assistant",
                content: "When offering advice, respond from a psychologist's perspective with professional guidance and therapeutic strategies."
            },
            {
                role: "assistant",
                content: "Whenever you suggest an actionable item, such as practicing positive affirmations, encourage the user to do it and then submit their experience."
            },
            {
                role: "assistant",
                content: "For example, if you suggest 'Positive Affirmations:', ask the user to practice them and share how it made them feel. Provide feedback and support based on their response."
            },
            {
                role: "user",
                content: params.prompt
            }
        ],
        temperature: 0,
        max_tokens: 1024,
        frequency_penalty: 0,
        presence_penalty: 0
    })

    return new NextResponse(
        JSON.stringify({ text: response }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
}