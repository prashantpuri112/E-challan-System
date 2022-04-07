const registerTraffic = (
  fullname,
  username,
  phone_number,
  address,
  email,
  password
) => {
  const data = {
    fullname: fullname,
    username: username,
    phone_number: phone_number,
    address: address,
    email: email,
    password: password,
  }
  axios
    .post('http://localhost:1337/api/traffics', { data: data })
    .then((res) => alert('Traffic Added Successfully!'))
    .catch('Error! adding traffic')
}
document.getElementById('add_traffic_form').addEventListener('submit', (e) => {
  e.preventDefault()
  const fullname = document.getElementById('fullname').value
  const username = document.getElementById('username').value
  const phone_number = document.getElementById('phone_number').value
  const address = document.getElementById('address').value
  const email = document.getElementById('email').value
  const password = document.getElementById('password').value
  console.log(password)
  registerTraffic(fullname, username, phone_number, address, email, password)
})

const validateTraffic = (email, password) => {
  axios
    .get(
      `http://localhost:1337/api/traffics?filter[email][eq]=${email}?filter[email][eq]=${password}`
    )
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
}
var passwordToggle = false
const togglePassword = () => {
  if (!passwordToggle) {
    document.getElementById('password').setAttribute('type', 'text')
    passwordToggle = true
  } else {
    document.getElementById('password').setAttribute('type', 'password')
    passwordToggle = false
  }
}
