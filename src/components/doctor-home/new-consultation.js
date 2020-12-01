
//import axios from "axios"
import './css/new_consultation.css'

const Consultation= () =>{
    // Find consultation form 
    // const consultationForm = document.querySelector('.consultation-form')
    // // Process the sumbission of the form 
    // consultationForm.addEventListener('submit', function (event) {
    //     // Stopping the normal action of the form so that we can handle things here     
    //     event.preventDefault()
    //     console.log(event.target)
    //     console.log("Submitting the consultation form")
    //     var formData = new FormData(consultationForm)
    //     console.log("form data")
    //     // Posting that data to our API     
    //     axios.post('/add-consultation', formData)
    // })
    return(
        <div>
            <div class="grid-container2">
                <div class="dispaly1">
                    <div class="doc-name">Doctor Name</div>
                    <div class="room">Room</div>
                    <div class="date">Date</div>
                    <div class="doc-in">Dr Peter</div>
                    <div class="room-in">room50</div>
                    <div class="date-in">12/12/12</div>
                </div>
                <div class="display2"></div>
                <div class="textarea">12312</div>
            </div>
            <form className="new-doctor-form">
                <h3>new consultation</h3>
                    <div class="name">Doctors Name</div>
                    <div class="in"><input></input></div>
                    <div class="date">Date</div>
                    <div class="ins"><input></input></div>
                    <div class="room">Room</div>
                    <div class="insur"><input></input></div>
                    <div class="note">Note</div>
                    <div class="inpass"><textarea></textarea></div>
                    <div class="button"><button>Submit</button></div>
            </form>
            </div>
    )
}

export default Consultation;