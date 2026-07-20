import Image from "next/image";
import {
  Truck,
  RotateCcw,
  ShieldCheck,
  Factory,
  Play,
  ArrowRight,
  Star,
  ChevronDown,
} from "lucide-react";
import { Reveal, RevealStagger, RevealItem } from "@/components/reveal";
import { HeroGlow, PlayRing } from "@/components/hero-glow";

/* ═══ DATA ═══ */

const products = [
  {
    name: "\u015Awierk O\u015Bnie\u017Cony",
    size: "180 cm",
    branches: "3 480",
    material: "100% PE",
    price: "569",
    oldPrice: "639",
    badge: "\u221211%",
    img: "/images/tree-snow.svg",
  },
  {
    name: "\u015Awierk Kr\u00F3lewski",
    size: "220 cm",
    branches: "5 920",
    material: "100% PE",
    price: "1 099",
    badge: "Bestseller",
    img: "/images/tree.svg",
  },
  {
    name: "Jod\u0142a Karolina",
    size: "180 cm",
    branches: "2 840",
    material: "100% PE",
    price: "259",
    badge: "Polska produkcja",
    img: "/images/tree.svg",
  },
];

const collections: [string, string, string, string][] = [
  ["I", "Jak \u017Cywe", "127 modeli", "od 119 z\u0142"],
  ["II", "\u015Anie\u017Cone", "12 modeli", "od 459 z\u0142"],
  ["III", "Na pniu", "34 modele", "od 299 z\u0142"],
  ["IV", "Wed\u0142ug wzrostu", "90\u2013250 cm", "znajd\u017A sw\u00F3j"],
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
    city: "Gda\u0144sk",
  },
  {
    text: "\u201EPi\u0119kna od pierwszej ga\u0142\u0105zki. I cena naprawd\u0119 uczciwa za t\u0119 jako\u015B\u0107.\u201D",
    author: "Karolina D.",
    city: "Krak\u00F3w",
  },
];

const usps = [
  { icon: Truck, title: "Wysy\u0142ka 24 h", desc: "InPost \u00B7 DPD" },
  { icon: RotateCcw, title: "14 dni na zwrot", desc: "bez pyta\u0144" },
  { icon: ShieldCheck, title: "Atest ppo\u017C.", desc: "bezpiecze\u0144stwo domu" },
  { icon: Factory, title: "Polska produkcja", desc: "od 1998 roku" },
];

/* ═══ SHARED COMPONENTS ═══ */

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
      <span className="sec-title__rule" aria-hidden="true" />
      <h2
        className={`sec-title__heading${light ? " sec-title__heading--light" : ""}`}
      >
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
          {branches} ga\u0142\u0105zek \u00B7 {material}
        </span>
        <span className="plaque__price">{price} z\u0142</span>
      </div>
    </div>
  );
}

function GoldArrow() {
  return <ArrowRight className="size-4" aria-hidden="true" />;
}

/* ═══ PAGE ═══ */

