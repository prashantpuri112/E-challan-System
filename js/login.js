//traffic login validation to check if the user exists in the database or not
const validateTraffic = (username, password) => {
  axios //axios is used to make ajax requests
    .get( //get the user from the database
      `http://localhost:1337/api/traffics?filters[username][$eq]=${username}&filters[password][$eq]=${password}&populate=*`
    )
    .then((res) => { //if the user exists
      console.log(res.data.data[0].id) //get the user id
      localStorage.setItem('traffic_id', res.data.data[0].id) //set the user id in the local storage
      window.location.href = '../html/traffic/traffic_dashboard.html' //redirect to the traffic dashboard
    }) //if the user does not exist
    .catch((err) => {
      alert("Wrong credentials") //display the error
    }) //display the error
}

//admin login validation to check if the user exists in the database or not
const login = (username, password, user_type) => { 
  console.log(user_type) //check if the user is admin or traffic
  if (username === 'admin' && password === 'admin' && user_type === 'admin') { //if the user is admin
    localStorage.setItem('username', 'admin') //set the user in the local storage
    localStorage.setItem('password', 'admin') //set the password in the local storage
    window.location.href = '../html/admin/admin_dashboard.html' //redirect to the admin dashboard
  } else { //if the user is not admin
    if (user_type === 'traffic') { //if the user is traffic
      validateTraffic(username, password) //validate the traffic
    }else{
      alert("Wrong credentials") //display the error
    }
  }
}

//login button event listener to check if the user exists in the database or not
document.getElementById('login_form').addEventListener('submit', (e) => { //if the user submits the login form
  e.preventDefault() //prevent the default action
  const username = document.getElementById('username').value //get the username
  const password = document.getElementById('password').value //get the password
  const user_type = document.getElementById('user_type').value //get the user type

  login(username, password, user_type) //call the login function
})
