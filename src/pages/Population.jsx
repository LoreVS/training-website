import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function BisonDistribution() {
  return (
    <main className="container px-4 py-4">
      <div className="row">
        <aside className="col-md-3">
          <nav className="sticky-top pt-3" aria-label="Зміст сторінки">
            <h2 className="h4">Зміст</h2>
            <ul className="nav flex-column">
              <li className="nav-item">
                <a href="#regionsList" className="nav-link" data-bs-toggle="collapse">Регіони</a>
              </li>
              <li className="nav-item">
                <a href="#countriesList" className="nav-link" data-bs-toggle="collapse">Країни</a>
              </li>
              <li className="nav-item">
                <a href="#habitatsList" className="nav-link" data-bs-toggle="collapse">Місця існування</a>
              </li>
            </ul>
          </nav>
        </aside>

        <article className="col-md-9">
          <h2 className="h2 text-success mb-4">Ареал поширення зубрів</h2>

          <section id="regions" className="mt-4">
            <h3>
              <button className="btn btn-success w-100 text-start"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#regionsList"
                      aria-expanded="false"
                      aria-controls="regionsList">
                Регіони
              </button>
            </h3>
            <div className="collapse" id="regionsList">
              <ul className="list-group mb-3">
                <li className="list-group-item">Центральна Європа</li>
                <li className="list-group-item">Східна Європа</li>
              </ul>
            </div>
          </section>

          <section id="countries" className="mt-4">
            <h3>
              <button className="btn btn-success w-100 text-start"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#countriesList"
                      aria-expanded="false"
                      aria-controls="countriesList">
                Країни
              </button>
            </h3>
            <div className="collapse" id="countriesList">
              <ul className="list-group mb-3 list-columns">
                <li className="list-group-item">Польща</li>
                <li className="list-group-item">Україна</li>
                <li className="list-group-item">Білорусь</li>
                <li className="list-group-item">Румунія</li>
                <li className="list-group-item">Німеччина</li>
                <li className="list-group-item">Словаччина</li>
                <li className="list-group-item">Литва</li>
              </ul>
            </div>
          </section>

          <section id="habitats" className="mt-4">
            <h3>
              <button className="btn btn-success w-100 text-start"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#habitatsList"
                      aria-expanded="false"
                      aria-controls="habitatsList">
                Місця існування
              </button>
            </h3>
            <div className="collapse" id="habitatsList">
              <ul className="list-group">
                <li className="list-group-item">Листяні та мішані ліси</li>
                <li className="list-group-item">Луки поблизу лісів</li>
                <li className="list-group-item">Національні парки</li>
              </ul>
            </div>
          </section>
        </article>
      </div>
    </main>
  );
}

export default BisonDistribution;
