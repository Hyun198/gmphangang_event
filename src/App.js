import './App.css';

function App() {

  const imgs = [
    "/imgs/당근 홍보용 자료01.jpg",
    "/imgs/당근 홍보용 자료02.jpg",
    "/imgs/당근 홍보용 자료03.jpg",
    "/imgs/당근 홍보용 자료04.jpg",
    "/imgs/당근 홍보용 자료05.jpg",
  ]

  return (
    <div className="App">
      <header className="App-header">

      </header>

      <main>
        {imgs.map((src, index) => (
          <img className="imgs" key={index} src={src} alt={`당근홍보_${index + 1}`} />
        ))}
      </main>


      <footer>

      </footer>
    </div>
  );
}

export default App;
