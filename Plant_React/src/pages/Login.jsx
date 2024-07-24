import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signin, authenticate, isAuthenticated } from '../auth';

const Login = () => {
    const navigate = useNavigate();
    const { user } = isAuthenticated();
    const [values, setValues] = useState({
        email: '',
        password: '',
        error: '',
        redirectToPage: false
    });

    const { email, password, error, redirectToPage } = values;

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        signin({ email, password })
            .then(data => {
                if (data.error) {
                    setValues({ ...values, error: data.error });
                } else {
                    authenticate(data, () => {
                        setValues({ ...values, redirectToPage: true });
                    });
                }
            });
    };

    const showError = () => (
        error && <div className='alert alert-danger'>{error}</div>
    );

    useEffect(() => {
        if (redirectToPage) {
            if (user && user.role === 1) {
                navigate('/admin/dashboard');
            } else {
                navigate('/profile');
            }
        }
    }, [redirectToPage, user, navigate]);

    return (
        <>
            <div className="d-flex justify-content-center mb-5">
                <div className="col-lg-3 m-5">
                    <form className="p-3 shadow-lg" onSubmit={handleSubmit}>
                        <h2 className="text-center text-success my-2">Login Here</h2>
                        {showError()}
                        <div className="mb-3">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name='email'
                                id='email'
                                className='form-control'
                                onChange={handleChange('email')}
                                value={email}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="pwd">Password</label>
                            <input
                                type="password"
                                name='pwd'
                                id='pwd'
                                className='form-control'
                                onChange={handleChange('password')}
                                value={password}
                            />
                        </div>
                        <div className="mb-3">
                            <input type="submit" className='btn btn-success' value="Signin" />
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
    );
};

export default Login;
