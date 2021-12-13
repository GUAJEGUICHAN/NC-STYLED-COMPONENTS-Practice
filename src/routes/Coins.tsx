import React from "react";
import { useParams } from "react-router-dom";

interface RouterParams {
  coinId: string;
}

export default function Coins() {
  const { coinId } = useParams();
  console.log(coinId)
  return <h1>{coinId}</h1>
}