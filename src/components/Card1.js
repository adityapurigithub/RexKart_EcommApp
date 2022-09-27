import { useState } from "react";

const Card1 = ({ handleChange, checked }) => {
  const [show, setShow] = useState(false);
  const handleShowFilter = () => {
    setShow(!show);
  };

  return (
    <div className="card1-display">
      {show ? (
        <div className="filters">
          <div className="filter">
            <div className="filter-name">Color</div>
            <div>
              <input type="checkBox" id="red" onChange={handleChange} />
              <label htmlFor="red">Red</label>
            </div>
            <div>
              <input type="checkBox" id="blue" onChange={handleChange} />
              <label htmlFor="blue">Blue</label>
            </div>
            <div>
              <input type="checkBox" id="green" onChange={handleChange} />
              <label htmlFor="green">Green</label>
            </div>
          </div>
          <div className="filter">
            <div className="filter-name">Gender</div>
            <div>
              <input type="checkBox" id="men" onChange={handleChange} />
              <label htmlFor="men">Male</label>
            </div>
            <div>
              <input type="checkBox" id="women" onChange={handleChange} />
              <label htmlFor="women">Female</label>
            </div>
          </div>
          <div className="filter">
            <div className="filter-name">Type</div>
            <div>
              <input type="checkBox" id="polo" onChange={handleChange} />
              <label htmlFor="polo">Polo</label>
            </div>

            <div>
              <input type="checkBox" id="hoodie" onChange={handleChange} />
              <label htmlFor="hoodie">Hoodie</label>
            </div>
          </div>
          <div className="show-filter">
            <img
              id="cross"
              src="https://cdn-icons-png.flaticon.com/512/1828/1828843.png"
              height="20"
              onClick={handleShowFilter}
            />
          </div>
        </div>
      ) : (
        <div className="show-filter" onClick={handleShowFilter}>
          <span>Search Using Filters</span>
          <img
            src="https://cdn-icons-png.flaticon.com/512/57/57055.png"
            height="20"
          />
        </div>
      )}
    </div>
  );
};
export default Card1;
