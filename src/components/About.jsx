import '../App.css';
import Picture from './images/profile-img.jpg';


function About() {
    return (
        <div className ='business-card'>
            <img class="profile-pic" src={Picture} alt="picture of a full-stack web developer" />
            <ul>
                <h2 className="bio-title">Jared Aragon</h2>
                <li href="https://github.com/aragonatmos" className="bio-text">Grade my code please! - Github Account </li>
                <li className="bio-text" >Sparta, NJ</li>
            </ul>
            <p className="bio-text">Full-Stack Web Developer</p>
            <p className="bio-text">Email: jaredaragon7@gmail.com</p>
        </div>
    );
}

export default About;