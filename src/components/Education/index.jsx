import React from "react";
import styles from "./style";

const Education = () => {
    const classes = styles();

    return (
        ///show success render
        <div className={classes.main}>
            <div className={classes.secondPart}>
                <h2 className={classes.decorated}><span>Almamater</span></h2>  
            </div>
            <div className={classes.thirdPart}>
                <div className={classes.leftPart}>
                    <h3 className={classes.pengalaman}>SD Negeri 41 Palembang</h3>
                    {/* eslint-disable-next-line*/}
                    <a className={classes.lama}>February 2021 - June 2021</a>                        
                    <p className={classes.textbox2}>
                    Assisted and graded around 60 ITERA students in their Algorithm and Programming II courses’ practicum for a whole semester.  
                    </p>    
                </div>
                <div className={classes.rightPart}>
                    <h3 className={classes.pengalaman}>SMP Negeri 1 Palembang</h3>
                    {/* eslint-disable-next-line*/}
                    <a className={classes.lama}>September 2021 - Current</a>
                    <p className={classes.textbox3}>
                    Currently parcitipating as a team member of Google Developer Student Club chapter ITERA
                    </p>    
                </div>
            </div>
            <div className={classes.thirdPart}>
                <div className={classes.leftPart}>
                    <h3 className={classes.pengalaman}>SMA Negeri 3 Palembang</h3>
                    {/* eslint-disable-next-line*/}
                    <a className={classes.lama}>February 2021 - June 2021</a>                        
                    <p className={classes.textbox2}>
                    Assisted and graded around 60 ITERA students in their Algorithm and Programming II courses’ practicum for a whole semester.  
                    </p>    
                </div>
                <div className={classes.rightPart}>
                    <h3 className={classes.pengalaman}>Institut Teknologi Sumatera</h3>
                    {/* eslint-disable-next-line*/}
                    <a className={classes.lama}>September 2021 - Current</a>
                    <p className={classes.textbox3}>
                    Currently parcitipating as a team member of Google Developer Student Club chapter ITERA
                    </p>    
                </div>
            </div>
            <div className={classes.dropBawah}>
                <p>
                    After this I am planning to continue my study overseas!
                    I also have a professional English profeciency level of C1.
                    Other than English and Indonesian as my native language, I am also able to speak Japanese in conversational level and also have limited knowledge of Korean.
                </p>
            </div>
        </div>
    )
}

export default Education