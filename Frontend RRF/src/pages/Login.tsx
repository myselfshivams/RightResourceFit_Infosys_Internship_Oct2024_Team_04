import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/Login.css";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import PasswordResetModal from "../components/PasswordResetModal"; 

const Login: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    userId: "",
    password: "",
    confirmPassword: "",
    name: "",
    phoneNumber: "",
    email: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const toggleSignUp = () => {
    setIsSignUp(!isSignUp);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login Functionality");
  };

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isPasswordResetOpen, setIsPasswordResetOpen] = useState(false);

  const openPasswordResetModal = () => {
    setIsPasswordResetOpen(true);
  };

  const closePasswordResetModal = () => {
    setIsPasswordResetOpen(false);
  };

  return (
    <div className="bgg">
      <div className={`loginPage ${isSignUp ? "swipeLeft" : "swipeRight"}`}>
        <div className="leftSection">
          <img src="/login.png" alt="Hero Image" className="heroImage" />
          <h1>Right Resource Fit</h1>
        </div>
        <div className="rightSection">
          <div className="loginContainer">
            <h1 className="heading">{isSignUp ? "Register" : "Log In"}</h1>
            <form onSubmit={handleSubmit}>
              {isSignUp && (
                <>
                  <div className="inputContainer">
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="inputField"
                      required
                    />
                    <label className="inputLabel">Full Name</label>
                  </div>
                  <div className="inputContainer">
                    <input
                      type="tel"
                      name="mobileNumber"
                      placeholder="Mobile Number"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      className="inputField"
                      required
                    />
                    <label className="inputLabel">Mobile Number</label>
                  </div>
                  <div className="inputContainer">
                    <input
                      type="email"
                      name="email"
                      placeholder="E-mail"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="inputField"
                      required
                    />
                    <label className="inputLabel">E-mail</label>
                  </div>
                  <div className="inputContainer">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="inputField"
                      required
                    />
                    <label className="inputLabel">Password</label>
                    <span
                      className="eyeIcon"
                      onClick={() => setShowPassword((prev) => !prev)}
                    >
                      {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                    </span>
                  </div>
                  {isSignUp && (
                    <div className="inputContainer">
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        className="inputField"
                        required
                      />
                      <label className="inputLabel">Confirm Password</label>
                      <span
                        className="eyeIcon"
                        onClick={() =>
                          setShowConfirmPassword((prev) => !prev)
                        }
                      >
                        {showConfirmPassword ? (
                          <AiFillEyeInvisible />
                        ) : (
                          <AiFillEye />
                        )}
                      </span>
                    </div>
                  )}
                </>
              )}
              {!isSignUp && (
                <>
                  <div className="inputContainer">
                    <input
                      type="text"
                      name="userId"
                      placeholder="E-mail"
                      value={formData.userId}
                      onChange={handleInputChange}
                      className="inputField"
                      required
                    />
                    <label className="inputLabel">E-mail</label>
                  </div>
                  <div className="inputContainer">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="inputField"
                      required
                    />
                    <label className="inputLabel">Password</label>
                    <span
                      className="eyeIcon"
                      onClick={() => setShowPassword((prev) => !prev)}
                    >
                      {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                    </span>
                  </div>
                  <div className="forgotPasswordContainer">
                    <span
                      className="forgotPassword"
                      onClick={openPasswordResetModal}
                    >
                      Forgot Password?
                    </span>
                  </div>
                </>
              )}
              <button type="submit" className="loginBtn" disabled={false}>
                {isSignUp ? "Sign Up" : "Login"}
              </button>
              <p className="toggleText">
                {isSignUp
                  ? "Already have an account? "
                  : "Don’t have an account? "}
                <span className="toggleLink" onClick={toggleSignUp}>
                  {isSignUp ? "Login here" : "Register here"}
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
      <PasswordResetModal
        isOpen={isPasswordResetOpen}
        onClose={closePasswordResetModal}
      />
      <ToastContainer />
    </div>
  );
};

export default Login;
