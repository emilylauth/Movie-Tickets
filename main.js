function App() {
  const [data, setData] = React.useState(null);
  const [video, setVideo] = React.useState("");
  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    async function getData() {
      const response = await fetch("./movies.json");
      const json = await response.json();
      setData(json);
      setLoaded(true);
    }
    getData();
  }, []);
  console.log("loaded:", loaded, "data:", data);

  function newVideo(url){
    setVideo(url)
  }
  let windowObject;
  return (
    <>
      <div className="container">
        <div className="col-sm">
          {loaded &&
            data.movies.map((movie, i) => <Movie key={i} data={movie} newVideo={newVideo}/>)}
        </div>
      {video === "" ? "": 
        // <iframe width="1264" height="480" src={video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
         windowObject = window.open(video, 'Hello World', 'width=800 height=480')
      }
      </div>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
