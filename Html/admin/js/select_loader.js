const provinces = [
  '1',
  '2',
  'Bagmati',
  'Gandaki',
  'Lumbini',
  'Karnali',
  'Sudurpaschim',
]
const all_districts = []
for (let l1 of local_bodies) {
  if (!all_districts.includes(l1.District)) {
    all_districts.push(l1.District)
  }
}

const municipalities_according_to_district = {}
for (let district of all_districts) {
  const municipalities = []
  for (let l1 of local_bodies) {
    if (l1.District === district) {
      municipalities.push(l1['Local Body'])
    }
  }
  municipalities_according_to_district[district] = municipalities
}

const select_field = document.getElementById('province_select')
const district_field = document.getElementById('district_select')

const district_with_provinces = []
for (let province of provinces) {
  const districts = []
  for (let l1 of local_bodies) {
    if (province === l1.Province) {
      if (!districts.includes(l1.District)) {
        districts.push(l1.District)
      }
    }
  }
  district_with_provinces.push({
    province: province,
    districts: districts,
  })
}

const provinceSelectRenderer = () => {
  for (let province of provinces) {
    const option = document.createElement('option')
    option.value = province
    option.text = province
    select_field.appendChild(option)
  }
}

const districtSelectRenderer = (province_name) => {
  console.log(province_name)
  district_field.innerHTML = ''
  const defaultOption = document.createElement('option')
  defaultOption.value = ''
  defaultOption.innerText = 'Select District'
  district_field.appendChild(defaultOption)

  const districtsOfThisProvince = district_with_provinces.find(
    (prov) => prov.province === province_name
  ).districts
  for (const districts of districtsOfThisProvince) {
    const option = document.createElement('option')
    option.value = districts
    option.text = districts
    district_field.appendChild(option)
    district_field.appendChild(option)
  }
}

const municipalitySelectRenderer = (district_name) => {
  const municipalities = municipalities_according_to_district[district_name]
  const municipality_field = document.getElementById('municipality_select')
  municipality_field.innerHTML = ''
  const defaultOption = document.createElement('option')
  defaultOption.value = ''
  defaultOption.innerText = 'Select Municipality'
  municipality_field.appendChild(defaultOption)
  for (const municipality of municipalities) {
    const option = document.createElement('option')
    option.value = municipality
    option.text = municipality
    municipality_field.appendChild(option)
  }
}

select_field.addEventListener('change', (e) => {
  const province_name = e.target.value
  districtSelectRenderer(province_name)
})
district_field.addEventListener('change', (e) => {
  const district_name = e.target.value
  municipalitySelectRenderer(district_name)
})
document.onload = provinceSelectRenderer()
