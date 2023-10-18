import { getCookie, cookieNames, deleteCookie } from "../../utils/cookies";
import "./styles.css";

export const Header = () => {
  const userLogged = getCookie(cookieNames.EMAIL_COOKIE);

  const logout = () => {
    deleteCookie(cookieNames.EMAIL_COOKIE);
    deleteCookie(cookieNames.FIRSTNAME_COOKIE);
    deleteCookie(cookieNames.LASTNAME_COOKIE);
    deleteCookie(cookieNames.PHONE_COOKE);
    location.reload();
  };

  return (
    <header className="container">
      {userLogged && (
        <>
          <p>
            <strong>User logged in: </strong>
            {userLogged}
          </p>
          <button onClick={logout}>Log out</button>
        </>
      )}
    </header>
  );
};
