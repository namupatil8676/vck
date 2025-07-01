import Header from "../components/Header/Header";

const HomePage = () => {
    return(
       <div>
        <p className="header1">
            <a href="./home">Vivekanand college</a>
        
       <Header/></p>
       <div className="page-container">
        <div id="main">
       
       <h1>Welcome to Vivekanand College</h1>
       <button className="btn" id="apply">
        <a href="./Admission">Apply Now!</a>
       </button>
       </div>
       <p><b>Vivekanand College</b> is a premier educational institution dedicated to fostering academic excellence, innovation, and holistic development. Established in 1980, we have proudly served generations of students, empowering them to achieve their full potential.
            At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks. Our state-of-the-art facilities, experienced faculty, and diverse student community create a unique ecosystem where curiosity thrives and future leaders are shaped.</p>
            <h2>why choose Vivekanad college</h2>

            <li>Legacy of Excellence: Decades of commitment to quality education.</li>
            <li>Experienced Faculty: Learn from renowned experts and passionate educators.</li>
            <li>Modern Facilities: Well-equipped labs, expansive library, and comfortable campus.</li>
             <li>Holistic Development: Focus on co-curricular activities, sports, and community service.</li>
             <li>Strong Placements: Excellent career opportunities with leading companies.</li>
             <h2>Campus life facilities</h2>
             <img src="https://vck-ojt.vercel.app/assets/students-studying-DbLGuwF_.jpeg" height={250} width={500}></img>
             <img src="https://vck-ojt.vercel.app/assets/campus-life-Crkero7B.jpg" height={250} width={500}></img>
             <p>Explore our vibrant campus and state-of-the-art facilities designed to enhance your learning experience and personal growth.</p>
             <footer style={{textAlign:'center'}}>
                Ready to explore our courses?
             </footer>
             </div>
        </div>
    )
}

export default HomePage;