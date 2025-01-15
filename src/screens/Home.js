import React from 'react'
import './Home.css'

function Home() {
  return (
    <div>
      <section className="hero-section">
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="3000" // Slide every 3 seconds (3000ms)
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://images.unsplash.com/photo-1729617073350-0b76b538f96a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://images.unsplash.com/photo-1729731322001-40b726d476ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>Some representative placeholder content for the second slide.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://images.unsplash.com/photo-1729715620700-d04a0c049094?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1NHx8fGVufDB8fHx8fA%3D%3D"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>Some representative placeholder content for the third slide.</p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      <section className="featured-posts container pt-2">
        <h3 className="text-center text-uppercase py-4">Featured Posts</h3>

        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-12">
            <div className="card">
              <img src="https://images.unsplash.com/photo-1720048171527-208cb3e93192?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D" 
                className="card-img-top mb-card-size-img" alt="..." />
              
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                
                <div className="d-grid">
                  <a href="#" className="btn btn-warning">Read More</a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-3 col-sm-12">
            <div className="card">
              <img src="https://images.unsplash.com/photo-1726725535296-99e5390399ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D" 
                className="card-img-top mb-card-size-img" alt="..." />
              
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                
                <div className="d-grid">
                  <a href="#" className="btn btn-warning">Read More</a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-3 col-sm-12">
            <div className="card">
              <img src="https://images.unsplash.com/photo-1729756760480-b9f5ee9f352f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D" 
                className="card-img-top mb-card-size-img" alt="..." />
              
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                
                <div className="d-grid">
                  <a href="#" className="btn btn-warning">Read More</a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-3 col-sm-12">
            <div className="card">
              <img src="https://images.unsplash.com/photo-1729731321955-6316b2fe17f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0OHx8fGVufDB8fHx8fA%3D%3D" 
                className="card-img-top  mb-card-size-img" alt="..." />
              
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                
                <div className="d-grid">
                  <a href="#" className="btn btn-warning">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="latest-posts container pt-2">
        <h3 className="text-center text-uppercase py-4">Latest Posts</h3>

        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-12">
            <div className="card">
              <img src="https://images.unsplash.com/photo-1720048171527-208cb3e93192?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D" 
                className="card-img-top mb-card-size-img" alt="..." />
              
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                
                <div className="d-grid">
                  <a href="#" className="btn btn-warning">Read More</a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-3 col-sm-12">
            <div className="card">
              <img src="https://images.unsplash.com/photo-1726725535296-99e5390399ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D" 
                className="card-img-top mb-card-size-img" alt="..." />
              
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                
                <div className="d-grid">
                  <a href="#" className="btn btn-warning">Read More</a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-3 col-sm-12">
            <div className="card">
              <img src="https://images.unsplash.com/photo-1729756760480-b9f5ee9f352f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D" 
                className="card-img-top mb-card-size-img" alt="..." />
              
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                
                <div className="d-grid">
                  <a href="#" className="btn btn-warning">Read More</a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-3 col-sm-12">
            <div className="card">
              <img src="https://images.unsplash.com/photo-1729731321955-6316b2fe17f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0OHx8fGVufDB8fHx8fA%3D%3D" 
                className="card-img-top mb-card-size-img" alt="..." />
              
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                
                <div className="d-grid">
                  <a href="#" className="btn btn-warning">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-fluid 
        bg-gradient mt-4 bg-primary" 
        style={{ minHeight: "180px" }}>
        <div className="d-flex flex-column justify-content-center 
          align-items-center">
          <i className="fs-1 text-warning my-3 fa-solid fa-location-dot"></i>

          <h3 className="text-white text-uppercase">
            We have wide variety of Posts
          </h3>

          <button className="btn btn-warning my-2 
            text-uppercase fw-bold">
            View All Posts
          </button>
        </div>
      </section>

      <section className="our-portfolio container">
        <h3 className="text-center text-uppercase py-4">Our Portfolio</h3>

        <div className="container text-center">
          <div className="row g-2">
            <div className="col-6">
              <div className="p-1 border bg-light">
                <img src="https://images.unsplash.com/photo-1729731321955-6316b2fe17f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0OHx8fGVufDB8fHx8fA%3D%3D" 
                  className="card-img-top" alt="..." />
              </div>
            </div>
            <div className="col-6">
              <div className="p-1 border bg-light">
                <img src="https://images.unsplash.com/photo-1729756760480-b9f5ee9f352f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D" 
                  className="card-img-top" alt="..." />
              </div>
            </div>
            <div className="col-6">
              <div className="p-1 border bg-light">
                <img src="https://images.unsplash.com/photo-1726725535296-99e5390399ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D" 
                  className="card-img-top" alt="..." />
              </div>
            </div>
            <div className="col-6">
              <div className="p-1 border bg-light">
                <img src="https://images.unsplash.com/photo-1720048171527-208cb3e93192?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D" 
                className="card-img-top" alt="..." />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
