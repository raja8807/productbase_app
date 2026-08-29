import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();

    return NextResponse.json(
      {
        message: "Hello! This is data fetched from the API.",
        timestamp: new Date().toISOString(),
        status: "success",
        received: body,
        data: {
          framework: "Next.js 16",
          router: "App Router",
          styling: "SCSS",
        },
      },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      {
        status: "error",
        message: error.message,
      },
      { status: 500 },
    );
  }
}
