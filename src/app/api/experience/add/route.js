import connectDB from "@/Database";
import Experience from "@/models/Experience";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic"

export async function POST(req) {
    try {
        await connectDB();
        const extractData = await req.json();
        const saveData = await Experience.create(extractData);

        if(saveData) {
            return NextResponse.json({
                success: true,
                message: 'Data saved successfully',
            });
        } else {
            return NextResponse.json({
                success: false,
                message: 'Something goes wrong, Please try again!',
            });
        }

    } catch (error) {
        console.log(error);

        return NextResponse.json({
            success: false,
            message: 'Something goes wrong, Please try again!',
        });
    }
}