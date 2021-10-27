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

  static edit(data) {
    return fetch(`${url}/edit`, {
      method: 'GET',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => response.json());
  }

  static update(data) {
    return fetch(`${url}/edit`, {
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
