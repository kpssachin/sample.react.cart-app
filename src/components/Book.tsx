import React from "react";

interface componentsProps {
  title: string;
  pricingDescription: string;
  image: string;
  alt: string;
}

export const Book: React.FC<componentsProps> = ({ title, image, pricingDescription, alt }) => {
  // const { title, image, pricingDescription, alt } = props;
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <Image image={image} alt={alt} />
        <div className="card-body">
          <Title title={title} />
          <Pricing pricingDescription={pricingDescription} />
          <AddCartButton />
        </div>
      </div>
    </>
  );
};

interface imageProps {
  image: string;
  alt: string;
}

const Image: React.FC<imageProps> = (props) => (
  <img className="card-img-top" src={props.image} alt={props.alt} />
);

interface titleProps {
  title: string;
}

const Title: React.FC<titleProps> = (props) => (
  <h5 className="card-title">{props.title}</h5>
);

interface descriptionProps {
  pricingDescription: string;
}

const Pricing: React.FC<descriptionProps> = (props) => (
  <p className="card-text">{props.pricingDescription}</p>
);

const AddCartButton: React.FC<{}> = () => (
  <a href="#" className="btn btn-primary">
    Add to Cart
  </a>
);
