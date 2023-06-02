import "../CSS/Card.css";

function Card(props) {
  const { pName } = props;
  const { pPrice } = props;
  const { pImg } = props;
  const { oldPrice } = props;
  const { pPage } = props;

  return (
    <div>
      <a href={pPage}>
        <div className="card">
          <div className="img-cont">
            <img src={pImg}></img>
          </div>
          <div className="product-info">
            <h3 className="product-name">{pName}</h3>
            <p className="price">
              {pPrice} <span className="old-price">{oldPrice}</span>
            </p>
          </div>
        </div>
      </a>
    </div>
  );
}

export default Card;
