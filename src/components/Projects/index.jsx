import React from "react"
import styles from "./style"
// import { Icon } from "@iconify/react"

export const Project = () => {
	const classes = styles()
    
	return (
        <div className={classes.main}>
            <div className={classes.secondPart}>
                <h2 className={classes.decorated}><span>Past Works</span></h2>  
            </div>
		    <div className={classes.projects}>
				<div
					className={classes.project}
					onClick={() =>
						window.open(
							"github.com/meepshere/Tubes-PBO"
						)
					}
				>
					<h4>HealthyMed</h4>
					<img
						className={classes.img}
						src="https://cdn.discordapp.com/attachments/765629568777977877/979753854801424474/unknown.png"
						alt="profile"
					/>
					<h5>2022 - Back-end Programmer</h5>
					<p> Laravel with SQLite Database</p>
					<p>Project of Web Programming Course</p>
				</div>
				<div
					className={classes.project}
					onClick={() =>
						window.open(
							"https://github.com/Team7x/Database-Term-Project"
						)
					}
				>
					<h4>GIVING : Unused Items Marketplace</h4>
					<img
						className={classes.img}
						src="https://cdn.discordapp.com/attachments/765629568777977877/979758880517156924/WhatsApp_Image_2022-05-27_at_9.49.19_PM.jpeg"
						alt="profile"
					/>
					<h5>2021 - UI/UX Designer</h5>
					<p>Designing a high-fidelity prototype using Figma</p>
					<p>Final Project of Human Computer Interaction Course</p>
				</div>
			</div>
		    <div className={classes.projects}>
				<div
					className={classes.project}
					onClick={() =>
						window.open(
							"https://github.com/meepshere/Tubes-PBO"
						)
					}
				>
					<h4>Darma Bangsa News Mobile App</h4>
					<img
						className={classes.img}
						src="https://cdn.discordapp.com/attachments/765629568777977877/979761151246221362/project-5.png"
						alt="profile"
					/>
					<h5>2022 - Fullstack Developer </h5>
					<p>React Native with Firestore Database</p>
					<p>Final Project of Information Technology Project Course</p>
				</div>
				<div
					className={classes.project}
					onClick={() =>
						window.open(
							"https://github.com/Team7x/Database-Term-Project"
						)
					}
				>
					<h4>Simple Lapor System</h4>
					<img
						className={classes.img}
						src="https://raw.githubusercontent.com/meepshere/IF3028-TUBESPEMWEB-RA-RC-2021/main/Screenshot/Screenshot%202021-12-25%20at%2023.55.31.png"
						alt="profile"
					/>
					<h5>2021 - Devs Lead</h5>
					<p>Laravel with SQLite Database</p>
					<p>Project of Web Programming Course</p>
				</div>
			</div>
		    <div className={classes.projects}>
				<div
					className={classes.project}
					onClick={() =>
						window.open(
							"https://github.com/meepshere/Tubes-PBO"
						)
					}
				>
					<h4>ITERA Inventary System</h4>
					<img
						className={classes.img}
						src="https://cdn.discordapp.com/attachments/765629568777977877/979524617897140254/unknown.png"
						alt="profile"
					/>
					<h5>2021 - Project Lead / Back-end Programmer </h5>
					<p>Flask with SQLite Database</p>
					<p>Final Project of Object Oriented Programming Course</p>
				</div>
				<div
					className={classes.project}
					onClick={() =>
						window.open(
							"https://github.com/Team7x/Database-Term-Project"
						)
					}
				>
					<h4>Item Delivery System</h4>
					<img
						className={classes.img}
						src="https://cdn.discordapp.com/attachments/765629568777977877/979524468995141652/unknown.png"
						alt="profile"
					/>
					<h5>2021 - Project Lead / Back-end Programmer </h5>
					<p>Flask with MySQL Database</p>
					<p>Final Project of Databases Course</p>
				</div>
			</div>
        </div>
	)
}

export default Project