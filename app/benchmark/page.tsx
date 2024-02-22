import PageTitle from "@/app/page_title";
import Section from "@/app/section"
import SectionRev from "@/app/section_rev";
import Gallery from "@/app/gallery";

export default function Benchmark() {
    return (
        <div>
            <PageTitle title="Benchmarking App"></PageTitle>
            {/* <Section text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ratione assumenda sed quam possimus quae eligendi obcaecati, minus accusamus suscipit." image="/images/car_sales/1.png"/>
            <SectionRev text="Lorem ipsum dolor sit amet consectetur adipisicing elit. In labore dolorum cum id obcaecati at." image="/images/car_sales/2.png"/> */}
            <Gallery folder="benchmark" />
        </div>
    );
}