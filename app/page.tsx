import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="home-container">
      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="container hero-inner">
          <div className="hero-content">
            <span className="hero-tag">Eleito o Melhor Smash Burger de 2026</span>
            <h1 className="hero-title">
              Sabor defumado na brasa, crosta perfeita{" "}
              <span className="text-highlight">a cada mordida.</span>
            </h1>
            <p className="hero-description">
              Blend 100% Angus moído no dia, pão brioche selado na manteiga de
              garrafa e cafés especiais torrados artesanalmente na nossa casa.
            </p>

            <div className="hero-buttons">
              <Link href="/cardapio" className="btn-orange">
                Explorar Cardápio →
              </Link>
              <a href="#mais-pedidos" className="btn-dark-outline">
                Ver Mais Pedidos
              </a>
            </div>

            <div className="hero-footer-stats">
              <span><strong>4.9 ★</strong> (1.840+ avaliações)</span>
              <span className="dot">•</span>
              <span><strong>100% Artesanal</strong> sem conservantes</span>
            </div>
          </div>

          {/* FOTO DO HERO */}
          <div className="hero-image-wrapper">
            <div className="hero-card-container">
              <Image
                src="/Imagem_Principal_do_Hero.png"
                alt="Duplo Brasa Cheddar"
                width={500}
                height={380}
                className="hero-main-img"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAIXA DE DIFERENCIAIS */}
      <section className="features-section">
        <div className="container features-grid">
          <div className="feature-item">
            <div className="feature-text">
              <strong>Blend 100% Angus Fresco</strong>
              <p>Carne selecionada e moída diariamente na nossa cozinha.</p>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-text">
              <strong>Torrefação Própria</strong>
              <p>Grãos especiais do Cerrado Mineiro e sobremesas autorais.</p>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-text">
              <strong>Entrega Quente em 30 min</strong>
              <p>Embalagem térmica selada para manter a crocância.</p>
            </div>
          </div>
        </div>
      </section>

      {/* OS MAIS PEDIDOS DA SEMANA */}
      <section id="mais-pedidos" className="popular-section">
        <div className="container">
          <div className="section-header-flex">
            <div>
              <span className="section-tag">Favoritos da Galera</span>
              <h2>Os Mais Pedidos da Semana</h2>
            </div>
            <Link href="/cardapio" className="btn-link">
              Ver todos os 16 pratos →
            </Link>
          </div>

          <div className="products-grid">
            {/* Card 1 */}
            <div className="card-product">
              <div className="card-img-wrapper">
                <span className="badge-tag orange">MAIS VENDIDO</span>
                <span className="badge-rating">★ 4.9</span>
                <Image
                  src="/Duplo_Brasa_Bacon.png"
                  alt="Duplo Brasa & Bacon"
                  width={350}
                  height={220}
                />
              </div>
              <div className="card-body">
                <h3>Duplo Brasa & Bacon</h3>
                <p>
                  Dois smash burgers de 90g na brasa, queijo cheddar inglês
                  derretido, fatias de bacon crocante e molho defumado da casa no
                  brioche.
                </p>
                <div className="card-footer">
                  <div>
                    <span className="label-sm">INDIVIDUAL</span>
                    <div className="price">R$ 38,90</div>
                  </div>
                  <button className="btn-add-cart">+ Pedir Agora</button>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="card-product">
              <div className="card-img-wrapper">
                <span className="badge-tag dark">CHEF'S CHOICE</span>
                <span className="badge-rating">★ 5.0</span>
                <Image
                  src="/Truffle_Brie_Burger.png"
                  alt="Truffle Brie & Cebola"
                  width={350}
                  height={220}
                />
              </div>
              <div className="card-body">
                <h3>Truffle Brie & Cebola</h3>
                <p>
                  Hambúrguer alto 180g, queijo brie maçaricado, geleia artesanal
                  de pimenta com bacon, rúcula fresca e maionese trufada no pão
                  australiano.
                </p>
                <div className="card-footer">
                  <div>
                    <span className="label-sm">INDIVIDUAL</span>
                    <div className="price">R$ 44,90</div>
                  </div>
                  <button className="btn-add-cart">+ Pedir Agora</button>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="card-product">
              <div className="card-img-wrapper">
                <span className="badge-tag dark">NOVO</span>
                <span className="badge-rating">★ 4.8</span>
                <Image
                  src="/Crispy_Chicken_Honey.png"
                  alt="Crispy Chicken Hot Honey"
                  width={350}
                  height={220}
                />
              </div>
              <div className="card-body">
                <h3>Crispy Chicken Hot Honey</h3>
                <p>
                  Sobrecoxa de frango empanada super crocante, mel picante
                  artesanal, picles da casa, salada coleslaw cremosa e pão de
                  batata.
                </p>
                <div className="card-footer">
                  <div>
                    <span className="label-sm">INDIVIDUAL</span>
                    <div className="price">R$ 34,90</div>
                  </div>
                  <button className="btn-add-cart">+ Pedir Agora</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}