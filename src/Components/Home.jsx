import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import flyhigh from "../assets/images/flight.jpg";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadset,faAward,faMoneyBillTransfer,faPlaneDeparture,faBan,faFaceSmileWink } from "@fortawesome/free-solid-svg-icons";
const FacilityCarousel = () => {
  return (
    <>
<div id="carouselExampleControls" className="carousel" data-bs-touch="true">
  <div className="carousel-inner">

    {/* 1 */}
    <div className="carousel-item active">
    <div className="row">
      <div className="container border  p-3  rounded-2 bg-warning" style={{width:"29%"}}>
          <FontAwesomeIcon icon={faHeadset} className="fs-1 p-3" />
          <h3 className="text-primary-emphasis fw-bolder">Customer Support</h3>
          <h5>24/7 Customer Support</h5>
          </div>

          <div className="container border  p-3 rounded-2 bg-warning" style={{width:"29%"}}>
          <FontAwesomeIcon icon={faAward} className="fs-1 p-3" />
          <h3 className="text-primary-emphasis fw-bolder">Air Point Rewards</h3>
          <h5>Loyalty Reward Program</h5>
          </div>

          <div className="container border  p-3 rounded-2 bg-warning" style={{width:"29%"}}>
          <FontAwesomeIcon icon={faMoneyBillTransfer} className="fs-1 p-3" />
          <h3 className="text-primary-emphasis fw-bolder">Secured Payments</h3>
          <h5 className="text-wrap">Visa,
            MasterCard,
            Gpay etc</h5>
          </div>
    </div>
    </div>
{/* 2 */}
   

<div className="carousel-item active">
    <div className="row">
      <div className="container border  p-3  rounded-2 bg-warning" style={{width:"29%"}}>
          <FontAwesomeIcon icon={faPlaneDeparture} className="fs-1 p-3" />
          <h3 className="text-primary-emphasis  fw-bolder">Instant Booking</h3>
          <h5>Book Tickets With Simple Steps</h5>
          </div>

          <div className="container border  p-3 rounded-2 bg-warning" style={{width:"29%"}}>
          <FontAwesomeIcon icon={faBan} className="fs-1 p-3" />
          <h3 className="text-primary-emphasis fs-4 fw-bolder">Zero Cancellation</h3>
          <h5>100% Refund for Flight Cancellation</h5>
          </div>

          <div className="container border  p-3 rounded-2 bg-warning" style={{width:"29%"}}>
          <FontAwesomeIcon icon={faFaceSmileWink} className="fs-1 p-3" />
          <h3 className="text-primary-emphasis fw-bolder">Luxury Travel</h3>
          <h5>Bon voyage!</h5>
          </div>
    </div>
    </div>
 

   
  </div>

  {/* controls */}
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
    {/* <span className="carousel-control-prev-icon" aria-hidden="true"></span> */}
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
    {/* <span className="carousel-control-next-icon" aria-hidden="true"></span> */}
    <span className="sr-only">Next</span>
  </a>
</div>
    </>
  );
};

//main
const Home = () => {
  let locationToggler = useRef(null);

  let changePlace = () => {
    //  console.log(locationToggler.current.name)
    let form = locationToggler.current;
    // console.log(form)
    form.addEventListener("click", (e) => {
      console.log(e.target.innerText);
    });
  };
  return (
    <>
      <img src={flyhigh} style={{ maxHeight: "600px", width: "100%" }} />

      <div className="container border border-dark rounded-3 position-relative top-0 translate-middle-y bg-white">
        <div className="row  ms-2">
          <div className="col-1 me-5 me-sm-0">
            <div className="form-check fs-5 fw-bolder">
              <input className="form-check-input" type="radio" />
              <label htmlFor="" className="form-check-label">
                OneWay
              </label>
            </div>
          </div>
          <div className="col-1"></div>

          <div className="col-1 me-5 me-sm-0">
            <div className="form-check fs-5 fw-bolder">
              <input type="radio" className="form-check-input" />
              <label htmlFor="" className="form-check-label">
                TwoWay
              </label>
            </div>
          </div>
          <div className="col-1"></div>
          <div className="col-2">
            <div className="form-check fs-5 fw-bolder">
              <input type="radio" className="form-check-input" />
              <label htmlFor="" className="form-check-label">
                MultiCity
              </label>
            </div>
          </div>
        </div>
        <div className="row my-3 mx-2">
          <div className="col-10">
            <div className="input-group">
              {/* <!-- First Dropdown --> */}
              <select
                ref={locationToggler}
                className="form-select "
                name="From"
              >
                <option>From</option>
                <option value="1" name="Chennai">
                  Chennai
                </option>
                <option value="2" name="Mumbai">
                  Mumbai
                </option>
                <option value="3" name="Delhi">
                  Delhi
                </option>
              </select>

              {/* <!-- Center Button --> */}
              <button
                className="btn btn-primary"
                type="button"
                onClick={changePlace}
              >
                🔄
              </button>

              {/* <!-- Second Dropdown --> */}
              <select className="form-select">
                <option>To</option>
                <option value="1" name="Bangalore">
                  Bangalore
                </option>
                <option value="2" name="Hyderbad">
                  Hyderabad
                </option>
                <option value="3" name="Kolkata">
                  Kolkata
                </option>
              </select>
            </div>
          </div>
          <div className="col-2">
            <div className="form-control-input">
              <input
                type="date"
                className="form-control"
                placeholder="Depart"
              />
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="form-check">
            <input type="checkbox" className="form-control-check me-2" />
            <label htmlFor="" className="form-control-label">
              Direct Flights Only
            </label>
          </div>
        </div>
      </div>

      <FacilityCarousel/>
    </>
  );
};

export default Home;
