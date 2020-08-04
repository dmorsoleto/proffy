import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
     return (
          <article className="teacher-item">
               <header>
                    <img src="https://pbs.twimg.com/profile_images/1042181136720453632/yzc4rno0_400x400.jpg" alt="Daniel Morsoleto" />
                    <div>
                         <strong>Daniel Morsoleto</strong>
                         <span>Química</span>
                    </div>
               </header>
               <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    <br /><br />
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
               </p>
               <footer>
                    <p>
                         Preço/hora
                                   <strong>R$ 80.00</strong>
                    </p>
                    <button type="button">
                         <img src={whatsappIcon} alt="Whatsapp" />
                         Entrar em contato
                    </button>
               </footer>
          </article>
     )
}

export default TeacherItem;