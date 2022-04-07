let btn = document.querySelector('.submit-btn');
let form = document.querySelector('#register');
var registerDateArr = [];

class Register {
    constructor(full_name, user_name, email, phone_no, address, password, conf_password) {
        this.full_name = full_name;
        this.user_name = user_name;
        this.email = email;
        this.phone_no = phone_no;
        this.address = address;
        this.password = password;
        this.conf_password = conf_password;
    }
    //method to format the data to store in json server
    creatingData() {
        let data = {
            full_name: this.full_name,
            user_name: this.user_name,
            email: this.email,
            phone_no: this.phone_no,
            address: this.address,
            password: this.password,
            conf_password: this.conf_password,
        };
        return data;
    }
    //method to store the data in the json server
    register() {
        const data = this.creatingData();
        axios.post('http://localhost:1337/api/signups/', data).then(() => {
            console.log("Register Data has been Successfully Sent...");

        }).catch((e) => {
            console.log("There is an Error:" + e);
        });
    }
}

if (form != null) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        Swal.fire(
            'Success...',
            'Your Message has been Successfully Submitted...',
            'Success...'
        )
        let full_name = document.querySelector('#fullname').value;
        let user_name = document.querySelector('#username').value;
        let email = document.querySelector('#mail').value;
        let phone_no = document.querySelector("#pnumber").value;
        let address = document.querySelector('#add').value;
        let password = document.querySelector("#pass").value;
        let conf_password = document.querySelector("#confpass").value;

        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        let registerData = {
            registerDate: date,
            registerTime: time
        }
        //using local storage to store data and time
        registerDateArr.push(registerData);
        localStorage.setItem("register date", JSON.stringify(registerDateArr));

        let register = new Register(full_name, user_name, email, phone_no, address, password, conf_password);
        register.register();

        e.target.reset();
    });
}

