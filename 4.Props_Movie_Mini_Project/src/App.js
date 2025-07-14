import './App.css';
import Card from './Card';

function App() {
  const movieData = [
    {
      src: 'https://m.media-amazon.com/images/I/A1liQf7C9LL._UF894,1000_QL80_.jpg',
      name: 'DARK',
      url: 'https://www.netflix.com/in/title/80100172',
    },
    {
      src: 'https://resizing.flixster.com/mq8QXvh4cy9cJRBrgi1-4uSB4ac=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p16654976_v_h9_ab.jpg',
      name: 'MIRAGE',
      url: 'https://www.netflix.com/in/title/80991158',
    },
    {
      src: 'https://imageio.forbes.com/specials-images/imageserve/6865f6c5418da02198a51f75/Indian-stars-Ajay-Devgn-and-Riteish-Deshmukh-on-a-poster-of-Hindi-film--Raid-2--/960x0.jpg?height=888&width=711&fit=bounds',
      name: 'RAID2',
      url: 'https://www.netflix.com/in/title/81760050',
    },
    {
      src: 'https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQTDI_bMtjG5FMrmK7TilFf8000Rs-dYkSk61V6sJBKyGiD3dCw5BbUbP4nFwtou-yLVCfDyqrgBROBLKduc176Z7huyI0Xh9bMSyU__z4bmjp35FhCZx-ljS7TbkgwIuw-YeKwkEMiIUwSLtk1uNmhw-.jpg?r=101',
      name: 'SQUID GAME',
      url: 'https://www.netflix.com/in/title/81040344',
    },
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsS4v6RTUoR4YzjDEn0fg_dgsZNCHP-thJAw&s',
      name: 'ALICE IN BORDERLAND',
      url: 'https://www.netflix.com/in/title/80200575',
    },
  ];

  return (
    <>
      <h1 className="title">Movies App</h1>
      <div className="cards">
        {movieData.map((obj, index) => {
          return (
            <Card key={index} src={obj.src} name={obj.name} url={obj.url} />
          );
        })}
      </div>
    </>
  );
}

export default App;
