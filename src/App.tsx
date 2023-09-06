import Modal from 'react-modal';
import { useState } from 'react';

import { Dashboard } from './components/Dashboad';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';
Modal.setAppElement('#root');

export function App() {
  
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handelNewOpenTransactionModal(){

    setIsNewTransactionModalOpen(true);

  }

  function handelCloseTransactionModal(){

    setIsNewTransactionModalOpen(false);
  }
  
  return (
    <>
      <Header
        onOpenNewTransactionModal={handelNewOpenTransactionModal}
      />

      <Dashboard/>
      <Modal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handelCloseTransactionModal}
      >
        <h2>Cadastrar Transação</h2>
      </Modal>
      <GlobalStyle/>
    </>
  );
}


