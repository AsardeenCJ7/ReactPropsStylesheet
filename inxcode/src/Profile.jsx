import React from "react";

function Profile(props) {
  const { profileDetails } = props;
  const { name, age } = profileDetails;

  return (
    <div>
      {/* <p>Name : {props.name}</p>
      <p>Age : {props.age}</p> */}

      <p>Destructuring.......</p>
      <p>Name : {name}</p>
      <p>Age : {age}</p>
    </div>
  );
}

export default Profile;
