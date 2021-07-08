import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from '../../Firebase';
import CenterContent from '../CenterContent';
import LeftContent from '../LeftContent';
import Nav from '../Nav';
import RightContent from '../RightCenter';
import './home.scss';

function Home() {

    const history = useHistory();
    const [user, setUser] = useState('');


    useEffect(() => {
        const checkUser = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                setUser(authUser);
                // history.go(0)
                console.log(user, "home")
            } else {
                setUser('');
                history.push("/login")
            }
        })
        console.log("useEffect")
        return () => {
            checkUser();
        }
    }, [history, user])

    return (
        <div style={{ position: "relative" }}>
            <Nav user={user} />

            <div style={{ display: "flex", justifyContent: "space-around", marginTop: "5.5rem" }}>

                <div className="home__left">
                    <LeftContent user={user} />
                </div>
                <div style={{ minWidth: "20vw" }} className="empty__left"></div>
                <div className="home__center">
                    <CenterContent user={user} />

                </div>
                <div className="home__right">
                    <RightContent />
                </div>

                <div className="empty__right" style={{ minWidth: "25vw" }}></div>
            </div>

        </div>
    )
}

export default Home
