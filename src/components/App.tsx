import React from 'react';

import Circle from './Circle';
interface PlayerShape {
  name: string;
  age: string;
}

const sayHello = (playerObj: PlayerShape) =>
  `Hello ${playerObj.name} you are ${playerObj.age} years old.`

export default function App() {
  console.log(sayHello({ name: "nico", age: "12" }))
  return (
    <div>
      <Circle bgColor="teal" />
      <Circle bgColor="tomato" />
    </div>
  );
}
