import { Button } from '@material-ui/core'
import { ArrowDownward, Group, People, Store, WatchLater } from '@material-ui/icons'
import './style.scss';
import React from 'react'
import Nav from '../Nav';

function Bookmark({ user }) {
    console.log({ user })
    return (
        <div>
            <Nav user={user} />
            <div className="bookmark">
                <ul>
                    <li>
                        <Button className="button">
                            <img src={user.photoURL ? user.photoURL : "https://cdn.thukyluat.vn/nhch-images//CauHoi_Hinh/9eb6abaa-8cda-456c-ad66-26ba4da23ffe.jpg"}
                                alt="logo" className="logo" />
                            <p>text</p>
                        </Button>
                    </li>

                    <li>
                        <Button className="button">
                            <People />
                            <p>text</p>
                        </Button>
                    </li>

                    <li>
                        <Button className="button">
                            <WatchLater />
                            <p>text</p>
                        </Button>
                    </li>

                    <li>
                        <Button className="button">
                            <Store />

                            <p>text</p>
                        </Button>
                    </li>

                    <li>
                        <Button className="button">
                            <ArrowDownward />

                            <p>text</p>
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
                            <p>text</p>
                        </Button>
                    </li>
                    <li>
                        <Button className="button">
                            <Group />
                            <p>text</p>
                        </Button>
                    </li>
                    <li>
                        <Button className="button">
                            <Group />
                            <p>text</p>
                        </Button>
                    </li>
                    <li>
                        <Button className="button">
                            <Group />
                            <p>text</p>
                        </Button>
                    </li>
                </ul>
            </div>

        </div>

    )
}

export default Bookmark
