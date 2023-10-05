import React from "react";
import "../assets/css/MainBody.css";

import Sidebar from "./SideBar";
import Card from "react-bootstrap/Card";
import "../assets/css/Dashboard.css";

import meat_consumption_pie_img_1 from "../assets/photo/meat_consumption_1.png";
import war_effect_img_1 from "../assets/photo/war_effect_1.png";
import tweet_trend_img_1 from "../assets/photo/tweet_trend_1.jpg";
import housing_price_img_1 from "../assets/photo/housing_price_1.png";
import weather_img_1 from "../assets/photo/weather_1.jpg";



function Dashboard() {
  return (
    <div>
      <Sidebar />

      <div className="mainBody">
        <h5>Dashboard</h5>

        <div className="dataAnalysisCards">
          <h5 style={{ float: "left", margin: "5%" }}>Data Analysis</h5>

          <Card
            border="info"
            style={{
              display: "inline-flex",
              float: "left",
              width: "20%",
              height: "20%",
              color: "white",
              background: "#464543",
              marginTop: "10%",
              marginLeft: "-15%",
            }}
          >
            <Card.Img
              variant="top"
              src={meat_consumption_pie_img_1}
              alt="Card Image"
              style={{ width: "100%", height: "auto" }}
            />

            <Card.Body>
              <Card.Text style={{ color: "white" }}>Meat Consumption</Card.Text>
              <Card.Link
                href="/data_analysis/meat_consumption"
                style={{
                  color: "#64DEFC",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                View Page
              </Card.Link>
            </Card.Body>
          </Card>

          <Card
            border="info"
            style={{
              display: "inline-flex",
              float: "left",
              width: "20%",
              height: "20%",
              color: "white",
              background: "#464543",
              marginTop: "10%",
              marginLeft: "5%",
            }}
          >
            <Card.Img
              variant="top"
              src={war_effect_img_1}
              alt="Card Image"
              style={{ width: "100%", height: "auto" }}
            />

            <Card.Body>
              <Card.Text style={{ color: "white" }}>War Effect </Card.Text>
              <Card.Link
                href="/data_analysis/war_effect"
                style={{
                  color: "#64DEFC",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                View Page
              </Card.Link>
            </Card.Body>
          </Card>

          <Card
            border="info"
            style={{
              display: "inline-flex",
              float: "left",
              width: "20%",
              height: "20%",
              color: "white",
              background: "#464543",
              marginTop: "10%",
              marginLeft: "5%",
            }}
          >
            <Card.Img
              variant="top"
              src={tweet_trend_img_1}
              alt="Card Image"
              style={{ width: "100%", height: "auto" }}
            />

            <Card.Body>
              <Card.Text style={{ color: "white" }}>Tweet Topics</Card.Text>
              <Card.Link
                href=""
                style={{
                  color: "#64DEFC",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                View Page
              </Card.Link>
            </Card.Body>
          </Card>
        </div>

        <div className="futurePredictCards">
          <h5 style={{ float: "left", margin: "5%" }}>Future Predtiction</h5>

          <Card
            border="info"
            style={{
              display: "inline-flex",
              float: "left",
              width: "20%",
              height: "20%",
              color: "white",
              background: "#464543",
              marginTop: "10%",
              marginLeft: "-18%",
            }}
          >
            <Card.Img
              variant="top"
              src={housing_price_img_1}
              alt="Card Image"
              style={{ width: "100%", height: "auto" }}
            />

            <Card.Body>
              <Card.Text style={{ color: "white" }}>Housing Price</Card.Text>
              <Card.Link
                href=""
                style={{
                  color: "#64DEFC",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                View Page
              </Card.Link>
            </Card.Body>
          </Card>

          <Card
            border="info"
            style={{
              display: "inline-flex",
              float: "left",
              width: "20%",
              height: "20%",
              color: "white",
              background: "#464543",
              marginTop: "10%",
              marginLeft: "5%",
            }}
          >
            <Card.Img
              variant="top"
              src={weather_img_1}
              alt="Card Image"
              style={{ width: "100%", height: "auto" }}
            />

            <Card.Body>
              <Card.Text style={{ color: "white" }}>Weather Forecast</Card.Text>
              <Card.Link
                href=""
                style={{
                  color: "#64DEFC",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                View Page
              </Card.Link>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
