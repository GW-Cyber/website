import React from "react";


const EBoardSlide = (props) => {
  const imageSrc = props.property.image;
  const name = props.property.name;
  const position = props.property.position;
  const year = props.property.year;
  const major = props.property.major;
  const contact = props.property.contact;
  const bio = props.property.bio;
  return (
      <div className="media">
        <div className="media">
          <img className="media-object" src={imageSrc} />
        </div>
        <div className="media-body">
          <div className="media-heading">{name}</div>
          <div className="media-heading">{position}</div>
          <div className="media-heading">{year}</div>
          <div className="media-heading">{major}</div>
          <div className="media-heading">{contact}</div>
          <div className="media-heading">{bio}</div>
        </div>
      </div>
  );
};

export default EBoardSlide;
