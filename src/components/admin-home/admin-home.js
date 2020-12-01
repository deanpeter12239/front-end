
import { Component } from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import "./css/admin-home.css"
import NewAdminForm from './NewAdminForm'
import NewDoctorForm from './NewDoctorForm'
import NewPatientForm from './NewPatientForm'

class App extends Component {

    getNewAdminData = () => {
        const addAdminForm = document.querySelector('.form1')
        addAdminForm.addEventListener('submit', function (event) {
          event.preventDefault()
          console.log(event.target)
          console.log("Submitting the new admin form")
          var formData = new FormData(addAdminForm)
          console.log(formData)
          axios.post('http://localhost:3330/add-admin', formData)
        })
        }

    getNewPatData = () => {
        const addPatForm = document.querySelector('.form3')
        addPatForm.addEventListener('submit', function(event){
            event.preventDefault()
            console.log(event.target)
            console.log("Submitting the new patient form")
            var formData = new FormData(addPatForm)
            console.log(formData)
            axios.post('http://localhost:3330/add-patient', formData)
        })
    }

    render() {
        return (
            <div class="container">
                <BrowserRouter>
                <div class="header-0">
                    <div>Contacts</div>
                    <div>Adresses</div>
                </div>
                <div class="header-1">
                    <div><h3>MEDICAL APPOINTMENT CONSULTATION </h3></div>
                    <div><h3>Administration Section</h3></div>
                    <div></div>
                </div>
                <div class="header-2">
                    <div>sign-out</div>
                    <div>view profile</div>
                </div>
                <div class="main-0">
                    <h1>Create New</h1>
                        <Link to="/new-admin"><div placeholder="Add new Admin" class="new-user">+ <label>Admin</label></div>
                        </Link>
                        <Link to="/new-doctor"><div class="new-user">+<label>Doctor</label></div></Link>
                        <Link to="/new-patient"><div class="new-user">+<label>Patient</label></div></Link>
                </div>
                <div class="main-2">
                    <Switch>
                        <Route exact path="/new-admin">
                             <NewAdminForm newAdmin={this.getNewAdminData}/>
                        </Route>
                        <Route exact path="/new-doctor">
                            <NewDoctorForm/>
                        </Route>
                        <Route exact path ="/new-patient">
                            <NewPatientForm/>
                        </Route>
                    </Switch>
                </div>
                <div class="footer-1">
                        <div>Helps</div>
                        <div>tools</div>
                </div>
                <div class="footer-2">
                <div>location</div>
                <div>Abouts</div>
                </div>
                </BrowserRouter>
            </div>
           

        )
    }
}

export default App;
