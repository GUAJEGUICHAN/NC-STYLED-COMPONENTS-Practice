import React from "react";
import styled from "styled-components";

import { useParams } from "react-router-dom";



type RouteParams = {
  coinId: string
}

export default function Coin() {
  const { coinId } = useParams<RouteParams>();
  return <div>{coinId}</div>
}