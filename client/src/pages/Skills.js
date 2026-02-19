import React, { useEffect, useState } from "react";

import "./Skills.scss";
import { Link } from "react-router-dom";
import Page from "../components/Page";
import Logo from "../components/Logo";
import pointerIcon from "../images/icons/white_arrow.svg";

function Skills() {
  const [chartStyle, setChartStyle] = useState("chart");
  const techObjects = [
    {
      category: "Front-End & UI Engineering",
      skills: [
        {
          tech: "React",
          shield: "react",
        },
        {
          tech: "TypeScript",
          shield: "ts",
        },
        {
          tech: "Javascript",
          shield: "js",
        },

        {
          tech: "Material UI",
          shield: "mui",
        },
        {
          tech: "HTML 5",
          shield: "html",
        },
        {
          tech: "CSS 3",
          shield: "css",
        },
        {
          tech: "Sass",
          shield: "sass",
        },
        {
          tech: "MobX",
          shield: "mobx",
        },
        {
          tech: "Redux",
          shield: "redux",
        },
      ],
    },
    {
      category: "Design & Prototyping",
      skills: [
        {
          tech: "Figma",
          shield: "figma",
        },
        {
          tech: "Adobe",
          shield: "adobe",
        },
      ],
    },
    {
      category: "AI Tools",
      skills: [
        {
          tech: "AntiGravity",
          shield: "antigravity",
        },
        {
          tech: "Chat GPT",
          shield: "chat",
        },
        {
          tech: "Claude Code",
          shield: "claude",
        },
        {
          tech: "Claude",
          shield: "claude",
        },
        {
          tech: "Gemini",
          shield: "gemini",
        },
        {
          tech: "Perplexity",
          shield: "perplexity",
        },
        {
          tech: "Grok",
          shield: "grok",
        },
      ],
    },
    {
      category: "Back-End & API Integration",
      skills: [
        {
          tech: "NodeJS",
          shield: "node",
        },
        {
          tech: "Express",
          shield: "express",
        },
        {
          tech: "Mongoose",
          shield: "mongoose",
        },
      ],
    },
    {
      category: "Databases",
      skills: [
        {
          tech: "Mongo",
          shield: "mongo",
        },
        {
          tech: "MySQL",
          shield: "sql",
        },
        {
          tech: "PostgreSQL",
          shield: "postgre",
        },
      ],
    },
    {
      category: "Testing & Quality",
      skills: [
        {
          tech: "Jest with Enzyme",
          shield: "jest",
        },
      ],
    },
    {
      category: "DevOps & Tooling",
      skills: [
        {
          tech: "GIT",
          shield: "git",
        },
        {
          tech: "GitHub",
          shield: "github",
        },
        {
          tech: "AWS",
          shield: "aws",
        },
        {
          tech: "GitLab",
          shield: "gitlab",
        },
        {
          tech: "Jenkins",
          shield: "jenkins",
        },
        {
          tech: "Heroku",
          shield: "heroku",
        },
        {
          tech: "VSCode",
          shield: "vscode",
        },
      ],
    },
    {
      category: "Additional Experience",
      skills: [
        {
          tech: "Flutter",
          shield: "flutter",
        },
        {
          tech: "Dart",
          shield: "dart",
        },
        {
          tech: "Python3+",
          shield: "python",
        },
        {
          tech: "Angular2+",
          shield: "angular",
          duration: "2 years",
          projects: "The Loom",
        },
        {
          tech: "Objective C",
          shield: "objc",
          duration: "2 years",
          projects: "Light Burst",
        },
        {
          tech: "PHP",
          shield: "php",
          duration: "7 years",
          projects: "JerryFrost.com, DDWorks.org",
        },
        {
          tech: "Ruby on Rails",
          shield: "ruby",
          duration: "2 years",
          projects: "experimental projects",
        },
        {
          tech: "WordPress ",
          shield: "wordpress",
          duration: "4 years",
          projects: "several client websites",
        },
      ],
    },
  ];

  useEffect(() => {
    let chartTimer = setTimeout(function () {
      setChartStyle("chart chart2");
      clearTimeout(chartTimer);
    }, 200);
  });

  function pageContent() {
    return (
      <>
        <Link to="/">
          <Logo stacked="false" />
        </Link>
        <br />
        <Link to="/endorsements">
          <div className="mbuttonEndorse">
            <img src={pointerIcon} />
            read my endorsements
          </div>
        </Link>

        <div className="title">Skills</div>

        <p className="pageContent">
          I specialize in front-end UI engineering with full-stack experience,
          focusing on building scalable, user-centered web applications. My core
          strengths include React, TypeScript, JavaScript, and Node.js, with an
          emphasis on maintainable architecture, API-driven systems, and modern
          development workflows.
        </p>
        {/* <p>
          This page expands on the skills listed in my resume by showing how and
          where I apply them in real projects.
        </p> */}
        <p className="pageContent">
          Much of my recent professional work has been on proprietary enterprise
          applications and is not publicly accessible. Descriptions here focus
          on the systems, responsibilities, and technologies involved.
        </p>

        <div className={chartStyle}>
          {techObjects.map((techObj, index) => (
            <div className="techCategory">
              <p className="skillCategory">{techObj.category}</p>
              {techObj.skills.map((techSkill, index) => (
                <div className="tech" key={index}>
                  <div className="techShield">
                    <img
                      className="techShieldIcon"
                      src={require(
                        "../images/shields/" + techSkill["shield"] + ".png",
                      )}
                      alt={techSkill["tech"]}
                    />
                  </div>
                  <div className="techName">{techSkill["tech"]}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </>
    );
  }
  return (
    <div className="verticalExtender">
      <Page content={pageContent()} />
    </div>
  );
}

export default Skills;
