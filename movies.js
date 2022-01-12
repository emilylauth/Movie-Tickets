function Movie({ data , newVideo}) {
  const movieStyle = {
    background: "url(" + data.imageUrl + ")",
    backgroundSize: "cover",
  };

  return (
    <div className="movie-card">
      <div className="movie-header" style={movieStyle}>
        <div className="header-icon-container">
         <a onClick={() => newVideo(data.videoUrl)}>
            <i className="material-icons header-icon"></i>
          </a>
        </div>
      </div>
      <div className="movie-content">
        <div className="movie-content-header">
            <h3 className="movie-title">{data.title}</h3>
          <div className="imax-logo"></div>
        </div>
        <div className="movie-info">
          <div className="info-section">
            <label>Date & Time</label>
            <span>{data.showTime}</span>
          </div>
          <div className="info-section">
            <label>Screen</label>
            <span>{data.screen}</span>
          </div>
          <div className="info-section">
            <label>Row</label>
            <span>{data.row}</span>
          </div>
          <div className="info-section">
            <label>Seat</label>
            <span>{data.seat}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
