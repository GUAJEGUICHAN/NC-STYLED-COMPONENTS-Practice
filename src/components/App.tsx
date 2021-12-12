import React, { useState } from 'react';

import Circle from './Circle';



export default function App() {
  const [value, setValue] = useState("")
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    //위의 형태는 굉장히 직관적이지 않다. 제대로 사용하려면 구글에 검색하는 것 말고는 없다.
    //typescript는 onChange함수가 InputElement에 의해서 실행될 것을 안다.
    console.log(event.currentTarget.value);
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
