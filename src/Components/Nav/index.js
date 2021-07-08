import { Button, IconButton, InputAdornment, TextField } from '@material-ui/core';
import { Apps, ArrowDropDown, ExitToApp, Feedback, Games, Group, Help, Home, Menu, Message, Notifications, Search, Settings, Store, Tv } from '@material-ui/icons';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from '../../Firebase';
import './nav.scss';

function Nav({ user }) {
    const [bookmark, setBookmark] = useState(false);
    const [droplist, setDroplist] = useState(false);
    console.log({ user }, "nav")
    const history = useHistory();
    const handleMoveBookmark = () => {
        setBookmark(!bookmark);

        if (bookmark) {
            console.log({ bookmark }, "1")
            history.push("/bookmark")
        } else {
            console.log({ bookmark }, "2")
            history.push("/")
        }

    }

    const handleLogout = () => {
        const check = window.confirm("Bạn muốn đăng xuất ?", "Thông báo");
        if (check) {
            auth.signOut();
            history.push('/login');
        }
    }


    return (
        <div className="nav">
            <div className="nav__left">
                <img src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png" alt="logo"
                    className="logo" />
                <TextField classes="inputSearch_" variant="outlined" placeholder="Tìm kiếm trên facebook..."
                    InputProps={{ startAdornment: <InputAdornment position="start"><Search /></InputAdornment> }} />
                <IconButton className="buttonSearch">
                    <Search />
                </IconButton>
            </div>
            <div className="nav__center">
                <IconButton className="iconButton">
                    <Home />
                </IconButton>
                <IconButton className="iconButton">
                    <Tv />
                </IconButton>
                <IconButton className="iconButton">
                    <Store />
                </IconButton>
                <IconButton className="iconButton">
                    <Group />
                </IconButton>
                <IconButton className="iconButton iconButton__full">
                    <Games />
                </IconButton>
                <IconButton onClick={handleMoveBookmark} className="iconButton iconButton__menu">
                    <Menu />
                </IconButton>
            </div>
            <div className="nav__right">
                <div className="info">
                    <img src={user.photoURL ? user.photoURL : "https://cdn.thukyluat.vn/nhch-images//CauHoi_Hinh/9eb6abaa-8cda-456c-ad66-26ba4da23ffe.jpg"}
                        alt="logo" className="info__logo" />
                    <h3>{user.displayName}</h3>
                </div>
                <IconButton className="iconButton">
                    <Apps />
                </IconButton>
                <IconButton className="iconButton">
                    <Message />
                </IconButton>
                <IconButton className="iconButton">
                    <Notifications />
                </IconButton>
                <IconButton className={"iconButton " + (droplist && "active")} onClick={() => setDroplist(!droplist)}>
                    <ArrowDropDown />
                </IconButton>

                {droplist && (
                    <div className="droplist" >
                        <Button className="info__drop">
                            <img src={user.photoURL ? user.photoURL : "https://cdn.thukyluat.vn/nhch-images//CauHoi_Hinh/9eb6abaa-8cda-456c-ad66-26ba4da23ffe.jpg"}
                                alt="logo" className="logo"
                            />
                            <div className="text">
                                <h3>{user.displayName}</h3>
                                <p>Xem trang cá nhân của bạn</p>
                            </div>
                        </Button>

                        <Button className="feedback">
                            <Feedback />
                            <div >
                                <h4>Đóng góp ý kiến</h4>
                                <p>Góp phần cải thiện phiên bản Facebook mới.</p>
                            </div>
                        </Button>
                        <Button className="button__control">
                            <Settings />

                            <h4>Cài đặt quyền riêng tư</h4>

                        </Button>
                        <Button className="button__control">
                            <Help />

                            <h4>Trợ giúp & hỗ trợ</h4>


                        </Button>
                        <Button className="button__control" onClick={handleLogout}>
                            <ExitToApp />

                            <h4>Đăng xuất</h4>

                        </Button>

                    </div>

                )}
            </div>

        </div>
    )
}


export default Nav
