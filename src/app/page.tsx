import Image from "next/image";

const products = [
  {
    name: "Świerk Ośnieżony",
    size: "180 cm",
    branches: "3 480",
    material: "100% PE",
    price: "569",
    oldPrice: "639",
    badge: "−11%",
    img: "/images/tree-snow.svg",
  },
  {
    name: "Świerk Królewski",
    size: "220 cm",
    branches: "5 920",
    material: "100% PE",
    price: "1 099",
    badge: "Bestseller",
    img: "/images/tree.svg",
  },
  {
    name: "Jodła Karolina",
    size: "180 cm",
    branches: "2 840",
    material: "100% PE",
    price: "259",
    badge: "Polska produkcja",
    img: "/images/tree.svg",
  },
];

const collections: [string, string, string, string][] = [
  ["I", "Jak żywe", "127 modeli", "od 119 zł"],
  ["II", "Śnieżone", "12 modeli", "od 459 zł"],
  ["III", "Na pniu", "34 modele", "od 299 zł"],
  ["IV", "Według wzrostu", "90–250 cm", "znajdź swój"],
];

const reviews = [
  {
    text: "\u201ENajbardziej naturalna choinka, jak\u0105 mieli\u015Bmy. Go\u015Bcie pytaj\u0105, gdzie j\u0105 kupili\u015Bmy.\u201D",
    author: "Anna K.",
    city: "Warszawa",
  },
  {
    text: "\u201EG\u0119sto\u015B\u0107 robi wra\u017Cenie. Roz\u0142o\u017Cyli\u015Bmy j\u0105 razem z dzie\u0107mi przed kolacj\u0105 wigilijn\u0105.\u201D",
    author: "Marek W.",
    city: "Gdańsk",
  },
  {
    text: "\u201EPi\u0119kna od pierwszej ga\u0142\u0105zki. I cena naprawd\u0119 uczciwa za t\u0119 jako\u015B\u0107.\u201D",
    author: "Karolina D.",
    city: "Kraków",
  },
];

function SectionTitle({
  eyebrow,
  children,
  light = false,
  center = false,
}: {
  eyebrow: string;
  children: React.ReactNode;
  light?: boolean;
  center?: boolean;
}) {
  return (
    <div className={`sec-title${center ? " sec-title--center" : ""}`}>
      <span className="sec-title__eyebrow">{eyebrow}</span>
      <div className="sec-title__rule" />
      <h2 className={`sec-title__heading${light ? " sec-title__heading--light" : ""}`}>
        {children}
      </h2>
    </div>
  );
}

function Plaque({
  name,
  size,
  branches,
  material,
  price,
}: {
  name: string;
  size: string;
  branches: string;
  material: string;
  price: string;
}) {
  return (
    <div className="plaque">
      <div className="plaque__top">
        <span className="plaque__name">{name}</span>
        <span className="plaque__dot" aria-hidden="true" />
        <span className="plaque__detail">{size}</span>
      </div>
      <div className="plaque__divider" />
      <div className="plaque__bottom">
        <span className="plaque__specs">
          {branches} gałązek · {material}
        </span>
        <span className="plaque__price">{price} zł</span>
      </div>
    </div>
  );
}

