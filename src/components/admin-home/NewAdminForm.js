//import axios from "axios"
  // Find the add new admin form 
  // const addAdminForm = document.querySelector('.new-admin-form')
import "./css/new-admin.css"
  // // Process the sumbission of the form 
  // addAdminForm.addEventListener('submit', function (event) {
  //   // Stopping the normal action of the form so that we can handle things here     
  //   event.preventDefault()
  //   console.log(event.target)
  //   console.log("Submitting the new admin form")
  //   var formData = new FormData(addAdminForm)
  //   console.log("form data")
  //   // Posting that data to our API     
  //   axios.post('/admin/new', formData)
  // })

const NewAdminForm = () =>{
    return(
        <div>
          <form class="form1" >
          <h3>Add new Administrator</h3>
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
export default NewAdminForm;