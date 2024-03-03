import SectionTitle from "@/app/section_title";
import Section from "@/app/section"
import Gallery from "@/app/gallery";
import Image from "next/image";

export default function AIAgent() {
    return (
        <div>
            <SectionTitle title="AI Agent" backButton={true}/>
            <Section left={[
                <p key={0}>This project is a search agent developed based on materials from <a href="http://ai.berkeley.edu/home.html" target="_blank">UC Berkeley&apos;s AI course</a>. It includes several search algorithms for Pacman and features for solving the Eight Puzzle.</p>,
                <p key={2}>Features:</p>,
                <ul key={3} className="list-disc ml-8">
                    <li>Implemented search algorithms for Pacman.</li>
                    <li>Solutions for the Eight Puzzle problem.</li>
                </ul>
            ]} right={[
                <Image
                    src={"/images/ai_agent/image.png"}
                    width={2000}
                    height={2000}
                    alt="AmongFOL"
                    className="h-full object-scale-down"
                    key={1}
                />
            ]}/>
            <Gallery paths={["/images/ai_agent/image.png", "/images/ai_agent/image2.png", "/images/ai_agent/image3.png"]} />
        </div>
    );
}