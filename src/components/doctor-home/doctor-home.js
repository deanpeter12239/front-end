
import { Component } from 'react'
import { BrowserRouter, Route, } from 'react-router-dom'
import './css/dochome.css'
import Consultation from './new-consultation.js'
import ViewAppoint from "./view-appoint"
class App extends Component {
    render() {
        return (
            <div>
                <div class="container">
                    <BrowserRouter>
                    <div class="header-2-0">
                        <div>Terms of Use</div>
                        <div>Stateboard</div>
                        <div>User Guide</div>
                        <div>Logout</div>
                    </div>

                    <div class="header-2-2">
                        <h1>MEDICAL APPOINTMENT CONSULTATION</h1>
                        <h3>Doctors Section</h3>
                    </div>
                    <div class="main-0">
                            <div class="grid-container7">
                                <div class="photo">Photo</div>
                                <div class="names">Name</div>
                                <div class="address">
                                    <div class="Phone">Phone
                                </div>
                                    <div class="email">Email</div>
                                    <div class="phone-in">67572239170</div>
                                    <div class="email-in">jkdepeter@gmail.com</div>
                                </div>
                            </div>
                    </div>

                        <div class="main-2-0">
                            <Route >
                                <Consultation/>
                            </Route>
                        </div>

                        <div class="main-2-1">
                            <Route >
                                <ViewAppoint/>
                            </Route>
                        </div>

                        <div class="footer-2">
                            <h5>Contacts</h5>
                            <h6>Phone : 6750000000</h6>
                            <h6>Address</h6>
                            <h4>P O BOX 000 Nationl Capital District</h4>
                        </div>
                        </BrowserRouter>
                    </div>
                </div>
        )
    }
}
export default App;
