import React, { useState, useEffect } from 'react';
import './Home.css';
import Robot from './Assets/HomePagePictures/Robot.png'; // Example image
import TeamAtVic from './Assets/HomePagePictures/TeamAtVic.png'; // Example image
// Import all other images here
import Getting from './Assets/HomePagePictures/Getting.png';
import Dinner from './Assets/HomePagePictures/Dinner.png';
import CoolShot from './Assets/HomePagePictures/CoolShot.png';
import Blarhaj from './Assets/HomePagePictures/Blarhaj.png';
import TeamRaining from './Assets/HomePagePictures/TeamRaining.png';
import BeeWensieFar from './Assets/HomePagePictures/BeeWensieFar.png';




function Home() {
  const images = [Robot, TeamAtVic, Getting, Dinner, CoolShot, Blarhaj, TeamRaining, BeeWensieFar]; // Add all your images here
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Start with the first image
  const [fade, setFade] = useState(true); // State to control fading effect
  // Array of member data
    // const members = [
    //   { image: Robot, name: "John Doe", description: "Lead Engineer and team coordinator." },
    //   { image: TeamAtVic, name: "Jane Smith", description: "Mechanical Engineer and robotics specialist." },
    //   { image: Getting, name: "Michael Brown", description: "Software Engineer and strategist." },
    //   { image: Dinner, name: "Sarah Johnson", description: "Electrical Engineer and robot designer." },
    //   { image: CoolShot, name: "David Wilson", description: "Team leader and marketing expert." },
    //   { image: Blarhaj, name: "Emma Davis", description: "Logistics and team operations manager." },
    //   { image: TeamRaining, name: "Liam Anderson", description: "Programmer and data analyst." },
    //   { image: BeeWensieFar, name: "Olivia Martinez", description: "Mentor and project advisor." },
    // ];

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
      <section className='home-section'>
        <h1 className='title teamName'>
          <span className='teamNo'>9449 </span>
          <span className='teamY'>Yellow</span>
          <span className='teamJ'>jackets</span>
        </h1>
      </section>
      <h1 className='title mt-5'>Who we are</h1>
      <section id='whoweare' className='who-section'>
        <figure className='robot-pic'>
          <img
            src={images[currentImageIndex]} // Use the current image index
            alt="Robot"
            className={`transition-image ${fade ? 'fade-in' : 'fade-out'}`}
          />
        </figure>
        <div>
            <h1 className='is-size-5'>Hey there! We are the 9449 Yellowjackets, a community FRC Team dedicated to bringing robotics to the heart of future engineers. Based in Calgary, we work every year to bring high school students into First Robotics Competition and teach all the essential robotics knoledge to succeed in the competition and to gain more knowledge before going into post-secondairy. Last season, as our first, we won the 2023-2024 Crescendo Rookie Inspires Award in the Canadian Pacific Comp, and hope to bring more awards to the tabe this year.<br></br> Read more here: <a href='/aboutus'>About us</a></h1>
        </div>
      </section>
      <h1 className='title'>Sign up</h1>
      <section id='signup' className='signup'>
        <h1 className='is-size-5'>If you want to join us, please fill out <a href='https://forms.gle/bwP5wjmxCFyg7ALx6'>this</a> form!</h1>
      </section>
      <h1 className='title'>Open houses</h1>
      <section id='openhouses' className='openhouse'>
        <h1 className='is-size-5'> We host yearly open houses for the public! If you would like to come and take a look into what FRC is and explore the possibilities of STEM, take a look at our <a href='openhouse'>Open houses</a> page!</h1>
      </section>
      {/* <h1 className='title'>The Members</h1>
      <section id='members' className='members'>
        {members.map((member, index) => (
          <div className='member-card' key={index}>
            <img src={member.image} alt={member.name} className='member-image' />
            <div className='member-info'>
              <h2 className='member-name'>{member.name}</h2>
              <p className='member-description'>{member.description}</p>
            </div>
          </div>
        ))}
      </section> */}
    </div>
  );
}

export default Home;
