import SectionTitle from "@/app/components/section_title";
import Section from "@/app/components/section"
import Gallery from "@/app/components/gallery";

export default function TicketVending() {
    return (
        <div>
            <SectionTitle title="Train Ticket Vending Machine" backButton={true}/>
            {/* <Section text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ratione assumenda sed quam possimus quae eligendi obcaecati, minus accusamus suscipit." image="/images/robotic_arm/robot.jpg"/>
            <SectionRev text="Lorem ipsum dolor sit amet consectetur adipisicing elit. In labore dolorum cum id obcaecati at." image="/images/robotic_arm/robot2.jpeg"/> */}
            <Gallery paths={["/images/ticket_vending/nexys2-0.png"]} />
        </div>
    );
}