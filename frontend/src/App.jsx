import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./componentes/Navbar";
import Pagination from "./componentes/Pagination";

function App() {
  const [view, setView] = useState(false);
  const [greet, setGreet] = useState("");
  let hours = new Date().hours;
  useEffect(() => {
    if (hours > 12) {
      setGreet("Good afternoon ");
    } else {
      setGreet("Good morning ");
    }
  });

  return (
    <div className="App">
      <section class=" flex flex-col items-center min-h-screen justify-start bg-white">
        <Navbar></Navbar>
        <div class="mx-auto max-w-[43rem]">
          <div class="text-center">
            <h1 class="mt-3 text-[3.5rem] font-bold leading-[4rem] tracking-tight text-black">
              Hi! {greet}
            </h1>
           
          </div>

          <div class="mt-6 flex items-center justify-center gap-4">
            <span
              class="transform cursor-pointer rounded-md border border-slate-200 px-5 py-3 font-medium text-slate-900 transition-colors hover:bg-slate-50"
            >
              View All Employees
            </span>
          </div>
          <div class="mt-6 flex items-center justify-center gap-4">
            <Pagination></Pagination>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
