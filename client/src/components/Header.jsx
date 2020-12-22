import React from "react";
import HighlightIcon from "@material-ui/icons/Highlight";

function Header() {
  return (
    <header>
     <div class="row">
       <div class="col-6">
       <h1>
        <HighlightIcon />
        Doctor keeper 
      </h1>
      <p style={{color:"white"}}>
        Refresh will ruin everything...
      </p>
       </div>
       <div class="col-6 " >
  <a id="header-button" style={{position:"right"}}  class="btn" style={{bottom:"5%" ,right:"2%"}} href="https://github.com/ASHISH-GITHUB2495/visitfirst"  target="_blank" >See on Github</a>
  <a id="header-button" style={{position:"right"}} class="btn" style={{bottom:"5%" ,left:"2%"}} href="https://docs.google.com/document/d/1By6kaPKucAwuhO6IDKmxdStg59wExpWNtxeqZo4cg34/edit?usp=sharing"  target="_blank" >About Developer</a>
  </div>
     </div>
     
    </header>
  );
}

export default Header;
