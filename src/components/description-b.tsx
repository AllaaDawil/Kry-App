
import React from "react";


const DescriptionB = () => {
        const InfoDesc = [
                {src: "/Kry13.jpg", text: "Offered Options", description: " Customized communication tools such as pictures, symbols, or signs. "},
                {src: "/Kry11.jpg", text: "Offered Options", description: "Voice-controlled alternatives that assist both the patient and the caregiver. Language and speech training."},

        ];
    return (
      <div>
      {InfoDesc.map(x => <InfoDescription key={x.src} {...x} />)}
     </div>    )
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

export default DescriptionB;