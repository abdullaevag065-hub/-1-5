import '../products.css';

export default function ProductsCard({img , span, h3, p, a}) {
  return (
          <div className="catalog-grid">
            

            <div className="catalog-card">
              <div className="catalog-img-wrapper">
                <img src={img} alt="Упаковка" className="catalog-img" />
                <div className="catalog-content">
                <h3>{h3}</h3>
                <span className="catalog-tirazh">{span}</span>
                <p className="catalog-text">{p}</p>
                <a href="#" className="catalog-link">{a} &rarr;</a>
              </div>
              </div>
            </div>

        </div>
  )
}
