import React from "react";
import { Header } from "./Header";
import { MyNotes } from "./MyNotes";

export function HomePage({title}) {

  return (
    <>
      <Header />
      <MyNotes title={title}/>
    </>
  )
}