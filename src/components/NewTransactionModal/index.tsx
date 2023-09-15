import React, { useState } from 'react';
import Modal from 'react-modal';
import  CloseImg from '../../assets/close.svg'
import EntradaImg from '../../assets/IconUp.svg';
import SaidasImg from '../../assets/IconDown.svg'
import {Container, TransactionTypeContainer } from'./styles'

interface NewTransactionsModalProps{
    isOpen:boolean;
    onRequestClose:()=>void;
}

Modal.setAppElement('#root');

export function NewTransactionModal( {isOpen, onRequestClose }: NewTransactionsModalProps) {
    const [type, seType] = useState('deposit');

  return (
    <Modal 
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <button 
        type='button' 
        onClick={onRequestClose}
        className='closeModal'
      >
        <img src={CloseImg} alt='Fechar Modal'/>
      </button>

      <Container> 
        <h2>Cadastrar Transação</h2>
    
        <input type='text' placeholder='Titulo'/>

        <input type='number' placeholder='Valor'/>

        <input placeholder='Categoria'/>

        <TransactionTypeContainer>

          <button
            type='button'
            className={type === 'desposit' ? 'active'  : ''}
            onClick={()=> seType('deposit')}
          >
            <img src={EntradaImg} alt='entradas'/>
            <span>Entrada</span>
          </button>
          
          <button
            type='button'
            onClick={()=> seType('withdraw')}
          >
            <img src={SaidasImg} alt='entradas'/>
            <span>Entrada</span>
          </button>

        </TransactionTypeContainer>

        <button type='submit' className='submitBTN'>Cadastrar</button>

      </Container>
       
  </Modal>
  );
}

