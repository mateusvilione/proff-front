import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/15036533?s=400&u=ea75fea078378fa2361e8731679215297063c66c&v=4" alt="Avatar" />
                <div>
                    <strong>Mateus Vilione</strong>
                    <span>lorem</span>
                </div>
            </header>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <footer>
                <p>Preço/Hora <strong>R$ 50,00</strong> </p>
                <button type="button"> 
                    <img src={whatsappIcon} alt="contato" />
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;