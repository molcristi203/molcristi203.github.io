"use client"

import Card from "@/app/components/card";
import SectionTitle from "@/app/components/section_title";
import Navigation from "@/app/components/navigation";
import { useRef } from "react";
import Section from "@/app/components/section";
import { blippo } from "./fonts";
import ExportedImage from "next-image-export-optimizer";
import SingleSection from "./components/single_section";

export default function Home() {
  const elements = useRef<HTMLElement[]>([]);

  return (
    <div className="">
      <SectionTitle ref={el => { if (el) elements.current.push(el); }} title="About" backButton={false}/>
        <SingleSection>Computer science graduate and master student at the Artificial Inteligence and Vision master at Technical University of Cluj Napoca with passion for software development and hardware engineering. I have a keen interest in trying new things and experimenting with various technologies that spark my curiosity.</SingleSection>
      <SectionTitle ref={el => { if (el) elements.current.push(el); }} title="Links" backButton={false}/>
      <div className={`bg-white lg:h-28 md:h-28 sm:h-28 h-14 border-b-2 border-black flex flex-row gap-4 sm:p-8 md:p-8 lg:p-8 p-4 items-center text-black lg:text-3xl md:text-2xl sm:text-3xl text-lg ${blippo.variable} font-sans antialiased`}>
          <a href="https://www.linkedin.com/in/cristi-moldovan-8a199026b" target="_blank">LinkedIn</a>
          <a href="https://github.com/molcristi203" target="_blank">GitHub</a>
          <a href="https://www.artstation.com/molcristi" target="_blank">ArtStation</a>
      </div>
      <SectionTitle ref={el => { if (el) elements.current.push(el); }} title="Projects" backButton={false}/>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 bg-black gap-0.5 border-b-2 border-black">
        <Card title="Portfolio" image_path="images/banner.png" link="/" alt="Abstract image containing colored semicircles and squares"/>
        <Card title="Robotic Arm" image_path="images/robotic_arm/robot.jpg" link="/robotarm" alt="Yellow robotic arm on a table holding a cube surrounded by electronics" />
        <Card title="Car Sales App" image_path="images/car_sales/1.png" link="/carsales" alt="Application window that contains images of two cars, details of the cars and multiple buttons"/>
        <Card title="Train Ticket Vending Machine" image_path="images/ticket_vending/nexys2-0.png" link="/ticketvending" alt="Picture of an FPGA"/>
        <Card title="AmongFOL" image_path="images/amongfol/among1.png" link="/amongfol" alt="Picture containing the AmongUs characters on a starry background"/>
        <Card title="OpenGL App" image_path="images/opengl/1.png" link="/opengl" alt="A military camp containing two tents, a truck and two tables with guns"/>
        <Card title="Benchmarking App" image_path="images/benchmark/1.png" link="/benchmark" alt="Application window with information about a CPU and other different buttons"/>
        <Card title="Search Agent Project" image_path="images/ai_agent/image.png" link="/aiagent" alt="Application window containing Pacman in a maze"/>
        <Card title="teleson.ro" image_path="images/teleson/teleson.png" link="https://teleson.ro" external_link alt="Home page containing a logo and different links"/>
        <Card title="eco.teleson.ro" image_path="images/teleson/eco_teleson.png" link="https://eco.teleson.ro" external_link alt="Home page containing a logo, different links and an image of solar panels in the sun"/>
        <Card title="ASL Classifier" image_path="images/asl_classifier/ASL Classifier.png" link="/asl_classifier" alt="Image of a face next to text on a light blue background"/>
        <Card title="Road Markings Detection" image_path="images/road_markings/road4.jpg" link="/road_markings" alt="Image of a road with a single road marking, taken from a car dash cam"/>
        <Card title="Energy Management" image_path="images/energy_management/energy_management.png" link="/energy_management" alt="Home page containing multiple links and an image of electricity poles"/>
        <Card title="LED Controller" image_path="images/led_controller/static.jpg" link="/led_controller" alt="RGB color wheel"/>
        <Card title="Hand Drawn Logic Circuits Classification" image_path="images/logic_circuits/ComponentClassification.jpg" link="/logic_circuits" alt="Diagram containing logic circuit elements inside bounding boxes"/>
      </div>
      <Navigation elements={elements.current}/>
    </div>
  );
}
