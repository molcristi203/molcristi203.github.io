import Section from "../components/section";
import SectionTitle from "../components/section_title";
import CustomImage from "../components/custom_image";
import SingleSection from "../components/single_section";
import Gallery from "../components/gallery";

export default function LedController()
{
    return(
        <div>
            <SectionTitle title="LED Controller" backButton={true}/>
            <Section left={[
                <p key={0}>This project is an LED controller based on an Arduino Mega board, which will be used to light up a room. It features a 2.4 inch touch screen display, with a resolution of 240x320px, which is used to change the settings for the LEDs. The LEDs used are WS2812B NeoPixel LEDs, which are individual addressable and can be used to create various animations. Three strips are used - two 5m strips that are connected to one another and are placed around the room, and one 1m strip that is used for a lamp.</p>,
                <p key={3}>Some of the settings for LEDs that are present on the first page include:</p>,
                <ul key={4} className="list-disc ml-8">
                    <li>Static - all the LEDs are the same color</li>
                    <li>Rainbow - all the LEDS cycle between the rainbow collors</li>
                    <li>Theater - a pattern of on and off leds, where multiple leds are on then the following leds are off and the pattern repeats for the rest of the strip</li>
                    <li>Strip - is used to toggle on and off the 10m led strip</li>
                    <li>Lamp - is used to toggle on and off the 1m led strip for the lamp</li>
                </ul>
            ]} right={[
                <CustomImage
                    src="images/led_controller/menu1.jpg"
                    alt="Menu with 6 blue square buttons in a 2x3 grid"
                    key={1}
                />
            ]}/>
            <Section left={[
                <CustomImage
                    src="images/led_controller/static.jpg"
                    alt="RGB color wheel"
                    key={2}
                />
            ]} right={[
                <p key={5}>The static LEDs setting offers the possibility to choose the color from a color wheel.</p>
            ]} reverse/>
            <Section
                left={[
                    <p key={6}>The rainbow LEDs setting allows the possibility to choose between two types of animations: static - all the leds are the same color, dynamic - each led is a different color which is at a small hue difference from the ones near it.</p>
                ]}
                right={[
                    <CustomImage
                        src="images/led_controller/rainbow.jpg"
                        alt="Menu with 5 blue square buttons and a number in a 2x3 grid"
                        key={7}
                    />
                ]}
            />
            <Section
                left={[
                    <CustomImage
                        src="images/led_controller/menu2.jpg"
                        alt="Menu with 3 blue square buttons"
                        key={8}
                    />
                ]}
                right={[
                    <p key={9}>The second menu page offers the possibility to choose between temperature and gradient(not yet implemented) settings. The temperature setting offers presets for warm and cold colors including - Candle, Tungsten, Daylight, Cloudy, Shade, based on black-body radiation.</p>
                ]}
             reverse/>
            <SingleSection>
                <a href="https://github.com/molcristi203/leds-controller" target="_blank" className="text-bh_yellow">GitHub Repository</a>
            </SingleSection>
            <Gallery paths={["images/led_controller/menu1.jpg", "images/led_controller/menu2.jpg", "images/led_controller/rainbow.jpg", "images/led_controller/static.jpg", "/images/led_controller/leds.mp4"]}/>
        </div>
    );
}