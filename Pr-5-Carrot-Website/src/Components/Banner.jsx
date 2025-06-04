import { Carousel, Button, Container, Row, Col } from 'react-bootstrap';

const Banner = () => {

  return (
    <Carousel>
      <Carousel.Item>
        <div style={{  padding: '64px 32px',  minHeight: '500px',  backgroundSize: 'cover', backgroundPosition: 'center',  backgroundRepeat: 'no-repeat',  display: 'flex',   alignItems: 'center',  backgroundImage:      'url("https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/banner/banner.jpg")',}} >
          <Container>
            <Row>
              <Col md={12}>
                <p style={{ color: '#1e8449', fontWeight: '600', fontSize: '19px' }}>
                  <span style={{ borderBottom: '2px solid #1e8449' }}>100%</span> Organic Fruits
                </p>
                <h1 style={{ fontWeight: '900', fontSize: '48px', color: '#000' }}>
                  Explore fresh & <br /> juicy fruits.
                </h1>
                <p style={{ color: '#555', fontSize: '16px' }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reiciendis beatae consequuntur.
                </p>
                <Button  variant="success"   size="lg"  style={{ padding: '10px 32px', fontWeight: 'bold', fontSize: '16px' }}  >Shop Now </Button>
              </Col>
            </Row>
          </Container>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div
          style={{ padding: '64px 32px',  minHeight: '500px',  backgroundSize: 'cover',  backgroundPosition: 'center',   backgroundRepeat: 'no-repeat', display: 'flex',    alignItems: 'center',  backgroundImage:   'url("https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/banner/banner-2.jpg")', }} >
          <Container>
            <Row className="align-items-center">
              <Col md={12}>
                <p style={{ color: '#000', fontWeight: '600', fontSize: '19px' }}>
                  100% Fresh Vegetables
                </p>
                <h1 style={{ fontWeight: '900', fontSize: '50px', color: '#000' }}>
                  The best way to <br /> stuff your wallet.
                </h1>
                <p style={{ color: '#555', fontSize: '16px' }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reiciendis beatae consequuntur.
                </p>
                <Button   variant="success"  size="lg"  style={{ padding: '10px 32px', fontWeight: 'bold', fontSize: '16px' }} >     Shop Now   </Button>
              </Col>
            </Row>
          </Container>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;


