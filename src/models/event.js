const url = 'https://chabotpark.herokuapp.com/api/v1/event';

class EventModel {
  static show(data) {
    return fetch(`${url}`, {
      method: 'GET',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => response.json());
  }

  // static show(id) {
  //   return fetch(`${url}/:id`, {
  //     method: 'GET',
  //     body: JSON.stringify(id),
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   }).then((response) => response.json());
  // }

  static update(id) {
    return fetch(`${url}/:id`, {
      method: 'GET',
      body: JSON.stringify(id),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => response.json());
  }

  static update(id) {
    return fetch(`${url}/:id`, {
      method: 'PUT',
      body: JSON.stringify(id),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => response.json());
  }

  static destroy() {
    return fetch(`${url}`, { method: 'DELETE' }).then((response) =>
      response.json()
    );
  }
}

export default EventModel;
