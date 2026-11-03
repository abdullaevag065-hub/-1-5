import '../desu.css';

export default function DesuCard({img, span, p}) {
  return (

          <div className="edu-versions">
            <div className="version-card">
              <div className="version-preview">
                <img src={img} alt="Вариант 1" className="version-img" />
              </div>
              <div className="version-info">
                <span className="version-num">{span}</span>
                <p className="version-text">{p}</p>
              </div>
            </div>
           </div>

  )
}
