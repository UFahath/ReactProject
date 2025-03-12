import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import fligthLogo from "../assets/images/flightsitelogo.jpeg"
import flaglogo from '../assets/images/flaglogo.png'
function HeaderNav()
{
  return (
    <>
     <nav className="navbar navbar-expand bg-body-tertiary border border-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
     <img src={fligthLogo} alt="site_logo" className="rounded-circle" width={60} height={60}/>
    </a>
    <div>
      <ul className="navbar-nav mb-1">
        <li className="nav-item me-2 me-sm-4">
          <button className="btn btn-primary">Sign in</button>
        </li>
        <li className="nav-item me-2 me-sm-4">
          <button className="btn btn-primary">Sign up</button>
        </li>
        <li className="nav-item">
          <button className="btn btn-primary d-flex h-28 p-1.5">
            <img src={flaglogo} className="rounded-circle" width={25} height={25}/>
            <div className="border border-left-1 mx-2 p-0"></div>
            <select className="bg-primary text-white" style={{border:"none",outline:"none"}}>
              <option>Eng</option>
              <option>Japnese</option>
            </select>
          </button>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default HeaderNav;