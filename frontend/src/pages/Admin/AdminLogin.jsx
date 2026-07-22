import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { adminLogin } from "../../services/adminService";
import "./AdminLogin.css";

function AdminLogin(){

    const navigate = useNavigate();


    const [email,setEmail] = useState("");

    const [password,setPassword] = useState("");

    const [error,setError] = useState("");



    const handleSubmit = async(e)=>{

        e.preventDefault();


        try{

            const data = await adminLogin(
                email,
                password
            );


            localStorage.setItem(
                "adminToken",
                data.token
            );


            navigate("/admin/dashboard");


        }catch(error){

            setError(error.message);

        }

    };


    return (

        <div className="admin-login-page">


            <div className="admin-login-card">


        <span className="admin-login-icon">
            🔐
        </span>


                <h2 className="admin-login-title">
                    Admin Login
                </h2>


                <form onSubmit={handleSubmit}>


                    <input

                        type="email"

                        placeholder="Admin Email"

                        value={email}

                        onChange={(e)=>setEmail(e.target.value)}

                    />


                    <input

                        type="password"

                        placeholder="Password"

                        value={password}

                        onChange={(e)=>setPassword(e.target.value)}

                    />


                    <button type="submit">
                        Login
                    </button>


                </form>


                {
                    error &&
                    <p className="login-error">
                        {error}
                    </p>
                }


            </div>


        </div>

    );

}


export default AdminLogin;