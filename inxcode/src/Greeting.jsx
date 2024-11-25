import React from "react";
import Person from "./Person";
function Greeting() {
  const details = [
    { id: 1, uName: "Asardeen", companyName: "99x" },
    { id: 2, uName: "Haris", companyName: "Virtusa" },
    { id: 3, uName: "Jeyaraj", companyName: "IFS" },
  ];

  const detailsInfo = [
    {
      brand: "BMW",
      country: "Germany",
    },

    {
      brand: "Fort",
      country: "Italy",
    },
  ];

  const numberList = [1, 2, 3, 4, 5, 6];

  return (
    <div>
      <ul>
        {details.map((i) => (
          <li key={i.id}>
            <Person details={i} />
          </li>
        ))}
      </ul>

      <ul>
        {numberList.map((e, index) => (
          <p key={index}>{e}</p>
        ))}
      </ul>
    </div>
  );
}

// two methods are available so note it

export default Greeting;
