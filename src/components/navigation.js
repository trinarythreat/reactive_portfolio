function TrinaryNavigation(props) {
    return (
      <div className={"TrinaryNavigation " + props.art_class}>
        <div className="logo"><img alt="trinary threat" src={props.logo_art}></img></div>
        <div className="title"><h1>Trinary Threat</h1></div>
        <div className="controls"></div>
      </div>
    );
  }
  
  export default TrinaryNavigation;