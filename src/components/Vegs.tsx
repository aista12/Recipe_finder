// import exp from "constants";
import image1 from "./img/avocado.svg";
import image2 from "./img/beet.svg";
import image3 from "./img/bell1.svg";
import image4 from "./img/bell2.svg";
import image5 from "./img/bell3.svg";
import image6 from "./img/broccoli.svg";
import image7 from "./img/cabbage.svg";
import image8 from "./img/carrot.svg";
import image9 from "./img/corn.svg";
import image10 from "./img/edamame.svg";
import image11 from "./img/eggplant.svg";
import image12 from "./img/garlic.svg";
import image13 from "./img/ginger.svg";
import image14 from "./img/mushroom.svg";
import image15 from "./img/shiitake.svg";
import image16 from "./img/steak.svg";
import image17 from "./img/tomato.svg";
import React from "react";

const images = [
  { src: image1, top: "24%", left: "2%" },
  { src: image2, top: "36%", left: "24%" },
  { src: image3, top: "40%", left: "84%" },
  { src: image4, top: "90%", left: "60%" },
  { src: image5, top: "44%", left: "2%" },
  { src: image6, top: "20%", left: "32%" },
  { src: image7, top: "24%", left: "94%" },
  { src: image8, top: "27%", left: "72%" },
  { src: image9, top: "30%", left: "54%" },
  { src: image10, top: "65%", left: "87%" },
  { src: image11, top: "45%", left: "64%" },
  { src: image12, top: "52%", left: "45%" },
  { src: image13, top: "12%", left: "14%" },
  { src: image14, top: "60%", left: "10%" },
  { src: image15, top: "80%", left: "8%" },
  { src: image16, top: "82%", left: "80%" },
  { src: image17, top: "92%", left: "30%" },
];

const delay = () => ({
  animationDelay: `${Math.random() * 3}s`,
});

function Vegs() {
  return (
    <div className="absolute inset-0 -z-10">
      {images.map((img, index) => {
        const style = { ...delay(), top: img.top, left: img.left };
        return (
          <img
            key={index}
            src={img.src}
            alt=""
            className="fixed w-10 opacity-60 anim-floating"
            style={style}
          />
        );
      })}
    </div>
  );
}
export default React.memo(Vegs);