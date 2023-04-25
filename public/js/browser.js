const trigger = document.querySelector('#trigger');

trigger.addEventListener('click', () => {
  fetch('/test/button', {
    method: 'POST'
    // headers: {
    //   'Content-Type': 'application/json'
    // }
  })
    .then(res => res.text())
    .then((server_res_data) => {
      console.log(server_res_data);
    })
});