"use client"

import { Card } from "./card";
import PageTitle from "@/app/page_title";
import Navigation from "@/app/navigation";
import { useRef } from "react";

export default function Home() {
  const elements = useRef<HTMLElement[]>([]);

  return (
    <div>
      <PageTitle ref={el => el && elements.current.push(el)} title="Projects"/>
      <div className="grid grid-cols-4 bg-black gap-0.5">
        <Card title="Portofoliu" image_path="/banner.png" link="/"/>
        <Card title="Robotic Arm" image_path="/images/robotic_arm/robot.jpg" link="robotarm" />
        <Card title="Car Sales App" image_path="/images/car_sales/1.png" link="carsales"/>
        <Card title="Train Ticket Vending Machine" image_path="/images/ticket_vending/nexys2-0.png" link="ticketvending"/>
        <Card title="AmongFOL" image_path="/images/amongfol/among1.png" link="amongfol"/>
        <Card title="OpenGL App" image_path="/images/opengl/1.png" link="opengl"/>
        <Card title="Benchmarking App" image_path="/images/benchmark/1.png" link="benchmark"/>
        <div className="w-full h-full bg-white col-span-1"></div>
        <Navigation elements={elements.current}/>
      </div>
    </div>
  );
}
