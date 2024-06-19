import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProjectsPage from "../pages/ProjectsPage";
import NavBar from "../components/NavBar";
import GetClub from "../pages/GetClub";


//
import { useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import "./App.css";
import MainLayout from "../components/MainLayout";


function App() {
  const [theme, setTheme] = useState("light");

  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <MainLayout>
          
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:clubId" element={<GetClub />} />
          </Routes>
          
        </MainLayout>
      </ThemeContext.Provider>
    </>
  );
}

export default App;