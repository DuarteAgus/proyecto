import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import PostersCarousel from '@components/PostersCarousel'
import Footer from '@components/Footer'
import './Inicio.css'

export default function Inicio() {
  return (
    <div className="inicio-bg">
      {/* HERO */}
      <section className="hero">
        <Container>
          <h1 className="hero-title">
            Tu nueva forma de jugar <br /> En la nube
          </h1>

          <p className="hero-desc">
            Con <strong>NuCloud Gaming</strong> convertí al instante tu celular, laptop o PC en
            una máquina lista para videojuegos exigentes. Accedé a tus títulos favoritos desde
            cualquier lugar y disfrutá de un rendimiento fluido sin necesidad de hardware costoso.
          </p>

          <p className="hero-muted">
            Compatible con plataformas como Steam, Epic Games, Xbox Cloud, GOG y más.
          </p>

          <div className="d-flex gap-3 mt-3">
            <Button className="btn-pink" href="#juegos">Descubrí todas las ofertas</Button>
            <Button variant="outline-light">Saber más</Button>
          </div>
        </Container>
      </section>

      {/* PROMO + CARRUSEL (sin grilla fija) */}
      <section className="promo-section" id="juegos">
        <Container>
          <div className="promo-box mb-3">Promo del día: 3 meses −20%</div>
          <PostersCarousel posters={POSTERS} perSlide={12} />
        </Container>
      </section>

      <Footer />
    </div>
  )
}

  const POSTERS = [

  'https://xboxwire.thesourcemediaassets.com/sites/4/CODWZ_S1-X1_-1920x1080-enUS_JPG-7bfcc41943e5c8cfdb37-d86e258b3fb5ce954692.jpg', // Warzone
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnhz1_T2eH2uaoadDVjiKNpIKUaBNu9MoVkw&s',                                    // GTA V
  'https://image.api.playstation.com/cdn/EP0001/CUSA05847_00/pEBJnRh6DeL2BfyZRa9jZRrNuSav42QPJIXyqo6Rgcr52o9kYLwY4EpouAzWh4Fu.png', // Far Cry 5
  'https://image.api.playstation.com/cdn/UP0001/CUSA00663_00/arnlFWX6Y6ZlGyCCYWmth94Shtw44kON.png',                                  // AC Unity
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFulAwQjM6PIRNmj34U6_suJHb-5FRsA3aXg&s',                                    // The Evil Within
  'https://image.api.playstation.com/cdn/UP1004/CUSA03041_00/Hpl5MtwQgOVF9vJqlfui6SDB5Jl4oBSq.png?w=440',                            // RDR2
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYi_VwfybGy4oasXB2Ij3EZd77nWMfZsC4DA&s',                                    // TES Online
  'https://image.api.playstation.com/vulcan/ap/rnd/202211/0711/qezXTVn1ExqBjVjR5Ipm97IK.png',                                         // The Witcher 3
  'https://assets.nintendo.com/image/upload/q_auto/f_auto/store/software/switch/70010000010192/f26fc9e1b11ce01369966ed9225e320a293c4eaad1329774f125e05629ffd437', // Fortnite
   'https://image.api.playstation.com/vulcan/ap/rnd/202206/0608/Oxr3X0TU9BRhpgweQoq5AGgy.png',
   'https://image.api.playstation.com/vulcan/ap/rnd/202009/2814/9J6nuH0EFjDlWOceK8RucMKD.png',
   'https://cdn.eliteguias.com/img/recomendados/the-last-of-us.jpg',
   // Reemplazos estables
  'https://upload.wikimedia.org/wikipedia/en/4/4f/The_Last_of_Us_box_art.jpg',                    // The Last of Us  ✅
  'https://upload.wikimedia.org/wikipedia/en/7/7b/Resident_Evil_2_Remake.jpg',                    // Resident Evil 2 (2019) ✅
  'https://upload.wikimedia.org/wikipedia/en/3/3c/Doom_Cover.jpg'                                 // DOOM (2016) ✅
];