function ArrowSvg() {
  return (
    <svg
      width="16"
      height="12"
      viewBox="0 0 16 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.96 4.98C12.81 4.98 10.86 3.03 10.86.88V0H9.1v.88c0 1.56.68 3.03 1.76 4.1H0v1.76h10.86A6.87 6.87 0 009.1 10.84v.88h1.76v-.88c0-2.15 1.95-4.1 4.1-4.1h.88V4.98h-.88Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      {/* ═══ ANNONCE ═══ */}
      <div className="announcement" role="marquee">
        <span>★</span> Zamów do 18 grudnia — pod choinką przed Wigilią{" "}
        <span>★</span>
      </div>

      {/* ═══ HEADER ═══ */}
      <header className="header">
        <div className="header__inner">
          <a className="logo" href="#" aria-label="Idealna Choinka — strona główna">
            Idealna <em>Choinka</em>
          </a>
          <nav className="header__nav" aria-label="Główna nawigacja">
            <a href="#kolekcje">Kolekcje</a>
            <a href="#jakosc">Jakość</a>
            <a href="#bestsellery">Bestsellery</a>
            <a href="#rozmiary">Rozmiary</a>
            <a href="#kontakt">Kontakt</a>
          </nav>
          <a className="btn btn--gold header__cta" href="#konfigurator">
            Wybierz choinkę <ArrowSvg />
          </a>
        </div>
      </header>

      {/* ═══ HERO ═══ */}
      <section className="hero" aria-labelledby="hero-heading">
        <div className="hero__bg">
          <Image
            src="/images/interior.svg"
            alt=""
            fill
            priority
            sizes="100vw"
          />
          <div className="hero__overlay" />
        </div>

        <div className="hero__content">
          <div className="hero__text">
            <div className="hero__stars" aria-label="5 gwiazdek jakości">
              {"★★★★★".split("").map((s, i) => (
                <span key={i}>{s}</span>
              ))}
            </div>
            <h1 id="hero-heading" className="hero__h1">
              Klejnot, który <em>ubiera się</em>
              <br />
              raz w roku.
            </h1>
            <p className="hero__sub">
              Najgęstsze igliwie. Najuczciwsza cena. Choinka, która każdego
              grudnia wygląda jak pierwszego dnia.
            </p>
            <a className="btn btn--gold" href="#bestsellery">
              Poznaj Świerk Królewski <ArrowSvg />
            </a>
          </div>

          <div className="hero__showcase">
            <div className="showcase-arch">
              <div className="showcase-arch__glow" aria-hidden="true" />
              <Image
                src="/images/tree.svg"
                alt="Świerk Królewski 220 cm — choinka sztuczna premium"
                width={300}
                height={400}
                priority
                className="showcase-arch__img"
              />
            </div>
            <Plaque
              name="Świerk Królewski"
              size="220 cm"
              branches="5 920"
              material="100% PE"
              price="1 099"
            />
          </div>
        </div>
      </section>

      {/* ═══ CONFIGURATEUR ═══ */}
      <section className="configurator-section" id="konfigurator" aria-label="Konfigurator choinki">
        <div className="configurator">
          <div className="configurator__inner">
            <div className="configurator__field">
              <label htmlFor="cfg-height">Wysokość sufitu</label>
              <select id="cfg-height" defaultValue="">
                <option value="" disabled>Wybierz</option>
                <option>do 220 cm</option>
                <option>220–260 cm</option>
                <option>powyżej 260 cm</option>
              </select>
            </div>
            <div className="configurator__field">
              <label htmlFor="cfg-char">Charakter</label>
              <select id="cfg-char" defaultValue="">
                <option value="" disabled>Jak ma wyglądać?</option>
                <option>Jak żywa</option>
                <option>Śnieżona</option>
                <option>Na pniu</option>
              </select>
            </div>
            <div className="configurator__field">
              <label htmlFor="cfg-budget">Budżet</label>
              <select id="cfg-budget" defaultValue="">
                <option value="" disabled>Przedział cenowy</option>
                <option>do 300 zł</option>
                <option>300–700 zł</option>
                <option>powyżej 700 zł</option>
              </select>
            </div>
            <div className="configurator__submit">
              <a className="btn btn--gold btn--full" href="#bestsellery">
                Dobierz <ArrowSvg />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ MANIFESTO ═══ */}
      <section className="manifesto">
        <div className="manifesto__inner">
          <SectionTitle eyebrow="IDEALNA CHOINKA" center>
            Luksus w <span className="gold">uczciwej</span> cenie.
          </SectionTitle>
          <div className="manifesto__grid">
            <div className="manifesto__stat">
              <strong>178</strong>
              <span>modeli do wyboru</span>
            </div>
            <div className="manifesto__stat">
              <strong>5 920</strong>
              <span>gałązek w najgęstszym modelu</span>
            </div>
            <div className="manifesto__stat">
              <strong>24 h</strong>
              <span>wysyłka z Polski</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ COLLECTIONS ═══ */}
      <section className="collections" id="kolekcje">
        <div className="collections__inner">
          <SectionTitle eyebrow="ZNAJDŹ SWOJĄ FORMĘ">
            Cztery <span className="gold">gabloty</span>.
          </SectionTitle>
          <div className="collections__grid">
            {collections.map(([num, title, count, from]) => (
              <a className="cabinet" href="#bestsellery" key={title}>
                <span className="cabinet__num">{num}</span>
                <div className="cabinet__content">
                  <h3 className="cabinet__title">{title}</h3>
                  <p className="cabinet__count">{count}</p>
                  <span className="cabinet__from">{from}</span>
                </div>
                <span className="cabinet__arrow">
                  <ArrowSvg />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ VIDEO ═══ */}
      <section className="video-section" aria-label="Film o montażu">
        <Image
          src="/images/interior.svg"
          alt=""
          fill
          sizes="100vw"
          className="video-section__bg"
        />
        <div className="video-section__overlay" />
        <div className="video-section__content">
          <span className="sec-title__eyebrow">BEZ NARZĘDZI · BEZ STRESU</span>
          <h2 className="video-section__title">
            Od kartonu do klejnotu
            <br />— w pięć minut.
          </h2>
          <button
            className="play-btn"
            aria-label="Odtwórz film o montażu choinki"
          >
            <span className="play-btn__ring" />
            <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
          <span className="video-section__label">Obejrzyj montaż</span>
        </div>
      </section>

      {/* ═══ QUALITÉ ═══ */}
      <section className="quality" id="jakosc">
        <div className="quality__inner">
          <div className="quality__image">
            <Image
              src="/images/branch.svg"
              alt="Makro gałązki choinki ze 100% PE"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>
          <div className="quality__copy">
            <SectionTitle eyebrow="CO ZOSTAJE Z TOBĄ NA LATA">
              Prawdziwe piękno zaczyna się{" "}
              <span className="gold">od gałązki</span>.
            </SectionTitle>
            <dl className="specs-table">
              <div className="specs-table__row">
                <dt>Igliwie</dt>
                <dd>100% PE</dd>
              </div>
              <div className="specs-table__row">
                <dt>Gęstość</dt>
                <dd>do 5 920 gałązek</dd>
              </div>
              <div className="specs-table__row">
                <dt>Montaż</dt>
                <dd>5 min · zawiasy</dd>
              </div>
              <div className="specs-table__row">
                <dt>Bezpieczeństwo</dt>
                <dd>atest ognioodporności</dd>
              </div>
              <div className="specs-table__row">
                <dt>Produkcja</dt>
                <dd>Polska</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* ═══ BESTSELLERS ═══ */}
      <section className="bestsellers" id="bestsellery">
        <div className="bestsellers__inner">
          <SectionTitle eyebrow="WYBÓR NASZYCH KLIENTÓW" center>
            Najczęściej <span className="gold">wybierane</span>.
          </SectionTitle>
          <div className="product-grid">
            {products.map((p) => (
              <article className="product-card" key={p.name}>
                <div className="product-card__image">
                  <span className="product-card__badge">{p.badge}</span>
                  <Image src={p.img} alt={`${p.name} ${p.size}`} fill sizes="(max-width:700px) 100vw, 33vw" />
                  <a href="#kontakt" className="product-card__cta">
                    Zobacz model <ArrowSvg />
                  </a>
                </div>
                <Plaque name={p.name} size={p.size} branches={p.branches} material={p.material} price={p.price} />
                <div className="product-card__pricing">
                  {p.oldPrice && (
                    <div className="product-card__old">
                      <del>{p.oldPrice} zł</del>
                      <small>Najniższa cena z 30 dni: {p.oldPrice} zł</small>
                    </div>
                  )}
                  <span className="product-card__price">{p.price} zł</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ LOOKBOOK ═══ */}
      <section className="lookbook" id="rozmiary">
        <div className="lookbook__inner">
          <SectionTitle eyebrow="ZOBACZ GO U SIEBIE">
            Grudzień ma swój <span className="gold">blask</span>.
          </SectionTitle>
          <div className="lookbook__grid">
            <figure className="lookbook__main">
              <Image src="/images/interior.svg" alt="Wysoka choinka w salonie" fill sizes="(max-width:700px) 100vw, 48vw" />
            </figure>
            {[
              "Śnieżona choinka w jadalni",
              "Detal ozdób na gałązce PE",
              "Choinka na pniu w holu",
              "Wieczór przy oświetlonej choince",
            ].map((alt, i) => (
              <figure className="lookbook__thumb" key={alt}>
                <Image src={i % 2 ? "/images/branch.svg" : "/images/interior.svg"} alt={alt} fill sizes="(max-width:700px) 50vw, 25vw" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ AVIS ═══ */}
      <section className="testimonials">
        <div className="testimonials__header">
          <div className="testimonials__header-inner">
            <SectionTitle eyebrow="GŁOSY PRZY WITRYNIE" light>
              Domy, które wracają <span className="gold">co roku</span>.
            </SectionTitle>
            <div className="testimonials__counter">
              <strong>2 400+</strong>
              <span>zadowolonych klientów</span>
            </div>
          </div>
        </div>
        <div className="testimonials__body">
          <div className="testimonials__grid">
            {reviews.map((r) => (
              <blockquote className="review-card" key={r.author}>
                <div className="review-card__stars" aria-label="5 na 5 gwiazdek">
                  ★★★★★
                </div>
                <p className="review-card__text">{r.text}</p>
                <footer className="review-card__footer">
                  <strong>{r.author}</strong>
                  <span>{r.city}</span>
                  <small>Zweryfikowana opinia · TrustMate</small>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ USP BAR ═══ */}
      <section className="usp" aria-label="Korzyści zakupowe">
        {[
          ["📦", "Wysyłka 24 h", "InPost · DPD"],
          ["↩", "14 dni na zwrot", "bez pytań"],
          ["🛡", "Atest ppoż.", "bezpieczeństwo domu"],
          ["🏭", "Polska produkcja", "od 1998 roku"],
        ].map(([icon, title, desc]) => (
          <div className="usp__item" key={title}>
            <span className="usp__icon">{icon}</span>
            <div>
              <strong>{title}</strong>
              <small>{desc}</small>
            </div>
          </div>
        ))}
      </section>

      {/* ═══ NEWSLETTER ═══ */}
      <section className="newsletter" id="kontakt">
        <Image
          src="/images/interior.svg"
          alt=""
          fill
          sizes="100vw"
          className="newsletter__bg"
        />
        <div className="newsletter__overlay" />
        <div className="newsletter__inner">
          <div className="newsletter__copy">
            <SectionTitle eyebrow="LISTA PIERWSZEGO WYBORU" light>
              Pierwsi przy <span className="gold">witrynie</span>.
            </SectionTitle>
            <p>
              Nowe kolekcje, powroty bestsellerów i grudniowe inspiracje — zanim
              znikną.
            </p>
          </div>
          <form className="newsletter__form">
            <label className="sr-only" htmlFor="nl-email">
              Adres e-mail
            </label>
            <input
              id="nl-email"
              type="email"
              placeholder="Twój adres e-mail"
              required
            />
            <button className="btn btn--gold" type="submit">
              Dołącz <ArrowSvg />
            </button>
          </form>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="footer">
        <div className="footer__inner">
          <div className="footer__brand">
            <a className="logo" href="#">
              Idealna <em>Choinka</em>
            </a>
            <p>Choinki stworzone, by zostawać w rodzinie na lata.</p>
            <div className="footer__social">
              <a href="#" aria-label="Facebook">f</a>
              <a href="#" aria-label="Instagram">ig</a>
              <a href="#" aria-label="TikTok">tk</a>
            </div>
          </div>
          <div className="footer__col">
            <h3>Choinki</h3>
            <a href="#kolekcje">Jak żywe</a>
            <a href="#kolekcje">Śnieżone</a>
            <a href="#kolekcje">Na pniu</a>
            <a href="#kolekcje">Według wzrostu</a>
          </div>
          <div className="footer__col">
            <h3>Pomoc</h3>
            <a href="#jakosc">Jakość i atesty</a>
            <a href="#kontakt">Dostawa i zwroty</a>
            <a href="#kontakt">Kontakt</a>
            <a href="#">Regulamin</a>
          </div>
          <div className="footer__col">
            <h3>Bezpieczne płatności</h3>
            <div className="footer__payments">
              <span>BLIK</span>
              <span>Przelewy24</span>
              <span>InPost Pay</span>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <small>© 2026 Idealna Choinka · Wszystkie prawa zastrzeżone</small>
        </div>
      </footer>
    </>
  );
}
