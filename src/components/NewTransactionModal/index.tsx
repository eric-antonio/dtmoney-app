import React, { FormEvent, useState } from 'react';
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

  const [title,setTitle] =useState('');
  const [ valor , setValor] =  useState(0);
  const [category ,  setCategory] =  useState('');
  const [type, setType] = useState('deposit');

  function handelCreateNewTransaction( event : FormEvent){
    event.preventDefault();
    console.log({
      title,
      valor,
      category
    })
  }


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
    
        <input 
          type='text' 
          placeholder='Titulo'
          value={title}
          onChange={event => setTitle(event.target.value)}
          
        />

        <input 
          type='number' 
          placeholder='Valor'
          value = {valor}
          onChange={event => setValor(Number(event.target.value))}
        />

        <TransactionTypeContainer>

          <RadioBox
            type='button'
            onClick={()=> setType('deposit')}
            isActive={type === 'deposit'}
            activeColor='green'
          >
            <img src={EntradaImg} alt='entradas'/>
            <span>Entrada</span>

          </RadioBox>
          
          <RadioBox
            type='button'
            onClick={()=> setType('withdraw')}
            isActive={type === 'withdraw'}
            activeColor='red'
          >
            <img src={SaidasImg} alt='Saidas'/>
            <span>Saidas</span>

          </RadioBox>

        </TransactionTypeContainer>

        <input 
          placeholder='Categoria'
          value={category}
          onChange={event => setCategory(event.target.value)}
        />

        <button type='submit' onClick={handelCreateNewTransaction}>Cadastrar</button>

      </Container>
       
  </Modal>
  );
}

