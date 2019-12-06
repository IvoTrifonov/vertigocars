import { useContext } from "react";
import userService from "../../services/user-service";
import { AuthContext } from "../contextWrapper";

const Logout = ({ history }) => {
  const { setAuth, setUsername } = useContext(AuthContext);

  userService.logout().then(() => {
    setAuth(false);
    setUsername(undefined);
    localStorage.removeItem("username");
    localStorage.removeItem("userId");
    history.push("/");
  });

  return null;
};

export default Logout;
