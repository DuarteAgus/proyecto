// PostersCarousel.jsx
import Carousel from 'react-bootstrap/Carousel'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

function chunk(arr, size) {
  const out = []
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size))
  return out
}

export default function PostersCarousel({ posters = [], perSlide = 12 }) {
  const slides = chunk(posters, perSlide)
  const single = slides.length === 1

  const handleImgError = (e) => {
    e.currentTarget.onerror = null
    e.currentTarget.src = 'https://via.placeholder.com/400x533?text=Poster'
  }

  return (
    <Carousel
      interval={single ? null : 3500}
      pause="hover"
      touch
      controls={!single}
      indicators={!single}
      className="posters-carousel"
    >
      {slides.map((group, idx) => (
        <Carousel.Item key={idx}>
          <Row xs={2} sm={3} md={6} lg={12} className="g-2">
            {group.map((src, i) => (
              <Col key={`${idx}-${i}`}>
                <Card className="poster-card">
                  <Card.Img src={src} alt="" className="poster-img" onError={handleImgError}/>
                </Card>
              </Col>
            ))}
          </Row>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}
