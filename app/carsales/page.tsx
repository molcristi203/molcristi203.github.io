import SectionTitle from "@/app/section_title";
import Section from "@/app/section"
import Gallery from "@/app/gallery";
import Image from "next/image";

export default function CarSales() {
    return (
        <div>
            <SectionTitle title="Car Sales" backButton={true}/>
            <Section left={[
                <p key={0}>E-commerce app for selling cars written in Java using Java Swing for the UI and MySQL for the database. <br/> The main page consists of the listings that were added with photos of details of the cars. </p>
            ]} right={[
                <Image
                    src={"/images/car_sales/1.png"}
                    width={2000}
                    height={2000}
                    alt="Robotic arm"
                    className="h-full object-scale-down"
                    key={1}
                />
            ]}/>
            <Gallery paths={["/images/car_sales/1.png", "/images/car_sales/2.png", "/images/car_sales/3.png", "/images/car_sales/4.png", "/images/car_sales/5.png"]} />
        </div>
    );
}