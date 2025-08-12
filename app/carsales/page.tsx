import SectionTitle from "@/app/components/section_title";
import Section from "@/app/components/section"
import Gallery from "@/app/components/gallery";
import Image from "next/image";
import { CustomImage } from "../components/custom_image";

export default function CarSales() {
    return (
        <div>
            <SectionTitle title="Car Sales" backButton={true}/>
            <Section left={[
                <p key={0}>E-commerce app for selling cars written in Java using Java Swing for the UI and MySQL for the database. <br/> The main page consists of the listings that were added with photos of details of the cars. </p>
            ]} right={[
                <CustomImage
                    src="images/car_sales/1.png"
                    alt="Application window that contains images of two cars, details of the cars and multiple buttons"
                    key={1}
                />
            ]}/>
            <Section left={[
                <CustomImage
                    src="images/car_sales/3.png"
                    alt="Application window that contains the customer and seller sign up pages and multiple buttons and fields"
                    key={2}
                />
            ]} right={[
                <p key={3}>The sign up page where you can create a customer account to buy cars or seller account to list cars for sale.</p>
            ]} reverse={true}/>
            <Section left={[
                <p key={4}>If you already have an account, you can log in into it.</p>
            ]} right={[
                <CustomImage
                    src="images/car_sales/2.png"
                    alt="Application window that contains the customer and seller log in pages and multiple buttons and fields"
                    key={5}
                />
            ]}/>
            <Section left={[
                <CustomImage
                    src="images/car_sales/4.png"
                    alt="Application window that contains the page for adding a car"
                    key={6}
                />
            ]} right={[
                <p key={7}>This is the page where you can add cars. It provides input fields for the car details and the posibility to add an image for the listing.</p>
            ]} reverse={true}/>

            <Section left={[
                <p key={9}>The listing page itself that is accessed when a listing is selected. It contains the photo of the car, the details about the car and the posibility to buy the car if you are logged in as a customer. </p>
            ]} right={[
                <CustomImage
                    src="images/car_sales/5.png"
                    alt="Application window that contains the listing of a car"
                    key={8}
                />
            ]}/>
            <Gallery paths={["/images/car_sales/1.png", "/images/car_sales/2.png", "/images/car_sales/3.png", "/images/car_sales/4.png", "/images/car_sales/5.png"]} />
        </div>
    );
}