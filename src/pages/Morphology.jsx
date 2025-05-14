function Morphology() {
  return (
    <main className="container px-4 py-4">
      <article>
        <section>
          <h3 className="h3 text-success">Зовнішній вигляд</h3>
          <p>Зубри — це великі, масивні тварини з густим темно-коричневим хутром. Вони мають широку голову, коротку шию та потужне тіло. У самців добре виражена грива на шиї та грудях.</p>
        </section>
        <section>
          <h3 className="h3 text-success">Особливості будови</h3>
          <ul>
            <li>Довжина тіла — 2,7–3,3 м, висота в холці — до 2 м, маса — 400–920 кг.</li>
            <li>Передня частина тіла розвинена сильніше, ніж задня, через потужні м’язи та масивну грудну клітку.</li>
            <li>Шерсть густа, особливо на передній частині тулуба; взимку утворюється щільний підшерсток.</li>
            <li>Роги короткі, загнуті догори і трохи всередину; довжина рогів становить приблизно 50–85 см у самців.</li>
          </ul>
        </section>
        <figure className="text-center">
          <img 
            src="/images/zubr4.webp" 
            alt="Зубр у природі" 
            className="rounded my-4"
            style={{maxWidth: '800px'}}
          />
          <figcaption className="text-muted">Європейський зубр у природному середовищі</figcaption>
        </figure>
      </article>
    </main>
  );
}

export default Morphology;
