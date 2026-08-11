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
import { PlayRing } from "@/components/hero-glow";

/* ═══ DATA ═══ */

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
    text: "„Najbardziej naturalna choinka, jaką mieliśmy. Goście pytają, gdzie ją kupiliśmy.”",
    author: "Anna K.",
    city: "Warszawa",
  },
  {
    text: "„Gęstość robi wrażenie. Rozłożyliśmy ją razem z dziećmi przed kolacją wigilijną.”",
    author: "Marek W.",
    city: "Gdańsk",
  },
  {
    text: "„Piękna od pierwszej gałązki. I cena naprawdę uczciwa za tę jakość.”",
    author: "Karolina D.",
    city: "Kraków",
  },
];

const usps = [
  { icon: Truck, title: "Wysyłka 24 h", desc: "InPost · DPD" },
  { icon: RotateCcw, title: "14 dni na zwrot", desc: "bez pytań" },
  { icon: ShieldCheck, title: "Atest ppoż.", desc: "bezpieczeństwo domu" },
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
          {branches} gałązek · {material}
        </span>
        <span className="plaque__price">{price} zł</span>
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
      {/* ── HEADER ── */}
      <header className="header">
        <div className="header__inner">
          <a
            className="logo"
            href="#"
            aria-label="Idealna Choinka — strona główna"
          >
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
            <span>Wybierz choinkę</span> <GoldArrow />
          </a>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="hero" aria-labelledby="hero-heading">
        <div className="hero__bg">
          <Image
            src="/images/hero-banner.jpg"
            alt=""
            fill
            priority
            quality={92}
            sizes="100vw"
            className="hero__bg-img"
          />
          <div className="hero__overlay" />
        </div>

        <div className="hero__content">
          <Reveal className="hero__text">
            <p className="hero__brand">
              Idealna <em>Choinka</em>
            </p>
            <h1 id="hero-heading" className="hero__h1">
              Klejnot, który{" "}
              <em>ubiera się</em>
              <br />
              raz w roku.
            </h1>
            <p className="hero__sub">
              Najgęstsze igliwie. Najuczciwsza cena. Choinka, która
              każdego grudnia wygląda jak pierwszego dnia.
            </p>
            <div className="hero__cta">
              <a className="btn btn--gold" href="#bestsellery">
                <span>Poznaj Świerk Królewski</span> <GoldArrow />
              </a>
            </div>
          </Reveal>
        </div>

        <div className="hero__scroll-hint" aria-hidden="true">
          <span>ZOBACZ, CO ROBI RÓŻNICĘ</span>
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
                <label htmlFor="cfg-h">Wysokość sufitu</label>
                <select id="cfg-h" defaultValue="">
                  <option value="" disabled>
                    Wybierz
                  </option>
                  <option>do 220 cm</option>
                  <option>220–260 cm</option>
                  <option>powyżej 260 cm</option>
                </select>
              </div>
              <div className="configurator__field">
                <label htmlFor="cfg-c">Charakter</label>
                <select id="cfg-c" defaultValue="">
                  <option value="" disabled>
                    Jak ma wyglądać?
                  </option>
                  <option>Jak żywa</option>
                  <option>Śnieżona</option>
                  <option>Na pniu</option>
                </select>
              </div>
              <div className="configurator__field">
                <label htmlFor="cfg-b">Budżet</label>
                <select id="cfg-b" defaultValue="">
                  <option value="" disabled>
                    Przedział cenowy
                  </option>
                  <option>do 300 zł</option>
                  <option>300–700 zł</option>
                  <option>powyżej 700 zł</option>
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
              ["5 920", "gałązek w najgęstszym modelu"],
              ["24 h", "wysyłka z Polski"],
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
            <SectionTitle eyebrow="ZNAJDŹ SWOJĄ FORMĘ">
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
      <section className="video-section" aria-label="Film o montażu">
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
            BEZ NARZĘDZI · BEZ STRESU
          </span>
          <h2 className="video-section__title">
            Od kartonu do klejnotu
            <br />
            — w pięć minut.
          </h2>
          <button
            className="play-btn"
            aria-label="Odtwórz film o montażu choinki"
          >
            <PlayRing />
            <Play className="size-7" fill="currentColor" />
          </button>
          <span className="video-section__label">Obejrzyj montaż</span>
        </Reveal>
      </section>

      {/* ── QUALITÉ ── */}
      <section className="quality" id="jakosc">
        <div className="quality__inner">
          <Reveal className="quality__image">
            <Image
              src="/images/branch.svg"
              alt="Makro gałązki choinki ze 100% PE"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </Reveal>
          <Reveal className="quality__copy" delay={0.2}>
            <SectionTitle eyebrow="CO ZOSTAJE Z TOBĄ NA LATA">
              Prawdziwe piękno zaczyna się{" "}
              <span className="gold">od gałązki</span>.
            </SectionTitle>
            <dl className="specs-table">
              {[
                ["Igliwie", "100% PE"],
                ["Gęstość", "do 5 920 gałązek"],
                ["Montaż", "5 min · zawiasy"],
                ["Bezpieczeństwo", "atest ognioodporności"],
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
            <SectionTitle eyebrow="WYBÓR NASZYCH KLIENTÓW" center>
              Najczęściej <span className="gold">wybierane</span>.
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
                        <del>{p.oldPrice} zł</del>
                        <small>
                          Najniższa cena z 30 dni: {p.oldPrice} zł
                        </small>
                      </div>
                    )}
                    <span className="product-card__price">{p.price} zł</span>
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
              Grudzień ma swój <span className="gold">blask</span>.
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
              "Śnieżona choinka w jadalni",
              "Detal ozdób na gałązce PE",
              "Choinka na pniu w holu",
              "Wieczór przy oświetlonej choince",
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
              <SectionTitle eyebrow="GŁOSY PRZY WITRYNIE" light>
                Domy, które wracają{" "}
                <span className="gold">co roku</span>.
              </SectionTitle>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="testimonials__counter">
                <strong>2 400+</strong>
                <span>zadowolonych klientów</span>
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
                      Zweryfikowana opinia · TrustMate
                    </small>
                  </footer>
                </blockquote>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* ── USP BAR ── */}
      <section className="usp" aria-label="Korzyści zakupowe">
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
              Nowe kolekcje, powroty bestsellerów i grudniowe inspiracje
              — zanim znikną.
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
                placeholder="Twój adres e-mail"
                required
              />
              <button className="btn btn--gold" type="submit">
                <span>Dołącz</span> <GoldArrow />
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
            <p>Choinki stworzone, by zostawać w rodzinie na lata.</p>
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
          <small>
            © 2026 Idealna Choinka · Wszystkie prawa zastrzeżone
          </small>
        </div>
      </footer>
    </>
  );
}
