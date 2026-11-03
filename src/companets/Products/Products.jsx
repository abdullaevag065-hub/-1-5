import './products.css';
import p1 from '../../img/P1.png'
import p2 from '../../img/P2.png'
import p3 from '../../img/P3.png'
import p4 from '../../img/P4.png'
import ProductsCard from './ui/ProductsCard';


export default function Products() {
  return (
    <div>
        
    <section className="catalog-section">
      <div className="catalog-grid">
        <ProductsCard img={p1} h3="Упаковка" span="Тираж: от 50 штук" p="Сделано из крафт-бумаги или плотного картона. Упаковки имеют различные формы и расцветки, изготовим форму под заказ." a="Подробнее"/>
        <ProductsCard img={p2} h3="Пакеты" span="Тираж: от 200 штук" p=" С прямоугольным дном. От 10 см до 60 см по высоте. Материалы: картон, крафт-бумага. Различные расцветки и дизайн." a="Подробнее "/>
        <ProductsCard img={p3} h3="Кейсы" span="Тираж: от 30 штук" p="Подойдет для документов и других бумаг. Различные расцветки, размеры и плотность. Материал: прессованная бумага." a="Подробнее"/>
        <ProductsCard img={p4} h3="Другие изделия" span="Тираж: от 100 штук" p="Нестандартные упаковки, кейсы и другие изделия различных размеров и конфигураций. Изготовим в кратчайшие сроки." a="Подробнее"/>
      </div>
    </section>


    </div>
  )
}
