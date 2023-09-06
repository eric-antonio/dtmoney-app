import React, { useState } from 'react';

import Modal from 'react-modal';

import logoImg from '../../assets/Logo.svg'
import { Container , Content } from './styles';


export function Header(){

    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

    function handelNewOpenTransactionModal(){
        setIsNewTransactionModalOpen(true);

    }

    function handelCloseTransactionModal(){
        setIsNewTransactionModalOpen(false);
    }
    return(
        <Container>
            <Content>
                <img src={logoImg} alt='Dt money'/>
                <button type='button' onClick={handelNewOpenTransactionModal}>
                    Nova Transação 
                </button>

                <Modal isOpen={isNewTransactionModalOpen}>
                    <h2>Cadastrar Transação</h2>
                </Modal>
            </Content>

        </Container>
    )
}