import React, { useState } from 'react';
import Modal from 'react-modal';
import  CloseImg from '../../assets/close.svg'
import EntradaImg from '../../assets/IconUp.svg';
import SaidasImg from '../../assets/IconDown.svg'
import {Container, RadioBox, TransactionTypeContainer } from'./styles'

interface NewTransactionsModalProps{
    isOpen:boolean;
    onRequestClose:()=>void;
}

Modal.setAppElement('#root');

export function NewTransactionModal( {isOpen, onRequestClose }: NewTransactionsModalProps) {
    const [type, setType] = useState('deposit');

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

          <RadioBox
            type='button'
            onClick={()=> setType('deposit')}
            isActive={type === 'deposit'}
          >
            <img src={EntradaImg} alt='entradas'/>
            <span>Entrada</span>

          </RadioBox>
          
          <RadioBox
            type='button'
            onClick={()=> setType('withdraw')}
            isActive={type === 'withdraw'}
          >
            <img src={SaidasImg} alt='Saidas'/>
            <span>Saidas</span>

          </RadioBox>

        </TransactionTypeContainer>

        <button type='submit' className='submitBTN'>Cadastrar</button>

      </Container>
       
  </Modal>
  );
}

