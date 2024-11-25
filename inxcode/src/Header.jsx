import React from "react";
import Apple from "./Apple";
import Profile from "./Profile";

function Header() {
  const profileInfo = [
    { name: "Asardeen", age: 20 },
    { name: "Mohamed", age: 25 },
    { name: "Asanar", age: 51 },
  ];

  //const profileInfo = { name: "Asardeen", age: 25 };
  //const profileInfo = {};
  return (
    <div>
      {/* {profileInfo.name !== undefined && profileInfo.age !== undefined ? (
        <Profile profileDetails={profileInfo} />
      ) : null} */}

      <h1>Header</h1>
      <Apple />

      <ul>
        {profileInfo.map((i) => (
          <li>
            <Profile profileDetails={i} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Header;
