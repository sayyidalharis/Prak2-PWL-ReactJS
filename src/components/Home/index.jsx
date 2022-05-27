//make a home page

import React from 'react';
// import { Link } from "react-router-dom"
import styles from "./style"


const Home = () => {
	const classes = styles()

	return (
        <div className={classes.bgcolor}>
            <div className={classes.main}>
                <div className={classes.firstPart}>
                    <div >
                        <img
                            className={classes.img}
                            //get random picture from internet
                            src="https://cdn.discordapp.com/attachments/765629568777977877/979484804577898566/20200109215003_IMG_0740.jpg"
                            alt="profile"
                        />
                    </div>
                    <div >
                        <h1 className={classes.namaBig}>Sayyid Haris</h1>

                        <p className={classes.motto}>Part time developer, Full time weeb</p>
                    </div>
                </div>
                <div className={classes.secondPart}>
                    <h2 className={classes.decorated}><span>About Me</span></h2>
                    <p className={classes.textbox}>
                        My fullname is  <b className={classes.bold}>Sayyid Muhammad Umar Al Haris</b>. A Palembang borned Javanese who ironically does not speak Javanese.
                        Currently majoring in <b className={classes.bold}>Informatics Engineering</b> at Sumatra Institute of Technology (<b className={classes.bold}>ITERA</b>) in Lampung, Indonesia.
                        I am a third-year university student who loves spending free time looking at new techs and listening to J-Pops.
                        I speak couple of languages other than my native language. I love writing codes and am excited to learn more tech and stuff. Looking to have an internship somewhere where I could learn, produce and contribute to the team.
                    </p>
                    <h2 className={classes.decorated}><span>Experience</span></h2>
                    <p className={classes.textbox}>
                        I might not have much experiences but I can assure you that I am a willing learner and would love to try new things! 
                    </p>    
                </div>
                <div className={classes.thirdPart}>
                    <div className={classes.leftPart}>
                        <h3 className={classes.pengalaman}>Laboratory Assistant</h3>
                        {/* eslint-disable-next-line*/}
                        <a className={classes.lama}>February 2021 - June 2021</a>                        
                        <p className={classes.textbox2}>
                        Assisted and graded around 60 ITERA students in their Algorithm and Programming II courses’ practicum for a whole semester.  
                        </p>    
                    </div>
                    <div className={classes.rightPart}>
                        <h3 className={classes.pengalaman}>GDSC Team Member</h3>
                        {/* eslint-disable-next-line*/}
                        <a className={classes.lama}>September 2021 - Current</a>
                        <p className={classes.textbox3}>
                        Currently parcitipating as a team member of Google Developer Student Club chapter ITERA
                        </p>    
                    </div>
                </div>
            </div>
        </div>
	)
}

export default Home