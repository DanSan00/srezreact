import Carousel from 'react-bootstrap/Carousel';

export function Sliderw() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://avatars.mds.yandex.net/i?id=f44f71cc9db3f9086740488ef3230c680342f767-5593596-images-thumbs&n=13"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://avatars.mds.yandex.net/i?id=b779379fe26a8ed2e857cb53df82ea8b1c62d474-7669654-images-thumbs&n=13"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://avatars.mds.yandex.net/i?id=19e1100f012b76a65c348d2f413d69e65ec29386-5275655-images-thumbs&n=13"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

