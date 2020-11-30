import "./css/newPatientform.css"
//import axios from "axios"
//import {Form, Col, Button} from 'react-bootstrap'
    // Find the add new patient form 
    // const addPatientForm = document.querySelector('.new-patient-form')

    // // Process the sumbission of the form 
    // addPatientForm.addEventListener('submit', function (event) {
    //     // Stopping the normal action of the form so that we can handle things here     
    //     event.preventDefault()
    //     console.log(event.target)
    //     console.log("Submitting the new patient form")
    //     var formData = new FormData(addPatientForm)
    //     console.log("form data")
    //     // Posting that data to our API     
    //     axios.post('/add-patient', formData)
    // })

const NewPatientForm = () =>{
    return(
        <div>
            <form>
                <h3>Add new Patient</h3>
                <div class="grid-container">
                    <div class="name">Given Name</div>
                    <div class="in"><input></input></div>
                    <div class="surname">Surname</div>
                    <div class="ins"><input></input></div>
                    <div class="username">username</div>
                    <div class="insur"><input></input></div>
                    <div class="password">Password</div>
                    <div class="inpass"><input></input></div>
                    <div class="gender">Gender</div>
                    <div class="ingen"><input></input></div>
                    <div class="dob">Date of Birth</div>
                    <div class="indob"><input></input></div>
                    <div class="weight">Weight</div>
                    <div class="inweig"><input></input></div>
                    <div class="height">Height</div>
                    <div class="inheight"><input></input></div>
                    <div class="email">Email</div>
                    <div class="inma"><input></input></div>
                    <div class="phone">Phone</div>
                    <div class="inphone"><input></input></div>
                    <div class="city">City</div>
                    <div class="incity"><input></input></div>
                    <div class="section">Section</div>
                    <div class="insection"><input></input></div>
                    <div class="lot">Lot Number</div>
                    <div class="inlot"><input></input></div>
                    <div class="street">Street</div>
                    <div class="instreet"><input></input></div>
                    <div class="button"><button type="submit" class="subbtn">Submit</button></div>
                </div>
            </form>
        </div>
    )
}

export default NewPatientForm;