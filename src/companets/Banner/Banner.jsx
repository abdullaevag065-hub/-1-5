import './banner.css';
import big from '../../img/Layer 2 copy.png'

export default function Banner() {
  return (
    <div>

      <main className="hero">
        <div className="hero-content">
          <h1>Простые вещи.<br />Из бумаги</h1>
          <p>Бума́га (предположительно от итал. bombagia, первоисточником же считается иранский) — волокнистый материал с минеральными добавками.</p>          
          <button className='btn-catalog'>Каталог</button>
        </div>
        <div className="hero-image">
           <img src={big} alt="" />
        </div>
      </main>

    </div>
  )
}
