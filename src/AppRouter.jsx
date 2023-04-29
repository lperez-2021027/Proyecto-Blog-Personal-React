import { Route, Routes } from "react-router-dom"
import { Body } from "./components/Body"
import { NavBar } from "./components/NavBar"
import { Sexto } from "./components/Sexto"
import { Quinto } from "./components/Quinto"
import { Cuarto } from "./components/Cuarto"

export const AppRouter = () => {
    return (
        <>
            <NavBar></NavBar>
            
            <Routes>
                <Route path="/" element={<Body></Body>}></Route>
                <Route path="/sexto" element={<Sexto></Sexto>}></Route>
                <Route path="/quinto" element={<Quinto></Quinto>}></Route>
                <Route path="/cuarto" element={<Cuarto></Cuarto>}></Route>
            </Routes>

        </>
    )
}
