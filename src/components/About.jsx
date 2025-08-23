import '../App.css';
import Picture from './images/profile-img.jpg';


function About() {
    return (
        <div>
            <img class="profile-pic" src={Picture} alt="man in front of a pine tree" />
            <ul>
                <h2 className="bio-title">Jared Aragon</h2>
                <li className="bio-text">Email: jaredaragon7@gmail.com</li>
                <li className="bio-text">Grade my code please! - Github Account </li>
                <li className="bio-text" >Sparta, NJ</li>
            </ul>
            <p className="bio-text">Web Developer</p>
            <a href="https://github.com/j-aragon" id="evil-twin" className="paddington">GitHub Account</a>
        </div>
    );
}

export default About;