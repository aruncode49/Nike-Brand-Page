import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero container">
      {/* left div */}

      <div className="left">
        <h1>
          your feet <br /> deserve <br /> the best
        </h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="shopping-btn">
          <button className="shop-btn">Shop Now</button>
          <button className="cat-btn">Category</button>
        </div>

        <p>Also available on</p>
        <div className="brand-logos">
          <img
            src="/images/flipkart.png"
            alt="flipkart-image"
            className="flipkart"
          />
          <img src="/images/shops.png" alt="amazon-image" className="amazon" />
        </div>
      </div>

      {/* Right div */}

      <div className="right">
        <img src="/images/shoe_image.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
