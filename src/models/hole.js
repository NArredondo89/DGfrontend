const url = `https://chabotpark.herokuapp.com/`;

class HoleModel {
  static all() {
    return fetch(`${url}`).then((response) => response.json());
  }

  static show(id) {
    return fetch(`${url}/layout/${id}`).then((response) => response.json());
  }

  static edit(id, data) {
    return fetch(`${url}/${id}`, {
      method: 'GET',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => response.json());
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
}

export default HoleModel;
