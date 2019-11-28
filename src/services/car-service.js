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
  }
}

export default carService;