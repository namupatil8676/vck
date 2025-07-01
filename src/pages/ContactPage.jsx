import Header from "../components/Header/Header";

const ContactPage = () => {
    return(
        <div>
            <p className="header1">
                <Header/>
            </p>
            <div className="page-container">
            <h1 className="headings">contactAs</h1>
            <p>We'd love to hear from you! Whether you have questions about admissions, programs, or campus life, our team is here to help.</p>
            <h2>General Enquiries</h2>
            <p>
                <strong>Vivekanand college Mian Camples</strong>
                <br></br>
                [Mahatma Gandhi Road, Chembur, Mumbai, Maharashtra 400071]<br></br>India</p>
                <p>Phone: +91 12345 67890
                        Email: info@vivekanandcollege.edu
                    Office Hours: Monday - Friday, 9:00 AM - 5:00 PM IST</p> 
                    <h2>Addmission Office</h2> 
                    <p>For all admission-related queries regarding undergraduate or postgraduate programs:
                        Phone: +91 98765 43210
                        Email: admissions@vivekanandcollege.edu</p>  
                    <h2>Student Support Services</h2>
                    <p>For current student support, academic advising, or general assistance:
                        Phone: +91 87654 32109
                        Email: studentsupport@vivekanandcollege.edu</p>
                        <h2>Find use on the map</h2>
                        <p>
                            <a href="https://maps.google.com/?q=Vivekanand+college" target="_main">view on google map</a>

                        </p>
                        <h2>Send use a massage</h2>
        </div>
        </div>
    )
}

export default ContactPage;