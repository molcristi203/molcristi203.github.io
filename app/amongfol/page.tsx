import SectionTitle from "@/app/components/section_title";
import Section from "@/app/components/section"
import Gallery from "@/app/components/gallery";
import Image from "next/image";
import { CustomImage } from "../components/custom_image";

export default function AmongFOL() {
    return (
        <div>
            <SectionTitle title="AmongFOL" backButton={true}/>
            <Section left={[
                <p key={0}>Among FOL is a program written in python that makes use of mace4 to give a probability of the roles of the players based on messages written in First Order Logic. <br/> Similar to knights and knaves, there are two roles, crewmates(which can only tell the truth) and imposters(which can both tell the truth and lie). A random game is generated where a random player is assigned as imposter and the others are crewmates. <br/> The messages are randomly generated for each player and can contain information about themselves or the other players. Based on this, mace4 will generate a statistic about the roles of each player and let the user decide who they will vote.</p>
            ]} right={[
                <CustomImage
                    src="images/amongfol/among1.png"
                    alt="Picture containing the AmongUs characters on a starry background"
                    key={1}
                />
            ]}/>
            <Section left={[
                <CustomImage
                    src="images/amongfol/1.png"
                    alt="Terminal that contains text"
                    key={2}
                />
            ]} right={[
                <p key={3}>This is the scenario in which the crewmates won. Mace4 gave the probability of black to be 100% imposter, it was correct.</p>
            ]} reverse={true}/>
            <Section left={[
                <p key={4}>This is the scenario in which the imposter won. Despite mace4 giving a high probability for black to be imposter, it was wrong.</p>
            ]} right={[
                <CustomImage
                    src="images/amongfol/2.png"
                    alt="Terminal that contains text"
                    key={5}
                />
            ]}/>
            <Gallery paths={["/images/amongfol/among1.png", "/images/amongfol/1.png", "/images/amongfol/2.png"]} />
        </div>
    );
}