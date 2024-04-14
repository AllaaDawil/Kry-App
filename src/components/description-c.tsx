
import React from "react";


const DescriptionC = () => {
        const InfoDesc = [
                {src: "/Kry_logo.png", text: "Kry application has a lot of Advantages to introduce", description: ""},
                {src: "/Kry15.jpg", text: "For patients", description: "No waiting times to see healthcare providers. Faster assistance and communication. Lower cost. "},
                {src: "/Kry14.png", text: "For healthcare providers", description: " Improved productivity and efficient work. Reduced stress and high pressure on healthcare staff."},
                

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

export default DescriptionC;