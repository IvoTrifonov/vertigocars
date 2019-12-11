const userService = {
  register: (data) => {
    return fetch(`http://localhost:9999/api/user/register`, {
      body: JSON.stringify(data),
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      }
    }).then(res => res.json())
  },
  
  login: (data) => {
    return fetch(`http://localhost:9999/api/user/login`, {
      body: JSON.stringify(data),
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      credentials: 'include'
    }).then(res => res.json())
  },

  logout: () => {
    return fetch(`http://localhost:9999/api/user/logout`, {
      method: 'POST',
      credentials: 'include'
    }).then(res => res.text())
  },

  getUser: (id) => {
    return fetch(`http://localhost:9999/api/user/${id}`).then(res=> res.json());
  },

  updateUser: (id, data) => {
    return fetch(`http://localhost:9999/api/user/${id}`, {
      body: JSON.stringify(data),
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
    }).then(res => res.json())
  },

  deleteSavedCar: (userId, carId) => {
    return fetch(`http://localhost:9999/api/user/deleteCar/${userId}`, {
      body: JSON.stringify(carId),
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
    }).then(res => res.json())
  }
}

export default userService;