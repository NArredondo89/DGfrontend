const url = `http://localhost:4000/api/v1/layout`;

class LayoutModel {
  // show the layout //////
  static show() {
    return fetch(`${url}/`).then((response) => response.json());
  }

  static edit(id) {
    return fetch(`${url}/${id}`).then((response) => response.json());
  }

  static update(data, id) {
    return fetch(`${url}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => response.json());
  }
}

export default LayoutModel;
