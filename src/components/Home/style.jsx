//make jss class
import { createUseStyles } from "react-jss"

const styles = createUseStyles({
    main: {
      fontFamily: "Poppins",
      // marginTop: "50px",
    },
    firstPart: {
      display: "flex",
      justifyContent: "center",
      backgroundColor: "#eee",
      alignContent: "flex-start",
    },
    secondPart:{
    },
    thirdPart: {
      display: "flex",
      justifyContent: "center",
      alignContent: "flex-start",
      marginBottom: "27px",
    },
    bgcolor:{   
      textAlign: "center",
      color: "inherit",
      boxSizing: "border-box",
    },
    img:{
      width: "300px",
      height: "300px",
      maxWidth: "100%",
      maxHeight: "100%",
      borderRadius: "50%",
      verticalAlign: "webkit-baseline-middle",
      border: "10px solid #eee",
      paddingTop: "30px",
      paddingBottom: "30px",
      marginRight: "73px",
    },
    p:{
        fontFamily: "Poppins",
    },
    namaBig:{
      fontFamily: 'Satisfy, cursive',
      fontSize: "6em",
      padding: "10px",
      paddingTop: "30px",
      color: "inherit",
      marginTop: "20px",
      marginBottom: "10px",
      fontWeight: "500",
      textAlign: "center",
      lineHeight: "1.2",
      display: "block",
    },
    motto:{
      fontFamily: "'Lexend Giga', sans-serif",
      fontSize: "1.7em",
      padding: "10px",
      marginBottom: "15px",
      fontWeight: "173",
      margin: "0 0 10px",
      boxSizing: "border-box",
      display: "block",
      marginBlockStart: "1em",
      marginBlockEnd: "1em",
      marginInlineStart: "0px",
      marginInlineEnd: "0px",
    },
    decorated:{
      fontFamily: "inherit",
      fontSize: "27px",
      fontWeight: "500",
      lineHeight: "1.2",
      color: "inherit",
      marginBlockStart: "0.83em",
      marginBlockEnd: "0.83em",
      marginInlineStart: "0px",
      marginInlineEnd: "0px",
      paddingTop: "15px",
    },
    pengalaman:{
      fontFamily: "inherit",
      fontSize: "18px",
      fontWeight: "500",
      lineHeight: "1.2",
      color: "inherit",
      marginBlockStart: "0.83em",
      marginBlockEnd: "0.43em",
      marginInlineStart: "0px",
      marginInlineEnd: "0px",
      paddingTop: "15px",
    },
    lama:{
      fontWeight:'130',
      fontStyle: "italic",
    },
    bold:{
      //make text bold
      fontWeight: "500",
    },
    textbox:{
      marginLeft: "17%",
      lineHeight: "2",
      marginRight: "17%",
      fontWeight: "399",
      // fontSize: "14px",
    },
    textbox2:{
      // marginLeft: "7%",
      // marginRight: "3%",
      fontWeight: "373",
      // fontSize: "14px",
    },
    textbox3:{
      // marginLeft: "3%",
      // marginRight: "7%",
      fontWeight: "373",
      // fontSize: "14px",
    },
    leftPart:{
      float: "left",
      width: "50%",
      paddingLeft: "50px",
      paddingRight: "50px",
      marginLeft: "17%",
      marginRight: "3%",
    },
    rightPart:{
      float: "right",
      width: "50%",
      paddingLeft: "50px",
      paddingRight: "50px",
      marginLeft: "3%",
      marginRight: "17%",
    },
    [`@media (min-width: 768px)`]: {
      bgcolor: {
        paddingTop: "50px",
        paddingBottom: "25px",
      },
      leftPart:{
        float: "left",
        width: "50%",
        paddingLeft: "20px",
        paddingRight: "20px",
      },
      rightPart:{
        float: "right",
        width: "50%",
        paddingLeft: "20px",
        paddingRight: "20px",
      },
      namaBig:{
        fontSize: "6.9em",
        marginTop: "80px",
      }
    },
})

export default styles