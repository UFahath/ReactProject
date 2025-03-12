import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import flightsitelogo from '../assets/images/flightsitelogo.jpeg'
 const SignUp = () => {
  return (
    <>
    <div className="container d-flex p-5 mt-5 bg-success rounded-3" style={{height:"600px"}}>
      <div className="mt-5 ms-5 me-5">
        <img src={flightsitelogo} width={100} height={100} className="rounded-circle"/>

      </div>
    </div>
    </>
  )
}
export default SignUp;
