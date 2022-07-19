import "./App.css"
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import { ExerciseDetails } from "./pages/ExerciseDetails";
import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { AttributionPage } from "./pages/AttributionPage";

function App() {
  return (
    <Box width="400" sx={{width: {sl: "1488px"}}} m="auto">
      <Navbar/>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/exercise/:exerciseId" element={<ExerciseDetails/>}/>
        <Route path="/images/attributions" element={<AttributionPage/>}/>
      </Routes>

      <Footer/>
    </Box>
  );
}

export default App;
