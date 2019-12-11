const carService = {
  createCar: (data) => {
    return fetch(`http://localhost:9999/api/car/create`, {
      body: JSON.stringify(data),
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      credentials: 'include'
    }).then(res => res.json())
  },

  findCars: (data) => {
    return fetch(`http://localhost:9999/api/car/getCars`, {
      body: JSON.stringify(data),
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
    }).then(res => res.json())
  },

  findCar: (id) => {
    return fetch(`http://localhost:9999/api/car/${id}`).then(res => res.json())
  },

  updateCar: (id, data) => {
    return fetch(`http://localhost:9999/api/car/${id}`, {
      body: JSON.stringify(data),
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
    }).then(res => res.json())
  },

  getCarsByUserId: (userId) => {
    return fetch(`http://localhost:9999/api/car/getCarsByUserId/${userId}`)
      .then(res => res.json());
  },

  getSavedCars: (ids) => {
    return fetch(`http://localhost:9999/api/car/getSavedCars/${ids.length > 0 ? ids : 'empty'}`).then(res => res.json())
  },

  delete: (id) => {
    return fetch(`http://localhost:9999/api/car/${id}`, {
      method: 'DELETE'
    }).then(res => res.json())
  }
}

export default carService;