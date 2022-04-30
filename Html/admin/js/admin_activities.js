const registerTraffic = (
  fullname,
  username,
  phone_number,
  post,
  current_address,
  email,
  password,
  province,
  district,
  local_body,
  ward_no
) => {
  const data = {
    fullname: fullname,
    username: username,
    phone_number: phone_number,
    post: post,
    current_address: current_address,
    email: email,
    password: password,
    province: province,
    district: district,
    local_body: local_body,
    ward_no: ward_no,
  }
  console.log(data)
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
  const post = document.getElementById('post').value
  const current_address = document.getElementById('address').value
  const email = document.getElementById('email').value
  const password = document.getElementById('password').value
  const province = document.getElementById('province_select').value
  const district = document.getElementById('district_select').value
  const local_body = document.getElementById('municipality_select').value
  const ward_no = document.getElementById('ward_no').value
  registerTraffic(
    fullname,
    username,
    phone_number,
    post,
    current_address,
    email,
    password,
    province,
    district,
    local_body,
    ward_no
  )
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
