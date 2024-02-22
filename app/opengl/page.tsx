import PageTitle from "@/app/page_title";
import Section from "@/app/section"
import SectionRev from "@/app/section_rev";
import Gallery from "@/app/gallery";

export default function AmongFOL() {
    return (
        <div>
            <PageTitle title="OpenGL App"></PageTitle>
            {/* <Section text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ratione assumenda sed quam possimus quae eligendi obcaecati, minus accusamus suscipit." image="/images/robotic_arm/robot.jpg"/>
            <SectionRev text="Lorem ipsum dolor sit amet consectetur adipisicing elit. In labore dolorum cum id obcaecati at." image="/images/robotic_arm/robot2.jpeg"/> */}
            <Gallery folder="opengl" />
        </div>
    );
}