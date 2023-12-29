import React, { useEffect, useState } from "react";
import "./catagories.scss";
import Product from "../../conponent/product/product";
import { useNavigate, useParams } from "react-router-dom";
function Catagories() {
  const navigate = useNavigate();
  const parems = useParams();
  const [catagoryId, setcatagoryId] = useState("");
  const catagoryList = [
    {
      id: "comics",
      value: "Comics",
    },
    {
      id: "tv-shows",
      value: "Tv-Shows",
    },
    {
      id: "sports",
      value: "Sports",
    },
  ];
  useEffect(() => {
    setcatagoryId(parems.catagoryId);
    // apicall
  }, [parems]);
  function updateCatagory(e) {
    // navigate(`/catagory/ & {e.target.value}`);
    navigate(`/catagory/ ${e.target.value}`);
  }
  return (
    <div className="cat">
      <div className="container">
        <div className="header">
          <div className="info">
            <h2>Explore All Print Work and Art Work </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis harum, voluptatibus enim laboriosam consequatur
              doloribus nihil vero atque!
            </p>
          </div>
          <div className="short-by">
            <div className="short-by-container">
              <h3 className="short-by-text">Short By</h3>
              <select className="select-short-by" name="short-by" id="short-by">
                <option value="relevance">Relevance</option>
                <option value="newest">Newest First</option>
                <option value="price-lth">Price low-to-High</option>
              </select>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="filter-box">
            <div className="catagory-filter">
              <h3>Catagory</h3>
              {catagoryList.map((item) => (
                <div key={item.id} className="filer-radio">
                  <input
                    type="radio"
                    id={item.id}
                    name="catagory"
                    value={item.id}
                    onChange={updateCatagory}
                    // checked={item.id === catagoryId}
                    checked={item.id == catagoryId}
                  />
                  <label htmlFor={item.id}>{item.value}</label>
                </div>
              ))}
              {/* <div className="filer-radio">
                <input type="radio" id="tv-shows" name="catagory" />
                <label htmlFor="tv-shows">Tv-Shows</label>
              </div>
              <div className="filer-radio">
                <input type="radio" id="sports" name="catagory" />
                <label htmlFor="sports">Sports</label>
              </div> */}
            </div>
          </div>
          <div className="product-box">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Catagories;
