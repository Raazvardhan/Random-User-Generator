

function fetchuser(){
  fetch('https://randomuser.me/api')
.then((res)=> res.json())
.then((data)=>{
  displayuser(data.results[0]);
});
}

function displayuser(user){
  const userDisplay = document.querySelector('#user');
  if(user.gender === 'female'){
    document.body.style.backgroundImage = 'linear-gradient(to bottom, #ef07c4, #c9d6df)';
  } else {
    document.body.style.backgroundImage = 'linear-gradient(to bottom, #007bff, #c9d6df)';
  }
  userDisplay.innerHTML =`  <div class="profile">
  <img src="${user.picture.large}" alt="Profile Picture">
  <h1> ${user.name.first}</h1>
  <p>${user.name.last}</p>
</div>
<div class="info">
  <div class="info-item">
    <h2>Location</h2>
    <p>${user.location.country}</p>
  </div>
  
  <div class="info-item">
    <h2>Phone</h2>
    <p>${user.phone}</p>
  </div>
  <div class="info-item">
    <h2>Age</h2>
    <p>${user.dob.age}</p>
  </div>
  <div class="info-item">
    <h2>Email</h2>
    <p>${user.email}</p>
  </div>
  <div class="info-item">
    <h2>Postcode</h2>
    <p>${user.location.postcode}</p>
  </div>`;
}

document.querySelector('#next-button').addEventListener('click',fetchuser);
fetchuser();
