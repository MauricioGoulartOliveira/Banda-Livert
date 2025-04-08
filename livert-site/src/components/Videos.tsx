import { useState, useEffect } from 'react';
import { VideoItem } from '../types';

interface VideosProps {
  videos: VideoItem[];
}

const Videos = ({ videos }: VideosProps) => {
  const [loadedVideos, setLoadedVideos] = useState<string[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const videoContainers = document.querySelectorAll('.video-container');
      
      videoContainers.forEach(container => {
        if (container.getBoundingClientRect().top < window.innerHeight + 200) {
          const iframe = container.querySelector('iframe');
          const videoId = iframe?.dataset.id;
          
          if (iframe && videoId && !loadedVideos.includes(videoId)) {
            iframe.src = `https://www.youtube.com/embed/${videoId}`;
            setLoadedVideos(prev => [...prev, videoId]);
          }
        }
      });
    };

    // Initial load
    handleScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loadedVideos]);

  return (
    <section className="videos mb-5" id="videos">
      <h2 className="text-center text-uppercase mb-4">Nossos Vídeos</h2>
      <div className="row g-4 justify-content-center">
        {videos.map((video) => (
          <div key={video.id} className="col-lg-6">
            <div className="video-container">
              <div className="ratio ratio-16x9">
                <iframe 
                  data-id={video.id}
                  src=""
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  title={video.title}
                ></iframe>
                <div className="video-fallback">
                  <p>O vídeo não pode ser carregado.</p>
                  <a href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank" rel="noopener noreferrer">Assistir no YouTube</a>
                </div>
              </div>
              <p className="video-description">{video.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Videos;