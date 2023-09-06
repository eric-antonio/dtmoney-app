import React from 'react';
import Modal from 'react-modal';
import {Container} from'./styles'

interface NewTransactionsModalProps{
    isOpen:boolean;
    onRequestClose:()=>void;
}

Modal.setAppElement('#root');

export function NewTransactionModal( {isOpen, onRequestClose }: NewTransactionsModalProps) {
    

  return (
    <Modal 
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >

      <Container> 
        <h2>Cadastrar Transação</h2>
    
        <input type='text' placeholder='Titulo'/>

        <input type='number' placeholder='Valor'/>

        <input placeholder='Categoria'/>

        <button type='submit' className='submitBTN'>Cadastrar</button>

      </Container>
       
  </Modal>
  );
}

