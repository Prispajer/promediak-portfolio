import { SendEmailRequest } from "@/types/mail";
import { mailService, rateLimiter } from "@/lib/dependencies";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const forwarded = req.headers.get("x-forwarded-for");
    const ip =
      req.headers.get("x-real-ip") ||
      (forwarded ? forwarded.split(",")[0].trim() : "127.0.0.1");

    const { allowed, message } = await rateLimiter.check(ip);

    if (!allowed) {
      return NextResponse.json(
        { message: message, success: false },
        { status: 429 },
      );
    }

    const body: SendEmailRequest = await req.json();

    await mailService.send(body);

    return NextResponse.json(
      { message: "Email wysłany pomyślnie!", success: true },
      { status: 200 },
    );
  } catch (error) {
    console.error("Błąd wysyłki maila:", error);
    return NextResponse.json(
      {
        message: "Wystąpił błąd podczas wysyłania wiadomości.",
        success: false,
      },
      { status: 500 },
    );
  }
}
