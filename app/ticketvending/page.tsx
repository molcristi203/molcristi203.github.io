import SectionTitle from "@/app/components/section_title";
import Section from "@/app/components/section"
import Gallery from "@/app/components/gallery";
import CustomImage from "../components/custom_image";
import SingleSection from "../components/single_section";

export default function TicketVending() {
    return (
        <div>
            <SectionTitle title="Train Ticket Vending Machine" backButton={true}/>
            <Section left={[
                <p key={0}>Vending machine for the purchase of train tickets. The buyer enters the distance to the destination (in tens of km). The cost of the ticket and the amounts entered are displayed on the 7 - segment display. The currency used is EURO. The maximum price for a ticket is 100 Euro. The vending machine receives the required amount in paper or coin and releases the tickets and possibly the rest. It has a cash register that is loaded at the beginning of operation with a number of papers and coins (all possibilities between 1 euro and 50 euros).   The lack of tickets, the introduction of an amount less than the cost of the ticket or the impossibility of returning the rest are clearly signaled. It is possible to cancel the operation at any time, with the refund of the amount entered, if applicable.</p>
            ]} right={[
                <CustomImage
                    src="images/ticket_vending/nexys2-0.png"
                    alt="Image of a Nexys 2 FPGA board"
                    key={1}
                />
            ]} noPaddingRight={true}/>
            <SingleSection>
                <a href="https://github.com/molcristi203/train-ticket-vending-machine" target="_blank" className="text-bh_yellow">GitHub Repository</a>
            </SingleSection>
            <Gallery paths={["images/ticket_vending/nexys2-0.png"]} />
        </div>
    );
}