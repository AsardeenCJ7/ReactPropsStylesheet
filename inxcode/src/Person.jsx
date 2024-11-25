import React from "react";

function Person(props) {
  const { details } = props;
  const { numberList } = props;
  const { uName, companyName, id } = details;
  return (
    <div>
      <h2>
        Hello Mr . {uName} id is : {id}
      </h2>
      <h3>Welcome to {companyName}</h3>
    </div>
  );
}

export default Person;
