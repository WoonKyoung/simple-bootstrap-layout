import React, {useState} from 'react';
import styled from "styled-components";
import {BrowserRouter as Router} from "react-router-dom";
import Modal from "../components/Modal/Modal";


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Button = styled.button`
  min-width: 100px;
  padding: 16px 32px;
  border-radius : 4px;
  border: none;
  background : #141414;
  color: #fff;
  font-size : 24px;
  cursor: pointer;
`;

const  Home = () => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(prev => !prev)
    }

    return (

        <div className="container-fluid">


            <h1 className="mt-4">Simple Sidebar</h1>
            <p>The starting state of the menu will appear collapsed on smaller screens, and will appear non-collapsed on
                larger screens. When toggled using the button below, the menu will change.</p>
            <p>
                Make sure to keep all page content within the
                <code>#page-content-wrapper</code>
                . The top navbar is optional, and just for demonstration. Just create an element with the
                <code>#menu-toggle</code>
                ID which will toggle the menu when clicked.
            </p>
            <Container>
                <Button onClick={openModal}>ddfafd</Button>
                <Modal showModal = {showModal} setShowModal = {setShowModal} />
            </Container>
        </div>
    );
}

export default Home;