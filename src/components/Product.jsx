import Card from './Card';
import Shine from './Shine';
import Glare from './Glare';

const Product = () => {
  return (
    <div className="item-box">
      <div className="product-item">
        <Card>
          <div className="picture">
            <a
              href="https://unicorncards.co.uk/dabl-en009-the-bystial-lubellion-secret-rare-1st-edition-mint-yugioh-card"
              title="Show details for DABL-EN009 The Bystial Lubellion :: Secret Rare 1st Edition Mint YuGiOh Card">
              <picture>
                <source
                  srcSet="https://unicorncards.co.uk/images/thumbs/0058116_415.webp"
                  type="image/webp"
                />
                <img
                  alt=""
                  src="https://unicorncards.co.uk/images/thumbs/0058016_dabl-en009-the-bystial-lubellion-secret-rare-1st-edition-mint-yugioh-card_415.jpeg"
                  loading="lazy"
                />
              </picture>
            </a>
          </div>
          <Shine />
          <Glare />
        </Card>
        <div className="details">
          <h2 className="product-title">
            <a href="https://unicorncards.co.uk/dabl-en009-the-bystial-lubellion-secret-rare-1st-edition-mint-yugioh-card">
              DABL-EN009 The Bystial Lubellion :: Secret Rare 1st Edition Mint YuGiOh Card
            </a>
          </h2>
          <div className="add-info">
            <div className="buttons">
              <button type="button" className="button-2 product-box-add-to-cart-button">
                Add to cart
              </button>
            </div>
            <div className="prices">
              <span className="price actual-price">£54.90</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
