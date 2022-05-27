//make jss class
import { createUseStyles } from "react-jss"

const styles = createUseStyles({
    main: {
		  fontFamily: "Poppins",
      marginLeft: "7%",
      marginRight: "7%",
    },
    p:{
        font: "Poppins",
    },
    projects: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 0.5fr)",
      margin: "80px",
      marginTop: "40px",
      marginBottom: "60px",
      alignItems: "center",
      gridGap: "20px",
      // flexDirection: "row",
      // justifyContent: "center",
      // alignItems: "center",
      // marginBottom: "40px",
      // display: "flex",
    },
    img: {
      width: "480px",
      objectFit: "cover",
    },
    project: {
      borderRadius: "20px",
      textAlign: "center",
      alignItems: "center",
      "&:hover": {
        transform: "scale(1.037)",
        transition: "all 0.3s ease-in-out",
      },
      cursor: "pointer",
      fontWeight: "200",
    },
    secondPart:{
      alignContent: "center",
      alignItems: "center",
      textAlign: "center",
    },
    decorated:{
      fontFamily: "inherit",
      fontSize: "27px",
      fontWeight: "500",
      lineHeight: "1.2",
      color: "inherit",
      marginBlockStart: "2.83em",
      marginBlockEnd: "0.33em",
      marginInlineStart: "0px",
      marginInlineEnd: "0px",
      paddingTop: "15px",
      textAlign: "center",
    },
})

export default styles