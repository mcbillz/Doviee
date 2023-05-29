import "../CSS/Landingpage.css";
import Navbar from "../Components/Navbar";
import Slider from "../Components/Slider";
import Card from "../Components/Card";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import { femaleProducts, maleProducts } from "../Products";
import { BrownBtn, BoarderBrownBtn } from "../Components/Btns";

function Landingpage() {
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  const shuffledArray = shuffleArray(femaleProducts);
  const randomItems = shuffledArray.slice(0, 3);
  return (
    <div className="par">
      <Navbar />
      <div className="section1">
        <Slider gender="female" />
        <div className="sec1text">
          <h1>STYLE</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
            itaque quam omnis est, ex voluptatem tenetur accusamus soluta animi
            cupiditate incidunt eveniet sequi impedit. Accusantium facilis magni
            reprehenderit ex, similique ab quisquam in veritatis cum voluptatum
            facere fugit dicta ea vel recusandae aliquam laboriosam doloribus
            odit non necessitatibus eius ullam.
          </p>
          <BrownBtn text="Shop" />
        </div>
      </div>
      <div className="section2">
        <Slider gender="male" />s
      </div>
      <div className="section3">
        {randomItems.map((item) => (
          <Card
            key={item.id}
            pPage={item.url}
            pImg={item.src[0]}
            pName={item.name}
            pPrice={item.price}
            oldPrice={item.oldPrice}
          />
        ))}
      </div>
      <div className="section4">
        <Banner
          img="https://res.cloudinary.com/dp6afxo4t/image/upload/v1685204038/doviee/female/freestocks-_3Q3tsJ01nc-unsplash_tmyesa.jpg"
          url=""
        />
      </div>
      <div className="section5">
        <div className="subscribe">
          <input placeholder="Your E-mail" type="e-mail"></input>
          <button type="submit">Subcribe</button>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Landingpage;
