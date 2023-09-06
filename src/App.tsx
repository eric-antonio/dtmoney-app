import Modal from 'react-modal';
import { useState } from 'react';

import { Dashboard } from './components/Dashboad';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';
import { NewTransactionModal } from './components/NewTransactionModal';


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
      
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handelCloseTransactionModal}
      />

      <Dashboard/>

      <GlobalStyle/>
    </>
  );
}


