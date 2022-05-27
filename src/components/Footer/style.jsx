import { createUseStyles } from "react-jss"
const styles = createUseStyles({
	footer: {
		marginTop: "0",
		width: "100%",
        textAlign: "center",
		alignItems: "center",
		display: "flex",
		justifyContent: "center",
		borderTop: "1px solid #e7e7e7",
		borderBottom: "1px solid #e7e7e7",
		backgroundColor: "#f8f8f8",
		// position: "fixed",
		// bottom: "0",
	},
	icon: {
		paddingLeft: "20px",
		width: "20px",
        //make color grey
        color: "grey",
		"&:hover": {
			backgroundPosition: "right center",
			color: "black",
			textDecoration: "none",
			width: "35px",
			transition: "0.3s",
		},
		flex: "right",
	},
    //make style for p
    p: {
        // textTransform: "uppercase",
		fontSize: "1.1em",
        color: "grey",
        fontFamily: "Poppins",
        fontWeight: 500,
		flex: "left",
    }
})

export default styles