const url = `http://localhost:4000/api/v1/layout`;

class LayoutModel {
  // show the layout //////
  static show(data) {
    return fetch(`${url}`, {
      method: 'GET',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => response.json());
  }

  ////edit the layout //////
  static edit(id) {
    return fetch(`${url}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(id),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => response.json());
  }

  ////update the layout //////
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
