export const cookieNames = {
  EMAIL_COOKIE: "_ib_user_email",
  FIRSTNAME_COOKIE: "_ib_user_firstname",
  LASTNAME_COOKIE: "_ib_user_lastname",
  PHONE_COOKE: "_ib_user_phone",
};

export function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + value + expires + "; path=/";
}

export function getCookie(cname) {
  const name = cname + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

export function deleteCookie(cname) {
  document.cookie = cname + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}
