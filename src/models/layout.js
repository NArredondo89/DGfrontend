const url = `https://chabotpark.herokuapp.com/`;

class LayoutModel {
  // show the layout //////
  static show() {
    return fetch(`${url}/`).then((response) => response.json());
  }

  static edit(id) {
    return fetch(`${url}/${id}/edit`).then((response) => response.json());
  }

  static update(id, data) {
    return fetch(`${url}/${id}/edit`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => response.json());
  }
}

export default LayoutModel;
