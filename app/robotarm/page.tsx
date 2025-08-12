import SectionTitle from "@/app/components/section_title";
import Section from "@/app/components/section"
import Gallery from "@/app/components/gallery";
import Image from "next/image";
import { CustomImage } from "../components/custom_image";

export default function RobotArm() {
    return (
        <div>
            <SectionTitle title="Robotic Arm" backButton={true}/>
            <Section left={[<p key={0}>Arduino project built by a team of 2 based on <a href="https://howtomechatronics.com/tutorials/arduino/diy-arduino-robot-arm-with-smartphone-control/" target="_blank" className="text-[#fec527]">this project.</a></p>,
                <p key={1}>It features:</p>,
                <ul className="list-disc ml-8" key={2}>
                    <li>3D printed parts</li>
                    <li>6 servo motors for the 6 joints of the arm</li>
                    <li>Bluetooth control using an Android app</li>
                    <li>Touch screen control</li>
                    <li>PSU to supply with current all the electronic components</li>
                    <li>Arduino Mega for the robot logic</li>
                </ul>
            ]} right={[
                <CustomImage
                    src="images/robotic_arm/robot.jpg"
                    alt="Yellow robotic arm on a table holding a cube surrounded by electronics"
                    key={3}
                />
            ]}/>
            <Section left={[
                <CustomImage
                    src="images/robotic_arm/robot3.png"
                    alt="App window containing the sliders for controllingthe robot"
                    key={4}
                />
            ]} right={[
                <p key={5}>The app makes use of 6 sliders that can be used to control the 6 joints of the arm, an illustration is provided to show which joint is actioned by the sliders.<br/> For the making of this app, Android Studio was used and the app was exported as an apk so it can be run on smartphones.</p>
            ]} reverse={true}/>
            <Gallery paths={["/images/robotic_arm/robot.jpg", "/images/robotic_arm/robot2.jpeg", "images/robotic_arm/robot3.png", "/images/robotic_arm/robot3.mp4"]} />
        </div>
    );
}