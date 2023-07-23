import logo from './logo.svg';
import './App.css';
import Forms from './components/form';
import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Modal from './components/Modal';
import Content from './components/Content';
import CustomCarousel from './components/Carousel';
function App() {
  const [modalOpen, setModalOpen] = useState(true);
  return (
    <>
     {modalOpen && <Modal setOpenModal={setModalOpen} />}
     <CustomCarousel />
      <Content/>
     
    </>
  );
}

export default App;
