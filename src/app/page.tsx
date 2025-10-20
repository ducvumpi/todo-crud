"use client";

import Todolist from "./component/Todolist/Todolist";
import QLSV from "./component/QLSV/QLSV";
export default function Home() {
  return (
    <div className="">
      <Todolist />
      <QLSV />
    </div>
  );
}
