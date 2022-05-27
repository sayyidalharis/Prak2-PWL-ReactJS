import { createUseStyles } from "react-jss"
const styles = createUseStyles({
	NavBarContainer: {
		backgroundColor: "#f8f8f8",
		borderColor: "#e7e7e7",
		borderWidth: "0 0 1px",
		position: "fixed",
		right: "0",
		left: "0",
		top: "0",
		zIndex: "1030",
		minHeight: "50px",
		marginBottom: "20px",
		border: "1px solid transparent",
		borderBottom: "1px solid #e7e7e7",
		display: "block",
	},
	NavBar: {
		paddingRight: "15px",
		paddingLeft: "15px",
		marginRight: "auto",
		marginLeft: "auto",
	},
	logo: {
	},
	namalogo:{
		fontFamily: "Satisfy, cursive",
		fontSize: "1.5em",
		lineHeight: "20px",
		fontWeight: "100",
		color: "#777",
		float: "left",
		padding: "15px 15px",
	},
	link: {
		borderColor: "#e7e7e7",
		maxHeight: "340px",
		overflowX: "visible",
		boxSizing: "border-box",
		// borderCollapse: "collapse",
	},
	li: {
		// float: "left",
		position: "relative",
		display: "block",
	},
	ul:{
		float: "right",
		margin: "0",
		boxSizing: "border-box",
	},
	p:{
		position: "relative",
		display: "block",
		padding: "10px 15px",
		fontFamily: "Poppins",
		lineHeight: "20px",
		color: "#777",
		textDecoration: "none",
	},
	[`@media (min-width: 768px)`]: {
		NavBar: {
			width: "750px",
			minHeight: "50px",
		},
		NavBarContainer:{
			borderRadius: "0",
		},
		logo: {
			float: "left",
			marginLeft: "0",
			marginRight: "0",
		},
		namalogo:{
			marginLeft: "-250px",
		},
		li:{
			float: "left",
		},
		p:{
			paddingTop: "15px",
			paddingBottom: "15px",
		},
		link:{
			marginRight: "0",
			marginLeft: "0",
			paddingLeft: "0",
			paddingRight: "0",
			display: "block!important",
			height: "auto!important",
			paddingBottom: "0",
			overflow: "visible!important",
			width: "auto",
			boxShadow: "none",
			borderTop: "0",
			minHeight: "50px",
			WebkitBoxShadow: "none",
		},
		ul:{
			marginRight: "-230px",
		}
	},
})
export default styles