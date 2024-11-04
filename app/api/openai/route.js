import { NextResponse } from 'next/server';
import openai from "@/utils/openai";

export async function POST(req) {

  const body = await req.json()
  console.log("This is the body.content inside of the openai route.js", body.content)//dubugging purposes
  console.log("This is the body.playerActions inside of the openai route.js", body.playerActions)//dubugging purposes
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: body.content },
        { role: "user", content: body.playerActions }
      ],
    });

    return NextResponse.json(completion.choices[0]);
  } catch (error) {
    console.error("Error fetching data from OpenAI:", error);
    return NextResponse.json({ error: "Error fetching data from OpenAI" }, { status: 500 });
  }
}

