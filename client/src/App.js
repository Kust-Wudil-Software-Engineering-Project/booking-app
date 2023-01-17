import React, { useEffect, useState } from "react";

// `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";

import Login from "./components/Pages/Login";
import Home from "./components/Pages/Home";
import SignUp from "./components/Pages/SignUp";
import Check from "./components/Check";
// Routing
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/api").then((response) =>
      response.json().then((data) => {
        setBackendData(data);
      })
    );
  }, []);

  return (
    <>
      <Router>
        <ChakraProvider>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/check" element={<Check />}></Route>
          </Routes>
        </ChakraProvider>
      </Router>
    </>
  );
}

export default App;
