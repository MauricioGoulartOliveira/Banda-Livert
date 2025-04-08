import { useState, useEffect } from 'react';
import Header from './components/Header';
import Gallery from './components/Gallery';
import Videos from './components/Videos';
import Schedule from './components/Schedule';
import ContactForm from './components/ContactForm';
import { ScheduleItem, VideoItem, GalleryImage } from './types';

function App() {
  // 🎤 Agenda de shows
  const [scheduleItems] = useState<ScheduleItem[]>([
    { date: '15/10/2023', location: 'Festival Retro - São Paulo/SP', time: '20:00h' },
    { date: '22/10/2023', location: 'House of Rock - Rio de Janeiro/RJ', time: '22:00h' },
    { date: '05/11/2023', location: 'Rock in Bar - Belo Horizonte/MG', time: '19:00h' },
  ]);

  // 🎬 Vídeos da banda
  const [videos] = useState<VideoItem[]>([
    { id: 'SEU_ID_DO_VIDEO', title: 'Show Completo - Teatro Municipal', description: 'Assista nossa apresentação completa no Teatro Municipal' },
    { id: 'Il7h8S6cZuI', title: 'Backstage - Preparação para o Show', description: 'Veja como nos preparamos para os shows' },
  ]);

  // 🖼️ Galeria de imagens
  const [galleryImages] = useState<GalleryImage[]>([
    { id: 1, fileName: "foto perfil jpg", alt: "Show da banda 1", title: "Show no Teatro Municipal" },
    { id: 2, fileName: "foto2.jpg", alt: "Show da banda 2", title: "Festival de Verão" },
    { id: 3, fileName: "foto3.jpg", alt: "Show da banda 3", title: "Evento Corporativo" },
    { id: 4, fileName: "foto4.jpg", alt: "Show da banda 4", title: "Bar Rock" },
  ]);

  // 🔗 Scroll suave para seções da página
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.matches('a[href^="#"]')) {
        e.preventDefault();
        const targetId = target.getAttribute('href');
        const targetElement = document.querySelector(targetId!);

        if (targetElement) {
          const headerHeight = document.querySelector('header')?.offsetHeight || 0;
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight,
            behavior: 'smooth',
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="livert-app">
      <Header />

      <main className="container py-5">
        {/* 🔥 Seção Sobre a Banda */}
        <section className="about mb-5" id="home" style={{ backgroundColor: 'transparent' }}>
          <div className="container">
            <h2 className="text-center text-uppercase mb-4">Sobre a Livert</h2>

            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <div className="d-flex flex-wrap justify-content-center mb-4">
                  <span className="badge bg-primary mx-2 mb-2">Rock 80s</span>
                  <span className="badge bg-danger mx-2 mb-2">Pop Clássico</span>
                  <span className="badge bg-success mx-2 mb-2">Rock Nacional</span>
                  <span className="badge bg-warning mx-2 mb-2">Reggae</span>
                </div>

                <p className="lead" style={{ color: 'var(--light-color)' }}>
                  A máquina do tempo musical que revive os maiores hits dos anos 80 com energia de palco e qualidade técnica impecável.
                </p>

                <p style={{ color: 'var(--light-color)' }}>
                  Formada pelos melhores músicos da região, a Livert Rock Pop transporta você para a era de ouro do rock e pop, com performances fiéis de Queen, Michael Jackson, Legião Urbana e até Bob Marley – tudo no mesmo show!
                </p>

                <div className="mt-4">
                  <a href="#contact" className="btn btn-outline-light btn-lg mx-2">Contratar</a>
                  <a href="#videos" className="btn btn-primary btn-lg mx-2">Ver Vídeos</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 🖼️ Galeria de Fotos */}
        <Gallery images={galleryImages} />

        {/* 🎥 Vídeos */}
        <Videos videos={videos} />

        {/* 📅 Agenda */}
        <Schedule items={scheduleItems} />

        {/* 📧 Contato */}
        <ContactForm />
      </main>

      {/* 🔚 Rodapé */}
      <footer>
        <div className="container">
          <div className="footer-bottom text-center py-4 mt-4 border-top border-secondary">
            <p className="mb-0">&copy; Desenvolvido por MakerPixelTechSystem</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
