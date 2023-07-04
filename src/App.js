/* 
  Buradan başlayın ve iç içe geçmiş bileşenlere doğru ilerleyin.
  Projedeki tüm dosyalara kod eklenmesi gerekmez.
  Nerelerde değişiklik yapmanız gerektiğini anlamak için her dosyayı inceleyin.
*/

// State hook u import edin
import React, {useState} from 'react';
import sahteVeri from "./sahte-veri";
import Gönderiler from "./bilesenler/Gonderiler/Gonderiler";
import AramaÇubuğu from "./bilesenler/AramaCubugu/AramaCubugu";

// Gönderiler (çoğul!) ve AramaÇubuğu bileşenlerini import edin, çünkü bunlar App bileşeni içinde kullanılacak
// sahteVeri'yi import edin
import "./App.css";

const App = () => {
  const [gonderiler, setGonderiler] = useState(sahteVeri);
  const [aramaKriteri, setAramaKriteri] = useState('');

  const searchAction = (searchTerm) => {
    setAramaKriteri(searchTerm);
  };

  const gonderiyiBegen = (gonderiID) => {
    setGonderiler((prevGonderiler) => {
      return prevGonderiler.map((gonderi) => {
        if (gonderi.id === gonderiID) {
          return { ...gonderi, likes: gonderi.likes + 1 };
        }
        return gonderi;
      });
    });
  };

  const filtrelenmisGonderiler = aramaKriteri
    ? gonderiler.filter((gonderi) =>
        gonderi.username.includes(aramaKriteri)
      )
    : gonderiler;

  return (
    <div className='App'>
      <AramaÇubuğu searchGitsin={searchAction} />
      <Gönderiler
        gonderiyiBegen={gonderiyiBegen}
        posts={filtrelenmisGonderiler}
      />
    </div>
  );
};

export default App;
