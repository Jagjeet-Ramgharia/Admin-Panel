import React from "react";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import "./featuredinfo.css";

const FeaturedInfo = () => {
  return (
    <div className="featured">
      <div className="featured_item">
        <span className="featured_title">Revanue</span>
        <div className="featured_money_container">
          <span className="featured_money">$2,415</span>
          <span className="featured_money_rate">
            -11.4 <ArrowDownward className="feature_icon negative" />
          </span>
        </div>
        <span className="featured_sub">Compare to last month</span>
      </div>
      <div className="featured_item">
        <span className="featured_title">Sales</span>
        <div className="featured_money_container">
          <span className="featured_money">$2,415</span>
          <span className="featured_money_rate">
            -11.4 <ArrowDownward className="feature_icon negative" />
          </span>
        </div>
        <span className="featured_sub">Compare to last month</span>
      </div>
      <div className="featured_item">
        <span className="featured_title">Cost</span>
        <div className="featured_money_container">
          <span className="featured_money">$2,415</span>
          <span className="featured_money_rate">
            +2 <ArrowUpward className="feature_icon"/>
          </span>
        </div>
        <span className="featured_sub">Compare to last month</span>
      </div>
    </div>
  );
};

export default FeaturedInfo;
