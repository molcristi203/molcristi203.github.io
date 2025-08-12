import SectionTitle from "@/app/components/section_title";
import Section from "@/app/components/section"
import Gallery from "@/app/components/gallery";
import Image from "next/image";
import { CustomImage } from "../components/custom_image";

export default function Benchmark() {
    return (
        <div>
            <SectionTitle title="Benchmarking App" backButton={true}/>
            <Section left={[
                <p key={0}>The project consists of multiple tests that are used to benchmark various components of
                the PC: CPU, memory, external memory, and IO and compute a score. The programming languages
                that are used for the program are C and Java.
                <br/>C is used for the benchmarks because it is low level and provides a high degree of control
                over system resources and its efficiency allows for writing benchmarks that minimize overhead,
                providing accurate performance measurements.
                <br/>Java is used with Java Swing to create the UI. Java Swing provides a high-level approach
                to UI making it easier to create graphical user interfaces and it comes with a wide range of UI
                components that can be used to create the UI.</p>
            ]} right={[
                <CustomImage
                    src="images/benchmark/5.png"
                    alt="Application window with different buttons and an input field"
                    key={1}
                />
            ]}/>
            <Section left={[
                <CustomImage
                    src="images/benchmark/1.png"
                    alt="Application window with information about a CPU and other different buttons"
                    key={2}
                />
            ]} right={[
                <p key={3}>CPU <br/>The benchmarks that are used for testing the CPU and measuring the performance are
                Synthetic benchmarks - these benchmarks simulate specific workloads, Micro-benchmarks - these
                benchmarks are designed to measure the performance of a small piece of code.
                <br/>The metrics that are used to measure the performance of the CPU will be the duration of
                the execution of a test and the number of cycles it took to finish the test. The performance will be
                measured both in single thread and in multi thread.
                <br/>The methodology consists of running CPU intensive tests, gathering the results, and
                computing the score using formulas for mean.</p>
            ]} reverse={true}/>
            <Section left={[
                <p key={4}>RAM<br/>The metric that is used to measure the performance of the RAM memory is the transfer
                speed.
                <br/>The methodology consists of running tests that fill the memory block with different
                patterns, read and write byte by byte and copy data from one block of memory to another one. The
                size of the block is 1 GB. The tests are done multiple times, and the median value is chosen. The
                final score is computed using a formula for mean.</p>
            ]} right={[
                <CustomImage
                    src="images/benchmark/2.png"
                    alt="Application window with information about RAM and other different buttons"
                    key={5}
                />
            ]}/>
            <Section left={[
                <CustomImage
                    src="images/benchmark/3.png"
                    alt="Application window with information about external memory and other different buttons"
                    key={6}
                />
            ]} right={[
                <p key={7}>External memory and IO <br/>The metrics that are used to measure the performance are the speed of creating, writing,
                modifying, and deleting files from external storage.
                <br/>The methodology will consist of running tests that do those operations on files that are on
                the storage devices such as the SSD/HDD that is in the computer and on the USB stick that is
                external.</p>
            ]} reverse={true}/>
            <Gallery paths={["/images/benchmark/1.png", "/images/benchmark/2.png", "/images/benchmark/3.png", "/images/benchmark/4.png", "/images/benchmark/5.png"]} />
        </div>
    );
}