import React, { useState } from 'react';

import Circle from './Circle';



export default function App() {
  const [value, setValue] = useState("")
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setValue(value)
  }
  return (
    <div>
      <form action="">
        <input
          value={value}
          onChange={onChange}
          type="text"
          placeholder='username'
        />
      </form>
    </div>
  );
}
