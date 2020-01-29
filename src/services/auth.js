export const isBrowser = () => typeof window !== "undefined";
export const getUser = () =>
  isBrowser() && window.localStorage.getItem("gatsbyUser")
    ? JSON.parse(window.localStorage.getItem("gatsbyUser"))
    : {};
const setUser = user =>
  window.localStorage.setItem("gatsbyUser", JSON.stringify(user));
export const handleLogin = ({ banana }) => {
  if (banana.toLowerCase() === "saratoga2020") {
    setUser({
      username: `guest`,
      name: `guest`
    });
    return true;
  }
  return false;
};
export const isLoggedIn = () => {
  const user = getUser();
  return !!user.username;
};
export const logout = callback => {
  setUser({});
  callback();
};
