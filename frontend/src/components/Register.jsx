import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';


const SignIn = () => {
    //for password
    const [passwordVisible, setPasswordVisible] = useState(false);
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };
    //for Confirmpassword
    const [ConfirmpasswordVisible, setConfirmPasswordVisible] = useState(false);
    const toggleConfirmPasswordVisibility = () => {
        setConfirmPasswordVisible(!ConfirmpasswordVisible);
    };
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div className="card border-0 shadow rounded-3 my-5">
                        <div className="card-body p-4 p-sm-5">
                            <h1 className="card-title text-center mb-5 fw-light ">Sign Up</h1>
                            <form>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="floatingInput" placeholder="Username" />
                                    <label htmlFor="floatingInput">Username</label>
                                </div>
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
                                <div className="form-floating mb-3 position-relative">
                                    <input
                                        type={ConfirmpasswordVisible ? "text" : "password"}
                                        className="form-control"
                                        id="floatingPassword"
                                        placeholder="Confirm Password"
                                    />
                                    <label htmlFor="floatingPassword">Confirm Password</label>
                                    <button
                                        type="button"
                                        className="btn  position-absolute top-50 end-0 translate-middle-y"
                                        onClick={toggleConfirmPasswordVisibility}
                                        style={{ padding: '0.375rem 0.75rem', border: 'none', cursor: 'pointer' }}
                                    >
                                        {ConfirmpasswordVisible ? 'Hide' : 'Show'}
                                    </button>
                                </div>
                                {/* <div className="form-check mb-3">
                                    <input className="form-check-input" type="checkbox" value="" id="rememberPasswordCheck" />
                                    <label className="form-check-label" htmlFor="rememberPasswordCheck">
                                        Remember password
                                    </label>
                                </div> */}
                                <span>
                                    Already have an account?&nbsp;
                                    <a href='' className="link-signup">SignIn</a>
                                </span>
                                <div className="d-grid">
                                    {/* <button className="btn btn-primary btn-login text-uppercase fw-bold" type="submit">Sign in</button> */}
                                    <Button variant="outline-info" className='submit' type="submit">Sign Up</Button>
                                </div>
                                {/* <hr className="my-4" />
                <div className="d-grid mb-2">
                  <button className="btn btn-google btn-login text-uppercase fw-bold" type="submit">
                    <i className="fab fa-google me-2"></i> Sign in with Google
                  </button>
                </div>
                <div className="d-grid">
                  <button className="btn btn-facebook btn-login text-uppercase fw-bold" type="submit">
                    <i className="fab fa-facebook-f me-2"></i> Sign in with Facebook
                  </button>
                </div> */}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
