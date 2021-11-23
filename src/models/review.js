const url = `https://chabotpark.herokuapp.com/`;

class ReviewModel {
  static show(data) {
    return fetch(`${url}`, {
      method: 'GET',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => response.json());
  }
}

export default ReviewModel;
