import './App.css';

function App() {
  let name = 'Nilesh';
  return (
    <>
      <h1 className="title">Movies App</h1>
      <div className="cards">
        <div className="card">
          <img
            className="card_img"
            src="https://m.media-amazon.com/images/I/A1liQf7C9LL._UF894,1000_QL80_.jpg"
          />
          <div className="card_info">
            <span className="card_category">A Netflix Original Series</span>
            <h3 className="card_title">DARK</h3>
            <a href="https://www.netflix.com/in/title/80100172" target="_blank">
              <button>Watch Now</button>
            </a>
          </div>
        </div>

        <div className="card">
          <img
            className="card_img"
            src="https://resizing.flixster.com/mq8QXvh4cy9cJRBrgi1-4uSB4ac=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p16654976_v_h9_ab.jpg"
          />
          <div className="card_info">
            <span className="card_category">A Netflix Original Series</span>
            <h3 className="card_title">MIRAGE</h3>
            <a href="https://www.netflix.com/in/title/80991158" target="_blank">
              <button>Watch Now</button>
            </a>
          </div>
        </div>

        <div className="card">
          <img
            className="card_img"
            src="https://imageio.forbes.com/specials-images/imageserve/6865f6c5418da02198a51f75/Indian-stars-Ajay-Devgn-and-Riteish-Deshmukh-on-a-poster-of-Hindi-film--Raid-2--/960x0.jpg?height=888&width=711&fit=bounds"
          />
          <div className="card_info">
            <span className="card_category">A Netflix Original Series</span>
            <h3 className="card_title">RAID2</h3>
            <a href="https://www.netflix.com/in/title/81760050" target="_blank">
              <button>Watch Now</button>
            </a>
          </div>
        </div>

        <div className="card">
          <img
            className="card_img"
            src="https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQTDI_bMtjG5FMrmK7TilFf8000Rs-dYkSk61V6sJBKyGiD3dCw5BbUbP4nFwtou-yLVCfDyqrgBROBLKduc176Z7huyI0Xh9bMSyU__z4bmjp35FhCZx-ljS7TbkgwIuw-YeKwkEMiIUwSLtk1uNmhw-.jpg?r=101"
          />
          <div className="card_info">
            <span className="card_category">A Netflix Original Series</span>
            <h3 className="card_title">SQUID GAME</h3>
            <a href="https://www.netflix.com/in/title/81040344" target="_blank">
              <button>Watch Now</button>
            </a>
          </div>
        </div>

        <div className="card">
          <img
            className="card_img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsS4v6RTUoR4YzjDEn0fg_dgsZNCHP-thJAw&s"
          />
          <div className="card_info">
            <span className="card_category">A Netflix Original Series</span>
            <h3 className="card_title">ALICE IN BORDERLAND</h3>
            <a href="https://www.netflix.com/in/title/80200575" target="_blank">
              <button>Watch Now</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
