import React from "react";
import "../../assets/css/infusion.css";

const ActiveInfusion = props => {
  return (
    <div>
      {props.infusion && (
        <div className="Parent-div">
          <div className="Patient-name Display-row align-item-left">
            <p className="Name">{props.infusion.patientName}</p>
          </div>
          <div className="Display-row align-item-right">
            <button className="delete-operation">Delete Operation</button>
          </div>
          <div className="Display-row align-item-left">
            <img src="" alt="" className="nurse-img" />
            <span className="first-item">
              <p className="nurse-tag">Nurse</p>
              <p className="nurse-name">Titilayo Olaide</p>
            </span>
            <span className="second-item">
              <p className="patient-tag">Patient</p>
              <p className="patient-name">{props.infusion.patientName}</p>
            </span>
            <span className="third-item">
              <p className="device-tag">Device</p>
              <p className="device-name">B2</p>
            </span>
            <span className="fourth-item">
              <p className="content-tag">Content</p>
              <p className="content-name">Blood</p>
            </span>
            <span className="fifth-item">
              <p className="volume-tag">Stop Volume</p>
              <p className="volume-number">{props.infusion.stopVolume}</p>
            </span>
          </div>
          <div className="Display-row">
            <div className="Display-column align-item-left top-margin">
              <div className="left-card Display-row justify-content-space-between">
                <span className="card-word Display-column align-item-left">
                  <p className="percent-given">89%</p>
                  <p className="volume-used">Dispensed 462cl</p>
                  <p className="volume-timeline"></p>
                </span>
                <span className="card-word Display-column align-item-right">
                  <p content-img></p>
                  <p className="content-admin-name">Content</p>
                  <p className="content-admin">Blood</p>
                </span>
              </div>
              <div className="left-card Display-row justify-content-space-between">
                <span className="card-word Display-column align-item-left">
                  <span>
                    <p className="current-flowrate">36 ml/h</p>
                  </span>
                  <p className="flowrate-text">Current flowrate</p>
                </span>
              </div>
              <div className="left-card Display-column align-item-center">
                <span className="card-word">
                  <p className="volume-given">
                    {props.infusion.startVolume} ------------------------------{" "}
                    {props.infusion.stopVolume}
                  </p>
                  <p className="volume-text">
                    Start Volume ------------------------------ Stop Volume
                  </p>
                  <p className="volume-img"></p>
                </span>
              </div>
            </div>
            <div className="Display-column">
              <span className="doc-inst"> Doctors Instruction</span>
              <div className="right-card">
                <span className="instruct">
                  <p>Instructions</p>
                  <p>1.{props.infusion.doctorsInstruction}</p>
                </span>
              </div>
              <span className="dev-cont">
                Device Control{" "}
                <button className="infusion-button">Device Page</button>
              </span>
              <div className="Display-row align-item-right">
                <div className="device-control-card align-item-content-center">
                  <span>Pause</span>
                </div>
                <div className="device-control-card align-item-content-center">
                  <span>Reset</span>
                </div>
                <div className="device-control-card align-item-content-center">
                  <span>Switch device off</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ActiveInfusion;
