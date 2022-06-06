import React from "react";
import styles from "./style";
import { Icon } from "@iconify/react"

const Skills = () => {
    const classes = styles();

    return (
        ///show success render
        <div className={classes.bgcolor}>
            <div className={classes.main}>
                <h2 className={classes.decorated}><span>Programming Languages</span></h2>
                <div className={classes.rowSkill}>
                    <div className={classes.colSkill}>
                        <span className={classes.iconSkill}>
                            <Icon icon="simple-icons:javascript" />
                        </span>
                        <h4 className={classes.h4Skill}>JavaScript</h4>
                        <p>2 years</p>
                    </div>
                    <div className={classes.colSkill}>
                        <span className={classes.iconSkill}>
                            <Icon icon="simple-icons:java" />
                        </span>
                        <h4 className={classes.h4Skill}>Java</h4>
                        <p>9 months</p>
                    </div>
                    <div className={classes.colSkill}>
                        <span className={classes.iconSkill}>
                            <Icon icon="simple-icons:python" />
                        </span>
                        <h4 className={classes.h4Skill}>Python</h4>
                        <p>5 years </p>
                    </div>
                    <div className={classes.colSkill}>
                        <span className={classes.iconSkill}>
                            <Icon icon="simple-icons:php" />
                        </span>
                        <h4 className={classes.h4Skill}>PHP</h4>
                        <p>10 months </p>
                    </div>
                    <div className={classes.colSkill}>
                        <span className={classes.iconSkill}>
                            <Icon icon="bx:bxl-c-plus-plus" />
                        </span>
                        <h4 className={classes.h4Skill}>C++</h4>
                        <p>3 years</p>
                    </div>
                    <div className={classes.colSkill}>
                        <span className={classes.iconSkill}>
                            <Icon icon="simple-icons:react" />
                        </span>
                        <h4 className={classes.h4Skill}>ReactNative</h4>
                        <p>11 months</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills