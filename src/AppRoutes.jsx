import { useState, useContext } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from "react-router-dom"

import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Menu2 from './pages/Menu2/Menu2';
import MenuAppBar from './components/appBar/AppBar';

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
        return <>
        <MenuAppBar/>{children}
        
        </>
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
                    <Route exact path="/Home" element={
                        <Private >
                             <Home />
                        </Private>
                    } ></Route>
                    <Route exact path="/Menu2" element={
                        <Private >
                             <Menu2 />
                        </Private>
                    } ></Route>
                </Routes>
            </AuthProvider>
        </Router>
    )
}

export default AppRoutes;