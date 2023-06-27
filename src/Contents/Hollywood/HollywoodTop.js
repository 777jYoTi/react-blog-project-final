import React, { useContext } from "react";
import "./Hollywood.css";
import { Link } from "react-router-dom";
import { ContextData } from "../Api/ContextApi";
const Hollywood = () => {
  const [data] = useContext(ContextData);
  return (
    <>
      <div>
        <h2 style={{ textAlign: "center", marginTop: "20px" }}>
          Latest Hollywood Stories
        </h2>
        <hr style={{ width: "5%", height: "2px", backgroundColor: "red" }} />
        <div className="Container">
          <div className="container2">
            <div className="left">
              {data
                .filter((value) => value.category === "hollywood")
                .map((data, i) => (
                  <Link
                    className="link"
                    to={`/Hollywood/full`}
                    state={{ data }}
                  >
                    <div className="child1" key={i}>
                      <div className="img-left">
                        <img className="himg" src={data.img} alt="404"></img>
                      </div>
                      <div className="htext">
                        <h4 className="title">{data.title}</h4>
                        <p className="description">{data.description}</p>
                        <p className="date">{data.date}</p>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>

        
            
         
            <div className="right">advertisement</div>
            </div>
           
           
          </div>
          
        </div>
      
    </>
  );
};

export default Hollywood;
