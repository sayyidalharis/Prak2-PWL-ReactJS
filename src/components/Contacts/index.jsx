import React, { useState, useEffect } from "react";
import styles from "./style";
import axios from "axios"
import { Icon } from "@iconify/react"
import moment from "moment"
import "moment/locale/id"
moment.locale("id")

const Contact = () => {
    const classes = styles();


	const [dataUser, setDataUser] = useState({
		name: "",
		email: "",
		comment: ""
	})

    //make state for counting comments
    const [countComment, setCountComment] = useState()

    //make state for users
    const [users, setUsers] = useState([])

    //make function to getuser from api
    const getUsers = async () => {
        const response = await axios.get(
            "https://server-sayyidh.herokuapp.com/api/komentars"
        )
        console.log(response.data)
        setCountComment(response.data.length)
        setUsers(response.data)
    }

	const deleteComment = async (id) => {
		try {
			await axios.delete(
                `https://server-sayyidh.herokuapp.com/api/komentars/${id}`
			)
			getUsers()
		} catch (err) {
			console.log(err)
		}
	}

    //make function to post comment
    const postComment = async (e) => {
        e.preventDefault()
        try{
			if (dataUser.name.length === 0) dataUser.name = "Anonymous"

            const response = await axios.post(
                "https://server-sayyidh.herokuapp.com/api/komentars",
                dataUser
            )   
            console.log(response.data)
			window.location.reload()
        }catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        getUsers()
    }, [])
    
    return (
        ///show success render
        <div>
            <div  className={classes.main} >
                <h2 className={classes.boxComment}>Contact me here! </h2>
                <h4 className={classes.pengalaman}>Leave a Comment</h4>
				<form onSubmit={postComment} className={classes.form}>
					<input
						className={classes.input}
						type="text"
						placeholder="Name (Optional)"
						value={dataUser.name}
						onChange={(e) => {
							setDataUser({ ...dataUser, name: e.target.value })
						}}
					/>
					<input
						className={classes.input}
						type="email"
						placeholder="Email"
						value={dataUser.email}
						onChange={(e) => {
							setDataUser({ ...dataUser, email: e.target.value })
						}}
						required
					/>
					<textarea
						className={classes.textarea}
						placeholder="Message"
						value={dataUser.comment}
						onChange={(e) => {
							setDataUser({
								...dataUser,
								comment: e.target.value,
							})
						}}
						required
					/>
					<button type="submit" className={classes.button}>
						Send
					</button>
				</form>
            </div>
			<div className={classes.commentSection}>
				<h4>Comments ({countComment})</h4>
				{users.map((user, index) => (
					<div key={user.id} className={classes.comment}>
						<div className={classes.commentProfile}>
							<Icon
								className={classes.userIcon}
								icon="iconoir:profile-circled"
								width={50}
								height={50}
							/>
						</div>

						<div className={classes.commentBody}>
							<div className={classes.textCommentHead}>
								<p className={classes.textComment}>
									<b>{user.name}</b>
								</p>
								<p className={classes.textDate}>
									{moment(user.created_at).format("D MMMM YYYY")}
								</p>
								<Icon
									onClick={() => deleteComment(user.id)}
									className={classes.deleteIcon}
									icon="mdi:delete"
								/>
							</div>
							<p className={classes.textComment}>
								{user.comment}
							</p>
						</div>
					</div>
				))}
			</div>
        </div>
    )
}

export default Contact