const url = `http://localhost:4000/api/v1/course`;

class CourseModel {
  static show(data) {
    return fetch(`${url}`, {
      method: 'GET',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => response.json());
  }

  static edit(id) {
    return fetch(`${url}/${id}`, {
      method: 'GET',
      body: JSON.stringify(id),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => response.json());
  }

  static update(data) {
    return fetch(`${url}/6143daa22ce098b8ce669083`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => response.json());
  }

  static delete() {
    return fetch(`${url}`, { method: 'DELETE' }).then((response) =>
      response.json()
    );
  }
}

export default CourseModel;
