import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <>
            <div className="d-flex justify-content-center mb-5">
                <div className="col-lg-3 m-5">
                    <form className="p-3 shadow-lg">
                        <h2 className="text-center text-success my-2">
                            Login Here
                        </h2>
                        <div className="mb-3">
                            <label htmlFor="email">Email</label>
                            <input type="email" name='email' id='email' className='form-control' />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="pwd">Password</label>
                            <input type="password" name='pwd' id='pwd' className='form-control' />
                        </div>
                        <div className="mb-3">
                            <input type="submit" className='btn btn-success' value="Signin"/>
                        </div>
                        <div className="mb-3">
                        <Link to="#" className="text-reset text-decoration-none">Forget Password?</Link>
                        </div>
                        <div className="mb-3">
                        <Link to="/signup" className="text-reset text-decoration-none">Create an account instead</Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login