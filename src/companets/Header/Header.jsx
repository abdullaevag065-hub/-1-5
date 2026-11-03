import './header.css';
import logo from '../../img/N1.png'
import search from '../../img/Search.png'
import login from '../../img/log_in.svg'

export default function Header() {
  return (
    <div>
      <header>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <nav>
          <a href="#">Продукция</a>
          <a href="#">Материалы</a>
          <a href="#">О нас</a>
          <a href="#">Контакты</a>
          <div className="nav-icons">
          <img src={search} alt="" />
          <img src={login} alt="" />  
          </div>
        </nav>
      </header>

    </div>
  );
}

