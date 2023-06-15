  import React from 'react';
  import logo from "./logo.jpg";
  import { graph } from './Data/Distance';
  import { cities } from './Data/Cities';
  import { times } from './Data/Times';
  import { useState, useEffect } from 'react';
  import { FaArrowDown } from 'react-icons/fa';

  const AllPaths = () => {
    const [src, setSrc] = useState("Ameerpet");
    const [dest, setDest] = useState("Ameerpet");
    const [result, setResult] = useState([]);

    const [pg, setPg] = useState("Parade Ground");
    const [ap, setAp] = useState("Ameerpet");
    const [mgbs, setMgbs] = useState("MG Bus Station");

    const [r, setR] = useState(false);

    const [ss, setSs] = useState(false);

    const [blueLine, setBlueLine] = useState(["Raydurg", "Hitech City", "Durgam Cheruvu", "Madhapur", "Peddamma Gudi", "Jubilee Hills Checkpost", "Rd no.5 Jubliee Hills","Yusufguda","Madhuranagar","Begumpet","Prakash Nagar","Rasoolpura ", "Paradise","Secunderabad East", "Mettuguda", "Tarnaka", "Habsiguda", "NGRI", " Stadium", "Uppal", "Nagole"]);
    const [redLine, setRedLine] = useState(["JNTU College", "KPHB Colony", "Kukatpally", "Dr B.R. Ambedkar Balanagar", "Musapet", "Bharatnagar", "Erragadda", "ESI Hospital", "SR Nagar", "Punjagutta", "Irrum Manjil", "Khairatabad", "Lakdi-ka-pul","Assembly", "Gandhi Bhavan", "Osmania Medical College", "Malakpet", "New Market", "Musarambagh", "Dilsukhnagar", "Chaitanyapuri", "Victoria Mahal", "LB Nagar"]);
    const [greenLine, setGreenLine] = useState(["Secunderabad West", "Gandhi Hospital", "Musheerabad", "RTC X Roads", "Chikkadapally", "Narayanguda", "Sultan Bazar"])


    function dijkstraAllPaths(graph, src, dest) {
      const V = graph.length;
      const paths = []; // Array to store all possible paths
      const path = [src]; // Current path being explored
    
      dijkstraHelper(graph, src, dest, path, paths);
    
      return paths;
    }
    
    function dijkstraHelper(graph, u, dest, path, paths) {
      if (u === dest) {
        // Reached the destination vertex
        paths.push([...path]); // Store a copy of the current path
      } else {
        const V = graph.length;
    
        for (let v = 0; v < V; v++) {
          if (graph[u][v] !== 0 && !path.includes(v)) {
            // Explore unvisited neighbors
            path.push(v);
            dijkstraHelper(graph, v, dest, path, paths);
            path.pop(); // Backtrack
          }
        }
      }
    }
    

    
  function dijkstraAllPathsAlgo(){
    setResult([]);
      const paths = dijkstraAllPaths(graph, cities.indexOf(src), cities.indexOf(dest));
      const s =[];
      const res=[];
      for(let i=0;i<paths.length;i++){
          //s=s+cities[paths[i]];
          let s=[];
          for(let j=0;j<paths[i].length;j++){
            s.push(cities[paths[i][j]]);
          }
          res.push(s);  
      }
      console.log(res);
      setResult(res)
      // const source = 0;
      // const destination = 4;
      
      // const paths = dijkstraAllPaths(graph, source, destination);
      // console.log(paths)
  }
            
                                        


    return (
      <div className='main-div'>
      <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src={logo} className="food-munch-logo" alt="Logo" />
        </a>
        <h3 id="title">Go Metro, Explore Extra</h3>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="nav-menu">
            <div className="navbar-nav ml-auto">
              <a className="nav-link active" id="navItem1" href="#wcuSection">
                About
                <span className="sr-only">(current)</span>
              </a>
              <a className="nav-link" href="#exploreMenuSection" id="navItem2">
                Contact
              </a>
              <a className="nav-link" href="#deliveryPaymentSection" id="navItem3">
                Services
              </a>
              <a className="nav-link" href="#followUsSection" id="navItem4">
                Follow Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div className="first-div">
      <p className="title">Get the shortest path here, to reach your destination</p>
    <div className="start">
    <p id="from">From :</p>
    <select id="src" onChange={e=>setSrc(e.target.value)}>
      <option>Ameerpet</option>
      <option>Assembly</option>
      <option>Begumpet</option>
      <option>Bharatnagar</option>
      <option>Chaitanyapuri</option>
      <option>Chikkadapally</option>
      <option>Dilsukhnagar</option>
      <option>Dr B.R. Ambedkar Balanagar</option>
      <option>Durgam Cheruvu</option>
      <option>Erragadda</option>
      <option>ESI Hospital</option>
      <option>Gandhi Bhavan</option>
      <option>Gandhi Hospital</option>
      <option>Habsiguda</option>
      <option>Hitech City</option>
      <option>Irrum Manjil</option>
      <option>JBS Parade Ground</option>
      <option>JNTU College</option>
      <option>Jubliee Hills Checkpost</option>
      <option>Khairatabad</option>
      <option>KPHB Colony</option>
      <option>Kukatpally</option>
      <option>Lakdi-ka-pul</option>
      <option>LB Nagar</option>
      <option>Madhapur</option>
      <option>Madhuranagar</option>
      <option>Malakpet</option>
      <option>Mettuguda</option>
      <option>MG Bus Station</option>
      <option>Miyapur</option>
      <option>Musapet</option>
      <option>Musarambagh</option>
      <option>Musheerabad</option>
      <option>Nagole</option>
      <option>Nampally</option>
      <option>Narayanguda</option>
      <option>New Market</option>
      <option>NGRI</option>
      <option>Osmania Medical College</option>
      <option>Parade Ground</option>
      <option>Paradise</option>
      <option>Peddamma Gudi</option>
      <option>Prakash Nagar</option>
      <option>Punjagutta</option>
      <option>Rasoolpura</option>
      <option>Raydurg</option>
      <option>Rd no.5 Jubliee Hills</option>
      <option>RTC X Roads</option>
      <option>Secunderabad East</option>
      <option>Secunderabad West</option>
      <option>SR Nagar</option>
      <option>Stadium</option>
      <option>Sultan Bazar</option>
      <option>Tarnaka</option>
      <option>Uppal</option>
      <option>Victoria Mahal</option>
      <option>Yusufguda</option>
    </select>
    </div>
    
    <div className='end'>
    <p id="to">To :</p>
    <div id="to-id">
    <select id="dest" onChange={e=>{setDest(e.target.value)}}>
      <option>Ameerpet</option>
      <option>Assembly</option>
      <option>Begumpet</option>
      <option>Bharatnagar</option>
      <option>Chaitanyapuri</option>
      <option>Chikkadapally</option>
      <option>Dilsukhnagar</option>
      <option>Dr B.R. Ambedkar Balanagar</option>
      <option>Durgam Cheruvu</option>
      <option>Erragadda</option>
      <option>ESI Hospital</option>
      <option>Gandhi Bhavan</option>
      <option>Gandhi Hospital</option>
      <option>Habsiguda</option>
      <option>Hitech City</option>
      <option>Irrum Manjil</option>
      <option>JBS Parade Ground</option>
      <option>JNTU College</option>
      <option>Jubliee Hills Checkpost</option>
      <option>Khairatabad</option>
      <option>KPHB Colony</option>
      <option>Kukatpally</option>
      <option>Lakdi-ka-pul</option>
      <option>LB Nagar</option>
      <option>Madhapur</option>
      <option>Madhuranagar</option>
      <option>Malakpet</option>
      <option>Mettuguda</option>
      <option>MG Bus Station</option>
      <option>Miyapur</option>
      <option>Musapet</option>
      <option>Musarambagh</option>
      <option>Musheerabad</option>
      <option>Nagole</option>
      <option>Nampally</option>
      <option>Narayanguda</option>
      <option>New Market</option>
      <option>NGRI</option>
      <option>Osmania Medical College</option>
      <option>Parade Ground</option>
      <option>Paradise</option>
      <option>Peddamma Gudi</option>
      <option>Prakash Nagar</option>
      <option>Punjagutta</option>
      <option>Rasoolpura</option>
      <option>Raydurg</option>
      <option>Rd no.5 Jubliee Hills</option>
      <option>RTC X Roads</option>
      <option>Secunderabad East</option>
      <option>Secunderabad West</option>
      <option>SR Nagar</option>
      <option>Stadium</option>
      <option>Sultan Bazar</option>
      <option>Tarnaka</option>
      <option>Uppal</option>
      <option>Victoria Mahal</option>
      <option>Yusufguda</option>
      </select>
      </div>
      </div>
    </div>
    <button onClick={dijkstraAllPathsAlgo} className='sub'>Get All Paths</button>
    <br/><br/><br/>

    <h3 className='noofpaths'>Number of Paths : {result.length}</h3>

    <div>
    {result.length > 0 && (
      <div className='output-paths'>
        {result.map((path, index) => (
          <h4 key={index}>
            Path {index + 1}: {path.map((city, cityIndex) => {
              if(city==pg){
                return(
                  <div>
                  <React.Fragment key={cityIndex}>
                    {city}<br/>
                    {cityIndex !== path.length - 1 && <FaArrowDown className='long-arrow'/>}
                  </React.Fragment>
                  </div>
                )
              }else if(city==ap){
                return(
                  <div>
                  <React.Fragment key={cityIndex}>
                    {city}<br/>
                    {cityIndex !== path.length - 1 && <FaArrowDown className='long-arrow'/>}
                  </React.Fragment>
                  </div>
                )
              } else if(city==mgbs){
                return(
                  <div>
                  <React.Fragment key={cityIndex}>
                    {city}<br/>
                    {cityIndex !== path.length - 1 && <FaArrowDown className='long-arrow'/>}
                  </React.Fragment>
                  </div>
                )
              }
              else if(blueLine.includes(city)){
                return(
                  <div>
                  <React.Fragment key={cityIndex}>
                    {city}<br/>
                    {cityIndex !== path.length - 1 && <FaArrowDown className='long-arrow'/>}
                  </React.Fragment>
                  </div>
                )
              }else if(redLine.includes(city)){
                return(
                  <div>
                  <React.Fragment key={cityIndex}>
                    {city}<br/>
                    {cityIndex !== path.length - 1 && <FaArrowDown className='long-arrow'/>}
                  </React.Fragment>
                  </div>
                )
              } else if(greenLine.includes(city)){
                return(
                  <div>
                  <React.Fragment key={cityIndex}>
                    {city}<br/>
                    {cityIndex !== path.length - 1 && <FaArrowDown className='long-arrow'/>}
                  </React.Fragment>
                  </div>
                )
              }
              <div>
              <React.Fragment key={cityIndex}>
                {city}<br/>
                {cityIndex !== path.length - 1 && <FaArrowDown className='long-arrow'/>}
              </React.Fragment>
              </div>
            })}
          </h4>
        ))}
      </div>
    )}
      </div>
    </div>
    )
  }

  export default AllPaths