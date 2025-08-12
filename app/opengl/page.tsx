import SectionTitle from "@/app/components/section_title";
import Section from "@/app/components/section"
import Gallery from "@/app/components/gallery";
import Image from "next/image";
import { CustomImage } from "../components/custom_image";

export default function AmongFOL() {
    return (
        <div>
            <SectionTitle title="OpenGL App" backButton={true}/>
            <Section left={[
                <p key={0}>The subject of this project is the implementation of a 3D graphics application developed in C++ with OpenGL support. <br/> The scene that I implemented is a military shooting range with moving targets, weapons, a truck and two tents. The user can move around the scene see the features implemented such as lights, shadows, animations, physics and collisions.</p>
            ]} right={[
                <CustomImage
                    src="images/opengl/1.png"
                    alt="A military camp containing two tents, a truck and two tables with guns"
                    key={1}
                />
            ]}/>
            <Gallery paths={["/images/opengl/1.png", "/images/opengl/2.jpg", "/images/opengl/3.jpg", "/images/opengl/4.jpg", "/images/opengl/5.jpg", "/images/opengl/6.jpg"]} />
        </div>
    );
}