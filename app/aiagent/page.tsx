import SectionTitle from "@/app/components/section_title";
import Section from "@/app/components/section"
import Gallery from "@/app/components/gallery";
import SingleSection from "../components/single_section";
import CustomImage from "../components/custom_image";

export default function AIAgent() {
    return (
        <div>
            <SectionTitle title="AI Agent" backButton={true}/>
            <Section left={[
                <p key={0}>This project is a search agent developed based on materials from <a className="text-bh_yellow" href="http://ai.berkeley.edu/home.html" target="_blank">UC Berkeley&apos;s AI course</a>.</p>,
                <p key={4}>The search agent project extends the capabilities of Pacman and provides solutions for the Eight Puzzle problem. It incorporates various search algorithms to enhance Pacman&apos;s decision-making abilities and solve complex puzzles efficiently.</p>,
                <p key={2}>Features:</p>,
                <ul key={3} className="list-disc ml-8">
                    <li>Implemented search algorithms for Pacman.</li>
                    <li>Solutions for the Eight Puzzle problem.</li>
                </ul>
            ]} right={[
                <CustomImage
                    src="images/ai_agent/image.png"
                    alt="Application window containing Pacman in a maze"
                    key={1}
                />
            ]}/>
            <SingleSection>
                <a href="https://github.com/DelGha/AI-Agents-Puzzles" target="_blank" className="text-bh_yellow">GitHub Repository</a>
            </SingleSection>
            <Gallery paths={["images/ai_agent/image.png", "images/ai_agent/image2.png", "images/ai_agent/image3.png"]} />
        </div>
    );
}