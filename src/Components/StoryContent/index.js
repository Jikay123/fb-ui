import { Button, IconButton } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import React from 'react'
import './story.scss';

function Story({ user }) {
    return (
        <div className="card">
            <Button className="card__button">
                <div className="card__add">
                    <img src={user.photoURL ? user.photoURL : "https://cdn.thukyluat.vn/nhch-images//CauHoi_Hinh/9eb6abaa-8cda-456c-ad66-26ba4da23ffe.jpg"}
                        alt="logo" className="logo" />
                    <IconButton className="button"><Add /></IconButton>
                    <p>Add new story</p>
                </div>
            </Button>
            <div className="card__list">
                <img src="https://cdn.thukyluat.vn/nhch-images//CauHoi_Hinh/9eb6abaa-8cda-456c-ad66-26ba4da23ffe.jpg"
                    alt="logo" className="logo" />
                <img src="https://d3b4rd8qvu76va.cloudfront.net/593/525/210/-359996999-1ss7qp7-cbts3b4jrijmolk/original/file.jpg"
                    alt="content" className="imgContent" />
            </div>
            <div className="card__list">
                <img src="https://cdn.thukyluat.vn/nhch-images//CauHoi_Hinh/9eb6abaa-8cda-456c-ad66-26ba4da23ffe.jpg"
                    alt="logo" className="logo" />
                <img src="https://d3b4rd8qvu76va.cloudfront.net/593/525/210/-359996999-1ss7qp7-cbts3b4jrijmolk/original/file.jpg"
                    alt="content" className="imgContent" />
            </div>
            <div className="card__list">
                <img src="https://cdn.thukyluat.vn/nhch-images//CauHoi_Hinh/9eb6abaa-8cda-456c-ad66-26ba4da23ffe.jpg"
                    alt="logo" className="logo" />
                <img src="https://d3b4rd8qvu76va.cloudfront.net/593/525/210/-359996999-1ss7qp7-cbts3b4jrijmolk/original/file.jpg"
                    alt="content" className="imgContent" />
            </div>
            <div className="card__list mobile">
                <img src="https://cdn.thukyluat.vn/nhch-images//CauHoi_Hinh/9eb6abaa-8cda-456c-ad66-26ba4da23ffe.jpg"
                    alt="logo" className="logo" />
                <img src="https://d3b4rd8qvu76va.cloudfront.net/593/525/210/-359996999-1ss7qp7-cbts3b4jrijmolk/original/file.jpg"
                    alt="content" className="imgContent" />
            </div>


        </div>
    )
}

export default Story
