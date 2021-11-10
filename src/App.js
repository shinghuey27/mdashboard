import React from "react";
import Businessacc from "./components/Businessacc";
import Card from "./components/Card";
import Header from "./components/Header";
import Overview from "./components/Overview";
import Recommended from "./components/Recommended";
import Sidebar from "./components/Sidebar";

export default function App() {
  return (
    <div className="w-screen h-screen flex flex-row">
      <Sidebar />
      <div>
        <div className="">
        <Header />
        </div>
        <div className="absolute top-[30%] left-[23%]">
          <Overview />
          <Card />
          <Businessacc />
          <Recommended />
        </div>
      </div>
    </div>
  );
}
