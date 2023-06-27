import React,{useContext} from "react";
import { Link } from "react-router-dom";
import "./Food.css";
import { ContextData } from "../Api/ContextApi"

const Food = () => {
  const [data] = useContext(ContextData);
  return (
    <>
      <div>
        <h2 style={{ textAlign: "center", marginTop: "20px" }}>
          Latest Food Stories
        </h2>
        <hr style={{ width: "5%", height: "2px", backgroundColor: "red" }} />
        <div className="Container">
          <div className="father">
            {data
              .filter((value) => value.category === "food")
              .map((data, i) => (
                <Link
                  className="link"
                  to={`/Food/full`}
                  state={{ data }}
                >
                  <div className="fstchild" key={i}>
                    <div className="fstinner">
                      <center>
                        <div className="img">
                          <img className="fstimg" src={data.img} alt="404"></img>
                        </div>
                      </center>
                      <div className="fsttext">
                        <h4 className="fsttitle">{data.title}</h4>
                        <p className="fstdescription">{data.description}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Food;
