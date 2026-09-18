"use client";

const films = [
  "1227839198",
  "1227853419",
  "1227851118",
  // add more Vimeo IDs here
  // "123456789",
  // "987654321",
];

export default function PreWeddingFilms() {
  if (!films.length) return null;

  const [featuredFilm, ...gridFilms] = films;

  return (
    <div className="prewedding-films-container">

      {/* =============================================
          FIRST VIDEO - FULL WIDTH
      ============================================= */}

      <div className="prewedding-film-featured">
        <iframe
          src={`https://player.vimeo.com/video/${featuredFilm}?autoplay=0&loop=0&muted=0`}
          className="prewedding-film-frame"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="Featured Pre Wedding Film"
        />
      </div>


      {/* =============================================
          REMAINING VIDEOS - TWO COLUMN GRID
      ============================================= */}
{/* 
      {gridFilms.length > 0 && (
        <div className="prewedding-films-grid">

          {gridFilms.map((id, index) => (
            <div
              key={id}
              className="prewedding-film-grid-item"
            >
              <iframe
                src={`https://player.vimeo.com/video/${id}?autoplay=0&loop=0&muted=0`}
                className="prewedding-film-frame"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title={`Pre Wedding Film ${index + 2}`}
              />
            </div>
          ))}

        </div>
      )} */}

    </div>
  );
}