import { createUseStyles } from "react-jss"

const styles = createUseStyles({
    main: {
      fontFamily: "Poppins",
      // marginTop: "50px",
    },
    secondPart:{
      alignContent: "center",
      alignItems: "center",
      textAlign: "center",
    },
    thirdPart: {
      display: "flex",
      justifyContent: "center",
      alignContent: "flex-start",
      marginBottom: "27px",
    },
    decorated:{
      fontFamily: "inherit",
      fontSize: "27px",
      fontWeight: "500",
      lineHeight: "1.2",
      color: "inherit",
      marginBlockStart: "2.83em",
      marginBlockEnd: "0.83em",
      marginInlineStart: "0px",
      marginInlineEnd: "0px",
      paddingTop: "15px",
      textAlign: "center",
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
      marginLeft: "23%",
      marginRight: "3%",
    },
    rightPart:{
      float: "right",
      width: "50%",
      paddingLeft: "50px",
      paddingRight: "50px",
      marginLeft: "3%",
      marginRight: "12%",
    },
    dropBawah:{
      paddingTop: "20px",
      height: "125px",
      alignContent: "center",
      alignItems: "center",
      textAlign: "center",
      fontWeight: "300!important",
      marginLeft: "27%",
      marginRight: "23%",
    },
    [`@media (min-width: 768px)`]: {
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
    },
})

export default styles