import Section from "../components/section";
import SectionTitle from "../components/section_title";
import CustomImage from "../components/custom_image";
import Gallery from "../components/gallery";

export default function LogicCircuits()
{
    return(
        <div>
            <SectionTitle title="Hand Drawn Logic Circuits Classification" backButton={true}/>
            <Section left={[
                <p key={0}>This project represents the implementation for the license thesis. The scope of this project is to develop and implement a solution that is capable of recognizing different types of elements of a logic circuit such as logic gates (and gate, or gate, nor gate, etc.), complex elements (memories, registers, counters, etc.) and the connections between them.</p>
            ]} right={[
                <CustomImage
                    src="images/logic_circuits/Circuit.jpg"
                    alt="Diagram containing logic circuit elements"
                    key={1}
                />
            ]}/>
            <Section left={[
                <CustomImage
                    src="images/logic_circuits/ComponentsDetectionResult.jpg"
                    alt="Diagram containing logic circuit elements inside bounding boxes"
                    key={2}
                />
            ]} right={[
                <p key={3}>The first step in the detection process is to use a YOLOv11 model, which was trained on a custom dataset. The result of the detection is a list of bounding boxes with their corresponding classes. To further improve the results, a custom Multiclass Non-Maximum Suppression algorithm was used, which removes redundant bounding boxes detected for the same circuit element. The classification is done automatically by the model for the logic gates, and in the case of complex elements, the classification is done based on the center label in another step.</p>
            ]} reverse/>
            <Section
                left={[
                    <p key={4}>The next step in the detection process is to detect the labels, which was done using an algorithm for Maximally Stable Extremal Regions from OpenCV. After the labels are detected, they are decoded using an OCR model called TrOCR.</p>
                ]}
                right={[
                    <CustomImage
                        src="images/logic_circuits/LabelsComponent.jpg"
                        alt="Image of a circuit element with the labels in bounding boxes"
                        key={5}
                    />
                ]}
            />
            <Section
                left={[
                    <CustomImage
                        src="images/logic_circuits/ComponentClassification.jpg"
                        alt="Diagram containing logic circuit elements inside bounding boxes"
                        key={6}
                    />
                ]}
                right={[
                    <p key={7}>After the labels are detected and decoded the components can be classified with the correct classes.</p>
                ]}
            reverse/>
            <Section
                left={[
                    <p key={8}>To detect the wires and the connections between the elements, a traversal algorithm based on Breadth First Search was used. One problem consists of the fact that wires that are intersecting are considered connected by the algorithm. The solution is to detect the intersections between the wires and break the intersections where the wires don&apos;t connect. The detection is done using a similar method to the one described previously but using another YOLOv11 model trained on another custom dataset.</p>
                ]}
                right={[
                    <CustomImage
                        src="images/logic_circuits/WiresDetectionResult.jpg"
                        alt="Diagram containig logic circuit elements with bounding boxes for wires intersections"
                        key={9}
                    />
                ]}
            />
            <Section
                left={[
                    <CustomImage
                        src="images/logic_circuits/ConnectionsImage.jpg"
                        alt="Image containing wires of different colors on a black background"
                        key={10}
                    />
                ]}
                right={[
                    <p key={11}>After the wires intersections are treated, the algorithm Breadth First Search algorithm is applied and the result is a list of Nodes, where each Node represent an end of an wire.</p>
                ]}
                reverse
            />
            <Section
                left={[
                    <p key={13}>The last step is to detect the ports of the circuit elements, which is done by creating a bounding box on each side of an element and for a certain circuit element, if a node is inside one of its bounding boxes, it is a port to the said element and the wire is it connected to the that element. The classification of ports into input and output is done based on the label or on the position in the case of logic gates(inputs on the left and outputs on the right).</p>
                ]}
                right={[
                    <CustomImage
                        src="images/logic_circuits/PortsImage.jpg"
                        alt="Diagram containig logic circuit elements with red dots at each circuit element port"
                        key={12}
                    />
                ]}
                reverse
            />
            <Gallery paths={["images/logic_circuits/Circuit.jpg", "images/logic_circuits/ComponentsDetectionResult.jpg", "images/logic_circuits/LabelsComponent.jpg", "images/logic_circuits/ComponentClassification.jpg", "images/logic_circuits/PortsImage.jpg", "images/logic_circuits/Demo.mp4"]}/>
        </div>
    );
}