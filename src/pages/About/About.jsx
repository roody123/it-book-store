import { Accordion } from '../Accordion/Accordion';
import Swal from 'sweetalert2'

const About = () => {

    const showMyContact = () => {
        Swal.fire({
            icon: 'success',
            title: "Ready to collaborate?",
            text: "My Telegram: @Roody7711",
            confirmButtonColor: '#007bff'
        });
    }

    return (
        <div className="about-container">
            <div className="about-us">

                <h1 className="title">IT Knowledge Hub</h1>
                <img src="https://plus.unsplash.com/premium_photo-1677567996070-68fa4181775a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGlicmFyeXxlbnwwfHwwfHx8MA%3D%3D"
                className='img' alt="library" />
                <p className="description">A modern tool for finding up-to-date literature on programming.</p>

            </div>

            <div>
                <h2>Frequently asked questions</h2>
                <Accordion/>
            </div>

            <div className='btn-container'>
                <button className="btn" onClick={showMyContact}>Contact me</button>
            </div>
        </div>
    );
};

export default About;