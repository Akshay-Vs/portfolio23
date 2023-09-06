import React from "react";
import "./InfoBox.scss";
import Image from "next/image";

interface Props {
  heading: string;
  description: string;
  image: string;
}

const InfoBox = ({ heading, description, image }: Props) => {
  return (
    <section className="h-screen info-box">
      <div className="left">
        <h1>{heading}</h1>
        <h2>{description}</h2>
      </div>
      <div className="right">
        <Image src={image} width={1024} height={720} alt="Pic" />
      </div>
    </section>
  );
};

export default InfoBox;
