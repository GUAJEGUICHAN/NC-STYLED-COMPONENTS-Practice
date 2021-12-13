import React from "react";
import { useParams } from "react-router-dom";

type RouteParams = {
  coinId: string
}

export default function Coin() {
  const { coinId } = useParams<RouteParams>();
  console.log("ㅁㄴㅇㄹ", coinId);
  return <h1>Coin11</h1>
}