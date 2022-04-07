const validateTraffic = (username, password) => {
  axios
    .get(
      `http://localhost:1337/api/traffics?filters[username][$eq]=${username}&filters[password][$eq]=${password}&populate=*`
    )
    .then((res) => {
      console.log(res.data.data[0].id)
      localStorage.setItem('traffic_id', res.data.data[0].id)
      window.location.href = '../html/traffic/traffic_dashboard.html'
    })
    .catch((err) => console.log(err))
}

const login = (username, password, user_type) => {
  console.log(user_type)
  if (username === 'admin' && password === 'admin' && user_type === 'admin') {
    localStorage.setItem('username', 'admin')
    localStorage.setItem('password', 'admin')
    window.location.href = '../html/admin/admin_dashboard.html'
  } else {
    if (user_type === 'traffic') {
      validateTraffic(username, password)
    }
  }
}

document.getElementById('login_form').addEventListener('submit', (e) => {
  e.preventDefault()
  const username = document.getElementById('username').value
  const password = document.getElementById('password').value
  const user_type = document.getElementById('user_type').value

  login(username, password, user_type)
})
