import { Button, IconButton, Modal, TextField } from '@material-ui/core';
import { ArrowDropDown, Close, Mood, PermMedia, Public, VideoCall } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import db, { storage } from '../../Firebase';
import Story from '../StoryContent';
import './styles.scss';
import firebase from 'firebase';
import PostContent from '../PostContent';

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}
function CenterContent({ user }) {
    const [open, setOpen] = useState(false);
    const [ModalStyle] = useState(getModalStyle);
    const [caption, setCaption] = useState('');
    const [image, setImage] = useState('');

    const [content, setContent] = useState([]);
    const [progress, setProgress] = useState(0);

    const handleUpload = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    }
    const handlePost = () => {
        const uploadstask = storage.ref(`images/${image.name}`).put(image);
        console.log({ uploadstask })
        uploadstask.on(
            "state_changed",
            (snapshot) => {
                const tmp = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setProgress(tmp)
            },
            (error) => {
                console.log(error.message);
            },
            () => {
                storage.ref("images")
                    .child(image.name)
                    .getDownloadURL()
                    .then(url => {
                        db.collection('fb-ui').add({
                            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                            caption: caption,
                            userName: user.displayName,
                            image: url,
                            photoURL: user?.photoURL
                        })
                        setOpen(false)
                        setImage('')
                        setCaption('')
                        setProgress(0)
                    })
            }
        )
    }

    useEffect(() => {
        db.collection('fb-ui').orderBy("timestamp", 'desc').onSnapshot((snap) => {
            setContent([...snap.docs.map((item) => ({ id: item.id, data: item.data() }))])
        })
    }, [])


    return (
        <div className="Center__Container">
            <div className="story">
                <Story user={user} />
            </div>
            <div className="post">
                <div className="caption">
                    <img src={user.photoURL ? user.photoURL : "https://cdn.thukyluat.vn/nhch-images//CauHoi_Hinh/9eb6abaa-8cda-456c-ad66-26ba4da23ffe.jpg"}
                        alt="logo" className="logo" />
                    <Button onClick={() => setOpen(true)} className="button__caption" variant="contained">Bạn đang nghĩ gì thế?</Button>
                </div>
                <hr />
                <div className="button">
                    <Button className="button__live">
                        <VideoCall /> <p>Video trực tiếp</p>
                    </Button>
                    <Button className="button__image">
                        <PermMedia /> <p>Ảnh/Video</p>
                    </Button>
                    <Button className=" button__imoji">
                        <Mood /> <p>Cảm xúc/Hoạt động</p>
                    </Button>
                </div>
            </div>
            <div className="content">
                {content.map(({ data, id }) => {
                    return (
                        <div key={id}>
                            <PostContent id={id} data={data} user={user} />
                        </div>

                    );

                })}

            </div>
            <Modal open={open} onClose={() => setOpen(false)}>
                <div style={ModalStyle} className="upload">
                    <div className="title">
                        <h3>Tạo bài viết</h3>
                        <IconButton onClick={() => setOpen(false)} className="button__close"><Close /></IconButton>
                    </div>
                    <hr />
                    <div className="main">
                        <div className="info">
                            <img src={user.photoURL ? user.photoURL : "https://cdn.thukyluat.vn/nhch-images//CauHoi_Hinh/9eb6abaa-8cda-456c-ad66-26ba4da23ffe.jpg"}
                                alt="logo" className="logo" />

                            <div className="status">
                                <h3>Long nguyễn</h3>
                                <Button className="status__button" >
                                    <Public /> <p>Công khai</p> <ArrowDropDown />
                                </Button>
                            </div>

                        </div>
                        <TextField value={caption} onChange={(e) => setCaption(e.target.value)} multiline rows={5} fullWidth variant="outlined" />
                        <input onChange={handleUpload} type="file" className="file" />
                        <progress className="progress" value={progress} fullWidth max={100} />
                        <Button onClick={handlePost} disabled={!caption} variant="contained" color="primary" className="button__post">Đăng bài</Button>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default CenterContent
