import React from "react";
import "./InfoBox.scss";
import Image from "next/image";

const InfoBox = () => {
  return (
    <section className="h-screen ifo-box">
      <div className="left">
        <div>Lorem, ipsum dolor</div>
        <div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
          laudantium! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Illum, amet!
        </div>
      </div>
      <div className="right">
        {/* <Image
          src={
            "https://images.pexels.com/photos/5483063/pexels-photo-5483063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          width={700}
          height={700}
          alt="Pic"
        /> */}
      </div>
    </section>
  );
};

export default InfoBox;
