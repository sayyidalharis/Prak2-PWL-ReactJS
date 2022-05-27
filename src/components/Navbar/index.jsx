import React from 'react';
import { Link } from "react-router-dom"
import style from "./style.jsx"

const NavBar = () => {
	const classes = style()

	return (
		<div className={classes.NavBarContainer}>
			<div className={classes.NavBar}>
				<div className={classes.logo}>
					{/* eslint-disable-next-line*/}
					<a className={classes.namalogo}>Sayyid Haris</a>
				</div>
				<div className={classes.link}>
					<ul className={classes.ul}>
						<li className={classes.li}>
							<Link className={classes.p} to="/">
							{/* eslint-disable-next-line*/}
								<a>Home</a>
							</Link>
						</li>
						<li className={classes.li}>
							<Link className={classes.p} to="project">
							{/* eslint-disable-next-line*/}
								<a>Projects</a>
							</Link>
						</li>
						<li className={classes.li}>
							<Link className={classes.p} to="skills">
							{/* eslint-disable-next-line*/}
								<a>Skills</a>
							</Link>
						</li>
						<li className={classes.li}>
							<Link className={classes.p} to="education">
							{/* eslint-disable-next-line*/}
								<a>Education</a>
							</Link>
						</li>
						<li className={classes.li}>
							<Link className={classes.p} to="contacts">
							{/* eslint-disable-next-line*/}
								<a>Contact</a>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default NavBar