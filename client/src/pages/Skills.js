import React, {useEffect, useState} from "react";

import "./Skills.scss";
import { Link } from "react-router-dom";
import Page from "../components/Page";
import Logo from "../components/Logo";
import pointerIcon from '../images/icons/white_arrow.svg';


function Skills() {
  const [chartStyle, setChartStyle] = useState("chart");
  const techObjects = [
        {
      "tech": "Javascript",
      "shield": "js",
      "duration": "10+ years",
      "projects": "All"
      },
    {
    "tech": "React",
    "shield": "react",
    "duration": "4 years",
    "projects": "Grid Dynamics"
    },
        {
    "tech": "TypeScript",
    "shield": "ts",
    "duration": "3 years",
    "projects": "Grid Dynamics"
    },
        {
    "tech": "NodeJS",
    "shield": "node",
    "duration": "3 years",
    "projects": "Grid Dynamics"
    },
        {
    "tech": "Express",
    "shield": "express",
    "duration": "2 years",
    "projects": "Grid Dynamics"
    },
              {
      "tech": "Material UI",
      "shield": "mui",
      "duration": "2 years",
      "projects": "Grid Dynamics"   
  },
      {
        "tech": "HTML 5",
        "shield": "html",
        "duration": "10+ years",
        "projects": "All"  
    },
    {
        "tech": "CSS 3",
        "shield": "css",
        "duration": "10+ years",
        "projects": "All"   
    },

    {
      "tech": "Sass",
      "shield": "sass",
      "duration": "2 years",
      "projects": "This portfolio, My Google Books"   
  },

    {
      "tech": "Redux",
      "shield": "redux",
      "duration": "1 project",
      "projects": "SpaceForce"
    },    

      {
        "tech": "Flutter",
        "shield": "flutter",
        "duration": "3 months",
        "projects": "Light Burst 2.0"  
    },
    {
        "tech": "Dart",
        "shield": "dart",
        "duration": "3 months",
        "projects": "Light Burst 2.0"   
    },
    {
      "tech": "Python3+",
      "shield": "python",
      "duration": "3 months",
      "projects": "Leet Code Drills"   
  },


    {
    "tech": "Mongo",
    "shield": "mongo",
    "duration": "2 years",
    "projects": "My Google Bookshelf, The Loom, Name List, Memory Lane"
    },
    {
    "tech": "Mongoose",
    "shield": "mongoose",
    "duration": "1 year",
    "projects": "My Google Bookshelf, Name List, Memory Lane"
    },
    {
        "tech": "MySQL",
        "shield": "sql",
        "duration": "5 years",
        "projects": "ImageShoppr, The Loom, MiddleGround, Suppr, JerryFrost.com"
    },
    {
        "tech": "Angular2+",
        "shield": "angular",
        "duration": "2 years",
        "projects": "The Loom" 
    },
    {
        "tech": "Objective C",
        "shield": "objc",
        "duration": "2 years",
        "projects": "Light Burst"   
    },
    {
        "tech": "PHP",
        "shield": "php",
        "duration": "7 years",
        "projects": "JerryFrost.com, DDWorks.org"   
    },
    {
      "tech": "Ruby on Rails",
      "shield": "ruby",
      "duration": "2 years",
      "projects": "experimental projects"   
    },
    {
      "tech": "WordPress ",
      "shield": "wordpress",
      "duration": "4 years",
      "projects": "several client websites"   
    }

  ];

  useEffect(() => {

    let chartTimer = setTimeout(function () {
      setChartStyle("chart chart2");
      clearTimeout(chartTimer);
    },200);
  });


  function pageContent() {
    return (

      <>
     <Link to="/">
      <Logo stacked="false"/>
     </Link>
<br />
     <Link to="/endorsements">
        <div className="mbuttonEndorse"><img src={pointerIcon}/>read my endorsements</div>
      </Link>

      <div className='title'>Skills</div>
      <ul><li>User Interface Design</li>
       <li>Web Design</li>
      <li>Web Development and Hosting</li>
      <li>Mobile Development</li>
      <li>Deisgn and Engineering Mentorship</li>
        </ul>
      <p>I focus on front-end user interface web development.   My core skills include Typescript, Javascript, React, and NodeJS.
        
      </p>
      <p>I'm always learning new technologies and new tech-platforms.  Here are some of the popular web development technologies that I have experice with:</p>
      <div className='title'>Technologies</div>

      <div className={chartStyle}>
      <div className="tech chartLabels">
        <div className='techShield'></div>
        <div className='techName label'>Technology</div>
        <div className='techYears label'>Experience</div>
        <div className='techYears label'>Projects</div>
      </div>
      {techObjects.map((techObj, index) => (
       <div className={index%2===0 ? "tech" : "tech alt" } key={index}>
       
        <div className="techShield">
        <img
                  className="techShieldIcon"
                  src={require("../images/shields/" +
                    techObj["shield"] +
                    ".png")} alt={techObj["tech"]} />
                    {/* <Shield shieldNumber={index} animate="false" /> */}
                    </div>
        <div className="techName">{techObj["tech"]}</div>
        <div className="techYears">{techObj["duration"]}</div>
        <div className="techProject">{techObj["projects"]}</div>

       </div>
        
      ))}
      </div>
    </>

    )
  }
  return (
    <div className="verticalExtender">
    <Page content={pageContent()} />
   </div>

    
  );
}

export default Skills;

