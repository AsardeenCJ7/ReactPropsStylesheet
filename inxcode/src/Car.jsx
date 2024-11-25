import React from "react";

function Car(props) {
  const { brand, company } = props; //destructuring
  const carBrand = `This car name is ${brand}`;
  return (
    <div>
      <h2>
        This car brand is : {brand} company name is {company}
      </h2>
      <h2>{carBrand}</h2>
    </div>
  );
}

export default Car;
