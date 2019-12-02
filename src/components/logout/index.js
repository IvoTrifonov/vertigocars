import userService from '../../services/user-service';

const Logout = ({ changeLogin, history }) => {
  userService.logout()
    .then(() => {
      changeLogin(false);
      localStorage.removeItem('username');
      localStorage.removeItem('userId');
      history.push('/');
    })

    return null;
}

export default Logout;