import React  from 'react';
import styles from "./style"
import { Icon } from "@iconify/react"

const Footer = () => {
	const classes = styles()
	return (
		<footer className={classes.footer}>
		    <p className={classes.p}>© 2022 - Sayyid Haris</p>
			<a href="https://www.instagram.com/mipudip/" target={`_blank`}>
				<Icon
					className={classes.icon}
					icon="cib:instagram"
					width="48"
				/>
			</a>
			<a
				href="https://id.linkedin.com/in/sayyid-haris-b6814b1ab"
				target={`_blank`}
			>
				<Icon
					className={classes.icon}
					icon="akar-icons:linkedin-fill"
					width="48"
				/>
			</a>	
			<a href="https://github.com/sayyidalharis" target={`_blank`}>
				<Icon
					className={classes.icon}
					icon="akar-icons:github-fill"
					width="48"
				/>
			</a>
			<a href="/" >
				<Icon className={classes.icon} icon="simple-icons:gmail" width="48" />
			</a>
			<a href="https://discord.com/invite/holofans" target={`_blank`}>
				<Icon className={classes.icon} icon="bi:discord" width="48" />
			</a>
		</footer>
	)
}

export default Footer