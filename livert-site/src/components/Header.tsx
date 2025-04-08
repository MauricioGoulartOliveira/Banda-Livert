//import { FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="fixed-top bg-dark bg-opacity-90 py-3">
      <div className="container">
        <div className="logo-container text-center mb-3">
          <div className="logo-wrapper">
            <img src="logo liverT.jpg" alt="Livert Rock Pop" className="logo-img" />
          </div>
          <h2 className="subtitle">Reviva o melhor do passado. Curta o som do presente.</h2>
        </div>
        <nav className="navbar navbar-expand-lg justify-content-center">
          <ul className="navbar-nav">
            <li className="nav-item mx-2"><a className="nav-link" href="#home">Home</a></li>
            <li className="nav-item mx-2"><a className="nav-link" href="#gallery">Galeria</a></li>
            <li className="nav-item mx-2"><a className="nav-link" href="#videos">Vídeos</a></li>
            <li className="nav-item mx-2"><a className="nav-link" href="#agenda">Agenda</a></li>
            <li className="nav-item mx-2"><a className="nav-link" href="#contact">Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;