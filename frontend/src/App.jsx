import { Routes, Route } from "react-router-dom";

import PublicLayout from "./layouts/PublicLayout";

import AdminLogin from "./pages/Admin/AdminLogin";
import AdminDashboard from "./pages/Admin/AdminDashboard";

import ProtectedRoute from "./components/ProtectedRoute";


import Home from "./pages/Home";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import DesignRequest from "./pages/DesignRequest";


function App(){

    return (

        <Routes>


            <Route
                path="/admin/login"
                element={<AdminLogin />}
            />


            <Route
                path="/admin/dashboard"
                element={
                    <ProtectedRoute>
                        <AdminDashboard />
                    </ProtectedRoute>
                }
            />



            <Route
                path="/"
                element={
                    <PublicLayout>
                        <Home />
                    </PublicLayout>
                }
            />


            <Route
                path="/services"
                element={
                    <PublicLayout>
                        <Services />
                    </PublicLayout>
                }
            />


            <Route
                path="/gallery"
                element={
                    <PublicLayout>
                        <Gallery />
                    </PublicLayout>
                }
            />


            <Route
                path="/about"
                element={
                    <PublicLayout>
                        <About />
                    </PublicLayout>
                }
            />


            <Route
                path="/contact"
                element={
                    <PublicLayout>
                        <Contact />
                    </PublicLayout>
                }
            />


            <Route
                path="/blog"
                element={
                    <PublicLayout>
                        <Blog />
                    </PublicLayout>
                }
            />


            <Route
                path="/design-request"
                element={
                    <PublicLayout>
                        <DesignRequest />
                    </PublicLayout>
                }
            />


        </Routes>

    );

}


export default App;