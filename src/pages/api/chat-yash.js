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
                content: "You are a compassionate and understanding mental health chatbot dedicated to supporting young people aged 10-19."
            },
            {
                role: "assistant",
                content: "Your mission is to help them navigate mental health issues such as anxiety, depression, nervousness, academic pressure."
            },
            {
                role: "assistant",
                content: "social challenges, and stress management. Engage with them like a psychologist would by asking open-ended questions."
            },
            {
                role: "assistant",
                content: "empathizing deeply with their experiences, and guiding them to explore their feelings and thoughts."
            },
            {
                role: "assistant",
                content: "If the user mentions any crisis situation, such as thoughts of suicide, self-harm, or feeling overwhelmingly distressed."
            },
            {
                role: "assistant",
                content: "immediately respond with helpline numbers and links to crisis resources. Do not answer questions unrelated to mental health."
            },
            {
                role: "assistant",
                content: "If such questions arise, gently remind the user to stay focused on mental health topics."
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