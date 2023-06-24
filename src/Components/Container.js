import { useState } from "react";

const Container = () => {
  const [emailWarning, setEmailWarning] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordWarning, setPasswordWarning] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordWarning, setConfirmPasswordWarning] = useState("");
  const onSubmit = () => {
    setEmailWarning("");
    setPasswordWarning("");
    setConfirmPasswordWarning("");
    const value = email;
    if (value === "") {
      setEmailWarning("Please enter the email");
      return;
    }
    const regex = /^([A-Za-z0-9_\-\.])+@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,})$/;
    const f = !regex.test(value);
    if (f === true) {
      setEmailWarning("Email should be in correct format");
      return;
    }
    if (password.length === 0) {
      setPasswordWarning("Please enter the password");
      return;
    }
    const x = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9\s]).{8,}$/;
    const b = !x.test(password);
    if (b === true) {
      setPasswordWarning(
        "Password should have atleast 8 character, 1 special character, 1 number and 1 alphabet."
      );
      return;
    }
    if (confirmPassword.length === 0) {
      setConfirmPasswordWarning("Please confirm the password");
      return;
    }
    if (confirmPassword !== password) {
      setConfirmPasswordWarning("Value does not match with the password");
      return;
    } else {
      alert("Email:" + email + " " + "Password: " + password);
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    }
  };

  const handleEmail = (e) => {
    setEmailWarning("");
    setPasswordWarning("");
    setConfirmPasswordWarning("");
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setEmailWarning("");
    setPasswordWarning("");
    setConfirmPasswordWarning("");
    setPassword(e.target.value);
  };

  const handleConfirmPassword = (e) => {
    setEmailWarning("");
    setPasswordWarning("");
    setConfirmPasswordWarning("");
    setConfirmPassword(e.target.value);
  };

  return (
    <div className="main-container">
      <h1>CREATE AN ACCOUNT</h1>
      <l1 className="label">
        Email:<span className="compulsory">*</span>
      </l1>
      <input
        className="input"
        type="text"
        value={email}
        onChange={handleEmail}
      />
      {emailWarning.length > 0 && <p className="warning">{emailWarning}</p>}
      <l1 className="label">
        Choose Password:<span className="compulsory">*</span>
      </l1>
      <input
        className="input"
        type="password"
        value={password}
        onChange={handlePassword}
      />
      {passwordWarning.length > 0 && (
        <p className="warning">{passwordWarning}</p>
      )}
      <l1 className="label">
        Confirm Password:<span className="compulsory">*</span>
      </l1>
      <input
        className="input"
        type="password"
        value={confirmPassword}
        onChange={handleConfirmPassword}
      />
      {confirmPasswordWarning.length > 0 && (
        <p className="warning">{confirmPasswordWarning}</p>
      )}
      <button className="submit-btn" onClick={onSubmit}>
        REGISTER NOW!
      </button>
    </div>
  );
};
export default Container;
