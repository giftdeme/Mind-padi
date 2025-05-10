import { RequestHandler } from "@/lib/common/request";
import { type NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const code = searchParams.get("code");
    const state = searchParams.get("state");

    if (!code) {
        return NextResponse.json(
            { error: "Missing authorization code" },
            { status: 400 },
        );
    }

    try {
        await RequestHandler(
            `/auth/google-callback?code=${code}&state=${state}`,
        );
        return NextResponse.redirect(new URL("/chat", req.url));
    } catch (err) {
        if (err instanceof Error) {
            console.error("Callback error:", err.message);
            return NextResponse.json({ error: err.message }, { status: 500 });
        }
    }
}
