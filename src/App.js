import './App.css';
import logo from './asserts/logo.png'
import award from './asserts/1.png'
import awardReciving from './asserts/2.png'
import materialImg from './asserts/3.png'
import Footer from './Footer';
function App() {
  return (
    <>
      <div className="parentContainer">
        <div className="headerContainer">
          <img src={logo} alt="logo" className="headerImg" />
        </div>
        <div className="heroSection">
          <div className="heroImgContainer">
            <img src={award} alt="awardImage" className="heroImg" />
          </div>
          <div className="contentContainer">
            <h3>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h3>
            <div className='imgContainer'>
            <ul>
              <li>C.R.I.'S energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
              <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with Iot enabled control panel.</li>
            </ul>
              <img src={awardReciving} alt="awardReciving" />
            </div>
            <p>Government of India has awarded the <bold style={{fontWeight:"bold"}}>"National Energy Conservation Award 2018"</bold>. Mr.G. Selvaraj, Joint Managing Director of C.R.I. Group recieved the award from Smt. Sumitra Mahajan, Speaker Of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister os State.</p>
          </div>
        </div>
        <div className='textDiv'>
        <p style={{textAlign:"center"}}>INSTALLED OVER 10 LAKKS STAR RATED  PUMPSETS ACROSS THE COUNTRY RESULTING IN A COMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.</p>

        </div>
        <div className="materialImgContainer">
          <img src={materialImg} alt="materialImg" />
          <p style={{textAlign:"center"}}>Valves - Pumps - Pipes - Iot Drives & Controllers - Wires & Cables Systems - Motors</p>
        </div>
        <div className="textContainer">
        <h3>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h3>
        <p>CHEMICALS & PROCESS <span className="bars">|</span> POWER <span className="bars">|</span> WATER & WASTE WATER <span className="bars">|</span> OILS & GAS PHARMA <span className="bars">|</span> SUGARS & DISTILLERIES <span className="bars">|</span> PAPER & PULP <span className="bars">|</span> MARINE & DEFENCE <span className="bars">|</span> METAL & MINING <span className="bars">|</span> FOOD & BEVERAGE <span className="bars">|</span> PETROCHEMICAL & REFINERIES <span className="bars">|</span> SOLAR <span className="bars">|</span> BUILDING <span className="bars">|</span> HVAC <span className="bars">|</span> FIRE FIGHTING <span className="bars">|</span> AGRICULTURE & RESIDENTAL</p>
        </div>
        <Footer/>
      </div>
    </>
  );
}

export default App;
