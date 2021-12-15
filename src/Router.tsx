import React from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

import Coins from "./routes/Coins"
import Coin from "./routes/Coin"


export default function Router() {
  return (
    <BrowserRouter>
      <Link to="/">홈</Link>
      <Link to="/123">코인방으로</Link>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/:coinId" element={<Coins />} />
      </Routes>
    </BrowserRouter>)

}