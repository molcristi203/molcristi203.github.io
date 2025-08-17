import Section from "../components/section";
import SectionTitle from "../components/section_title";
import CustomImage from "../components/custom_image";
import Gallery from "../components/gallery";
import SingleSection from "../components/single_section";

export default function RoadMarkings()
{
  return (
    <div>
      <SectionTitle title="Road Markings Detection" backButton={true}/>
      <Section left={[
        <p key={0}>Road markings are visual cues painted or applied directly onto road surfaces to provide guidance, convey information, and regulate traffic flow. These markings serve several purposes, including enhancing safety, directing traffic, delineating lanes, indicating pedestrian crossings, and informing drivers of special conditions or regulations.</p>
      ]} right={[
        <CustomImage
          src="images/road_markings/road1.jpg"
          alt="Image of a road with a single road marking, taken from a car dash cam"
          key={1}
        />
      ]}/>
      <Section
        left={[
          <CustomImage
            src="images/road_markings/road2.jpg"
            alt="Image of a road with a single road marking, taken from a car dash cam. Red lines are on the left and the right of the road lane"
            key={2}
          />
        ]}
        right={[
          <p key={3}>The proposed method consists of a pipeline that contains multiple stages.</p>,
          <p key={4}>The input image is first transformed into gray scale, then is blurred to remove potential noise and then Canny edge detection is applied to detect the edges. A trapeze mask is applied onto the image to isolate the road and Hough Line transform is used to detect the straight lines. The lines are filtered based on angle such that the horizontal lines are eliminated and only lines that may represent the road edges are kept.</p>
        ]}
      reverse />
      <Section
        left={[
          <p key={5}>A top down view is created using those two lines and then using MSER the markings are detected. Filtering is done on the detected shapes to keep only the road markings.</p>
        ]}
        right={[
          <CustomImage
            src="images/road_markings/road3.jpg"
            alt="Top-down view of a road containing a road marking in a green square"
            key={6}
          />
        ]}
      />
      <Section
        left={[
          <CustomImage
            src="images/road_markings/road4.jpg"
            alt="Image of a road with a single road marking, taken from a car dash cam. The road marking is inside a green rectangle"
            key={7}
          />
        ]}
        right={[
          <p key={8}>After that, the road markings are classified and a bounding box and the name of the road marking are drawn onto the original image</p>,
          <p key={9}>For the classification part, a linear SVM model was trained to classify the road markings. The train set consists of images of road markings that were processed using HOGDescriptor and the results were given to the model as training data. When the  classification process starts, the markings are also processed using the same HOGDescriptor and the resulting data is given to the model for prediction.</p>
        ]}
      reverse />
      <SingleSection>
        <a href="https://github.com/molcristi203/road-markings" target="_blank" className="text-bh_yellow">GitHub Repository</a>
      </SingleSection>
      <Gallery paths={["images/road_markings/road1.jpg", "images/road_markings/road2.jpg", "images/road_markings/road3.jpg", "images/road_markings/road4.jpg"]}/>
    </div>
  );
}