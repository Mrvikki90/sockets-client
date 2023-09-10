import "./App.css";
import HomePage from "./pages/homepage/homepage";
import { BrowserRouter } from "react-router-dom";
import Router from "./Routes/Routes"
import { ChakraProvider } from "@chakra-ui/react";



function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <Router />
    </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
