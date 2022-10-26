import Product from './Product';

import '../styles/product-list.scss';

const ProductList = () => {
  return (
    <div className="master-column-wrapper">
      <div className="page home-page">
        <div className="page-body">
          <div className="home-right">
            <div className="featured-product">
              <div className="product-grid home-page-product-grid">
                <div className="item-grid">
                  <Product />
                  <Product />
                  <Product />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
