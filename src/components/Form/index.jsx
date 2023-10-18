import { useState } from "react";
import "./styles.css";
import { cookieNames, setCookie } from "../../utils/cookies";

export const Form = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");

  const clearForm = () => {
    setEmail("");
    setFirstName("");
    setLastName("");
    setPhone("");
  };

  const login = () => {
    if (!email || !firstName || !lastName || !phone) {
      alert("Missing info for login...");
      return;
    }
    console.log("login with", { email, firstName, lastName, phone });

    setCookie(cookieNames.EMAIL_COOKIE, email);
    setCookie(cookieNames.FIRSTNAME_COOKIE, firstName);
    setCookie(cookieNames.LASTNAME_COOKIE, lastName);
    setCookie(cookieNames.PHONE_COOKE, phone);

    clearForm();
  };

  return (
    <form className="container-form">
      <div className="input">
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />
      </div>

      <div className="input">
        <label htmlFor="firstname">First Name:</label>
        <input
          type="text"
          id="firstname"
          value={firstName}
          onChange={({ target }) => setFirstName(target.value)}
        />
      </div>

      <div className="input">
        <label htmlFor="lastname">Last Name:</label>
        <input
          type="text"
          id="lastname"
          value={lastName}
          onChange={({ target }) => setLastName(target.value)}
        />
      </div>

      <div className="input">
        <label htmlFor="phone">Phone:</label>
        <input
          type="text"
          id="phone"
          value={phone}
          onChange={({ target }) => setPhone(target.value)}
        />
      </div>

      <button type="button" onClick={login}>
        Log In
      </button>
    </form>
  );
};
