import { Button, IconButton } from '@material-ui/core';
import { MoreHoriz, Search, Videocam } from '@material-ui/icons';
import React from 'react'
import './styles.scss';

function RightContent() {
    return (
        <div className="Right__container">
            <div className="content__top">
                <h3>Được tài trợ bởi</h3>
                <Button className="button__main">
                    <img src="https://cdn.tgdd.vn/2020/05/content/bo-hinh-nen-valorant-dep-mat-cho-may-tinh-dien-thoai-game-thu-khong-nen-bo-qua-1-800x450-1.jpg"
                        alt="img_mkt" className="imgMKT" />
                    <p>Game hot hòn họt...</p>
                    <IconButton className="button__dot">
                        <MoreHoriz />
                    </IconButton>
                </Button>
                <Button className="button__main">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4ndI60Ch8KJZy4y3Ar2NXN6-m6bS6uFu6oA&usqp=CAU"
                        alt="img_mkt" className="imgMKT" />
                    <p>Trời về với 2020...</p>
                    <IconButton className="button__dot">
                        <MoreHoriz />
                    </IconButton>
                </Button>
            </div>
            <hr />
            <div className="content__main">
                <div className="control" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <h3>
                        Người liên hệ
                    </h3>
                    <div>
                        <IconButton>
                            <Videocam />
                        </IconButton>
                        <IconButton>
                            <Search />
                        </IconButton>
                        <IconButton>
                            <MoreHoriz />
                        </IconButton>
                    </div>
                </div>
                <div className="contact">
                    <Button className="contact__button">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFXwNIQJXvMKeN_CVED8givMqPItP1NAZAdA&usqp=CAU"
                            alt="img_" className="logo"
                        />
                        <div className="dot"></div>
                        <p>Nguyễn Trần Thái A</p>
                    </Button>
                    <Button className="contact__button">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFXwNIQJXvMKeN_CVED8givMqPItP1NAZAdA&usqp=CAU"
                            alt="img_" className="logo"
                        />
                        <div className="dot"></div>
                        <p>Nguyễn Hà B</p>
                    </Button>
                    <Button className="contact__button">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFXwNIQJXvMKeN_CVED8givMqPItP1NAZAdA&usqp=CAU"
                            alt="img_" className="logo"
                        />
                        <div className="dot"></div>
                        <p>Nguyễn Hà B</p>
                    </Button>
                    <Button className="contact__button">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFXwNIQJXvMKeN_CVED8givMqPItP1NAZAdA&usqp=CAU"
                            alt="img_" className="logo"
                        />
                        <div className="dot"></div>
                        <p>Nguyễn Hà B</p>
                    </Button>
                    <Button className="contact__button">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFXwNIQJXvMKeN_CVED8givMqPItP1NAZAdA&usqp=CAU"
                            alt="img_" className="logo"
                        />
                        <div className="dot"></div>
                        <p>Lê Hà C</p>
                    </Button>
                    <Button className="contact__button">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFXwNIQJXvMKeN_CVED8givMqPItP1NAZAdA&usqp=CAU"
                            alt="img_" className="logo"
                        />
                        <div className="dot"></div>
                        <p>Phạm Thu C</p>
                    </Button>
                    <Button className="contact__button">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFXwNIQJXvMKeN_CVED8givMqPItP1NAZAdA&usqp=CAU"
                            alt="img_" className="logo"
                        />
                        <div className="dot"></div>
                        <p>Phạm Thu C</p>
                    </Button>
                    <Button className="contact__button">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFXwNIQJXvMKeN_CVED8givMqPItP1NAZAdA&usqp=CAU"
                            alt="img_" className="logo"
                        />
                        <div className="dot"></div>
                        <p>Phạm Thu C</p>
                    </Button>
                    <Button className="contact__button">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFXwNIQJXvMKeN_CVED8givMqPItP1NAZAdA&usqp=CAU"
                            alt="img_" className="logo"
                        />
                        <div className="dot"></div>
                        <p>Phạm Thu C</p>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default RightContent
