//Enter your code here..

document.getElementById('btnGet').addEventListener('click', getData);

function getData() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((data) => {

            var player = '<h2>Lists of Users</h2>';
            data.forEach(function (user) {
                player +=
                    `<div class="player">
                      <div class="strength">Name : ${user.name}</div>
                      <div>Email   : ${user.email}</div>
                      <div>Phone   : ${user.phone}</div>
                      <div>Website : ${user.website}</div>
                      <div>Company : ${user.company.name}</div>
                      <div>City    : ${user.address.city}</div>
                      <div>Zipcode : ${user.address.zipcode}</div>
                     </div>`;
            });

            document.getElementById('message').innerHTML = player;
        })
}