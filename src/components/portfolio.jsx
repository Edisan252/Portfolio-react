import React,{useState} from "react";
import { FaInstagram,FaWhatsapp,FaGithub ,FaLinkedin,FaHtml5,FaCss3Alt,FaJsSquare,FaBootstrap,FaDatabase,FaEnvelope} from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import { MdCall } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import 'react-toastify/dist/ReactToastify.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { MDBRipple } from 'mdb-react-ui-kit';
import Typewriter from "typewriter-effect";
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import Carousel from 'react-bootstrap/Carousel';

const Port = () =>{
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
      });
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        toast.success("Form submitted successfully!");
      }; 
      const [hovered, setHovered] = useState(false);
      const [position, setPosition] = useState({ x: 0, y: 0 });
    
      const handleMouseMove = (e) => {
        const boundingRect = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - boundingRect.left) / boundingRect.width;
        const y = (e.clientY - boundingRect.top) / boundingRect.height;
        setPosition({ x, y });
      };
      
    return(
        <>
           <header className="header">
            <h1>Port<span>folio</span></h1>
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills1">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            </header>
            <main>
            <section id="home">
            <div className="home a11">
                <div className="container">
                    <div className="row ">
                        <div className="col-6">
                        <h1 className="a1">AROEDISANALWA C</h1>
                        <h3><span><Typewriter onInit={(typewriter) => {typewriter.typeString("I Am a FullStack Developer")
                        .pauseFor(0)
                        .start();}}/></span></h3><br/>
                        <p>Create web design,Frontend design,and many more...</p>
                        <ul>
                            <li><a href="https://www.instagram.com/king_of_pdkt_55?utm_source=qr&igsh=MW16amh0dTJ5YWQzag== "><FaInstagram /></a></li>
                            <li><a href=" https://wa.me/qr/2RQKORRT2GQXB1"><FaWhatsapp/></a></li>
                            <li><a href="https://github.com/Edisan252 "><FaGithub /></a></li>
                            <li><a href="https://www.linkedin.com/in/aroedisan- alwa-ck-263626279"><FaLinkedin /></a></li>
                        </ul><br/>
                        <a href="aro.pdf" className="butt">Download cv</a>
                    </div>
                    <div className="col-6 a2">
                    <div className={`image-container ${hovered ? 'hovered' : ''}`} onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    onMouseMove={handleMouseMove}>
                    <div className="image-wrapper">
                        <img src="../aroedisanalwa.jpg" alt="Your Image" style={{ transformOrigin: `${position.x * 100}% ${position.y * 100}%` }} /></div>
                     </div>
                    </div>
                    </div>
                </div>
            </div>
            </section>
            <section id="about">
            <div className="about"><br/><br/>
                <h1 className="a3">About <span>Us</span></h1>
                <div className="row a11">
                    <div className="col-5 a8">
                    <div className={`image-container ${hovered ? 'hovered' : ''}`} onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    onMouseMove={handleMouseMove}>
                    <div className="image-wrapper1">
                        <img src="../edisan.jpg" alt="" style={{ transformOrigin: `${position.x * 100}% ${position.y * 100}%` }} /></div>
                     </div>
                    </div>
                    <div className="col-7">
                    <h4>Fullstack <span>Developer!</span></h4>
                    <p>My name is Aroedisanalwa C, and I'm a Fullstack Developer. I'm come from Pudukkottai.
                        I'm completed MCA from S.A Engineering College in chennai and BCA from J.J college of arts and science in pudukkottai. 
                        I'm currently interested in moving to a larger company where I can apply the knowledge.</p><br/>
                        <a href="#info" class="butt"> More About Me</a>
                    </div>
                </div>
            </div>
            </section>
            <section id="skills1"><br /><br /><br/>
                <h1 className="a3 mt-5">Our <span>Skills</span></h1>
                <div className="container a11">
                    <div className="row">
                        <div className="col-6">
                        <div className="skills-container"><br/><br/>
                    <h1 className="a3">Technical <span>Skills</span></h1>
                    <div className="skill" >
                    <FaHtml5 className="a6"/>
                    <h3>HTML</h3>
                    <div className="skill-bar">
                        <div className="skill-level"  style={{"width": "90%"}}></div>
                    </div>
                </div>
                <div className="skill">
                    <FaCss3Alt className="a6"/>
                    <h3>CSS</h3>
                    <div className="skill-bar">
                        <div className="skill-level" style={{"width":" 90%"}}></div>
                    </div>
                </div>
                <div className="skill">
                    <FaJsSquare  className="a6"/>
                    <h3>JavaScript</h3>
                    <div className="skill-bar">
                        <div className="skill-level" style={{"width": "80%"}}></div>
                    </div>
                </div>
                <div className="skill">
                    <FaBootstrap className="a6"/>
                    <h3>Bootstrap</h3>
                    <div className="skill-bar">
                        <div className="skill-level" style={{"width": "90%"}}></div>
                    </div>
                </div>
                <div className="skill">
                    <FaDatabase className="a6"/>
                    <h3>SQL</h3>
                    <div className="skill-bar">
                        <div className="skill-level" style={{"width": "80%"}}></div>
                    </div>
                    </div><br/>
            </div>
                        </div>
                        <div className="col-6 mt-5"><br />
                            <h1 className="a3">Soft<span>Skills</span></h1>
                            <div className="row">
                                <div className="col-6">
                                <div style={{ width: 200, height: 200}}>
                                <CircularProgressbar value={90} text={`${90}%`} styles={buildStyles({ textColor: "azure",
                                 pathColor: " rgb(238, 125, 26)",trailColor: "azure"})}/>
                                   <h3 style={{textAlign:'center',color:'azure'}}>Leadership</h3>
                                </div>
                                </div>
                                <div className="col-6">
                                <div style={{ width: 200, height: 200}}>
                                   <CircularProgressbar value={75} text={`${75}%`} styles={buildStyles({ textColor: "azure",
                                 pathColor: " rgb(238, 125, 26)",trailColor: "azure"})}/>
                                   <h3 style={{textAlign:'center',color:'azure'}}>Creativity</h3>
                                </div>
                                </div><br/>
                                <div className="col-6 mt-5">
                                <div style={{ width: 200, height: 200 }}>
                                <CircularProgressbar value={70} text={`${70}%`} styles={buildStyles({ textColor: "azure",
                                 pathColor: " rgb(238, 125, 26)",trailColor: "azure"})}/>
                                   <h3 style={{color:'azure'}}>Communication</h3>
                                </div>
                                </div>
                                <div className="col-6 mt-5">
                                <div style={{ width: 200, height: 200}}>
                                <CircularProgressbar value={80} text={`${80}%`} styles={buildStyles({ textColor: "azure",
                                 pathColor: " rgb(238, 125, 26)",trailColor: "azure"})}/>
                                   <h3 style={{textAlign:'center',color:'azure'}}>Problem-solving</h3>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>    
            </section>
            <section id="projects"><br/><br/>
        <h2 className="a3 ">Our <span>Projects</span></h2><br/>
        <div className="row">
            <div className="col-4">
            <MDBRipple rippleTag='div' className='bg-image hover-overlay hover-zoom hover-shadow a9'>
      <img src='../backery.png' alt="" className='w-100' />
      <a href='https://regal-khapse-b430f9.netlify.app'>
        <div className='mask' style={{ backgroundColor: 'rgba(57, 192, 237, 0.2)',borderRadius:'10px'}}></div>
      </a>
    </MDBRipple>
        </div>
        <div className="col-4">
            <MDBRipple rippleTag='div' className='bg-image hover-overlay hover-zoom hover-shadow a10'>
      <img src='../calculator.png'  alt=""/>
      <a href='https://bucolic-gnome-223ec1.netlify.app/'>
        <div className='mask' style={{ backgroundColor: 'rgba(57, 192, 237, 0.2)',borderRadius:'10px'}}></div>
      </a>
    </MDBRipple>
        </div>
        <div className="col-4">
            <MDBRipple rippleTag='div' className='bg-image hover-overlay hover-zoom hover-shadow a10'>
      <img src='../guess.png'  alt=""/>
      <a href='https://cosmic-monstera-7b15f1.netlify.app/'>
        <div className='mask' style={{ backgroundColor: 'rgba(57, 192, 237, 0.2)',borderRadius:'10px'}}></div>
      </a>
    </MDBRipple>
        </div>
        <div className="col-4 mt-5">
            <MDBRipple rippleTag='div' className='bg-image hover-overlay hover-zoom hover-shadow a10'>
      <img src='../1.jpeg' alt="" />
      <a href='#4'>
        <div className='mask' style={{ backgroundColor: 'rgba(57, 192, 237, 0.2)',borderRadius:'10px'}}></div>
      </a>
    </MDBRipple>
        </div>
        <div className="col-4 mt-5">
            <MDBRipple rippleTag='div' className='bg-image hover-overlay hover-zoom hover-shadow a10'>
      <img src='../medical.png' alt="" />
      <a href='#5'>
        <div className='mask' style={{ backgroundColor: 'rgba(57, 192, 237, 0.2)',borderRadius:'10px'}}></div>
      </a>
    </MDBRipple>
        </div>
        <div className="col-4 mt-5">
            <MDBRipple rippleTag='div' className='bg-image hover-overlay hover-zoom hover-shadow a10'>
      <img src='../vetnary.png' alt="" />
      <a href='#6'>
        <div className='mask' style={{ backgroundColor: 'rgba(57, 192, 237, 0.2)',borderRadius:'10px'}}></div>
      </a>
    </MDBRipple>
        </div>
        </div>
        <div className="caro mt-5">
        <Carousel>
      <Carousel.Item interval={1000}>
        <img src="../calculator.png" alt=""/>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <img src="../backery.png" alt=""/>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <img src="../guess.png" alt=""/>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <img src="../medical.png" alt=""/>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <img src="../vetnary.png" alt=""/>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <img src="../1.jpeg" alt=""/>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
    </section>
    <div>
    </div>
    <section id="contact">

        <div className="contact a11 mt-5">
        <h2 className="a3">Contact <span>Us</span></h2><br/>
            <div className="row">
                <div className="col-4 a13 a5 mt-5 a11">
                    <h2><a href="#"><FaEnvelope /> Email Id:<br/><span>aroedisanawack@gmail.com</span></a></h2>
                    <a href="#"><h2><MdLocationPin /> Location:<br/><span>6/250/5,mamarathupatti,</span></h2>
                        <h2><span>Lembalakkudi(PO),Thirumayam(TK),</span></h2>
                        <h2><span>Pudukkottai(DT).622412</span></h2></a>
                    <h2><a href="#"><MdCall /> Contact:<br/><span>+91 8838431399</span></a></h2>
                    <ul>
                    <li><a href="https://www.instagram.com/king_of_pdkt_55?utm_source=qr&igsh=MW16amh0dTJ5YWQzag== "><FaInstagram /></a></li>
                    <li><a href=" https://wa.me/qr/2RQKORRT2GQXB1"><FaWhatsapp/></a></li>
                    <li><a href="https://github.com/Edisan252 "><FaGithub /></a></li>
                    <li><a href="https://www.linkedin.com/in/aroedisan- alwa-ck-263626279"><FaLinkedin /></a></li>
                </ul>
                </div>
            <div className="col-4 a12">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15697.925625386833!2d78.7898292445985!3d10.38328633587952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00782d25029679%3A0x4503e2d3b4a3897f!2z4K6q4K-B4K6k4K-B4K6V4K-N4K6V4K-L4K6f4K-N4K6f4K-ILCDgrqTgrq7grr_grrTgr40g4K6o4K6-4K6f4K-BIDYyMjAwMw!5e0!3m2!1sta!2sin!4v1719571039827!5m2!1sta!2sin" width="600" height="450" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="a"></iframe>
                </div>
                <div className="col-4 a5 a7">
                <div className="contact-form-container">
                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="form-group">
                            <label>Name:</label>
                            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label>Email:</label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label>Message:</label>
                            <textarea name="message" value={formData.message} onChange={handleChange} required />
                        </div>
                        <button type="submit" className="submit-button">Submit</button>
                    </form>
                    <ToastContainer/>
                </div>
                <ul>
                    <li><a href="https://www.instagram.com/king_of_pdkt_55?utm_source=qr&igsh=MW16amh0dTJ5YWQzag== "><FaInstagram /></a></li>
                    <li><a href=" https://wa.me/qr/2RQKORRT2GQXB1"><FaWhatsapp/></a></li>
                    <li><a href="https://github.com/Edisan252 "><FaGithub /></a></li>
                    <li><a href="https://www.linkedin.com/in/aroedisan- alwa-ck-263626279"><FaLinkedin /></a></li>
                </ul>
                </div>
                
            </div>
        </div>
        <hr style={{color:'azure',height:'50px'}} />
        <footer style={{textAlign:'center',color:'azure'}}>
            <h3 className="a11">Design By Aroedisanalwac</h3>
        </footer>
    </section>
    </main>
        </>  
    )
}
export default Port
