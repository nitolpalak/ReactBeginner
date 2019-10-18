import React from "react";
import Person from "./Person";

function NameList() {
  const persons = [
    {
      id: 1,
      name: "Master Yi",
      class: "Assasin"
    },
    {
      id: 2,
      name: "Tryndamere",
      class: "Viking"
    },
    {
      id: 3,
      name: "Zed",
      class: "Assasin"
    }
  ];

  const personList = persons.map(person => <Person key={person.id} person={person} />);
//   return <div>{personList}</div>;

    const names = ["Master Yi", "Tryndamere", "Zed", "Zed"];
    const nameList = names.map((name, index) => <h2 key={index+1}>{index+1} {name}</h2>);
    return <div>{nameList}</div>;
}

export default NameList;
