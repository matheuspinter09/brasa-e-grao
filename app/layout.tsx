import "./globals.css";
import Link from "next/link";
import Image from "next/image";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <div className="site-wrapper">
          {/* CABEÇALHO COMPARTILHADO */}
          <header className="site-header">
            <div className="container site-header-inner">
              <Link href="/" className="brand-logo">
                <Image
                  src="/logo.png"
                  alt="Logo Brasa & Grão"
                  width={100}
                  height={50}
                />
                <div className="brand-text">
                  <span className="brand-title">Brasa & Grão</span>
                  <span className="brand-subtitle">
                    SMASH BURGERS & SPECIALTY COFFEE
                  </span>
                </div>
              </Link>

              <nav className="site-nav">
                <Link href="/" className="site-nav-link">
                  Início
                </Link>
                <Link href="/cardapio" className="site-nav-link">
                  Cardápio Completo
                </Link>
              </nav>

              <div className="header-actions">
                <span className="badge badge-success">
                  <span className="dot">•</span> Aberto • 25–35 min
                </span>
                <Link href="/admin" className="btn-painel">
                  <span className="icon">🎛️</span> Painel Gestor
                </Link>
              </div>
            </div>
          </header>

          {/* CONTEÚDO DINÂMICO DE CADA PÁGINA (page.tsx) */}
          <main className="site-main">{children}</main>

          {/* RODAPÉ COMPARTILHADO */}
          <footer className="site-footer">
            <div className="container site-footer-inner">
              {/* LINHA SUPERIOR DO FOOTER */}
              <div className="footer-top">
                <div className="footer-brand">
                  <Image
                    src="/logo.png"
                    alt="Logo Brasa & Grão"
                    width={100}
                    height={50}
                  />
                  <div className="brand-text">
                    <span className="brand-title">Brasa & Grão</span>
                    <span className="brand-subtitle">
                      RUA DOS PINHEIROS, 480 • SÃO PAULO
                    </span>
                  </div>
                </div>

                <nav className="footer-nav">
                  <Link href="/" className="footer-link">
                    Início
                  </Link>
                  <Link href="/cardapio" className="footer-link">
                    Cardápio Completo
                  </Link>
                  <Link href="/admin" className="footer-link">
                    Área do Gestor (Admin)
                  </Link>
                </nav>
              </div>

              <hr className="footer-divider" />

              {/* LINHA INFERIOR DO FOOTER */}
              <div className="footer-bottom">
                <p className="footer-copy">
                  © 2026 Brasa & Grão Artesanal. Layout didático para aula de
                  Next.js (Rotas & Layouts).
                </p>
                <p className="footer-hours">
                  Terça a Domingo • 18h às 23h30
                </p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}