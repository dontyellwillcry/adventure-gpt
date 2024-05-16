import { NextResponse } from 'next/server';
import openai from "@/utils/openai";

export async function POST(req) {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a helpful assistant." }, // change this to a variable query base on the user selection
        { role: "user", content: "how fast is light" } // change this to a variable depending on what the user types
      ],
    });

    return NextResponse.json(completion.choices[0]);
  } catch (error) {
    console.error("Error fetching data from OpenAI:", error);
    return NextResponse.json({ error: "Error fetching data from OpenAI" }, { status: 500 });
  }
}

