import { useState, useContext } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from "react-router-dom"

import Login from './pages/Login/Login';
import Home from './pages/Home/Home';

import { AuthProvider, AuthContext } from "./context/auth";

const AppRoutes = () => {
    const Private = ({ children }) => {
        const { authenticated, loading } = useContext(AuthContext)

        if(loading){
            return <div className="loading">Carregando...</div>
        }

        if (!authenticated) {
            return <Navigate to="/login" />
        }
        return children
    }

    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route exact path="/login" element={<Login />}></Route>
                    <Route exact path="/" element={
                        <Private >
                            <Home />
                        </Private>
                    } ></Route>
                </Routes>
            </AuthProvider>
        </Router>
    )
}

export default AppRoutes;