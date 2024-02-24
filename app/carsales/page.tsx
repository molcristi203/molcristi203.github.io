import SectionTitle from "@/app/section_title";
import Section from "@/app/section"
import SectionRev from "@/app/section_rev";
import Gallery from "@/app/gallery";

export default function CarSales() {
    return (
        <div>
            <SectionTitle title="Car Sales" backButton={true}/>
            <Section text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ratione assumenda sed quam possimus quae eligendi obcaecati, minus accusamus suscipit." image="/images/car_sales/1.png"/>
            <SectionRev text="Lorem ipsum dolor sit amet consectetur adipisicing elit. In labore dolorum cum id obcaecati at." image="/images/car_sales/2.png"/>
            <Gallery paths={["/images/car_sales/1.png", "/images/car_sales/2.png", "/images/car_sales/3.png", "/images/car_sales/4.png", "/images/car_sales/5.png"]} />
        </div>
    );
}