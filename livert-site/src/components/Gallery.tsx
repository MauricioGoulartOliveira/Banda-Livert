import { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import { GalleryImage } from '../types';

const Gallery = ({ images }: { images: GalleryImage[] }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const handleClose = () => {
    setShowModal(false);
    // Limpa a imagem selecionada após a animação do modal
    setTimeout(() => setSelectedImage(null), 300);
  };

  const handleImageClick = (image: GalleryImage) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  // Fechar modal ao pressionar ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && showModal) {
        handleClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showModal]);

  return (
    <section className="gallery mb-5" id="gallery">
      <h2 className="text-center text-uppercase mb-4">Galeria de Fotos</h2>
      <div className="row g-4">
        {images.map((image) => (
          <div key={image.id} className="col-md-6 col-lg-3">
            <div
              className="gallery-item rounded overflow-hidden"
              onClick={() => handleImageClick(image)}
              style={{ cursor: 'pointer', height: '250px' }}
            >
              <img
                src={`/images/gallery/${image.fileName}`}
                alt={image.alt}
                className="w-100 h-100 object-fit-cover"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Modal para imagem ampliada */}
      <Modal
        show={showModal}
        onHide={handleClose}
        centered
        size="xl"
        className="gallery-modal"
        backdropClassName="modal-backdrop-dark"
      >
        <Modal.Header closeButton className="bg-dark border-secondary">
          <Modal.Title className="text-light">
            {selectedImage?.title || 'Imagem ampliada'}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          className="bg-dark p-0 d-flex justify-content-center align-items-center"
          style={{ minHeight: '60vh' }}
          onClick={handleClose} // Fecha ao clicar na imagem
        >
          {selectedImage && (
            <img
              src={`/images/gallery/${selectedImage.fileName}`}
              alt={selectedImage.alt}
              className="img-fluid"
              style={{
                maxHeight: '80vh',
                maxWidth: '100%',
                objectFit: 'contain',
                cursor: 'zoom-out'
              }}
            />
          )}
        </Modal.Body>
      </Modal>
    </section>
  );
};

export default Gallery;