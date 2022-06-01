import { useState } from 'react';
import Modal from 'react-modal'
import { ButtonNewContact } from "./components/ButtonNewContact";
import { ContactsTable } from "./components/ContactsTable";
import { Header } from "./components/Header";
import { ModalContacts } from "./components/ModalContacts";
import { GlobalStyles } from "./styles/global";

Modal.setAppElement('#root')

export function App() {

  const [isNewTransictionModal,setIsNewTransictionModal] = useState(false);

  function handleOpenModal(){
  setIsNewTransictionModal(true);
  }

  function handleCloseModal(){
    setIsNewTransictionModal(false)
  }


  return (
    <>
    <GlobalStyles/>
    <Header/>
    <ButtonNewContact onOpenNewContact={handleOpenModal}/>
    <ContactsTable/>
    <ModalContacts isOpen={isNewTransictionModal} onRequesClose={handleCloseModal}/>
    </>
  );
}


