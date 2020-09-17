import React from 'react';
import FirstPage from './main/firstPage';
import SecondPage from './main/secondPage';
import ThirdPage from './main/thirdPage';
import FourthPage from './main/fourthPage';
import FifthPage from './main/fifthPage';
import './mainPage.css';
import Header from '../header/header';

function MainPage() {
    return (
        <>
            <main>
            <FirstPage styleClass="white-style-background"/>
            <SecondPage styleClass="black-style-background"/>
            <ThirdPage styleClass="white-style-background"/>
            <FourthPage styleClass="black-style-background"/>
            <FifthPage styleClass="white-style-background"/>
            </main>
        </>
    );
}

export default MainPage;
