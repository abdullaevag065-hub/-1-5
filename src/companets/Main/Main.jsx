import './main.css';
import a1 from '../../img/A1.png'
import a2 from '../../img/A2.png'
import a3 from '../../img/A3.png'
import a4 from '../../img/A4.png'
import q from '../../img/pic.png'
import logo1 from '../../img/Frame 85 (5).svg'
import icon from '../../img/Frame 199.svg'


export default function Main() {
  return (
    <div>
        <section class="brands-section">
            <div class="container">
            <div class="brands-grid">
                
                <img src={a1} alt="" />
                
                 <img src={a2} alt="" />   
                
                 <img src={a3} alt="" />   
            
                   <img src={a4} alt="" /> 
            </div>
            </div>
        </section>

        <section class="product-section">
            <div class="container product-container">
            <div class="product-info">
                <h1 class="product-title">Simple скетчбук</h1>
                <p class="product-description">
                80 листов, твердая обложка, бумага Fabriano 200 г/м². Подойдет и для графики и для акварели. Для самых смелых творческих замыслов!
                </p>
                <button class="buy-btn">Купить</button>
            </div>
            <div class="product-image-wrapper">
                <img src={q} alt="" />
            </div>
            </div>
        </section>

        <footer class="footer">
            <div class="container footer-container">
            
                <img src={logo1} alt="" />
            
            <div class="social-links">
                <img src={icon} alt="" />
            </div>
            </div>
        </footer>
    </div>
  )
}

// console.log('123');
// console.log('123');
