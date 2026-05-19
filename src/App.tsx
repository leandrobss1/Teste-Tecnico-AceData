import { Routes, Route } from "react-router-dom";
import { GlobalStyles } from "./styles/GlobalStyles";
import SalaryCalculator from "./pages/SalaryCalculator/index.tsx";
import Fibonacci from "./pages/Fibonacci/index.tsx";
import NumberSequence from "./pages/NumberSequence/index.tsx";
import Home from "./pages/Home/index.tsx";

export default function App() {
  return (
    <>
      <GlobalStyles />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/salary" element={<SalaryCalculator />} />
        <Route path="/fibonacci" element={<Fibonacci />} />
        <Route path="/sequence" element={<NumberSequence />} />
      </Routes>
    </>
  );
}
