import AlertBox from "./AlertBox";

import { useState, useEffect } from "react";

const Form = () => {
  const [nameInput, setNameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [confirmPasswordInput, setConfirmPasswordInput] = useState("");

  // Show Error Msg
  const [nameIsTouched, setNameIsTouched] = useState(false);
  const [passwordIsTouched, setPasswordIsTouched] = useState(false);
  const [confirmPasswordTouched, setConfirmPasswordTouched] = useState(false);

  const [isActive, setIsActive] = useState(false);
  const [passwordIconShow, setPasswordIconShow] = useState(false);

  // passwordIconIsTouched
  const [passwordIconIsTouched, setPasswordIconIsTouched] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // confirmPasswordIsTouched
  const [confirmPasswordIsTouched, setConfirmPasswordIsTouched] =
    useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Password Check
  const [passwordCheck, setPasswordCheck] = useState(false);

  const inputNameChange = (e) => {
    setNameInput(e.target.value);
    setNameIsTouched(true);
  };

  const inputPasswordChange = (e) => {
    setPasswordInput(e.target.value);
    setPasswordIsTouched(true);
    setPasswordIconShow(true);
  };

  const inputconfirmPasswordChange = (e) => {
    setConfirmPasswordInput(e.target.value);
    setConfirmPasswordTouched(true);
    setConfirmPasswordIsTouched(true);
  };

  // successBtn
  const successBtn = () => {
    setIsActive(!isActive);
  };

  const showPasswordInput = () => {
    setPasswordIconIsTouched(!passwordIconIsTouched);

    setShowPassword(!showPassword);
  };

  const showConfirmPasswordText = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  useEffect(() => {
    document.addEventListener("click", () => {
      setIsActive(false);
    });
  }, []);

  // SubmitEvent
  const handleSubmit = (e) => {
    e.preventDefault();

    if (passwordInput !== confirmPasswordInput) {
      setPasswordCheck(true);
    } else {
      setIsActive(true);

      setNameInput("");
      setPasswordInput("");
      setConfirmPasswordInput("");

      setNameIsTouched(false);
      setPasswordIsTouched(false);
      setConfirmPasswordTouched(false);

      setPasswordCheck(false);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="input_box">
          <label>Enter a Name</label>
          <input
            type="text"
            placeholder="Enter a Name..."
            value={nameInput}
            onChange={inputNameChange}
          />
        </div>

        {nameInput === "" && nameIsTouched && (
          <div className="error_msg">
            <p>Please Enter the Name</p>
            <i className="fa fa-exclamation-circle"></i>
          </div>
        )}

        <div className="input_box">
          <label>Enter a Password</label>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter a password..."
            value={passwordInput.trim()}
            onChange={inputPasswordChange}
          />

          {passwordIconShow && passwordInput && (
            <i
              onClick={showPasswordInput}
              className={`${
                passwordIconIsTouched ? "fa fa-eye" : "fa fa-eye-slash"
              }`}
            ></i>
          )}
        </div>

        {passwordInput === "" && passwordIsTouched && (
          <div className="error_msg">
            <p>Please Enter the Password</p>
            <i className="fa fa-exclamation-circle"></i>
          </div>
        )}

        <div className="input_box">
          <label>Enter a Confirm Password</label>
          <input
            type={`${showConfirmPassword ? "text" : "password"}`}
            placeholder="Enter a ConfirmPassword..."
            value={confirmPasswordInput.trim()}
            onChange={inputconfirmPasswordChange}
          />

          {confirmPasswordIsTouched && confirmPasswordInput && (
            <i
              onClick={showConfirmPasswordText}
              className={`${
                showConfirmPassword ? "fa fa-eye" : "fa fa-eye-slash"
              }`}
            ></i>
          )}
        </div>

        {confirmPasswordInput === "" && confirmPasswordTouched && (
          <div className="error_msg">
            <p>Please Enter the Confirm Password</p>
            <i className="fa fa-exclamation-circle"></i>
          </div>
        )}

        {passwordCheck && (
          <div className="match-password error">
            <p>Password don't match</p>
          </div>
        )}

        <button
          className="btn"
          disabled={
            nameInput === "" ||
            passwordInput === "" ||
            confirmPasswordInput === ""
          }
        >
          Submit
        </button>
      </form>

      <AlertBox isActive={isActive} successBtn={successBtn} />
    </>
  );
};

export default Form;
