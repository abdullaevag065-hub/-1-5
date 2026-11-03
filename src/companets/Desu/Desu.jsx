import './desu.css';
import v1 from '../../img/V1.png'
import v2 from '../../img/V2.png'
import v3 from '../../img/V3.png'
import BigV from '../../img/bigV.png'
import DesuCard from './ui/DesuCard';

export default function Desu() {
  return (
    <div>


    <section className="edu-section">

        <div className='cont'>
            <DesuCard img={v1} span="V.1"  p="Результат вашего обучения"/>
            <DesuCard img={v2} span="V.2"  p="Результат вашего обучения"/>
            <DesuCard img={v3} span="V.3"  p="Результат вашего обучения"/>

        </div>



      <div className="edu-main-content">
        <div className="edu-image-container">
          <img src={BigV} alt="Развертка коробки" className="main-edu-img" />
        </div>

        <div className="edu-text-container">
          <h2>Максимальная белизна</h2>
          <div className="edu-description">
            <p>
              Для повышения белизны, гладкости и мягкости в состав бумажной массы вводят 
              белые минеральные вещества: мел, тальк, каолин и др. Эта операция называется 
              наполнением.
            </p>
            <p>
              Отлив бумажного листа осуществляют на бумагоделательной машине, важнейшей частью 
              которой является непрерывно движущаяся (как транспортер) металлическая или капроновая сетка.
            </p>
          </div>
        </div>
      </div>
    </section>


  
    </div>
  )
}
