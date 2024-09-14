import React, { useState, useEffect } from 'react';
import './AboutUs.css';
import Robot from './Assets/Static Icons/Robot.png'; // Example image
import TeamAtVic from './Assets/Static Icons/TeamAtVic.png'; // Example image
// Import all other images here
import Getting from './Assets/Static Icons/Getting.png';
import Dinner from './Assets/Static Icons/Dinner.png';
import CoolShot from './Assets/Static Icons/CoolShot.png';
import Blarhaj from './Assets/Static Icons/Blarhaj.png';
import TeamRaining from './Assets/Static Icons/TeamRaining.png';
import BeeWensieFar from './Assets/Static Icons/BeeWensieFar.png';
import MultiRobots from './Assets/Static Icons/MultipleRobots.png';
import First from './Assets/Static Icons/First.png'



function AboutUs() {
  const images = [Robot, TeamAtVic, Getting, Dinner, CoolShot, Blarhaj, TeamRaining, BeeWensieFar]; // Add all your images here
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Start with the first image
  const [fade, setFade] = useState(true); // State to control fading effect

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false); // Start fade out

      // Wait for the fade-out to complete before changing the image
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length); // Move to the next image, looping back to the first
        setFade(true); // Start fade in
      }, 1000); // Duration of fade-out (matches CSS transition duration)
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer); // Cleanup timer on component unmount
  }, [images.length]); // Dependency on images length to avoid unnecessary reruns

  return (
    <div>
      <section className='title-section'>
        <h1 className='title astitle'>
          <span className='about'>About </span>
          <span className='us'>Us</span>
        </h1>
      </section>
      <h1 className='title mt-5'>Who we are</h1>
      <section id='pictures' className='pictures-section'>
        <figure className='robot-pic'>
            <img
                src={images[currentImageIndex]} // Use the current image index
                alt="Robot"
                className={`transition-image ${fade ? 'fade-in' : 'fade-out'}`}
            />
            </figure>
      </section>
      <section id='whoweare' className='who-section'>
        <div>
            <h1 className='is-size-5'>Hello from the 9449 YellowJackets! We are a second year passionate and dedicated team of aspiring young engineers and innovators, striving to make a mark in robotics. The 9449 YellowJacket is a robotics team stationed in Calgary Alberta. We are a collection of diverse high school students with a collective goal of innovation through robotics. Our mission is to inspire and nurture the next generation of tech leaders by providing hands-on experience in designing, building, and programming robots. Our team is a part of FIRST Robotics Competition (FRC). (Read more <a href='#frc'>below</a>)
            <br></br><br></br>This year, we are gearing up for our Regional competition in Vancouver, BC, where we hope to secure a spot at the World Championship in Houston, Texas. Last year we were able to secure 13th place in qualification matches out of 40 teams, additionally being one of the only two Calgary-based teams to make it into playoffs placing top five, being the highest seat rookie at the regional, and winning the Rookie Inspiration Award. Our journey is one of innovation, teamwork, and perseverance. Our students dedicate countless hours to perfecting their robots, often practicing and innovating before the season starts, sometimes even working late into the night to overcome engineering challenges. This experience not only hones their technical skills but also fosters invaluable life skills such as problem-solving, collaboration, and leadership.
            </h1>
        </div>
      </section>
      <h1 className='title'>What is <span className='F'>First </span><span className='R'>Robotics </span><span className='C'>Competition?</span></h1>
      <section id='frc' className='frc-section'>
        <div className='frc-content'>
            <div className='frc-text'>
                <h1 className='is-size-5'>
                    Ok, now you know more about us, but what is <span className='F'>F</span><span className='R'>R</span><span className='C'>C</span>?
                    <br /><br />
                    <span className='F'>F</span><span className='R'>R</span><span className='C'>C</span> is hosted by FIRST, so let's start there. FIRST Robotics is an international organization that fosters innovation and creativity in young students by engaging them in hands-on STEM (Science, Technology, Engineering, and Mathematics) challenges. Founded in 1989 by inventor Dean Kamen, the program offers various competitions where students design, build, and program robots to accomplish specific tasks. These competitions not only teach technical skills but also emphasize teamwork, problem-solving, and leadership. With a focus on fostering collaboration and learning in a real-world context, FIRST Robotics aims to inspire the next generation of engineers, scientists, and innovators. The benefits of FIRST Robotics for young minds extend far beyond technical knowledge. By participating in these programs, students gain critical thinking abilities, build self-confidence, and develop a passion for STEM fields. Additionally, the experience helps them cultivate essential soft skills, such as communication and time management, which are invaluable in any career path. Many participants also form lasting connections with mentors and peers, opening up educational and professional opportunities in STEM industries.
                </h1>
            </div>
            {/* Add the MultiRobots image to the right of the text */}
            <div className="first-image-container">
                <img src={First} alt="First arena" className="first-image" />
            </div>
        </div>
        
        <div className='frc-content'>
            {/* Add the MultiRobots image to the right of the text */}
            <div className="frc-image-container">
                <img src={MultiRobots} alt="FRC Robots" className="frc-image" />
            </div>
            <div className='frc-text'>
                <h1 className='is-size-5'>
                    The FIRST Robotics Competition (<span className='F'>F</span><span className='R'>R</span><span className='C'>C</span>) is a yearly event in which high school students are given roughly six weeks to prototype, design, test, build, and program an industrial-scale robot to compete against other teams in a sport-style competition. Unlike regular high school sports, the rules change drastically every year and the primary goal is to construct your ideal athlete. The nearest yearly competition event is the Canadian Pacific Regional in Victoria, where dozens of teams from North America, South America, and Asia gather to test their creations. This international event allows us to show off what Calgarian students can do on the world stage. Another large facet of the competition is outreach, wherein teams are encouraged to engage in community events and help get more people involved in STEM activities.
                </h1>
            </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