export default function Home() {
  return (
    <>
      {/* ── ANNONCE ── */}
      <div className="announcement" role="marquee">
        <Star className="size-3 inline-block opacity-50" aria-hidden="true" />{" "}
        Zam\u00F3w do 18 grudnia \u2014 pod choink\u0105 przed Wigili\u0105{" "}
        <Star className="size-3 inline-block opacity-50" aria-hidden="true" />
      </div>

      {/* ── HEADER ── */}
      <header className="header">
        <div className="header__inner">
          <a
            className="logo"
            href="#"
            aria-label="Idealna Choinka \u2014 strona g\u0142\u00F3wna"
          >
            Idealna <em>Choinka</em>
          </a>
          <nav className="header__nav" aria-label="G\u0142\u00F3wna nawigacja">
            <a href="#kolekcje">Kolekcje</a>
            <a href="#jakosc">Jako\u015B\u0107</a>
            <a href="#bestsellery">Bestsellery</a>
            <a href="#rozmiary">Rozmiary</a>
            <a href="#kontakt">Kontakt</a>
          </nav>
          <a className="btn btn--gold header__cta" href="#konfigurator">
            <span>Wybierz choink\u0119</span> <GoldArrow />
          </a>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="hero" aria-labelledby="hero-heading">
        <div className="hero__bg">
          <Image src="/images/interior.svg" alt="" fill priority sizes="100vw" />
          <div className="hero__overlay" />
        </div>

        <div className="hero__content">
          <Reveal className="hero__text">
            <div className="hero__stars" aria-label="5 gwiazdek jako\u015Bci">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="size-4" fill="currentColor" />
              ))}
            </div>
            <h1 id="hero-heading" className="hero__h1">
              Klejnot, kt\u00F3ry{" "}
              <em>ubiera si\u0119</em>
              <br />
              raz w roku.
            </h1>
            <p className="hero__sub">
              Najg\u0119stsze igliwie. Najuczciwsza cena. Choinka, kt\u00F3ra
              ka\u017Cdego grudnia wygl\u0105da jak pierwszego dnia.
            </p>
            <a className="btn btn--gold" href="#bestsellery">
              <span>Poznaj \u015Awierk Kr\u00F3lewski</span> <GoldArrow />
            </a>
          </Reveal>

          <Reveal className="hero__showcase" delay={0.3} y={60}>
            <div className="showcase-arch">
              <HeroGlow />
              <Image
                src="/images/tree.svg"
                alt="\u015Awierk Kr\u00F3lewski 220 cm \u2014 choinka sztuczna premium"
                width={300}
                height={400}
                priority
                className="showcase-arch__img"
              />
            </div>
            <Plaque
              name="\u015Awierk Kr\u00F3lewski"
              size="220 cm"
              branches="5 920"
              material="100% PE"
              price="1 099"
            />
          </Reveal>
        </div>

        <div className="hero__scroll-hint" aria-hidden="true">
          <span>ZOBACZ, CO ROBI R\u00D3\u017BNIC\u0118</span>
          <ChevronDown className="size-4" />
        </div>
      </section>

      {/* ── CONFIGURATEUR ── */}
      <section
        className="configurator-section"
        id="konfigurator"
        aria-label="Konfigurator choinki"
      >
        <Reveal y={30}>
          <div className="configurator">
            <div className="configurator__inner">
              <div className="configurator__field">
                <label htmlFor="cfg-h">Wysoko\u015B\u0107 sufitu</label>
                <select id="cfg-h" defaultValue="">
                  <option value="" disabled>
                    Wybierz
                  </option>
                  <option>do 220 cm</option>
                  <option>220\u2013260 cm</option>
                  <option>powy\u017Cej 260 cm</option>
                </select>
              </div>
              <div className="configurator__field">
                <label htmlFor="cfg-c">Charakter</label>
                <select id="cfg-c" defaultValue="">
                  <option value="" disabled>
                    Jak ma wygl\u0105da\u0107?
                  </option>
                  <option>Jak \u017Cywa</option>
                  <option>\u015Anie\u017Cona</option>
                  <option>Na pniu</option>
                </select>
              </div>
              <div className="configurator__field">
                <label htmlFor="cfg-b">Bud\u017Cet</label>
                <select id="cfg-b" defaultValue="">
                  <option value="" disabled>
                    Przedzia\u0142 cenowy
                  </option>
                  <option>do 300 z\u0142</option>
                  <option>300\u2013700 z\u0142</option>
                  <option>powy\u017Cej 700 z\u0142</option>
                </select>
              </div>
              <div className="configurator__submit">
                <a className="btn btn--gold btn--full" href="#bestsellery">
                  <span>Dobierz</span> <GoldArrow />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── MANIFESTO ── */}
      <section className="manifesto">
        <div className="manifesto__inner">
          <Reveal>
            <SectionTitle eyebrow="IDEALNA CHOINKA" center>
              Luksus w <span className="gold">uczciwej</span> cenie.
            </SectionTitle>
          </Reveal>
          <RevealStagger className="manifesto__grid">
            {[
              ["178", "modeli do wyboru"],
              ["5 920", "ga\u0142\u0105zek w najg\u0119stszym modelu"],
              ["24 h", "wysy\u0142ka z Polski"],
            ].map(([num, label]) => (
              <RevealItem className="manifesto__stat" key={num}>
                <strong>{num}</strong>
                <span>{label}</span>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* ── COLLECTIONS ── */}
      <section className="collections" id="kolekcje">
        <div className="collections__inner">
          <Reveal>
            <SectionTitle eyebrow="ZNAJD\u0179 SWOJ\u0104 FORM\u0118">
              Cztery <span className="gold">gabloty</span>.
            </SectionTitle>
          </Reveal>
          <RevealStagger className="collections__grid">
            {collections.map(([num, title, count, from]) => (
              <RevealItem key={title}>
                <a className="cabinet" href="#bestsellery">
                  <span className="cabinet__num">{num}</span>
                  <div className="cabinet__content">
                    <h3 className="cabinet__title">{title}</h3>
                    <p className="cabinet__count">{count}</p>
                    <span className="cabinet__from">{from}</span>
                  </div>
                  <span className="cabinet__arrow">
                    <ArrowRight className="size-5" />
                  </span>
                </a>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* ── VIDEO ── */}
      <section className="video-section" aria-label="Film o monta\u017Cu">
        <Image
          src="/images/interior.svg"
          alt=""
          fill
          sizes="100vw"
          className="video-section__bg"
        />
        <div className="video-section__overlay" />
        <Reveal className="video-section__content">
          <span className="sec-title__eyebrow">
            BEZ NARZ\u0118DZI \u00B7 BEZ STRESU
          </span>
          <h2 className="video-section__title">
            Od kartonu do klejnotu
            <br />
            \u2014 w pi\u0119\u0107 minut.
          </h2>
          <button
            className="play-btn"
            aria-label="Odtw\u00F3rz film o monta\u017Cu choinki"
          >
            <PlayRing />
            <Play className="size-7" fill="currentColor" />
          </button>
          <span className="video-section__label">Obejrzyj monta\u017C</span>
        </Reveal>
      </section>

      {/* ── QUALITÉ ── */}
      <section className="quality" id="jakosc">
        <div className="quality__inner">
          <Reveal className="quality__image">
            <Image
              src="/images/branch.svg"
              alt="Makro ga\u0142\u0105zki choinki ze 100% PE"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </Reveal>
          <Reveal className="quality__copy" delay={0.2}>
            <SectionTitle eyebrow="CO ZOSTAJE Z TOB\u0104 NA LATA">
              Prawdziwe pi\u0119kno zaczyna si\u0119{" "}
              <span className="gold">od ga\u0142\u0105zki</span>.
            </SectionTitle>
            <dl className="specs-table">
              {[
                ["Igliwie", "100% PE"],
                ["G\u0119sto\u015B\u0107", "do 5 920 ga\u0142\u0105zek"],
                ["Monta\u017C", "5 min \u00B7 zawiasy"],
                ["Bezpiecze\u0144stwo", "atest ognioodporno\u015Bci"],
                ["Produkcja", "Polska"],
              ].map(([dt, dd]) => (
                <div className="specs-table__row" key={dt}>
                  <dt>{dt}</dt>
                  <dd>{dd}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* ── BESTSELLERS ── */}
      <section className="bestsellers" id="bestsellery">
        <div className="bestsellers__inner">
          <Reveal>
            <SectionTitle eyebrow="WYB\u00D3R NASZYCH KLIENT\u00D3W" center>
              Najcz\u0119\u015Bciej <span className="gold">wybierane</span>.
            </SectionTitle>
          </Reveal>
          <RevealStagger className="product-grid">
            {products.map((p) => (
              <RevealItem key={p.name}>
                <article className="product-card">
                  <div className="product-card__image">
                    <span className="product-card__badge">{p.badge}</span>
                    <Image
                      src={p.img}
                      alt={`${p.name} ${p.size}`}
                      fill
                      sizes="(max-width:700px) 100vw, 33vw"
                    />
                    <a href="#kontakt" className="product-card__cta">
                      <span>Zobacz model</span> <GoldArrow />
                    </a>
                  </div>
                  <Plaque
                    name={p.name}
                    size={p.size}
                    branches={p.branches}
                    material={p.material}
                    price={p.price}
                  />
                  <div className="product-card__pricing">
                    {p.oldPrice && (
                      <div className="product-card__old">
                        <del>{p.oldPrice} z\u0142</del>
                        <small>
                          Najni\u017Csza cena z 30 dni: {p.oldPrice} z\u0142
                        </small>
                      </div>
                    )}
                    <span className="product-card__price">{p.price} z\u0142</span>
                  </div>
                </article>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* ── LOOKBOOK ── */}
      <section className="lookbook" id="rozmiary">
        <div className="lookbook__inner">
          <Reveal>
            <SectionTitle eyebrow="ZOBACZ GO U SIEBIE">
              Grudzie\u0144 ma sw\u00F3j <span className="gold">blask</span>.
            </SectionTitle>
          </Reveal>
          <RevealStagger className="lookbook__grid">
            <RevealItem>
              <figure className="lookbook__main">
                <Image
                  src="/images/interior.svg"
                  alt="Wysoka choinka w salonie"
                  fill
                  sizes="(max-width:700px) 100vw, 48vw"
                />
              </figure>
            </RevealItem>
            {[
              "\u015Anie\u017Cona choinka w jadalni",
              "Detal ozd\u00F3b na ga\u0142\u0105zce PE",
              "Choinka na pniu w holu",
              "Wiecz\u00F3r przy o\u015Bwietlonej choince",
            ].map((alt, i) => (
              <RevealItem key={alt}>
                <figure className="lookbook__thumb">
                  <Image
                    src={i % 2 ? "/images/branch.svg" : "/images/interior.svg"}
                    alt={alt}
                    fill
                    sizes="(max-width:700px) 50vw, 25vw"
                  />
                </figure>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* ── AVIS ── */}
      <section className="testimonials">
        <div className="testimonials__header">
          <div className="testimonials__header-inner">
            <Reveal>
              <SectionTitle eyebrow="G\u0141OSY PRZY WITRYNIE" light>
                Domy, kt\u00F3re wracaj\u0105{" "}
                <span className="gold">co roku</span>.
              </SectionTitle>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="testimonials__counter">
                <strong>2 400+</strong>
                <span>zadowolonych klient\u00F3w</span>
              </div>
            </Reveal>
          </div>
        </div>
        <div className="testimonials__body">
          <RevealStagger className="testimonials__grid">
            {reviews.map((r) => (
              <RevealItem key={r.author}>
                <blockquote className="review-card">
                  <div
                    className="review-card__stars"
                    aria-label="5 na 5 gwiazdek"
                  >
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="size-3.5 inline-block"
                        fill="currentColor"
                      />
                    ))}
                  </div>
                  <p className="review-card__text">{r.text}</p>
                  <footer className="review-card__footer">
                    <strong>{r.author}</strong>
                    <span>{r.city}</span>
                    <small>
                      Zweryfikowana opinia \u00B7 TrustMate
                    </small>
                  </footer>
                </blockquote>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* ── USP BAR ── */}
      <section className="usp" aria-label="Korzy\u015Bci zakupowe">
        {usps.map(({ icon: Icon, title, desc }) => (
          <div className="usp__item" key={title}>
            <Icon className="size-6 usp__icon" strokeWidth={1.5} />
            <div>
              <strong>{title}</strong>
              <small>{desc}</small>
            </div>
          </div>
        ))}
      </section>

      {/* ── NEWSLETTER ── */}
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
          <Reveal className="newsletter__copy">
            <SectionTitle eyebrow="LISTA PIERWSZEGO WYBORU" light>
              Pierwsi przy <span className="gold">witrynie</span>.
            </SectionTitle>
            <p>
              Nowe kolekcje, powroty bestseller\u00F3w i grudniowe inspiracje
              \u2014 zanim znikn\u0105.
            </p>
          </Reveal>
          <Reveal className="newsletter__form-wrap" delay={0.2}>
            <form className="newsletter__form">
              <label className="sr-only" htmlFor="nl-email">
                Adres e-mail
              </label>
              <input
                id="nl-email"
                type="email"
                placeholder="Tw\u00F3j adres e-mail"
                required
              />
              <button className="btn btn--gold" type="submit">
                <span>Do\u0142\u0105cz</span> <GoldArrow />
              </button>
            </form>
          </Reveal>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="footer__inner">
          <div className="footer__brand">
            <a className="logo" href="#">
              Idealna <em>Choinka</em>
            </a>
            <p>Choinki stworzone, by zostawa\u0107 w rodzinie na lata.</p>
            <div className="footer__social">
              <a href="#" aria-label="Facebook">
                Fb
              </a>
              <a href="#" aria-label="Instagram">
                Ig
              </a>
              <a href="#" aria-label="TikTok">
                Tk
              </a>
            </div>
          </div>
          <div className="footer__col">
            <h3>Choinki</h3>
            <a href="#kolekcje">Jak \u017Cywe</a>
            <a href="#kolekcje">\u015Anie\u017Cone</a>
            <a href="#kolekcje">Na pniu</a>
            <a href="#kolekcje">Wed\u0142ug wzrostu</a>
          </div>
          <div className="footer__col">
            <h3>Pomoc</h3>
            <a href="#jakosc">Jako\u015B\u0107 i atesty</a>
            <a href="#kontakt">Dostawa i zwroty</a>
            <a href="#kontakt">Kontakt</a>
            <a href="#">Regulamin</a>
          </div>
          <div className="footer__col">
            <h3>Bezpieczne p\u0142atno\u015Bci</h3>
            <div className="footer__payments">
              <span>BLIK</span>
              <span>Przelewy24</span>
              <span>InPost Pay</span>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <small>
            \u00A9 2026 Idealna Choinka \u00B7 Wszystkie prawa zastrze\u017Cone
          </small>
        </div>
      </footer>
    </>
  );
}
