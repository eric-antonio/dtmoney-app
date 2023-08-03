import React from "react";
import { Container } from "./styles";

import IncomeImg from '../../assets/IconUp.svg';
import OutcomeImg from '../../assets/IconDown.svg';
import DollarImg from '../../assets/IconDollar.svg'
export function Summary(){
    return(
        <Container>
            <div>
                <header>
                    <p>Entrada</p>
                    <img src={IncomeImg} alt=""/>
                </header>
                <strong>R$17.400,00</strong>
            </div>

            <div>
                <header>
                    <p>Entrada</p>
                    <img src={OutcomeImg} alt=""/>
                </header>
                <strong>R$1.259,00</strong>
            </div>

            <div>
                <header>
                    <p>Total</p>
                    <img src={DollarImg} alt=""/>
                </header>
                <strong>R$16.141,00</strong>
            </div>

        </Container>
    )
}