import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import flightsitelogo from '../assets/images/flightsitelogo.jpeg'
 const SignUp = () => {
  return (
    <>
    <div className="container shadow-lg bg-body-tertiary d-flex p-5 mt-5 rounded-3 border border-4" style={{height:"600px"}}>
      <div className=" mx-sm-5 mt-5 mx-auto">
        <img src={flightsitelogo} width={100} height={100} className="ms-4 rounded-circle"/>
        <div className="d-flex" style={{width:"80px"}}>
        <h3 className="text-wrap w-20 ms-3" style={{textIndent:"20px"}}>Tours Travels</h3>
          <span className="fw-bolder text-primary" style={{fontSize:"3rem"}}>&</span>
          </div>
          <div className="text-center"style={{width:"150px"}}>
          <p className="text-wrap fs-5 mt-3">"Your Perfect Trip Planned to Perfection"</p>
          </div>
      </div>
      <div className="offset-1 border border-right-3"></div>
    </div>
    </>
  )
}
export default SignUp;
