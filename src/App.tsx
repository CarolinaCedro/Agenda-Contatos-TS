import { useState } from 'react';
import Modal from 'react-modal'
import { ButtonNewContact } from "./components/ButtonNewContact";
import { ContactsTable } from "./components/ContactsTable";
import { Header } from "./components/Header";
import { DeleteModal } from './components/ModalContacts/DeleteModal';
import { EditModal } from './components/ModalContacts/EditModal';
import { ModalContacts } from "./components/ModalContacts/NewContact";
import { ViewModal } from './components/ModalContacts/ViewModal';
import { GlobalStyles } from "./styles/global";

Modal.setAppElement('#root')

export function App() {

  const [isNewTransictionModal,setIsNewTransictionModal] = useState(false);
  const [isNewEditModal,setNewEditModal] = useState(false);
  const [isNewDeleteModal,setIsNewDeleteModal] = useState(false);
  const [isNewViewModal,setIsNewViewModal] = useState(false);


  function handleOpenViewModal(){
    setIsNewViewModal(true)
  }

  function handleCloseViewModal(){
    setIsNewViewModal(false)
  }


  function handleOpenModalEdit(){
    setNewEditModal(true)
  }

  function handleCloseModalEdit(){
    setNewEditModal(false)
  }

  function handleOpenDeleteModal(){
    setIsNewDeleteModal(true)
  }

  function handleCloseDeleteModal(){
    setIsNewDeleteModal(false)
  }

  function handleOpenModal(){
  setIsNewTransictionModal(true);
  }

  function handleCloseModal(){
    setIsNewTransictionModal(false)
    setNewEditModal(false)
  }


  return (
    <>
    <GlobalStyles/>
    <Header/>
    <ButtonNewContact onOpenNewContact={handleOpenModal}/>
    <ContactsTable onOpenEdictContact={handleOpenModalEdit} onOpenDeleteContact={handleOpenDeleteModal} onViewContact={handleOpenViewModal}/>
    <ModalContacts isOpen={isNewTransictionModal} onRequesClose={handleCloseModal}/>
    <EditModal isOpenEditModal={isNewEditModal} onRequesClose={handleCloseModalEdit}/>
    <DeleteModal isOpen={isNewDeleteModal} onRequestClose={handleCloseDeleteModal}/>
    <ViewModal isOpenViewModal={isNewViewModal} onRequesClose={handleCloseViewModal}/>
    </>
  );
}


