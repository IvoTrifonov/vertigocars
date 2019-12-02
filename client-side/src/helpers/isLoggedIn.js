const parseCookies = () => {
  return document.cookie.split('; ') 
    .reduce((acc, cookie) => {
      const [cookieName, cookieValue] = cookie.split('=');
      acc[cookieName] = cookieValue;
      return acc;
    }, {})
}

const isLoggedIn = () => {
  const cookies = parseCookies();
  return !!cookies['x-auth-token'];
}

export default isLoggedIn;