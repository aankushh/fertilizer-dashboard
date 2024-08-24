import React from "react";
import "./TopFertilizers.css";

const TopFertilizers = ({ data }) => {
  const topRequired = data
    .filter((item) => parseFloat(item.requirement_in_mt_) > 0)
    .sort(
      (a, b) =>
        parseFloat(b.requirement_in_mt_) - parseFloat(a.requirement_in_mt_)
    )
    .slice(0, 5);

  const leastAvailable = data
    .filter((item) => parseFloat(item.availability_in_mt_) > 0)
    .sort(
      (a, b) =>
        parseFloat(a.availability_in_mt_) - parseFloat(b.availability_in_mt_)
    )
    .slice(0, 5);

  return (
    <div className="top-fertilizers">
      <div className="firtilizer-left">
        <h3 className="fertilizer-heading">
          Top 5 Fertilizers with Most Requirement
        </h3>
        <ul className="fertilizer-list">
          {topRequired.map((item) => (
            <li key={item.id} className="fertilizer-item">
              {item.product} - {item.requirement_in_mt_} MT
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="fertilizer-heading">
          Top 5 Fertilizers with Least Availability
        </h3>
        <ul className="fertilizer-list">
          {leastAvailable.map((item) => (
            <li key={item.id} className="fertilizer-item">
              {item.product} - {item.availability_in_mt_} MT
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TopFertilizers;
