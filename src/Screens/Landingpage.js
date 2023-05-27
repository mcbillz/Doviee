import "../CSS/Landingpage.css";
import Navbar from "../Components/Navbar";
import Slider from "../Components/Slider";
import Slider2 from "../Components/Slider2";
import { BrownBtn, BoarderBrownBtn } from "../Components/Btns";

function Landingpage() {
  return (
    <div>
      <Navbar />
      <div className="section1">
        <Slider />
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
        <Slider2 />
        {/* <div className="sec1text">
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
        </div> */}
      </div>
    </div>
  );
}

export default Landingpage;
