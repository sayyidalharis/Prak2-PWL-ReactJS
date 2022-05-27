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
					<h4>ITERA Inventary System</h4>
					<img
						className={classes.img}
						src="https://cdn.discordapp.com/attachments/765629568777977877/979524617897140254/unknown.png"
						alt="profile"
					/>
					<h5>2021 - Project Lead / Back-end Programmer</h5>
					<p>Use Framework Flask with MySQL database</p>
					<p>For Object Oriented Programming Course</p>
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
						src="https://cdn.discordapp.com/attachments/765629568777977877/979524617897140254/unknown.png"
						alt="profile"
					/>
					<h5>2021 - Back-end Lead</h5>
					<p>Use Framework Flask with MySQL database</p>
					<p>For Database Course</p>
				</div>
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
					<h4>ITERA Inventary System</h4>
					<img
						className={classes.img}
						src="https://cdn.discordapp.com/attachments/765629568777977877/979524617897140254/unknown.png"
						alt="profile"
					/>
					<h5>2021 - Project Lead / Back-end Programmer</h5>
					<p>Use Framework Flask with MySQL database</p>
					<p>For Object Oriented Programming Course</p>
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
						src="https://cdn.discordapp.com/attachments/765629568777977877/979524617897140254/unknown.png"
						alt="profile"
					/>
					<h5>2021 - Back-end Lead</h5>
					<p>Use Framework Flask with MySQL database</p>
					<p>For Database Course</p>
				</div>
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
					<h4>ITERA Inventary System</h4>
					<img
						className={classes.img}
						src="https://cdn.discordapp.com/attachments/765629568777977877/979524617897140254/unknown.png"
						alt="profile"
					/>
					<h5>2021 - Project Lead / Back-end Programmer</h5>
					<p>Use Framework Flask with MySQL database</p>
					<p>For Object Oriented Programming Course</p>
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
						src="https://cdn.discordapp.com/attachments/765629568777977877/979524617897140254/unknown.png"
						alt="profile"
					/>
					<h5>2021 - Back-end Lead</h5>
					<p>Use Framework Flask with MySQL database</p>
					<p>For Database Course</p>
				</div>
			</div>  
        </div>
	)
}

export default Project