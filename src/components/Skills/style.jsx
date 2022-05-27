import { createUseStyles } from "react-jss"

const styles = createUseStyles({
    bgcolor:{   
        fontFamily: "Poppins",
        textAlign: "center",
        color: "inherit",
        boxSizing: "border-box",
        flexDirection: "column",
        paddingTop: "40px",
        display: "flex",
        height: "100%",
        background: "linear-gradient(to bottom, #fff 0%, #eee 26%, #fff 26%,   #fff 66%, #fff 100%)",
    },
    main:{
        paddingRight: "15px",
        paddingLeft: "15px",
        marginRight: "auto",
        marginLeft: "auto",
        display: "block",
        paddingBottom: "15px",
        marginBottom: "15px",
    },
    decorated:{
      fontFamily: "inherit",
      fontSize: "27px",
      fontWeight: "500",
      lineHeight: "1.2",
      color: "inherit",
      marginBlockStart: "1.83em",
      marginBlockEnd: "2.1em",
      marginInlineStart: "0px",
      marginInlineEnd: "0px",
      paddingTop: "15px",
      paddingBottom: "35px",
      top: "0",
    },
    rowSkill:{
        marginLeft: "-15px",
        marginRight: "-15px",
        boxSizing: "border-box",
    },
    colSkill:{
        position: "relative",
        minHeight: "1px",
        paddingRight: "15px",
        paddingLeft: "15px",
        boxSizing: "border-box",
        //styling for h4 inside this class
    },
    h4Skill:{
        fontFamily: "inherit",
        fontSize: "18px",
        fontWeight: "500",
        lineHeight: "1.2",
        color: "inherit",
        marginTop: "0",
        marginBlockStart: "-0.83em",
        marginBlockEnd: "0.43em",
        marginInlineStart: "0px",
        marginInlineEnd: "0px",
        paddingTop: "12px",
    },
    iconSkill:{
        fontSize: "111px",
    },
    [`@media (min-width: 768px)`]: {
      main:{
          width: "750px",
      },
      colSkill:{
          width: "33.33333%",
          float: "left",
      },
    },
})

export default styles