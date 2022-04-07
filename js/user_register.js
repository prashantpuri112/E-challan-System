const register = (username, email, full_name, phone_no, password, gender) => {
  console.log(username, email, full_name, phone_no, password, gender)
  const register_data = {
    data: {
      username: username,
      email: email,
      full_name: full_name,
      password: password,
      phone_no: parseInt(phone_no),
      gender: gender,
    },
  }
  console.log(register_data)
  axios
    .post('http://localhost:1337/api/traffics', register_data)
    .then((res) => {
      console.log(res)
      const cmd = confirm('Registered Successfully. Go back login')
      if (cmd) {
        window.location.href = '../html/login.html'
      }
    })
    .catch((err) => console.log(err))
}
document.getElementById('register_form').addEventListener('submit', (e) => {
  e.preventDefault()
  const username = document.getElementById('username').value
  const full_name = document.getElementById('full_name').value
  const email = document.getElementById('email').value
  const phone_no = document.getElementById('phone_number').value
  const password = document.getElementById('password').value
  const confirm_password = document.getElementById('confirm_password').value
  if (password === confirm_password) {
    let gender
    const gender_inputs = document.querySelectorAll('.gender_radio')
    gender_inputs.forEach((gender_input) => {
      if (gender_input.checked) {
        gender = gender_input.value
      }
    })
    register(username, email, full_name, phone_no, password, gender)
  } else {
    alert("Passwords don't match")
  }
})
