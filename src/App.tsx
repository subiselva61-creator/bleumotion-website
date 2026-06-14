import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import Challenge from "./pages/Challenge"
import Solution from "./pages/Solution"
import Impact from "./pages/Impact"
import Capital from "./pages/Capital"
import Vision from "./pages/Vision"
import Contact from "./pages/Contact"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/challenge" element={<Challenge />} />
          <Route path="/solution" element={<Solution />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/capital" element={<Capital />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
