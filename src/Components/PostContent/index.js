import { Button, IconButton, TextField } from '@material-ui/core';
import { MoreHoriz, Public, ShareOutlined, SmsOutlined, ThumbUpAltOutlined } from '@material-ui/icons';
import React, { useEffect, useState } from 'react'
import Moment from 'react-moment';
import db from '../../Firebase';
import './styles.scss';
import firebase from 'firebase';

function PostContent({ data, id, user }) {
    const [comment, setComment] = useState('')
    const [comments, setComments] = useState([])
    const handlePostComment = (e) => {
        e.preventDefault();
        db.collection('fb-ui').doc(id).collection('comments').add({
            userName: user.displayName,
            photoURL: user.photoURL,
            text: comment,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
    }

    useEffect(() => {
        db.collection('fb-ui').doc(id).collection('comments').orderBy("timestamp", "desc").onSnapshot((snapshot) => {
            setComments([...snapshot.docs.map((item) => ({ id: item.id, data: item.data() }))])
        })
    }, [id])


    let timeNew = data.timestamp?.toDate()

    return (
        <div key={id} className="post__card">
            <div className="info" style={{ display: "flex" }}>
                <img src={data.photoURL ? data.photoURL : "https://cdn.thukyluat.vn/nhch-images//CauHoi_Hinh/9eb6abaa-8cda-456c-ad66-26ba4da23ffe.jpg"}
                    alt=""
                    className="logo"
                />
                <div className="time">
                    <h4 style={{ margin: "3px auto" }}>{data.userName}</h4>
                    <div style={{ display: "flex" }}>
                        <p style={{ margin: "3px " }}><Moment format="DD/MM/YYYY">{timeNew}</Moment></p>
                        <IconButton className="button__time"><Public /></IconButton>
                    </div>

                </div>
                <IconButton className="button__dot"><MoreHoriz /></IconButton>

            </div>
            <div className="caption">
                <p>{data.caption}</p>
            </div>

            <img src={data.image} alt="img" className="caption__img" />
            <div style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid #ccc" }}>
                <Button className="interactive">
                    <ThumbUpAltOutlined className="button__like" /> <p className="interactive__text">Thích</p>
                </Button>
                <Button className="interactive">
                    <SmsOutlined /> <p className="interactive__text">Bình luận</p>
                </Button>
                <Button className="interactive">
                    <ShareOutlined /> <p className="interactive__text">Chia sẻ</p>
                </Button>
            </div>

            <div className="comment">

                <img src={user.photoURL ? user.photoURL : "https://cdn.thukyluat.vn/nhch-images//CauHoi_Hinh/9eb6abaa-8cda-456c-ad66-26ba4da23ffe.jpg"}
                    alt="logo" className="comment__logo"
                />
                <form className="form" onSubmit={handlePostComment}>
                    <TextField value={comment} onChange={(e) => setComment(e.target.value)} variant="outlined" className="form__input" placeholder="Viết bình luận..." />
                    <Button type="submit" className="form__post" color="secondary" variant="contained">POST</Button>
                </form>
            </div>
            {comments && (
                <div>
                    {comments.map(({ id, data }) => (
                        <div key={id} className="commentItem">
                            <img src={data.photoURL ? data.photoURL : "https://cdn.thukyluat.vn/nhch-images//CauHoi_Hinh/9eb6abaa-8cda-456c-ad66-26ba4da23ffe.jpg"}
                                alt="logo" className="logo  "
                            />
                            <div className="caption">
                                <h3>{data.userName}</h3>
                                <p>{data.text}</p>
                            </div>


                        </div>
                    ))}
                </div>
            )}

        </div>
    )
}

export default PostContent
