import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export const Login = () => {

    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    // const submitHandler = async (data) => {
    //     //console.log(data);
    //     //login api... http://localhost:3000/user/login
    //     const res = await axios.post("/user/login", data)
    //     console.log(res.data)
    //     if (res.status === 200) {
    //         alert("Login Success") //tost...
    //         localStorage.setItem("id", res.data.data._id)
    //         localStorage.setItem("role", res.data.data.roleId.Name)

    //         if (res.data.data.roleId.Name === "NODE") {
    //             navigate("/user") //check in app.js
    //         }
    //     }
    //     else {
    //         alert("Login Failed")
    //     }
    // }



    const submitHandler = async (data) => {
        try {
            const res = await axios.post("/user/login", data);
            console.log("Full Response Structure:", res.data);
            // console.log("Response Data:", res.data); // Added for better debugging

            if (res.status === 200 && res.data?.data) {
                alert("Login Success");

                const { _id, roleId } = res.data.data;
                localStorage.setItem("id", _id);
                localStorage.setItem("role", roleId?.name);
                // const { _id, roleId, role, roleName } = res.data.data;
                // const userRole = roleId?.name || role?.name || roleName;

                // localStorage.setItem("id", _id);
                // localStorage.setItem("role", userRole);


                if (roleId?.name === "VENDOR") {
                    navigate("/vendor");
                } else if (roleId?.name === "USER") {
                    navigate("/user");
                } else {
                    alert("Unknown role. Redirecting to home.");
                    navigate("/Signup");
                }
            } else {
                alert("Login Failed: Invalid response structure.");
            }
        } catch (error) {
            console.error("Login error:", error);
            alert(" incorrect credentials.. Please Enter Valid Password..!!");
        }
    };


    return (

        <div className="d-flex justify-content-center align-items-center vh-100" style={{ background: "linear-gradient(135deg, #6a11cb, #2575fc)" }}>
            <div className="registration-form bg-white text-dark p-4 rounded shadow" style={{ maxWidth: "400px", width: "100%" }}>
                <div className="text-center mb-3">  <h1 className="fw-bold">LOGIN USER</h1>
                </div>
                <form onSubmit={handleSubmit(submitHandler)}>
                    <div className="mb-3">
                        <label>EMAIL</label>
                        <input type="text" {...register("email")} className="form-control" placeholder='enter email' />
                    </div>
                    <div className="mb-3">
                        <label>Password</label>
                        <input type="password" {...register("password")} className="form-control" placeholder='enter password' />
                    </div>
                    <div>
                        <button type="submit" className="btn w-100 text-white" style={{ background: "linear-gradient(135deg, #6a11cb, #2575fc)", border: "none" }}>Submit</button>
                    </div>

                    <div className="text-center mt-2">
                        <a href="ForgotPassword" className="text-primary">Forgot Password?</a>
                    </div>
                </form>
                <div className="text-center text-muted mt-3">
                    Don't have an account? <a href="Signup" className="text-primary">Signup</a>
                </div>
            </div>
        </div>
    )
}
