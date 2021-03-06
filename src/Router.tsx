import React from 'react';
import {
  BrowserRouter, Routes, Route, Link,
} from 'react-router-dom';

import Coins from './routes/Coins';
import Coin from './routes/Coin';
import Chart from './routes/Chart';
import Price from './routes/Price';

export default function Router() {
  return (
    <BrowserRouter>
      <Link to="/">홈</Link>
      <Link to="/coins">코인방으로</Link>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/coins" element={<Coins />} />
        <Route path="/:coinId/*" element={<Coin />}>
          <Route path="chart" element={<Chart />} />
          <Route path="price" element={<Price />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
