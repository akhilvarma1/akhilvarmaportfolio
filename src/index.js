import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

ReactDOM.render(
  <>
  
  <nav className="navbar navbar-expand-sm bg-light navbar-dark fixed-top cloudx">  
    <a className="navbar-brand  font-weight-bold" href="#"><div style={{color:'#004a99'}}>Akhil Varma</div></a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
            <li className="nav-item">
                <a className="nav-link text-primary" href="#section1" style={{fontFamily: 'Pacifico, cursive'}}>About</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-primary" href="#section2a" style={{fontFamily: 'Pacifico, cursive'}}>Professional Experience</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-primary" href="#section2" style={{fontFamily: 'Pacifico, cursive'}}>Education</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-primary" href="#section3" style={{fontFamily: 'Pacifico, cursive'}}>Skills</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-primary" href="#section4" style={{fontFamily: 'Pacifico, cursive'}}>Interests</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-primary" href="#section5" style={{fontFamily: 'Pacifico, cursive'}}>Achievements</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-primary" href="#section6" style={{fontFamily: 'Pacifico, cursive'}}>Contact</a>
            </li>
        </ul>
    </div>
</nav>


<div id="section1" className="container-fluid bg-primary " style={{paddingTop:'70px',paddingBottom:'200px'}}>
  <div className="crd container cloud">
<div className="card bg-light text-dark " >
    <div className="card-body">
    <h1 style={{fontFamily: 'Dela Gothic One ,cursive'}}><div className="text-primary" style={{FontSize:'50px'}} >Akhil</div>Varma </h1>
    <h6>Hyderabad, Telangana. <span className="text-primary">Yedarasriakhilvarm123@gmail.com</span>
    </h6>
    <p style={{fontFamily: 'Roboto Condensed, sans-serif',fontSize:'25px'}}>I am a simple computer geek, like to go in accordance with nature. I am passionate about Software Development and most of my time is spent in that, I love to solve daily life problems with software technologies. I keep myself updated with opensource tools, development and feel pleasure to work in that field.</p>
    <a href="https://www.youtube.com/" className="fa fa-facebook" style={{textDecoration:'none'}}></a>
<a href="https://www.youtube.com/" className="fa fa-twitter" style={{textDecoration:'none'}}></a>
<a href="https://www.linkedin.com/in/akhil-varma-6a5a121a6/" className="fa fa-linkedin" style={{textDecoration:'none'}}></a>
<a href="https://www.youtube.com/" className="fa fa-instagram" style={{textDecoration:'none'}}></a>
<a href="https://github.com/akhilvarma1" className="fa fa-github" style={{textDecoration:'none'}}></a>  
    </div>
  </div>
</div>

</div>

<div id="section2a" className="container-fluid bg-primary " style={{paddingBottom:'70px'}}>
  <h1 className="text-light " style={{fontFamily: 'Dela Gothic One, cursive'}}>Work Experience</h1>
  <div className="crd container cloud1">
  <div className="card bg-light  text-dark">
    <div className="card-body" >
    <h4>Tata Consultancy Services</h4>
    <p style={{fontFamily: 'Roboto Condensed, sans-serif',fontSize:'25px'}}>Systems Engineer<br/><div style={{fontSize:'18px'}}>January 2023- Currently Working.</div><br/><div style={{fontSize:'19px'}}>Working as Oracle Database adminstrator,Proficient in implementing and managing high availability (HA) and 
    disaster recovery (DR) solutions such as Oracle Data Guard and Oracle RAC, ensuring business continuity and data resilience.</div> </p>
    <hr style={{backgroundColor:'white'}} />
    <h4>Keka HR</h4>
    <p style={{fontFamily: 'Roboto Condensed,sans-serif', fontSize : '25px'}}>Quality Analyst<br/> <div style={{fontSize:'18px'}}>January 2022-October 2022</div> <br/><div style={{fontSize:'19px'}}> Tested Multiple HR based application,Recognized for the ability to visualize complex testing scenarios and dependencies through mind maps, facilitating 
    comprehensive test coverage and thorough defect analysis.</div></p>    
    </div>
  </div>
  </div>
 </div>

<div id="section2" className="container-fluid bg-primary" style={{paddingBottom:'70px'}}>
  <h1 className="text-light" style={{fontFamily: 'Dela Gothic One, cursive',paddingBottom:'40px'}}>Education</h1>
  <div className="crd container cloud2">
  <div className="card bg-light text-dark">
    <div className="card-body" >
    <h4 style={{display:'inline'}}>MLRITM - </h4>
    <p style={{fontFamily: 'Roboto Condensed, sans-serif',fontSize:'25px',display:'inline'}}>Bachelor of Technology<br/> <div style={{fontSize:'19px'}}>Information Technology<br/>2018-2022</div></p>
    <hr style={{backgroundColor:'white'}} />
    <h4 style={{display:'inline'}}>Sri Chaitanya Junior College - </h4>
    <p style={{fontFamily: 'Roboto Condensed,sans-serif', fontSize : '25px',display:'inline'}}>Intermediate<br/><div style={{fontSize:'19px'}}>  MPC (Mathematics Physics & chemistry) <br/>Percentage:90.9%</div></p>
    
    </div>
  </div>
  </div>
 </div>
<div id="section3" className="container-fluid bg-primary" style={{paddingTop:'70px',paddingBottom:'70px'}}>
  <h1 className="text-white" style={{fontFamily: 'Dela Gothic One, cursive',paddingBottom:'40px'}}>Skills</h1>
  <div className="crd container cloud3">
  <div className="card bg-light text-dark ">
    <div className="card-body">
    <h4>Programing Language and Skills</h4>
    <hr className="bg-primary"/>
    <div className="container">
  <h5 >
  <span style={{marginLeft:'2px'}} className="badge badge-primary">Oracle Database</span>
  <span style={{marginLeft:'2px'}} className="badge badge-primary">Linux</span>
  <span style={{marginLeft:'2px'}} className="badge badge-primary">C</span>
  <span style={{marginLeft:'2px'}} className="badge badge-primary">C++</span>
  <span style={{marginLeft:'2px'}} className="badge badge-primary">Java</span>
  <span style={{marginLeft:'2px'}} className="badge badge-primary">Python</span>
  <span style={{marginLeft:'2px'}} className="badge badge-primary">JavaScript</span>
  <span style={{marginLeft:'2px'}} className="badge badge-primary">SQL</span>
  <span style={{marginLeft:'2px'}} className="badge badge-primary">Html</span>
  <span style={{marginLeft:'2px'}} className="badge badge-primary">CSS</span><br/>
  <span style={{marginLeft:'2px'}} className="badge badge-primary">Bootstrap</span>
  <span style={{marginLeft:'2px'}} className="badge badge-primary">React</span>
  <span style={{marginLeft:'2px'}} className="badge badge-primary">Node js</span>
  <span style={{marginLeft:'2px'}} className="badge badge-primary">Php</span>
  <span style={{marginLeft:'2px'}} className="badge badge-primary">Flutter</span>
  <span style={{marginLeft:'2px'}} className="badge badge-primary">Android Studio and Visual Studio</span><br/>
  <span style={{marginLeft:'2px'}} className="badge badge-primary">Data Structures</span>
  </h5>
</div>

    
    </div>
  </div>
  </div>
</div>
<div id="section4" className="container-fluid bg-primary" style={{paddingTop:'70px',paddingBottom:'70px'}}>
<h1 className="text-light"style={{fontFamily: 'Dela Gothic One, cursive',paddingBottom:'40px'}} >Interests</h1>
<div className="crd container cloud1">
 <div className="card bg-light text-dark">
    <div className="card-body">
    <h4>Interests<hr style={{backgroundColor:'white'}}/></h4>

    <p style={{fontFamily: 'Roboto Condensed, sans-serif',fontSize:'25px'}}>Developing Softwares to solve daily life problems</p>
    <p style={{fontFamily: 'Roboto Condensed, sans-serif',fontSize:'25px'}}>Reading Books</p>
    <p style={{fontFamily: 'Roboto Condensed, sans-serif',fontSize:'25px'}}>Playing Snooker's</p>
    
   
    </div>
  </div>
  </div> 
</div>
<div id="section5" className="container-fluid bg-primary" style={{paddingTop:'70px',paddingBottom:'70px'}}>
<h1 className="text-white" style={{fontFamily: 'Dela Gothic One, cursive',paddingBottom:'40px'}}>Awards and Certificates</h1>
<div className="crd container cloud3">
  <div className="card bg-light text-primary">
    <div className="card-body">
    <h4>Acheivements<hr style={{backgroundColor:'white'}}/></h4>
    <p style={{fontFamily: 'Roboto Condensed, sans-serif',fontSize:'25px'}}>Certification from Oracle Corporation as Oracle Certified Associate (OCA) - Database Administrator I.</p>
    <p style={{fontFamily: 'Roboto Condensed, sans-serif',fontSize:'25px'}}>Certification from Keka HR company for Successful completion of Quality Analyst Internship.</p>
    <p style={{fontFamily: 'Roboto Condensed, sans-serif',fontSize:'25px'}}>Awarded certificate for Problem solving from Hacker Rank.</p>
    <p style={{fontFamily: 'Roboto Condensed, sans-serif',fontSize:'25px'}}>Awarded certificate for flutter  App development </p>
    <p style={{fontFamily: 'Roboto Condensed, sans-serif',fontSize:'25px'}}>Awarded certificate for Digital Marketing from goolge</p>
    <p style={{fontFamily: 'Roboto Condensed, sans-serif',fontSize:'25px'}}>Awarded certificate for Analytics from google </p>
    
   
    </div>
  </div>
  </div>
</div>
<div id="section6" className="container-fluid bg-light" style={{paddingTop:'70px',paddingBottom:'70px'}}>
  <div className="cont">
   <h1 className="title">Akhil Varma</h1>
  <p className="title">Software Enthusiast </p>
  <p></p>
  <div className="ax" style={{margin: '24px 0'}}>
    <a href="https://github.com/akhilvarma1"><i className="fa fa-github"></i></a>  
    <a href="https://www.linkedin.com/in/akhil-varma-6a5a121a6/"><i className="fa fa-linkedin"></i></a>  
    <a href="#"><i className="fa fa-facebook"></i></a> 
  </div>
  <p><button data-toggle="modal" data-target="#exampleModalLong" className="bx">Contact</button></p>
</div>
</div>
  <div className="modal fade modal-style" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true" >
    <div className="modal-dialog modal-lg" role="document" style={{borderRadius:'20px'}}>
      <div className="modal-content modal-style"  style={{borderRadius:'20px'}}>
        <div className="modal-body" style={{backgroundColor:'#80ccff',borderRadius:'20px',}}>
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          <h1 style={{textAlign:'center',color:'white'}}>Contact Details</h1>
          <hr/>
          <div className="row">
          <div className="col-sm-6" style={{textAlign:'center',color:'white'}}>
          <h4 >Email</h4>
          <h5 class="text-primary">yedarasriakhilvarma123@gmail.com</h5>
          </div>
          <div className="col-sm-6" style={{textAlign:'center',color:'white'}}>
          <h4 >Contact Number</h4>
          <h5 class="text-primary">+91-9515186886</h5>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>

<footer className=" text-center text-light" style={{backgroundColor:'#66c2ff'}}>

  <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.05);'}}>
    © 2020 Copyright:
    <a className="text-body" style={{color:'red'}} href="#">Akhil Varma</a>
  </div>

</footer>
  </>,
  document.getElementById('root')
);