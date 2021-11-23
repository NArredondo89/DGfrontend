const url = `https://chabotpark.herokuapp.com/`;

class UserModel {
  static show() {
    return fetch(url, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.uid}`,
      },
    }).then((response) => response.json());
  }
}

export default UserModel;
