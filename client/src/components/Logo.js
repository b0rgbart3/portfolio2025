
import React from "react";
import "./Logo.css";


function Logo(props) {
    return (<>
              <div className="BDlogo kerned">BART
              { props.stacked==="true" ? <br />: <span></span> } DORITY</div>
              <div className="BDtag">UI-Focused Full-Stack Software Engineer</div>
              <div className='tagline'>Leveraging AI for Smarter, Faster Development</div>
            </>
          )}

export default Logo;
