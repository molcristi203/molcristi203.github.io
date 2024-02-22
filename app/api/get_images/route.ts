"use server";

import fs from "fs"
import { type NextRequest } from "next/server";
import path from "path"

interface Params {
    folder : string
}

export async function GET(request : NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const folder = searchParams.get("folder");
    if (folder) {
        const filenames = fs.readdirSync(`./public/images/${folder}`);

        const paths = filenames.map((filename) => path.join("images", folder, filename));

        return Response.json(paths);
    }
    else
        return Response.json({});
}