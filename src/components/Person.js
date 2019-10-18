import React from "react";

function Person({person}) {  //need to destructure person attribute
    //can't use key attribute. react needs this attribute for personal reasons
  return (
    <div>
      <h2>
        Hi {person.name}, King of {person.class}
      </h2>
    </div>
  );
}

export default Person;
