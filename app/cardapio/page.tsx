import Image from "next/image";

export default function Cardapio() {
  return (
    <div className="cardapio-container">
      {/* BANNER DO CABEÇALHO DO CARDÁPIO */}
      <section className="cardapio-banner-section">
        <div className="container">
          <div className="cardapio-banner-card">
            <div className="banner-left">
              <span className="banner-tag">Cardápio Artesanal • Edição de Outono</span>
              <h1>Escolha sua experiência na brasa</h1>
              <p>
                Todos os hambúrgueres acompanham maionese defumada da casa.
                Adicione batata rústica e bebida artesanal por +R$ 16,00.
              </p>
            </div>
            <div className="banner-right">
              <span className="combo-tag">COMBO DO DIA</span>
              <div className="combo-title">Smash + Fritas + Café Gelado</div>
              <div className="combo-price">
                <strong> De R$ 62,00 por R$ 49,90</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FILTROS DE CATEGORIA */}
      <section className="categories-filter-section">
        <div className="container">
          <div className="pills-wrapper">
            <button className="pill-btn active">Todos os Itens (10)</button>
            <button className="pill-btn">Smash Burgers (4)</button>
            <button className="pill-btn">Porções & Entradas (3)</button>
            <button className="pill-btn">Cafés & Shakes (3)</button>
          </div>
        </div>
      </section>

      {/* LINHA SMASH & BRASA */}
      <section className="menu-section">
        <div className="container">
          <div className="section-title-box">
            <h2>Linha Smash & Brasa</h2>
            <p>Feitos com blend 100% Angus certificado e pão de fermentação natural.</p>
          </div>

          <div className="products-grid">
            {/* Card 1 */}
            <div className="card-product">
              <div className="card-img-wrapper">
                <span className="badge-tag orange">CAMPEÃO</span>
                <span className="badge-rating">★ 4.9</span>
                <Image
                  src="/Clássico_American_Smash.png"
                  alt="Clássico American Smash"
                  width={350}
                  height={220}
                />
              </div>
              <div className="card-body">
                <h3>Clássico American Smash</h3>
                <p>
                  2x smash 90g, duplo american cheese artesanal, picles
                  agridoce, cebola roxa picada, mostarda dijon e ketchup da casa.
                </p>
                <div className="card-footer">
                  <div>
                    <span className="label-sm">180G DE CARNE</span>
                    <div className="price">R$ 34,90</div>
                  </div>
                  <button className="btn-add-cart">+ Adicionar</button>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="card-product">
              <div className="card-img-wrapper">
                <span className="badge-tag dark">PRENSADO NA CEBOLA</span>
                <span className="badge-rating">★ 4.9</span>
                <Image
                  src="/Smoky_Oklahoma_Onion.png"
                  alt="Oklahoma Crispy Onion"
                  width={350}
                  height={220}
                />
              </div>
              <div className="card-body">
                <h3>Oklahoma Crispy Onion</h3>
                <p>
                  Dois discos de 90g prensados na chapa com fios finíssimos de
                  cebola caramelizada, cheddar inglês e maionese de alho negro.
                </p>
                <div className="card-footer">
                  <div>
                    <span className="label-sm">180G DE CARNE</span>
                    <div className="price">R$ 37,90</div>
                  </div>
                  <button className="btn-add-cart">+ Adicionar</button>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="card-product">
              <div className="card-img-wrapper">
                <span className="badge-tag green">100% VEGETARIANO</span>
                <span className="badge-rating">★ 4.8</span>
                <Image
                  src="/Veggie_Portobello.png"
                  alt="Portobello Crispy Melt"
                  width={350}
                  height={220}
                />
              </div>
              <div className="card-body">
                <h3>Portobello Crispy Melt</h3>
                <p>
                  Cogumelo Portobello gigante empanado no panko e recheado com
                  queijo meia-cura, tomate confit, rúcula e pesto de manjericão.
                </p>
                <div className="card-footer">
                  <div>
                    <span className="label-sm">VEGETARIANO</span>
                    <div className="price">R$ 39,90</div>
                  </div>
                  <button className="btn-add-cart">+ Adicionar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ACOMPANHAMENTOS & CAFETERIA */}
      <section className="menu-section">
        <div className="container">
          <div className="section-title-box">
            <h2>Acompanhamentos & Cafeteria</h2>
            <p>Para compartilhar na mesa ou fechar sua refeição com chave de ouro.</p>
          </div>

          <div className="horizontal-grid">
            {/* Horizontal 1 */}
            <div className="horizontal-card">
              <Image
                src="/Batata_Rústica_Trufada.png"
                alt="Fritas Rústicas com Alecrim & Páprica"
                width={110}
                height={110}
                className="horizontal-img"
              />
              <div className="horizontal-content">
                <div className="horizontal-header">
                  <h3>Fritas Rústicas com Alecrim & Páprica</h3>
                  <span className="size-badge">350g</span>
                </div>
                <p>
                  Batatas cortadas à mão, fritas em dupla imersão com flor de
                  sal, alecrim fresco e maionese de páprica defumada.
                </p>
                <div className="horizontal-footer">
                  <span className="price">R$ 24,90</span>
                  <button className="btn-add-sm">+ Adicionar</button>
                </div>
              </div>
            </div>

            {/* Horizontal 2 */}
            <div className="horizontal-card">
              <Image
                src="/Milkshake_Caramelo_Salgado.png"
                alt="Shake Espresso & Caramelo Salgado"
                width={110}
                height={110}
                className="horizontal-img"
              />
              <div className="horizontal-content">
                <div className="horizontal-header">
                  <h3>Shake Espresso & Caramelo Salgado</h3>
                  <span className="size-badge">400ml</span>
                </div>
                <p>
                  Sorvete artesanal de baunilha em fava batido com dose dupla de
                  espresso 100% arábica e calda de flor de sal.
                </p>
                <div className="horizontal-footer">
                  <span className="price">R$ 26,90</span>
                  <button className="btn-add-sm">+ Adicionar</button>
                </div>
              </div>
            </div>

            {/* Horizontal 3 */}
            <div className="horizontal-card">
              <Image
                src="/Iced_Caramel_Latte.png"
                alt="Latte Artesanal Torra Média"
                width={110}
                height={110}
                className="horizontal-img"
              />
              <div className="horizontal-content">
                <div className="horizontal-header">
                  <h3>Latte Artesanal Torra Média</h3>
                  <span className="size-badge">Quente/Gelado</span>
                </div>
                <p>
                  Grãos de microlote da Serra da Mantiqueira com notas de
                  chocolate amargo e avelã, leite vaporizado cremoso.
                </p>
                <div className="horizontal-footer">
                  <span className="price">R$ 15,90</span>
                  <button className="btn-add-sm">+ Adicionar</button>
                </div>
              </div>
            </div>

            {/* Horizontal 4 */}
            <div className="horizontal-card">
              <Image
                src="/Brownie_na_Brasa.png"
                alt="Brownie Belga 70% na Chapa"
                width={110}
                height={110}
                className="horizontal-img"
              />
              <div className="horizontal-content">
                <div className="horizontal-header">
                  <h3>Brownie Belga 70% na Chapa</h3>
                  <span className="size-badge">Sobremesa</span>
                </div>
                <p>
                  Servido quentinho na mesa em panelinha de ferro com sorvete
                  de creme artesanal e farofa crocante de castanhas.
                </p>
                <div className="horizontal-footer">
                  <span className="price">R$ 28,90</span>
                  <button className="btn-add-sm">+ Adicionar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}