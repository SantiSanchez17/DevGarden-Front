import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./views/Login";
import Registro from "./views/Registro";
import AuthLayout from "./layouts/AuthLayout";

export default function Router() {
    return (
        <BrowserRouter>
        <Routes>
            <Route element={<AuthLayout />}>
                <Route path="/auth/login" element={<Login />}/>
                <Route path="/auth/registro" element={<Registro />}/>
            </Route>
        </Routes>
        </BrowserRouter>
    )
}