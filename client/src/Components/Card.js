import "../CSS/Card.css";
import formatCurrency from "format-currency";

function Card(props) {
  let opts = { format: "%s%v", symbol: "$" };
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
              {formatCurrency(`${pPrice}`, opts)}
              <span className="old-price">{oldPrice}</span>
            </p>
          </div>
        </div>
      </a>
    </div>
  );
}

export default Card;
