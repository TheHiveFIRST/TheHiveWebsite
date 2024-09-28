import React from 'react';
import './OpenHouse.css';
//Open house pics
import DateSep28 from './Assets/OpenHousePictures/Sept28.png';

function OpenHouse() {

  return (
    <div>
      <section className='title-section'>
        <h1 className='title ohtitle'>
          <span className='open'>Open </span>
          <span className='house'>House</span>
        </h1>
      </section>
      <h1 className={localStorage.getItem('theme') === 'dark' ? 'title mt-6' : 'title mt-6 has-text-grey-darker'}>What?</h1>
      <section id='what' className='what-section'>
        <div>
            <h1 className='is-size-5'>
                Every year, at around the end of September (pre-season), the Yellowjackets host an open house! This is a great opportunity for you to drop by an see what it is like to be apart of an FRC team, and get involved! Weather you are looking to become a First mentor, or want your child to be apart of First you should take this opportunity to explore the endless possibilities of robotics! You will have the opportunity to meet mentors and students, some with years of experience. We encourage you to ask as many question as you like to fully understand FRC and how it works, as well as asking about the overall structure of our team and how we operate. If this sound appealing to you, head on over to the next open house available! <br></br> Check below for details
            </h1>
        </div>
      </section>
      <section id='video-section' className='video-section'>
      <div className='video-container'>
        <iframe 
          width="100%" 
          src="https://youtu.be/m2hxtPRhQyk?si=lmse36m8QpNWHIX7" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen>
        </iframe>
      </div>
      </section>
      <h1 className={localStorage.getItem('theme') === 'dark' ? 'title mt-6' : 'title has-text-grey-darker mt-6'}>Next open houses:</h1>
      <section id='dates' className='dates-section'>
        <span className='subtitle'>Dates:</span>
        <br /><br />
        <div className='card' style={{ display: 'flex', flexDirection: 'row', marginBottom: '10px' }}>
            <div className="image is-100x100 date-picture">
                <figure className="image mt-3 mr-3 ml-3 mb-3">
                    <img
                    className='is-rounded '
                    style={{ width: '100px', height: '100px' }}
                    src={DateSep28}
                    alt="Open house date"
                    />
                </figure>
            </div>
            <div className="card-content pl-0 ml-4">
            <p className={localStorage.getItem('theme') === 'dark' ? "subtitle is-size-4 has-text-info-light" : "subtitle is-size-4 has-text-info"} style={{ marginTop: '0px' }}>
                <p>September 28th, 2024</p>
            </p>
            <p className='is-size-5'>Location: 18th Scouts Canada Hall, 1919 19th St SW</p>
            </div>
            <hr className="is-divider" />
        </div>
      </section>
    </div>
  );
}

export default OpenHouse;
