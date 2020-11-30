//import axios from "axios"
  // Find the add new doctor form 
const NewDoctorForm = () => {
  // const addDoctorForm = document.querySelector('.new-doctor-form')

  // // Process the sumbission of the form 
  // addDoctorForm.addEventListener('submit', function (event) {
  //   // Stopping the normal action of the form so that we can handle things here     
  //   event.preventDefault()
  //   console.log(event.target)
  //   console.log("Submitting the new doctor form")
  //   var formData = new FormData(addDoctorForm)
  //   console.log("form data")
  //   // Posting that data to our API     
  //   axios.post('/add-doctor', formData)
    
  // })
    return(
        <div>
           <form className="new-doctor-form">
          <h3>Add new Doctor</h3>
          <div class="grid-container">
            <div class="name">Name</div>
            <div class="in"><input></input></div>
            <div class="surname">Surname</div>
            <div class="ins"><input></input></div>
            <div class="username">username</div>
            <div class="insur"><input></input></div>
            <div class="password">password</div>
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
            <div class="lic">License</div>
            <div class="licin"><input></input></div>
            <div class="special">Specility</div>
            <div class="inspec"><input></input></div>
            <div class="button"><button>Submit</button></div>
            
          </div>
          </form>
       
        </div>
      
    )
      
}

export default NewDoctorForm;