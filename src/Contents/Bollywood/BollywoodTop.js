import React, { useContext } from "react";
import "./Bollywood.css";
import { Link} from "react-router-dom";
// ,useNavigate     
import { ContextData } from "../Api/ContextApi";

const Bollywood = () => {
  const [data] = useContext(ContextData);
// const navigate = useNavigate()
  return (
    <>
      <div>
        <h2 style={{ textAlign: "center", marginTop: "20px" }}>
          Latest Bollywood Stories
        </h2>
        <hr style={{ width: "5%", height: "2px", backgroundColor: "red" }} />

        <div className="Container">
          <div className="father">
            {data
              .filter((value) => value.category === "bollywood")
              .map((data, i) => (
                <Link className="link" to={`/Bollywood/full`} state={{ data }}>
                  <div className="child" key={i}>
                    <div className="inner">
                      <center>
                        <div className="img">
                          <img className="bimg" src={data.img} alt="404"></img>
                        </div>
                      </center>
                      <div className="text">
                        <h4 className="title">{data.title}</h4>
                        <p className="description">{data.para}</p>
                        <p className="date">{data.year}</p>
                      </div>
                    </div>
                  </div>
                  {/* <button onClick={()=>{navigate("-1")}}>Back</button> */}
                </Link>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Bollywood;
