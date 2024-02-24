"use client"

import { Card } from "./card";
import SectionTitle from "@/app/section_title";
import Navigation from "@/app/navigation";
import { useRef } from "react";
import Section from "@/app/section";
import { blippo } from "./fonts";

export default function Home() {
  const elements = useRef<HTMLElement[]>([]);

  return (
    <div>
      <SectionTitle ref={el => el && elements.current.push(el)} title="About me" backButton={false}/>
      <Section text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, tenetur." image="/firmbee-com-SpVHcbuKi6E-unsplash.jpg"/>
      <SectionTitle ref={el => el && elements.current.push(el)} title="Links" backButton={false}/>
      <div className={`bg-white lg:h-28 md:h-28 sm:h-28 h-14 border-b-2 border-black flex flex-row gap-4 sm:p-8 md:p-8 lg:p-8 p-4 items-center text-black lg:text-3xl md:text-2xl sm:text-3xl text-lg ${blippo.variable} font-sans antialiased`}>
          <a href="https://www.linkedin.com/in/cristi-moldovan-8a199026b" target="_blank">LinkedIn</a>
          <a href="https://github.com/molcristi203" target="_blank">GitHub</a>
          <a href="https://www.artstation.com/molcristi" target="_blank">ArtStation</a>
        </div>
      <SectionTitle ref={el => el && elements.current.push(el)} title="Projects" backButton={false}/>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 bg-black gap-0.5 border-b-2 border-black">
        <Card title="Protfolio" image_path="/banner.png" link="/"/>
        <Card title="Robotic Arm" image_path="/images/robotic_arm/robot.jpg" link="molcristi203.github.io/robotarm" />
        <Card title="Car Sales App" image_path="/images/car_sales/1.png" link="molcristi203.github.io/carsales"/>
        <Card title="Train Ticket Vending Machine" image_path="/images/ticket_vending/nexys2-0.png" link="molcristi203.github.io/ticketvending"/>
        <Card title="AmongFOL" image_path="/images/amongfol/among1.png" link="molcristi203.github.io/amongfol"/>
        <Card title="OpenGL App" image_path="/images/opengl/1.png" link="molcristi203.github.io/opengl"/>
        <Card title="Benchmarking App" image_path="/images/benchmark/1.png" link="molcristi203.github.io/benchmark"/>
        <div className="w-full h-full bg-white lg:col-span-1 md:col-span-1 lg:block md:block sm:hidden hidden"></div>
      </div>
      <Navigation elements={elements.current}/>
    </div>
  );
}
