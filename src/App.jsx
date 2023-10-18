import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import { Form, Header } from "./components";
import "./App.css";
import { cookieNames, getCookie } from "./utils/cookies";
import { useState } from "react";

function App() {
  let idCheckInterval;
  const [userLogged, setUserLogged] = useState("");

  const checkSession = () => {
    const currentUser = getCookie(cookieNames.EMAIL_COOKIE);
    setUserLogged(currentUser);
  };

  // eslint-disable-next-line no-unused-vars
  idCheckInterval = setInterval(checkSession, 2000);
  window.__flex_g_settings = {
    accessToken:
      "Yjk5ZjNhMWUxZjBiMzUzMTM3ZGUxMDk3NzNmYjFjOWYyY2Y4ZGVhMWUxODcwZTcyMTU3M2JhODhhNmVhZjMzYg",
  };

  return (
    <>
      <Header />
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Testing Local Lead</h1>
      <p className="token">Token: {window?.__flex_g_settings?.accessToken}</p>
      {!userLogged && <Form />}
      <button
        style={{ backgroundColor: "red", fontSize: "13px", marginTop: "20px" }}
        onClick={() => {
          localStorage.clear();
          location.reload();
        }}
      >
        Clear Localstorage
      </button>
    </>
  );
}

export default App;
