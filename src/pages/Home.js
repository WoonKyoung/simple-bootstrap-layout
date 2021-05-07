import React, {useRef, useState} from 'react';
import styled from "styled-components";


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

    return (

        <div className="container-fluid">


            <h1 className="mt-4">메인-컨텐츠 그리드</h1>

            {/*
            <Container>
                <Button onClick={openModal}>ddfafd</Button>
                <Modal showModal = {showModal} setShowModal = {setShowModal} title="Add new Book" />
            </Container>
            */}
        </div>
    );
}

export default Home;