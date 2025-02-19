"use client"

import { Card } from "./card";
import SectionTitle from "@/app/section_title";
import Navigation from "@/app/navigation";
import { useRef } from "react";
import Section from "@/app/section";
import { blippo } from "./fonts";
import Image from "next/image";

export default function Home() {
  const elements = useRef<HTMLElement[]>([]);

  return (
    <div className="">
      <SectionTitle ref={el => { if (el) elements.current.push(el); }} title="About me" backButton={false}/>
      <Section left={[
        <p key={0}>Computer science student in 4th year at Technical University of Cluj Napoca with passion for software development and hardware engineering. I have a keen interest in trying new things and experimenting with various technologies that spark my curiosity.</p>
      ]} right={[
        <Image
          src={"/poza-profil.jpg"}
          width={2000}
          height={2000}
          alt="Profile photo"
          className="w-full h-full object-contain"
          key={0}
         />
      ]} noPaddingRight = {true}/>
      <SectionTitle ref={el => { if (el) elements.current.push(el); }} title="Links" backButton={false}/>
      <div className={`bg-white lg:h-28 md:h-28 sm:h-28 h-14 border-b-2 border-black flex flex-row gap-4 sm:p-8 md:p-8 lg:p-8 p-4 items-center text-black lg:text-3xl md:text-2xl sm:text-3xl text-lg ${blippo.variable} font-sans antialiased`}>
          <a href="https://www.linkedin.com/in/cristi-moldovan-8a199026b" target="_blank">LinkedIn</a>
          <a href="https://github.com/molcristi203" target="_blank">GitHub</a>
          <a href="https://www.artstation.com/molcristi" target="_blank">ArtStation</a>
          <a href="https://drive.google.com/file/d/13Bxi0SaxCUQaPEUuvFGHKQ6YtuDf7bXV/view?usp=sharing" target="_blank">CV</a>
      </div>
      <SectionTitle ref={el => { if (el) elements.current.push(el); }} title="Projects" backButton={false}/>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 bg-black gap-0.5 border-b-2 border-black">
        <Card title="Portfolio" image_path="/banner.png" link="/"/>
        <Card title="Robotic Arm" image_path="/images/robotic_arm/robot.jpg" link="/robotarm" />
        <Card title="Car Sales App" image_path="/images/car_sales/1.png" link="/carsales"/>
        <Card title="Train Ticket Vending Machine" image_path="/images/ticket_vending/nexys2-0.png" link="/ticketvending"/>
        <Card title="AmongFOL" image_path="/images/amongfol/among1.png" link="/amongfol"/>
        <Card title="OpenGL App" image_path="/images/opengl/1.png" link="/opengl"/>
        <Card title="Benchmarking App" image_path="/images/benchmark/1.png" link="/benchmark"/>
        <Card title="Search Agent Project" image_path="/images/ai_agent/image.png" link="/aiagent"/>
        <Card title="teleson.ro" image_path="/images/teleson/teleson.png" link="https://teleson.ro" external_link/>
        <Card title="eco.teleson.ro" image_path="/images/teleson/eco_teleson.png" link="https://eco.teleson.ro" external_link/>
        <Card title="ASL Classifier" image_path="/images/asl_classifier/ASL Classifier.png" link="/asl_classifier"/>
        <Card title="Road Markings Detection" image_path="/images/road_markings/road_markings.png" link="/road_markings"/>
        <Card title="Energy Management" image_path="/images/energy_management/energy_management.png" link="/energy_management"/>
      </div>
      <Navigation elements={elements.current}/>
    </div>
  );
}
