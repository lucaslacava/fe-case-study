import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(
      "https://manual-case-study.herokuapp.com/questionnaires/972423.json"
    );

    if (!response.ok) {
      throw new Error("Failed to fetch questions");
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: `Failed to fetch questions:${error}` },
      { status: 500 }
    );
  }
}
