import { Button } from '@material-ui/core';
import { Explore, Favorite, Group, People, WatchLater } from '@material-ui/icons';
import React from 'react';
import './style.scss';

function LeftContent({ user }) {
    return (
        <div className="container">
            <ul>
                <li>
                    <Button className="button">
                        <img src={user.photoURL ? user.photoURL : "https://cdn.thukyluat.vn/nhch-images//CauHoi_Hinh/9eb6abaa-8cda-456c-ad66-26ba4da23ffe.jpg"}
                            alt="logo" className="logo" />
                        <h4 style={{ margin: "5px 0 5px 20px" }}>{user.displayName}</h4>
                    </Button>
                </li>

                <li>
                    <Button className="button">
                        <People />
                        <p>Bạn bè</p>
                    </Button>
                </li>

                <li>
                    <Button className="button">
                        <WatchLater />
                        <p>Kỷ niệm</p>
                    </Button>
                </li>

                <li>
                    <Button className="button">
                        <Favorite />

                        <p>crush :v</p>
                    </Button>
                </li>

                <li>
                    <Button className="button">
                        <Explore />

                        <p>Địa điểm</p>
                    </Button>
                </li>
            </ul>
            <hr style={{ width: "90%" }} />
            <h3 style={{ marginLeft: "10px", color: "#6D6F73", fontSize: "16px" }}>Lối tắt của bạn</h3>
            <ul>
                <li>
                    <Button className="button">
                        <Group />
                        <p>Hội cho rằng trái đất hình vuông</p>
                    </Button>
                </li>
                <li>
                    <Button className="button">
                        <Group />
                        <p>Hội Cho rằng ông già noel có thật</p>
                    </Button>
                </li>
                <li>
                    <Button className="button">
                        <Group />
                        <p>Hội cú đêm</p>
                    </Button>
                </li>
                <li>
                    <Button className="button">
                        <Group />
                        <p>Hội phát cuồng siêu nhân</p>
                    </Button>
                </li>
                <li>
                    <Button className="button">
                        <Group />
                        <p>Reactjs Viet Nam</p>
                    </Button>
                </li>
                <li>
                    <Button className="button">
                        <Group />
                        <p>Nhóm vì cộng đồng</p>
                    </Button>
                </li>
                <li>
                    <Button className="button">
                        <Group />
                        <p>Hiến máu tình nguyện</p>
                    </Button>
                </li>
            </ul>
        </div>
    )
}

export default LeftContent
