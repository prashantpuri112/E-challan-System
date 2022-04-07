const articleDataRenderer = (echallans) => {
    console.log(echallans)
    const container = document.getElementById('data_container')
    echallans.forEach((echallans) => {
        container.innerHTML += `
        <h1>${echallans.attributes.title}</h1>
        <p>${echallans.attributes.content}</p>
        `
    })
}

// axios
//   .get('http://localhost:1337/api/echallans')
//   .then((res) => articleDataRenderer(res.data.data))
//   .catch((err) => console.log(err))
const username_form = document.getElementById('username_form')
username_form.addEventListener('submit', (e) => {
    e.preventDefault()
    addUser()
})
const addUser = () => {
    const username = document.getElementById('Name').value
    console.log(username)
    axios
        .put('http://localhost:1337/api/echallans', {
            data: {
                firstname: Name,
            },
        })
        .then((res) => {
            console.log('edited successfully')
        })
        .catch((err) => console.log(err))
}
