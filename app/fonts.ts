import localFont from "next/font/local"
import {Lilita_One} from "next/font/google"

export const blippo = localFont({
    src: "../public/fonts/BlippoBlackRegular.otf",
    variable: "--font-blippo"
});

export const lobster = Lilita_One({
    subsets: ["latin"],
    weight: "400"
});