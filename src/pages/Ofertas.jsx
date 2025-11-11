import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Inicio.css'; // reutilizamos el mismo css

export default function Ofertas() {
  return (
    // reutilizo el fondo del home
    <div className="inicio-bg">
      {/* HERO */}
      <section className="hero hero-lg">
        <Container className="container-xxl">
          <h1 className="hero-title mb-3">
            Una experiencia gamer<br/>de otro nivel
          </h1>
          <p className="hero-desc">
            Disfrutá de tus juegos favoritos con baja latencia, gráficos fluidos y
            hasta 4K, gracias a nuestra tecnología en la nube. Elegí el plan que
            mejor se adapte a tu estilo.
          </p>
        </Container>
      </section>

      {/* PLANES */}
      <section className="ofertas-section">
        <Container className="container-xxl">
          <Row className="g-4 g-xl-5">
            {/* NEBULA */}
            <Col md={6} lg={4}>
              <Card className="plan-card plan-dark border-0 position-relative">
                <div className="price-pill pill-dark text-white fw-700">
                  10.000 ARS / mes
                </div>

                <Card.Body>
                  <Card.Title className="plan-title fw-800 mb-2 text-white">
                    PLAN NEBULA
                  </Card.Title>
                  <Card.Text className="plan-sub text-muted mb-3">
                    Ideal para jugadores casuales: 60 fps estables en 1080p y sesiones diarias con consumo optimizado.
                  </Card.Text>

                  <ul className="plan-features mb-4">
                    <li>Catálogo base</li>
                    <li>Soporte estándar</li>
                    <li>1 dispositivo a la vez</li>
                  </ul>

                  <Button className="btn-pink w-100">Ordenar ahora</Button>
                </Card.Body>
              </Card>
            </Col>

            {/* QUANTUM */}
            <Col md={6} lg={4}>
              <Card className="plan-card plan-dark border-0 position-relative">
                <div className="price-pill pill-dark text-white fw-700">
                  15.000 ARS / mes
                </div>

                <Card.Body>
                  <Card.Title className="plan-title fw-800 mb-2 text-white">
                    PLAN QUANTUM
                  </Card.Title>
                  <Card.Text className="plan-sub text-muted mb-3">
                    Pensado para gamers exigentes: 120 fps en 1080p / 60 fps en 1440p, priorización de red y colas rápidas.
                  </Card.Text>

                  <ul className="plan-features mb-4">
                    <li>Catálogo completo</li>
                    <li>Soporte prioritario</li>
                    <li>Hasta 2 dispositivos simultáneos</li>
                  </ul>

                  <Button className="btn-pink w-100">Ordenar ahora</Button>
                </Card.Body>
              </Card>
            </Col>

            {/* ECLIPSE */}
            <Col md={6} lg={4}>
              <Card className="plan-card plan-dark border-0 position-relative">
                <div className="price-pill pill-dark text-white fw-700">
                  20.000 ARS / mes
                </div>

                <Card.Body>
                  <Card.Title className="plan-title fw-800 mb-2 text-white">
                    PLAN ECLIPSE
                  </Card.Title>
                  <Card.Text className="plan-sub text-muted mb-3">
                    Lo máximo para streamers: 4K HDR, servidores premium y soporte dedicado 24/7.
                  </Card.Text>

                  <ul className="plan-features mb-4">
                    <li>Catálogo + DLCs selectos</li>
                    <li>Soporte dedicado</li>
                    <li>Hasta 3 dispositivos simultáneos</li>
                  </ul>

                  <Button className="btn-pink w-100">Ordenar ahora</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
