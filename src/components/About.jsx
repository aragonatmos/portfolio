import '../App.css';
import Picture from './images/profile-img.jpg';


function About() {
    return (
        <div>
            <img class="profile-pic" src={Picture} alt="man in front of a pine tree" />
            <ul>
                <h2 className="bio-title">Jared Aragon</h2>
                <li className="bio-text">Email: jaredaragon7@gmail.com</li>
                <li href="https://github.com/aragonatmos" className="bio-text">Grade my code please! - Github Account </li>
                <li className="bio-text" >Sparta, NJ</li>
            </ul>
            <p className="bio-text">Full-Stack Web Developer</p>
        </div>
    );
}

export default About;