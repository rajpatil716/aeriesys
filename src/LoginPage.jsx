// / Login page component
import {  useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navi=useNavigate();
    const Login=()=>{
      navi('/home')
    }
  
  
  return (
    <>
     
      <body className="login-page bg-body-secondary">
        <div className="login-box">
          <div className="login-logo">
            <a href="../index2.html">
              <b>Admin</b>LTE
            </a>
          </div>
          {/* /.login-logo */}
          <div className="card">
            <div className="card-body login-card-body">
              <p className="login-box-msg">Sign in to start your session</p>
              <form onSubmit={Login}>
                <div className="input-group mb-3">
                  <input type="email" className="form-control" placeholder="Email" />
                  <div className="input-group-text">
                    <span className="bi bi-envelope"></span>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input type="password" className="form-control" placeholder="Password" />
                  <div className="input-group-text">
                    <span className="bi bi-lock-fill"></span>
                  </div>
                </div>
                {/*begin::Row*/}
                <div className="row">
                  <div className="col-8">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                      <label className="form-check-label" htmlFor="flexCheckDefault">
                        Remember Me
                      </label>
                    </div>
                  </div>
                  {/* /.col */}
                  <div className="col-4">
                    <div className="d-grid gap-2">
                      <button type="submit" className="btn btn-primary">
                        Sign In
                      </button>
                    </div>
                  </div>
                  {/* /.col */}
                </div>
                {/*end::Row*/}
              </form>
              <div className="social-auth-links text-center mb-3 d-grid gap-2">
                <p>- OR -</p>
                <a href="#" className="btn btn-primary">
                  <i className="bi bi-facebook me-2"></i> Sign in using Facebook
                </a>
                <a href="#" className="btn btn-danger">
                  <i className="bi bi-google me-2"></i> Sign in using Google+
                </a>
              </div>
              {/* /.social-auth-links */}
              <p className="mb-1">
                <a href="forgot-password.html">I forgot my password</a>
              </p>
              <p className="mb-0">
                <a href="register.html" className="text-center">
                  Register a new membership
                </a>
              </p>
            </div>
            {/* /.login-card-body */}
          </div>
        </div>
      </body>
      {/*end::Body*/}
    </>
  );
};
export default LoginPage;
