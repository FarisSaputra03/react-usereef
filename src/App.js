import logo from "./logo.svg";
import "./App.css";
import { useRef } from "react";

function App() {
  const linkRef = useRef(null);

  const goto = (ref) => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <div onClick={() => goto(linkRef.current)}>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Lorem Ipsum adalah contoh teks atau dummy dalam industri percetakan
          dan penataan huruf atau typesetting. Lorem Ipsum telah menjadi standar
          contoh teks sejak tahun 1500an, saat seorang tukang cetak yang tidak
          dikenal mengambil sebuah kumpulan teks dan mengacaknya untuk menjadi
          sebuah buku contoh huruf. Ia tidak hanya bertahan selama 5 abad, tapi
          juga telah beralih ke penataan huruf elektronik, tanpa ada perubahan
          apapun. Ia mulai dipopulerkan pada tahun 1960 dengan diluncurkannya
          lembaran-lembaran Letraset yang menggunakan kalimat-kalimat dari Lorem
          Ipsum, dan seiring munculnya perangkat lunak Desktop Publishing
          seperti Aldus PageMaker juga memiliki versi Lorem Ipsum.
        </p>
        <p>
          Lorem Ipsum adalah contoh teks atau dummy dalam industri percetakan
          dan penataan huruf atau typesetting. Lorem Ipsum telah menjadi standar
          contoh teks sejak tahun 1500an, saat seorang tukang cetak yang tidak
          dikenal mengambil sebuah kumpulan teks dan mengacaknya untuk menjadi
          sebuah buku contoh huruf. Ia tidak hanya bertahan selama 5 abad, tapi
          juga telah beralih ke penataan huruf elektronik, tanpa ada perubahan
          apapun. Ia mulai dipopulerkan pada tahun 1960 dengan diluncurkannya
          lembaran-lembaran Letraset yang menggunakan kalimat-kalimat dari Lorem
          Ipsum, dan seiring munculnya perangkat lunak Desktop Publishing
          seperti Aldus PageMaker juga memiliki versi Lorem Ipsum.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          ref={linkRef}
        >
          Learn React
        </a>
        <p>
          Lorem Ipsum adalah contoh teks atau dummy dalam industri percetakan
          dan penataan huruf atau typesetting. Lorem Ipsum telah menjadi standar
          contoh teks sejak tahun 1500an, saat seorang tukang cetak yang tidak
          dikenal mengambil sebuah kumpulan teks dan mengacaknya untuk menjadi
          sebuah buku contoh huruf. Ia tidak hanya bertahan selama 5 abad, tapi
          juga telah beralih ke penataan huruf elektronik, tanpa ada perubahan
          apapun. Ia mulai dipopulerkan pada tahun 1960 dengan diluncurkannya
          lembaran-lembaran Letraset yang menggunakan kalimat-kalimat dari Lorem
          Ipsum, dan seiring munculnya perangkat lunak Desktop Publishing
          seperti Aldus PageMaker juga memiliki versi Lorem Ipsum.
        </p>
        <p>
          Lorem Ipsum adalah contoh teks atau dummy dalam industri percetakan
          dan penataan huruf atau typesetting. Lorem Ipsum telah menjadi standar
          contoh teks sejak tahun 1500an, saat seorang tukang cetak yang tidak
          dikenal mengambil sebuah kumpulan teks dan mengacaknya untuk menjadi
          sebuah buku contoh huruf. Ia tidak hanya bertahan selama 5 abad, tapi
          juga telah beralih ke penataan huruf elektronik, tanpa ada perubahan
          apapun. Ia mulai dipopulerkan pada tahun 1960 dengan diluncurkannya
          lembaran-lembaran Letraset yang menggunakan kalimat-kalimat dari Lorem
          Ipsum, dan seiring munculnya perangkat lunak Desktop Publishing
          seperti Aldus PageMaker juga memiliki versi Lorem Ipsum.
        </p>
      </header>
    </div>
  );
}

export default App;
