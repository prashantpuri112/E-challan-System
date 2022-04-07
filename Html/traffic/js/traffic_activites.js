const createChallan = (
  drivers_name,
  location,
  license_number,
  vehicle_number,
  vehicle_type,
  case1,
  fine
) => {
  const creator = parseInt(localStorage.getItem('traffic_id'))

  const data = {
    drivers_name: drivers_name,
    location: location,
    license_number: license_number,
    vehicle_number: vehicle_number,
    vehicle_type: vehicle_type,
    case: case1,
    fine: fine,
    traffic: {
      id: creator,
    },
  }
  console.log(data)
  axios
    .post('http://localhost:1337/api/challans', { data: data })
    .then((res) => alert('Challan Added Successfully!'))
    .catch('Error! adding challan')
}
document
  .getElementById('create_challan_form')
  .addEventListener('submit', (e) => {
    e.preventDefault()
    const drivers_name = document.getElementById('drivers_name').value
    const location = document.getElementById('location').value
    const license_number = document.getElementById('license_number').value
    const vehicle_number = document.getElementById('vehicle_number').value
    const vehicle_type = document.getElementById('vehicle_type').value
    const case1 = document.getElementById('case').value
    const fine = document.getElementById('fine').value
    console.log(fine)
    createChallan(
      drivers_name,
      location,
      license_number,
      vehicle_number,
      vehicle_type,
      case1,
      fine
    )
  })
