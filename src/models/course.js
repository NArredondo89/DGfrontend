const url = `https://chabotpark.herokuapp.com/api/v1/course`;

class CourseModel {
  static show() {
    return fetch(`${url}`).then((response) => response.json());
  }

  static edit(id) {
    return fetch(`${url}/course/${id}`).then((response) => response.json());
  }

  static update(id, data) {
    return fetch(`${url}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => response.json());
  }

  static delete(id) {
    return fetch(`${url}/${id}`, { method: 'DELETE' }).then((response) =>
      response.json()
    );
  }
}

export default CourseModel;
