import SectionTitle from "@/app/section_title";
import Section from "@/app/section"
import Gallery from "@/app/gallery";

export default function AmongFOL() {
    return (
        <div>
            <SectionTitle title="OpenGL App" backButton={true}/>
            {/* <Section text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ratione assumenda sed quam possimus quae eligendi obcaecati, minus accusamus suscipit." image="/images/robotic_arm/robot.jpg"/>
            <SectionRev text="Lorem ipsum dolor sit amet consectetur adipisicing elit. In labore dolorum cum id obcaecati at." image="/images/robotic_arm/robot2.jpeg"/> */}
            <Gallery paths={["/images/opengl/1.png"]} />
        </div>
    );
}