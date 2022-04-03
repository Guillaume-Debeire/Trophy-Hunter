const useTrophy = () => {
  const headers = {
    Autorization: 'Bearer 13ed6e8c-7d61-4417-af94-020d80438075'
  };
  fetch('https://m.np.playstation.net/api/trophy/users/me/trophyTitles', {
    method: 'GET',
    headers: new Headers({
      Authentication: 'Bearer daebe0a3-7633-4f8a-be49-ec1104c42964',
      'Content-Type': 'application/json',
      Origin: ''
    })
  })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default useTrophy;
