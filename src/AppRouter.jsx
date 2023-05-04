import { Route, Routes } from "react-router-dom"
import { Body } from "./components/Body"
import { NavBar } from "./components/NavBar"
import { Sexto } from "./components/Sexto"
import { Quinto } from "./components/Quinto"
import { Cuarto } from "./components/Cuarto"
import { Default } from "./components/Default"

export const AppRouter = () => {
    return (
        <>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Body/>}></Route>
                <Route path="/sexto" element={<Sexto/>}></Route>
                <Route path="/quinto" element={<Quinto/>}></Route>
                <Route path="/cuarto" element={<Cuarto/>}></Route>
                <Route path="/*" element={<Default/>}></Route>
            </Routes>

        </>
    )
}
