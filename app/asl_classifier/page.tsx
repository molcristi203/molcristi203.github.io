import Image from "next/image";
import SectionTitle from "../components/section_title";
import Section from "@/app/components/section"
import Gallery from "../components/gallery";
import { CustomImage } from "../components/custom_image";

export default function ASLClassifier()
{
  return (
    <div>
      <SectionTitle title="American Sign Language Classifier" backButton={true}/>
      <Section left={[
        <p key={0}>
          American Sign Language Classifier implemented in Python.
          <br/> The dataset consists of images of hands representing the letters A and B.
          <br/> Those images are classified using AdaBoost classifier. A from scratch implementation is used for classification and the ScikitLearn&apos;s implementation is used for comparison.
        </p>
      ]} right={[
        <CustomImage
          src="images/asl_classifier/hand1.jpeg"
          alt="Hand that represents the letter A in American Sign Language"
          key={1}
        />
      ]} />
      <Section left={[
        <CustomImage
          src="images/asl_classifier/confusion_matrix.png"
          alt="Confusion matrix presenting the performance of the classification model"
          key={2}
        />
      ]} right={[
        <p key={3}>
          The resulting confusion matrix. 1 misclassified image out of the 28 total images, 14 of each hand.
        </p>
      ]} />
      <Section left={[
        <p key={4}>
          The resulting metrics of my own implementation together with the results from the classification using the ScikitLearn&apos;s implementation.
        </p>
      ]} right={[
        <CustomImage
          src="images/asl_classifier/Tabel.png"
          alt="Table containing the performance metrics of the model"
          key={5}
        />
      ]} />
      <Gallery paths={["/images/asl_classifier/hand1.jpeg", "/images/asl_classifier/confusion_matrix.png", "/images/asl_classifier/Tabel.png"]}/>
    </div>
  );
}