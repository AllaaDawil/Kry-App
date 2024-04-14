
import React from "react";


const DescriptionA = () => {
        const InfoDesc = [
                {src: "/Kry2.jpeg", text: "Using", description: "The application is simple and easy to use. Book a video call."},
                {src: "/Kry6.png", text: "Variation", description: "Various healthcare providers in different departments. "},
                {src: "/Kry5.jpeg", text: "Multilanguages", description: " Chat directly without booking using you own lagnuage"},

        ];
    return (
        <div>
          {InfoDesc.map(x => <InfoDescription key={x.src} {...x} />)}
        </div>
    )
}

interface InfoDescriptionProps {
  src: string;
  text: string;
  description: string;
}

const InfoDescription : React.FC<InfoDescriptionProps> = ({src, text, description}) => {
  return(
    <div className="card w-96 bg-base-100  inline-block shadow-xl m-5">
    <div className="card-body">
      <h2 className="card-title">{text}</h2>
      <p>{description}</p>
    </div>
    <figure><img src={src} alt="Shoes" /></figure>
    </div>
  )
}

export default DescriptionA;