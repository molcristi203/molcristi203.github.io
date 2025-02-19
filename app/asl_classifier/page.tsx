import Image from "next/image";
import SectionTitle from "../section_title";
import Section from "@/app/section"
import Gallery from "../gallery";

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
        <Image
          src={"/images/asl_classifier/hand1.jpeg"}
          width={2000}
          height={2000}
          alt="Hand"
          className="h-full object-scale-down"
          key={1}
        />
      ]} />
      <Section left={[
        <Image
          src={"/images/asl_classifier/confusion_matrix.png"}
          width={2000}
          height={2000}
          alt="Matrix"
          className="h-full object-scale-down"
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
        <Image
          src={"/images/asl_classifier/Tabel.png"}
          width={2000}
          height={2000}
          alt="Table"
          className="h-full object-scale-down"
          key={5}
        />
      ]} />
      <Gallery paths={["/images/asl_classifier/hand1.jpeg", "/images/asl_classifier/confusion_matrix.png", "/images/asl_classifier/Tabel.png"]}/>
    </div>
  );
}