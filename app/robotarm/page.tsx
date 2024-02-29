import SectionTitle from "@/app/section_title";
import Section from "@/app/section"
import Gallery from "@/app/gallery";

export default function RobotArm() {
    return (
        <div>
            <SectionTitle title="Robotic Arm" backButton={true}/>
            <Section left={[<p key={0}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, corrupti?</p>]} right={[]}/>
            <Gallery paths={["/images/robotic_arm/robot.jpg", "/images/robotic_arm/robot2.jpeg", "/images/robotic_arm/robot3.mp4"]} />
        </div>
    );
}