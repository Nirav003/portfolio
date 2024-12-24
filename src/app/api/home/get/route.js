import connectDB from "@/Database";
import Home from'@/models/Home';
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic"

export async function GET(req) {

    try {
        await connectDB();
        const extractData = await Home.find({});

        if(extractData) {
            return NextResponse.json({
                success: true,
                message: 'Data saved successfully',
                data: extractData,
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