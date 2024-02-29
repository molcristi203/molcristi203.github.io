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
                    alt="Car sales"
                    className="h-full object-scale-down"
                    key={1}
                />
            ]}/>
            <Section left={[
                <Image
                    src={"/images/car_sales/3.png"}
                    width={2000}
                    height={2000}
                    alt="Car sales"
                    className="h-full object-scale-down"
                    key={2}
                />
            ]} right={[
                <p key={3}>The sign up page where you can create a customer account to buy cars or seller account to list cars for sale.</p>
            ]} reverse={true}/>
            <Section left={[
                <p key={4}>If you already have an account, you can log in into it.</p>
            ]} right={[
                <Image
                    src={"/images/car_sales/2.png"}
                    width={2000}
                    height={2000}
                    alt="Car sales"
                    className="h-full object-scale-down"
                    key={5}
                />
            ]}/>
            <Section left={[
                <Image
                    src={"/images/car_sales/4.png"}
                    width={2000}
                    height={2000}
                    alt="Car sales"
                    className="h-full object-scale-down"
                    key={6}
                />
            ]} right={[
                <p key={7}>This is the page where you can add cars. It provides input fields for the car details and the posibility to add an image for the listing.</p>
            ]} reverse={true}/>

            <Section left={[
                <Image
                    src={"/images/car_sales/4.png"}
                    width={2000}
                    height={2000}
                    alt="Car sales"
                    className="h-full object-scale-down"
                    key={8}
                />
            ]} right={[
                <p key={9}>The listing page itself that is accessed when a listing is selected. It contains the photo of the car, the details about the car and the posibility to buy the car if you are logged in as a customer. </p>
            ]}/>
            <Gallery paths={["/images/car_sales/1.png", "/images/car_sales/2.png", "/images/car_sales/3.png", "/images/car_sales/4.png", "/images/car_sales/5.png"]} />
        </div>
    );
}