import Image from "next/image";

const products = [
  { name: "Świerk Ośnieżony", size: "180 cm", branches: "3 480", price: "569 zł", oldPrice: "639 zł", badge: "−11%" },
  { name: "Świerk Królewski", size: "220 cm", branches: "5 920", price: "1 099 zł", badge: "Bestseller" },
  { name: "Jodła Karolina", size: "180 cm", branches: "2 840", price: "259 zł", badge: "Polska produkcja" },
];

const collections = [
  ["I", "Jak żywe", "127 modeli", "od 119 zł"],
  ["II", "Śnieżone", "12 modeli", "od 459 zł"],
  ["III", "Na pniu", "34 modele", "od 299 zł"],
  ["IV", "Według wzrostu", "90–250 cm", "znajdź swój rozmiar"],
];

function SectionHeading({ eyebrow, title, centered = false }: { eyebrow: string; title: string; centered?: boolean }) {
  return (
    <header className={`section-heading ${centered ? "is-centered" : ""}`}>
      <p>{eyebrow}</p>
      <span className="gold-rule" aria-hidden="true" />
      <h2>{title}</h2>
    </header>
  );
}

function EngravedPlaque({ name, size, branches, price }: { name: string; size: string; branches: string; price: string }) {
  return (
    <div className="plaque">
      <span>{name} · {size}</span>
      <i aria-hidden="true" />
      <span>{branches} gałązek · 100% PE</span>
      <strong>{price}</strong>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <div className="announcement">Zamów do 18 grudnia — pod choinką przed Wigilią</div>
      <header className="site-header">
        <a className="brand" href="#" aria-label="Idealna Choinka — strona główna">Idealna <em>Choinka</em></a>
        <nav aria-label="Główna nawigacja">
          <a href="#kolekcje">Kolekcje</a><a href="#jakosc">Jakość</a><a href="#bestsellery">Bestsellery</a><a href="#rozmiary">Rozmiary</a><a href="#kontakt">Kontakt</a>
        </nav>
        <a className="button button-gold header-cta" href="#konfigurator">Wybierz choinkę <span>→</span></a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">POLSKA PRACOWNIA · OD 1998</p>
          <h1 id="hero-title">Klejnot, który <em>ubiera się</em> raz w roku.</h1>
          <p className="hero-intro">Najgęstsze igliwie. Najuczciwsza cena. Choinka, która każdego grudnia wygląda jak pierwszego dnia.</p>
          <a className="text-link" href="#bestsellery">Poznaj Świerk Królewski <span>→</span></a>
        </div>
        <div className="hero-display">
          <div className="showcase-arch">
            <div className="tree-glow" aria-hidden="true" />
            <Image src="/images/tree.svg" alt="Świerk Królewski 220 cm" width={300} height={400} priority sizes="(max-width: 768px) 230px, 300px" />
          </div>
          <EngravedPlaque name="Świerk Królewski" size="220 cm" branches="5 920" price="1 099 zł" />
        </div>
        <p className="hero-side-note">ZOBACZ, CO ROBI RÓŻNICĘ <span>↓</span></p>
      </section>

      <section className="configurator-wrap" id="konfigurator" aria-label="Konfigurator choinki">
        <form className="configurator" action="#bestsellery">
          <label>Wysokość sufitu<select aria-label="Wysokość sufitu" defaultValue=""><option value="" disabled>Wybierz wysokość</option><option>do 220 cm</option><option>220–260 cm</option><option>powyżej 260 cm</option></select></label>
          <label>Charakter<select aria-label="Charakter choinki" defaultValue=""><option value="" disabled>Jak ma wyglądać?</option><option>Jak żywa</option><option>Śnieżona</option><option>Na pniu</option></select></label>
          <label>Budżet<select aria-label="Budżet" defaultValue=""><option value="" disabled>Wybierz przedział</option><option>do 300 zł</option><option>300–700 zł</option><option>powyżej 700 zł</option></select></label>
          <button className="button button-gold" type="submit">Dobierz <span>→</span></button>
        </form>
      </section>

      <section className="manifesto">
        <SectionHeading eyebrow="IDEALNA CHOINKA" title="Luksus w uczciwej cenie." centered />
        <div className="proofs">
          <div><strong>178</strong><span>modeli do wyboru</span></div><div><strong>5 920</strong><span>gałązek w najgęstszym modelu</span></div><div><strong>24 h</strong><span>wysyłka z Polski</span></div>
        </div>
      </section>

      <section className="collections section-pad" id="kolekcje">
        <SectionHeading eyebrow="ZNAJDŹ SWOJĄ FORMĘ" title="Cztery gabloty." />
        <div className="collection-grid">
          {collections.map(([number, title, count, from]) => <a className="collection-card" href="#bestsellery" key={title}><span className="roman">{number}</span><div><h3>{title}</h3><p>{count}</p><small>{from}</small></div><span className="card-arrow">↗</span></a>)}
        </div>
      </section>

      <section className="assembly-video" aria-label="Film o montażu choinki">
        <Image src="/images/interior.svg" alt="Choinka w eleganckim wnętrzu gotowa po montażu" fill sizes="100vw" />
        <div className="video-overlay" />
        <div className="video-content"><p className="eyebrow">BEZ NARZĘDZI · BEZ STRESU</p><h2>Od kartonu do klejnotu<br />— w pięć minut.</h2><button className="play-button" aria-label="Odtwórz film o montażu">▶</button><span>Obejrzyj montaż</span></div>
      </section>

      <section className="quality section-pad" id="jakosc">
        <div className="quality-image"><Image src="/images/branch.svg" alt="Makro gałązki choinki wykonanej ze 100% PE" fill sizes="(max-width: 900px) 100vw, 50vw" /></div>
        <div className="quality-copy"><SectionHeading eyebrow="CO ZOSTAJE Z TOBĄ NA LATA" title="Prawdziwe piękno zaczyna się od gałązki." /><dl className="specs"><div><dt>Igliwie</dt><dd>100% PE</dd></div><div><dt>Gęstość</dt><dd>do 5 920 gałązek</dd></div><div><dt>Montaż</dt><dd>5 min · zawiasy</dd></div><div><dt>Bezpieczeństwo</dt><dd>atest ognioodporności</dd></div><div><dt>Produkcja</dt><dd>Polska</dd></div></dl></div>
      </section>

      <section className="bestsellers section-pad" id="bestsellery">
        <SectionHeading eyebrow="WYBÓR NASZYCH KLIENTÓW" title="Najczęściej wybierane." centered />
        <div className="product-grid">
          {products.map((product, index) => <article className="product-card" key={product.name}><div className="product-image"><span className="product-badge">{product.badge}</span><Image src={index === 0 ? "/images/tree-snow.svg" : "/images/tree.svg"} alt={`${product.name} ${product.size}`} fill sizes="(max-width: 700px) 100vw, 33vw" /><a href="#kontakt" className="product-cta">Zobacz model <span>→</span></a></div><EngravedPlaque {...product} /><div className="price-row">{product.oldPrice && <div><del>{product.oldPrice}</del><small>Najniższa cena z 30 dni: {product.oldPrice}</small></div>}<strong>{product.price}</strong></div></article>)}
        </div>
      </section>

      <section className="lookbook section-pad" id="rozmiary">
        <SectionHeading eyebrow="ZOBACZ GO U SIEBIE" title="Grudzień ma swój blask." />
        <div className="lookbook-grid">
          <figure className="look-main"><Image src="/images/interior.svg" alt="Wysoka choinka w salonie przy oknie" fill sizes="(max-width: 700px) 100vw, 48vw" /></figure>
          {["Śnieżona choinka w jadalni", "Detal ozdób na gałązce PE", "Choinka na pniu w holu", "Wieczór przy oświetlonej choince"].map((alt, index) => <figure key={alt}><Image src={index % 2 ? "/images/branch.svg" : "/images/interior.svg"} alt={alt} fill sizes="(max-width: 700px) 50vw, 25vw" /></figure>)}
        </div>
      </section>

      <section className="reviews section-pad">
        <SectionHeading eyebrow="GŁOSY PRZY WITRYNIE" title="Domy, które wracają co roku." centered />
        <div className="review-grid">
          {[["„Najbardziej naturalna choinka, jaką mieliśmy. Goście pytają, gdzie ją kupiliśmy.”", "Anna, Warszawa"], ["„Gęstość robi wrażenie. Rozłożyliśmy ją razem z dziećmi przed kolacją.”", "Marek, Gdańsk"], ["„Piękna od pierwszej gałązki. I cena naprawdę uczciwa za tę jakość.”", "Karolina, Kraków"]].map(([text, author]) => <blockquote key={author}><div className="stars" aria-label="5 na 5 gwiazdek">★★★★★</div><p>{text}</p><footer>{author}<small>Zweryfikowana opinia TrustMate</small></footer></blockquote>)}
        </div>
      </section>

      <section className="usp-bar" aria-label="Korzyści zakupowe">{[["◈", "Wysyłka 24 h", "InPost · DPD"], ["↺", "14 dni na zwrot", "bez pytań"], ["✦", "Atest ppoż.", "bezpieczeństwo domu"], ["⌂", "Polska produkcja", "od 1998 roku"]].map(([icon, title, desc]) => <div key={title}><span>{icon}</span><p><strong>{title}</strong><small>{desc}</small></p></div>)}</section>

      <section className="newsletter" id="kontakt"><div><SectionHeading eyebrow="LISTA PIERWSZEGO WYBORU" title="Pierwsi przy witrynie." /><p>Nowe kolekcje, powroty bestsellerów i grudniowe inspiracje — zanim znikną.</p></div><form><label className="sr-only" htmlFor="email">Adres e-mail</label><input id="email" type="email" placeholder="Twój adres e-mail" required /><button className="button button-gold" type="submit">Dołącz <span>→</span></button></form></section>

      <footer className="site-footer"><div className="footer-brand"><a className="brand" href="#">Idealna <em>Choinka</em></a><p>Choinki stworzone, by zostawać w rodzinie na lata.</p></div><div><h3>Choinki</h3><a href="#kolekcje">Jak żywe</a><a href="#kolekcje">Śnieżone</a><a href="#kolekcje">Na pniu</a></div><div><h3>Pomoc</h3><a href="#jakosc">Jakość i atesty</a><a href="#kontakt">Dostawa i zwroty</a><a href="#kontakt">Kontakt</a></div><div><h3>Bezpieczne płatności</h3><div className="payment-logos"><span>BLIK</span><span>Przelewy24</span><span>InPost</span></div></div><small className="copyright">© 2026 Idealna Choinka · Wszystkie prawa zastrzeżone</small></footer>
    </main>
  );
}
