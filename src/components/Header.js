/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from '../images/logo.png';
import whatsApp from '../images/whatsApp.png';
import telegram from '../images/telegram.png';

export function Header (){
  return (
    <header className='header'>
      <div className='header__menu'>
        <a className='header__menu_link' href='#'>
          Правила
        </a>
        <a className='header__menu_link' href='#'>
          Тарифы
        </a>
        <a className='header__menu_link' href='#'>
          Контакты
        </a>
      </div>
      <a className='header__logo-link' href='#'>
        <img className='header__logo' src={logo} alt='Логотип' />
      </a>
      <div className='header__contacts'>
        <div className='header__contacts_container'>
          <p className='header__contacts_number'>
            +7 499 408 47 70
          </p>
          <p className='header__contacts_time'>
            ежедневно с 08:00 до 20:00
          </p>
        </div>
        <div className='header__contacts-icons'>
          <a className='header__contacts-link' href='#'>
            <img className='header__icons' src={whatsApp} alt='Иконка WhatsApp' />
          </a>
          <a className='header__contacts-link' href='#'>
            <img className='header__icons' src={telegram} alt='Иконка Telegram' />
          </a>
        </div>
      </div>
    </header>
  );
};

