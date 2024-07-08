import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import "../Styles/Login.css";

const SignIn = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div className="card border-0 shadow rounded-3 my-5">
                        <div className="card-body p-4 p-sm-5">
                            <h1 className="card-title text-center mb-5 fw-light">Sign In</h1>
                            <form>
                                <div className="form-floating mb-3">
                                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                    <label htmlFor="floatingInput">Email address</label>
                                </div>
                                <div className="form-floating mb-3 position-relative">
                                    <input
                                        type={passwordVisible ? "text" : "password"}
                                        className="form-control"
                                        id="floatingPassword"
                                        placeholder="Password"
                                    />
                                    <label htmlFor="floatingPassword">Password</label>
                                    <button
                                        type="button"
                                        className="btn  position-absolute top-50 end-0 translate-middle-y"
                                        onClick={togglePasswordVisibility}
                                        style={{ padding: '0.375rem 0.75rem', border: 'none', cursor: 'pointer' }}
                                    >
                                        {passwordVisible ? 'Hide' : 'Show'}
                                    </button>
                                </div>
                                <span>
                                    Don't have an account?&nbsp;
                                    <a href='' className="link-signup">SignUp</a>
                                </span>
                                <div className="d-grid">
                                    <Button variant="outline-info" className='submit' type="submit">Sign In</Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;

