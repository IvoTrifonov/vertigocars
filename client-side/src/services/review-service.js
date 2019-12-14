const reviewService = {
  createReview: (data) => {
    return fetch(`http://localhost:9999/api/review/create`, {
      body: JSON.stringify(data),
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      credentials: 'include'
    }).then(res => res.json())
  },

  getAllReviews: () => {
    return fetch('http://localhost:9999/api/review/getAll')
      .then(res => res.json())
  },

  getReviewsByUserId: (userId) => {
    return fetch(`http://localhost:9999/api/review/${userId}`)
      .then(res => res.json())
  },

  getReview: (id) => {
    return fetch(`http://localhost:9999/api/review/getOne/${id}`)
      .then(res => res.json())
  },

  update: (id, data) => {
    return fetch(`http://localhost:9999/api/review/${id}`, {
      body: JSON.stringify(data),
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
    }).then(res => res.json())
  },

  delete: (id) => {
    return fetch(`http://localhost:9999/api/review/${id}`, {
      method: 'DELETE'
    }).then(res => res.json())
  },
}

export default reviewService;