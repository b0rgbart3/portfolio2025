import React from "react";
import "./Resume.scss";
import emailIcon from "../images/icons/email.svg";
import linkedInIcon from "../images/icons/linked_in_black.svg";
import githubIcon from "../images/icons/github_round.svg";
import googleDocIcon from "../images/icons/google_doc.svg";
import pdfDocIcon from "../images/icons/pdf_doc.svg";
import pdf from '../images/Bart_Dority_CV.pdf';
import { Link } from "react-router-dom";
import Page from "../components/Page";
import Logo from "../components/Logo";
import DDWorksLogo from "../images/ddworks_logo.jpg";
import GridLogo from "../images/grid_logo.jpg";
import UCB from "../images/ucb2.jpg";
import CCSF from "../images/ccsf.png";
import Pratt from "../images/pratt.jpg";
import OutSkill from "../images/outskill_logo.jpg";

function Resume() {

  function pageContent() {
    return (
      <div className="resumeBox">

        <a
          href="https://docs.google.com/document/d/1KS6rxJ9Tq-f42N2I8Gp0s5aGS6Tx4WNwnj8wHPKpufY"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="googleLink">
            <div className="docIcon">
              <img src={googleDocIcon} alt='google_doc_version' />
            </div>
            GoogleDoc
          </div>
        </a>

        <a href={pdf} target="_blank" rel="noopener noreferrer">
          <div className="pdfLink">
            <div className="docIcon">
              <img src={pdfDocIcon} alt='pdf_doc_version' />
            </div>
            PDF
          </div>
        </a>
        <Link to="/endorsements">
          <div className="mbutton endorse">endorsements</div>
        </Link>

        <div className="contactButtons">
          <Link to="/contact" className="resumeLink">
            <div className="emailLinker">
              <img src={emailIcon} alt='email_icon' />
            </div>
          </Link>

          <a
            href="https://www.linkedin.com/in/bart-dority/"
            className="resumeLink"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="emailLinker">
              <img src={linkedInIcon} alt='linked_in' /></div>
          </a>{" "}
          <a
            href="https://github.com/b0rgbart3"
            className="resumeLink"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="emailLinker">
              <img src={githubIcon} alt='github' />
            </div>
          </a>


        </div>

        <Logo />


        <br></br>
        <h2>Summary</h2>
        <ul>
          <li>
            Senior UI-Focused Software Engineer with 7+ years of experience crafting responsive web applications, primarily using React, TypeScript, and Node.js.
          </li>
          <li>
            Specializes in front-end architecture, state management, and asynchronous UI lifecycles, with full-stack experience integrating APIs and backend services to support rich client-side experiences.
          </li>
          <li>
            Experienced in agile development, cross-functional collaboration, and delivering complex products from concept through production. Leverages AI development tools to enhance development velocity and code quality.
          </li>
          <li>
            Extensive background in graphic design, animation, and branding, with a strong passion for interface craftsmanship, thoughtful design, and delivering polished web experiences users enjoy.
          </li>

          {/* <li>Full Stack Developer and Front End Software Engineer</li>
  <li>
    A broad range of technical expertise and extensive experience in web
    development
  </li>
  <li>B2B, Government Agency, and Non-Profit experience</li>
  <li>
    Develops and writes code that is clean, agile, and object oriented
  </li>
  <li>
  Team oriented collaborator
  </li>
  <li>Background in computer science and always learning new technologies</li>
  <li>
    Passion for user interface design and visual branding; extending brand
    continuity
  </li>
  <li>
    Industry knowledge in design, publishing, marketing, advertising, and
    animation
  </li> */}
        </ul>

        <br></br>

        <h2>Skills</h2>

        <div className='skillRow'>

          <div className='skillTitle'>Front-End & UI Engineering</div>
          <ul>
            <li>
              React</li>
            <li>TypeScript</li>
            <li>JavaScript (ES6+)</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Sass</li>
            <li>Material UI</li>
            <li>Next.js</li>
            <li>state management (MobX)</li>
            <li>responsive and mobile-first design</li>
            <li>accessibility-focused UI development</li>
          </ul>
          <div className='skillTitle'>Design & Prototyping</div>

          <ul>
            <li>
              Adobe Creative Suite (Photoshop, Illustrator)
            </li>
            <li>
              Figma
            </li>
          </ul>

          <div className='skillTitle'>Testing & Quality</div>

          <ul>
            <li>
              Jest with Enzyme, component and unit testing
            </li>
          </ul>
          <br /><br /><br />

          <div className='skillTitle'>DevOps & Tooling</div>
          <ul>
            <li>
              Git
            </li>
            <li>GitHub</li>
            <li>GitLab</li>
            <li>Jenkins</li>
            <li>AWS</li>
            <li>Heroku</li>
            <li>VS Code</li>
            <li>CI/CD workflows</li>
          </ul>


          <div className='skillTitle'>Back-End & API Integration</div>
          <ul>
            <li>Node.js
            </li>
            <li>
              Express</li>
            <li>RESTful APIs</li>
            <li>PHP</li>
            <li>API-driven architectures</li>
            <li>asychronous data handling</li>
          </ul>

          <div className='skillTitle lastrow'>Databases</div>

          <ul>
            <li>MongoDB</li>
            <li>MySQL</li>
            <li>PostreSQL</li>
          </ul>
        </div>


        <h2>Experience</h2>

        <div className='experience'>
          <div className='logoBox'>
            <a href='https://ddworks.org'>
              <img src={GridLogo} /></a>
          </div>
          <div className='worksBox'>

            <p><strong>Front End Software Engineer</strong>, <br /><span>Grid Dynamics - San Francisco, CA, 2021 – Current</span>
              <br></br>
              <strong></strong></p>
            <ul>
              <li>
                Developed complex, data-intensive UI features for a fintech account reporting platform used
                by enterprise clients managing hundreds of accounts.</li>
              <li>
                Designed and implemented scalable front-end architectures using React, TypeScript, Material UI, Sass, and MobX, balancing development turn-around, performance, maintainability, and usability.
                Built robust client-side integrations with RESTful APIs across a Node.js middleware layer,
                ensuring responsive, consistent and predictable user interactions while optimizing performance
                with ElasticSearch and AppDynamics.</li>

              <li>
                Collaborated with design, product, and QA teams in agile sprints to translate complex
                requirements into intuitive, production-ready UI components.</li>

              <li>
                Contributed to CI/CD pipelines and deployments using Jenkins, GitLab, and OpenShift
                to support reliable delivery on a two-week sprint development schedule.</li>
              <li>

                Leveraged AI-assisted development tools to accelerate iteration, improve test coverage
                and streamline debugging.</li>


            </ul>
            {/* <p>
Full Stack web development with focus on the UI.  Working with a team on a public facing Fin-Tech website.  Platform is based on Typescript and React for the UI and NodeJS for the middlewear,
using Elastic Search, and various custom micro-service API endpoints. Mentoring a team of 3 UI developers, and working in an integrated pod of 10-12 team members including back-end engineers, designers and product owners. Our sprints are 2 weeks long and we release code every other month.</p> */}
          </div>
        </div>


        

        <div className='experience'>
          <div className='logoBox'><br />
            <a href='https://ddworks.org'>
              <img src={DDWorksLogo} /></a>
          </div>
          <div className='worksBox'>
            <br />
            <p><strong>Freelance Web Developer / UI Engineer</strong><br /><span>Dority Design Works - San Francisco, CA, 2005 – Current</span>
              <br></br>
              <strong></strong></p>
            {/* <p>
As an independant contractor, I design, build and maintain my client’s websites. I build mobile-friendly, data-driven websites and mobile apps with responsive layouts and restful API’s.  These projects are hosted on DreamHost, Heroku and AWS cloud platforms. I have very satisfied and long term clients, and my work received a Silver Caddy award for the Jeep Liberty website, and an IACP award in the New Media and Broadcast category for the Jacques Pépin website.
</p> */}
            <ul>
              <li>
                Designed and built user-centered, mobile-friendly web interfaces and end-to-end UI solutions, translating client goals and brand identity into polished, production-ready front-end experiences
                with full-stack, data-driven implementations.
              </li>
              <li>
                Developed database-backed applications using PHP, MySQL, and cloud platforms including
                AWS and Heroku, ensuring long-term reliability and maintainability.
              </li>
              <li>
                Partnered directly with clients and creative teams to iterate on design concepts and deliver
                solutions aligned with business objectives and user needs.
              </li>
              <li>
                Recognized with a Silver Caddy Award for Creative Excellence for the Jeep Liberty website, highlighting strengths in visual design, interaction, and front-end execution.
                Built long-term relationships with clients including KQED, Doremus Advertising, Organic Inc.,
                SF Long-Term Care Coordinating Council, artists and authors in the U.S. and internationally.
              </li>


            </ul>
          </div>
        </div>
        <br></br>
        <h2>Education</h2>
        <div className='education'>
          <div className='edLogos'>
            <img src={OutSkill} />
            <br />
            <img src={UCB} />
            <br></br>
            <img src={CCSF} />
            <br></br>
            <img src={Pratt} />
          </div>
          <div>
            <ul>
              <li>
                <b>Certificate, Generative AI Mastermind </b>- Outskill.com, 2025
              </li>
              <li>
                <b>
                  Certificate, Full Stack Web Development</b>– UC Berkeley Extension, 2019</li>

              {/* Professional Certificate in Full Stack Web Development and Coding<br></br>UC Berkeley Extension Coding Bootcamp</li> */}
              <li><b>
                Certificate, iPhone Programming </b>– City College of San Francisco, 2016
              </li>
              {/* Professional Certificate in iPhone Programming<br></br> City College of San Francisco</li> */}
              <li><b>
                BFA, Computer Graphics </b>– Pratt Institute, Brooklyn, NY
              </li>
              {/* Bachelor of Fine Arts in Computer Graphics<br></br>Pratt Institute, School of Art and Design, Brooklyn NY</li> */}
            </ul>
          </div></div>

        <br></br>
        


        <br></br>

        <div className='clientlist'>
          <h2>Abbreviated Client List</h2>
          <ul className='clients'>

            <li>
              Rick Crane Consulting, San Francisco, CA
            </li>
            <li>KQED - Interactive, San Francisco, CA</li>
            <li> Willow Kelly, Charlottesville, VA</li>
            <li>Jane Meredith, Author, Sydney, Australia</li>
            <li>Jerry Frost, Artist, San Francisco, CA</li>
            <li>Suzanne Sterling, Portland, OR</li>
            <li>Ravyn Stanfield, Author, Portland, OR</li>
            <li>Reclaiming Collective, San Francisco, CA</li>
            <li>Organic, Inc, Bloomfield Hills, MI</li>
            <li>A.S.K. Learning, San Francisco, CA</li>
            <li>ClearPath Media, Mountain View, CA</li>
            <li>Technesis, Inc., Mountain View, CA</li>
            <li>CloudBreak Software, Mountain View, CA</li>
            <li>Nyquist Design, Los Gatos, CA</li>
            <li>Doremus Advertising, San Francisco, CA</li>
            <li>Grey Advertising, San Francisco, CA</li>

          </ul>
        </div>

        {/* <h2>Recent Projects:</h2>
<div className='projects'> */}
        {/* <div className='project'>
<div className='projectTitle'>ImageShoppr</div>
<br></br>Makes shopping a fast, fun and social experience. It uses the Google A.I. Vision API to scan an image and identify multiple products.  It then uses the Rainforest API to find those products on Amazon.   You can also connect with your friends and find out if they bought similar items. This project features a responsive layout, a global state object, and React Hooks.
<br></br>
<strong>Technologies used:</strong> React, Javascript, Node, Express, Materialize, Mongoose, HTML5, and CSS3 hosted on Heroku with MySQL database on CloudAtlas. 
<br></br>
<a href='https://polar-tor-03271.herokuapp.com/' className='pbutton'>live website</a>
<a href='https://github.com/b0rgbart3/ImageShoppr'  className='pbutton'>Github</a>
</div>

<div className='project'><div className='projectTitle'>MiddleGround</div> 
<br></br>
Searches, filters, and displays social media posts from a range of news organizations so users can see how different topics are trending across the political spectrum, and get a broader range of news perspectives in a single interface. <br></br>
<strong>Technologies used:</strong> Node, Express, Axios, Handlebars, Javascript, HTML5, CSS3, the NY Times API, the News.org API and the Google Fact Check API hosted on Heroku.<br></br>
<a href='https://fast-cliffs-31437.herokuapp.com/' className='pbutton'>live website</a>
<a href='https://github.com/b0rgbart3/Some_Middle_Ground'  className='pbutton'>github</a></div> */}

        {/* <div className='project'>
<div className='projectTitle'>The Loom</div><br></br>
A Content Management System for an online University.  Features include:User authentication, registration, an administration dashboard, instant messaging and the ability to upload various content formats including video and pdfs. <br></br>
<strong>Technologies used:</strong> Angular 2+, Sass, Materialize, Node, Express, HTML 5, and CSS 3.  Hosted on Heroku with a MongoDB database on CloudAtlas and assets stored in an s3 bucket on AWS.  <br></br><strong>Client:</strong> Reclaiming Collective, San Francisco, CA.<br></br>
 <a href='https://thawing-mountain-56615.herokuapp.com/' className='pbutton'>live website</a>
<a href='https://github.com/b0rgbart3/Loom2' className='pbutton'>github</a><br></br>
</div> */}
        {/* <div className='project'><div className='projectTitle'>
Jerry Frost</div> <br></br>
Portfolio website featuring a mobile friendly responsive layout, a catalog of images, an administration dashboard for uploading images and allows the user and administrator to sort the images by title, date, or category. <br></br>
<strong>Technologies used:</strong> PHP 7, HTML 5, CSS 3, Javascript and MySQL, hosted on DreamHost. <br></br>
<strong>Client:</strong> Jerry Frost, Artist, San Francisco, CA<br></br>
<a href='https://jerryfrost.com/' className='pbutton'>live website</a>
<a href='https://github.com/b0rgbart3/jerryfrost' className='pbutton'>github</a>
</div> */}
        {/* <div className='project'><div className='projectTitle'>
Willow Kelly</div> <br></br>
Brochure website featuring a mobile friendly responsive layout and a contact form. <br></br>
<strong>
Technologies used:</strong> PHP 7, HTML 5, CSS 3, and Javascript. 
<br></br> <strong>Client:</strong> Willow Kelly, Charlottesville, VA
<br></br>
<a href='http://willowkelly.com' className='pbutton'>live website</a>
</div> */}
        {/* <div className='project'><div className='projectTitle'>
Jane Meredith</div> <br></br>
Brochure website featuring a mobile friendly responsive layout and an image slider that highlights recently published books.
<br></br> 
<strong>
Technologies used:</strong>  PHP 7, HTML 5, CSS 3 and Javascript.  <br></br>
<strong>Client:</strong> Jane Meredith, Author, Sydney, Australia
<br></br>
<a href='https://janemeredith.com/' className='pbutton'>Live website</a>
<a href='https://github.com/b0rgbart3/jane_meredith' className='pbutton'>github</a>
</div> */}
        {/* <div className='project'>
<div className='projectTitle'>LightBurst</div> <br></br>
iOS mobile app: a fun graphic puzzle-style game.<br></br>
<strong>
Technologies used:</strong> Objective C, and X-Code. 
<br></br>
<a href='https://github.com/b0rgbart3/LightBurst' className='pbutton'>More Info</a>
<a href='https://github.com/b0rgbart3/LightBurst' className='pbutton'>github</a></div>
</div> */}



        <br></br>
      </div>


    )
  }
  return (

    <Page content={pageContent()} />

  );

}

export default Resume;
