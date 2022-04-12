import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsTextCenter, BsTextRight, BsTextLeft } from "react-icons/bs";
import { IoIosColorPalette } from "react-icons/io";
import { Arr } from "./constants/colors";
import { fontSize } from "./constants/font-sizes";
import { fontWeight } from "./constants/font-Weights";

export default function App() {
  const [isSelected, setIsSelected] = React.useState("");

  const [fontSizes, setFontSizes] = React.useState(11);
  const [fontWeights, setFontWeights] = React.useState(400);
  const [active, setActive] = React.useState(false);
  const [textAlignment, setTextAlignment] = React.useState("start");

  const handleReset = () => {
    setFontSizes(11);
    setFontWeights(400);
    setIsSelected("#000");
    setTextAlignment("start");
  };

  return (
    <div className="main-div">
      <div className="width">
        <div className="align-selected-box"></div>
        <div style={{ border: "1px solid grey" }}>
          <div className="d-flex justify-content-end p-1">
            <div className="text-align-box">
              <select
                onChange={(e) => setFontSizes(e.target.value)}
                value={fontSizes}
              >
                {fontSize.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </div>
            <div className="text-align-box mx-1">
              <select
                onChange={(e) => setFontWeights(e.target.value)}
                value={fontWeights}
              >
                {fontWeight.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </div>
            <div
              className="text-align-box me-1"
              onClick={() => setActive(!active)}
            >
              <IoIosColorPalette className={active ? "text-danger" : ""} />
            </div>
            <div
              className="text-align-box"
              onClick={() => setTextAlignment("start")}
            >
              <BsTextLeft />
            </div>
            <div
              className="text-align-box mx-1"
              onClick={() => setTextAlignment("center")}
            >
              <BsTextCenter />
            </div>
            <div
              className="text-align-box"
              onClick={() => setTextAlignment("end")}
            >
              <BsTextRight />
            </div>
          </div>

          <textarea
            style={{
              color: isSelected,
              fontSize: fontSizes + "px",
              fontWeight: fontWeights,
              textAlign: textAlignment,
            }}
          />
        </div>
        <div className="align-input-field"></div>
        <div className="pb-2 d-flex justify-content-evenly">
          <button onClick={handleReset} className="bg-danger">
            reset
          </button>
        </div>
        {active && (
          <div className="align-color-boxes">
            {Arr.map((item, i) => (
              <div
                key={item}
                className="color-boxes"
                onClick={() => setIsSelected(item)}
                style={{ backgroundColor: item }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
