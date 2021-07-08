import { Button, makeStyles, Modal, TextField } from '@material-ui/core';
import firebase from 'firebase';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { auth, storage } from '../../Firebase/index';
import './login.scss';

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: 'absolute',

        justifyContent: "center",
        width: 400,
        backgroundColor: theme.palette.background.paper,
        boxShadow: "0px 6px 20px rgba(0,52,255,0.2)",
        borderRadius: 5,
        padding: theme.spacing(2, 4, 3),

    },
    Register: {
        width: "80%",
        background: "rgb(39, 211, 54)",

        '&:hover': {
            background: "rgb(16, 223, 16)",
        }
    },
    inputValue: {
        margin: "10px",
    },
    logo: {
        width: "100px",
    }
}));

function Login() {
    const [modalStyle] = useState(getModalStyle);
    const classes = useStyles();
    const [email, setEmail] = useState('')
    const [userName, setUserName] = useState('')
    const [open, setOpen] = useState(false)

    const [password, setPassword] = useState('')
    const [image, setImage] = useState('');

    const history = useHistory();
    const [progress, setProgress] = useState(0);

    const openRegister = (e) => {
        e.preventDefault();
        setOpen(true);
    }

    useEffect(() => {
        const checkUser = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                history.push("/");
            } else {
                history.push("/login");
            }
        })
        return () => {
            checkUser();
        }
    }, [history])

    const handleLogin = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then((
                // alert("login success!"),
                history.push('/')
            ))
            .catch((e) => (alert(e.message)))
    }

    const handleChangeImg = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0])
        }
    }


    const handleRegister = () => {
        if (userName) {
            const uploadstask = storage.ref(`images/${image.name}`).put(image);
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
                            console.log({ url }, "url")
                            auth.createUserWithEmailAndPassword(email, password)
                                .then((authUser) => {
                                    return (
                                        alert("register success!"),
                                        authUser.user.updateProfile({
                                            displayName: userName,
                                            photoURL: url,
                                        }),
                                        setPassword(''),
                                        setEmail(''),
                                        setUserName(''),
                                        setImage(''),
                                        setProgress(0),
                                        setOpen(false)
                                    );

                                })
                                .catch((e) => (alert(e.message)));

                        })
                }
            )

        } else {
            alert("user name is required")
        }
    }
    const handleLoginGmail = (e) => {
        e.preventDefault();
        const ggProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(ggProvider).then(() => (
            console.log("login success!")
        ))
            .catch((e) => alert("Login fail"))
    }
    return (
        <div className="login">
            <div className="login__left">
                <div className="login__left--logo">
                    <img className="logo" src="https://i.pinimg.com/originals/d7/c1/d0/d7c1d07b8d763870d4b59c10603ed092.png"
                        alt="logo" />
                    <h2>facebook</h2>
                </div>
                <h3>Facebook giúp bạn kết nối và chia sẻ với mọi người trong cuộc sống của bạn.</h3>
            </div>
            <div className="login__right">
                <form className="login__right--form">
                    <TextField type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="email" placeholder="Email" variant="outlined" />
                    <TextField type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="password" placeholder="Password" variant="outlined" />
                    <Button onClick={handleLogin} className="btnLogin" variant="contained" >Đăng nhập</Button>
                    <Button style={{ marginTop: "10px" }} onClick={handleLoginGmail} className="btnLogin" variant="contained" >Đăng nhập với gmail</Button>
                    <hr />
                    <Button onClick={openRegister} className="btnRegister" variant="contained">Tạo tài khoản mới</Button>
                </form>
            </div>
            <Modal open={open} onClose={() => setOpen(false)}>
                <div style={modalStyle} className={classes.paper}>
                    <img className={classes.logo} src="https://i.pinimg.com/originals/d7/c1/d0/d7c1d07b8d763870d4b59c10603ed092.png" alt="logo" />
                    <TextField fullWidth className={classes.inputValue} type="text" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="user name" variant="outlined" />
                    <TextField fullWidth className={classes.inputValue} type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" variant="outlined" />
                    <TextField fullWidth className={classes.inputValue} type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" variant="outlined" />
                    <label style={{ width: "100%", margin: "0px", }}>Ảnh đại diện :</label>
                    <input onChange={handleChangeImg} type="file" style={{ width: "100%", margin: "10px" }} />
                    <progress style={{ width: "100%", margin: "5px auto" }} value={progress} max={100} />
                    <Button onClick={handleRegister} className={classes.Register} variant="contained" >Đăng ký</Button>

                </div>
            </Modal>
        </div>
    )
}

export default Login
