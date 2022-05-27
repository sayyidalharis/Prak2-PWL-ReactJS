import { createUseStyles } from "react-jss"

const styles = createUseStyles({
    main: {
        alignContent: "center",
        textAlign: "center",
    },
    boxComment:{
        fontFamily: "inherit",
        fontSize: "27px",
        fontWeight: "500",
        lineHeight: "1.2",
        color: "inherit",
        marginBlockStart: "2.83em",
        marginBlockEnd: "0.53em",
        marginInlineStart: "0px",
        marginInlineEnd: "0px",
        paddingTop: "15px",
        textAlign: "center",
    },
    pengalaman:{
      fontFamily: "inherit",
      fontSize: "18px",
      fontWeight: "350",
      lineHeight: "1.2",
      color: "inherit",
      marginBlockStart: "0.53em",
      marginBlockEnd: "1.43em",
      marginInlineStart: "0px",
      marginInlineEnd: "0px",
      paddingTop: "15px",
    },
	form: {
		display: "flex",
		flexDirection: "column",
		width: "37%",
		margin: "0 auto",
        placeholderStyle: {
            fontFamily: "inherit",
        },
	},
	input: {
		border: "1px solid #ccc",
		borderRadius: "5px",
		padding: "10px",
		marginBottom: "10px",
		width: "100%",
        fontFamily: "inherit",
        placeholderStyle: {
            fontFamily: "inherit",
        },
	},
	textarea: {
		border: "1px solid #ccc",
		borderRadius: "5px",
		padding: "10px",
		width: "100%",
		height: "200px",
        fontFamily: "inherit",
        placeholderStyle: {
            fontFamily: "inherit",
        },
	},
	button: {
        //make a cute grey button in center
        background: "#ccc",
        border: "none",
        padding: "14px",
        borderRadius: "5px",
        width: "35%",
        fontFamily: "inherit",
        fontSize: "18px",
        fontWeight: "500",
        color: "inherit",
        marginBlockStart: "0.53em",
        marginBlockEnd: "1.43em",
        marginInlineStart: "0px",
        marginInlineEnd: "0px",
        textAlign: "center",
		cursor: "pointer",
        alignContent: "center",
        paddingTop: "15px",
        float:"left",
	},
	commentSection: {
        marginLeft: "15%",
        paddingBottom: "5%",
	},
	comment: {
		display: "flex",
	},
	commentProfile: {
		// width: "10%",
		margin: "1%",
		height: "100%",
		alignItems: "center",
		justifyContent: "center",
	},
	userIcon: {
        marginTop: "-5%",
        paddingRight: "19px",
		alignself: "center",
	},
	commmentBody: {
		// width: "90%",
		height: "100%",
        paddingLeft: "55%",
	},
	textCommentHead: {
		display: "flex",
		alignItems: "center",
	},
	textComment: {
        margin: "0",
		fontSize: "15px",
	},
	textDate: {
		fontSize: "12px",
		marginLeft: "10px",
	},
	deleteIcon: {
		marginLeft: "17px",
		cursor: "pointer",
		"&:hover": {
			color: "#de1010",
		},
	},
})

export default styles