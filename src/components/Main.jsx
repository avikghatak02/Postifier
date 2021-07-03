import React, { useState, useEffect } from "react";
import { GET } from "./GET";
import { POST } from "./POST";
import { PUT } from "./PUT";
import { DELETE } from "./DELETE";
import "./Style/Main.css";
export const Main = () => {
  const [url, setURL] = useState("");
  const [reqType, setReqType] = useState("GET");
  const [makeReq, setMakeReq] = useState(0);

  useEffect(() => {
    document.querySelector(".mainInput").value = url;
  }, [url]);
  return (
    <div className="cont">
      <div className="head">
        <svg
          width="91"
          height="85"
          viewBox="0 0 91 85"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="image"
        >
          <g clip-path="url(#clip0)">
            <path
              d="M45.5284 0C48.0988 0.00431641 50.6269 0.207187 53.0843 0.591016V25.334L71.8641 7.83727C73.9331 9.20994 75.8759 10.7414 77.6724 12.4156C79.4707 14.0901 81.1163 15.9018 82.5921 17.8317L63.8113 35.3281H90.3701C90.7893 37.6526 90.9999 40.0057 91 42.3629V42.4203C91 44.8196 90.7821 47.1704 90.3701 49.4594H63.8066L82.5921 66.9514C81.1166 68.8801 79.473 70.6917 77.6781 72.3675H77.6728C75.878 74.0418 73.9368 75.5732 71.8694 76.9459L53.0843 59.4492V84.1922C50.5887 84.5816 48.0632 84.7794 45.5331 84.7835H45.4669C42.9384 84.7793 40.4144 84.5816 37.9203 84.1925V59.4495L19.1406 76.9459C14.9934 74.1961 11.3675 70.8182 8.41252 66.9518L27.1934 49.4594H0.634512C0.211787 47.1294 -0.00046402 44.7703 7.61659e-07 42.407V42.2838C0.00426639 41.6613 0.047989 40.9006 0.110552 40.1137L0.130102 39.877C0.315657 37.662 0.634512 35.3281 0.634512 35.3281H27.1934L8.41252 17.8317C9.88247 15.903 11.5247 14.0941 13.3215 12.4243L13.3308 12.4156C15.127 10.7405 17.0704 9.20905 19.1406 7.83727L37.9203 25.334V0.591016C40.4174 0.201426 42.9445 0.00375874 45.4762 0L45.5284 0ZM45.5238 31.7953H45.4804C42.1003 31.7953 38.863 32.373 35.8707 33.4229C34.7178 36.2837 34.126 39.3151 34.1236 42.3718V42.4117C34.1252 45.4688 34.7185 48.5004 35.875 51.3603C38.9457 52.4388 42.1998 52.9902 45.4804 52.9879H45.5238C48.9043 52.9879 52.1416 52.4101 55.1293 51.3603C56.2861 48.5005 56.8781 45.4684 56.8764 42.4113V42.3715C56.8764 39.2225 56.2554 36.2057 55.1293 33.4229C52.0586 32.3444 48.8045 31.793 45.5238 31.7953Z"
              fill="#FF4A00"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="91" height="85" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <p>WELCOME TO POSTIFIER</p>
      </div>
      <hr className="hr" />
      <div className="mainCover"></div>
      <div className="mainContainer">
        <div className="typeInput">
          <select
            name="req"
            className="type"
            onChange={(e) => setReqType(e.target.value)}
          >
            <option value="GET" defaultValue>
              GET
            </option>
            <option value="POST">POST</option>
            <option value="PUT">PUT</option>
            <option value="DELETE">DELETE</option>
          </select>
          <input
            type="text"
            className="mainInput"
            onChange={(e) => {
              setURL(e.target.value);
            }}
          />
          <button
            className="Req"
            onClick={() => setMakeReq((prev) => prev + 1)}
          >
            Req
          </button>
        </div>
        <div className="components">
          {reqType == "GET" ? (
            <GET url={url} setURL={setURL} makeReq={makeReq} />
          ) : null}
          {reqType == "POST" ? (
            <POST url={url} setURL={setURL} makeReq={makeReq} />
          ) : null}
          {reqType == "PUT" ? (
            <PUT url={url} setURL={setURL} makeReq={makeReq} />
          ) : null}
          {reqType == "DELETE" ? (
            <DELETE url={url} setURL={setURL} makeReq={makeReq} />
          ) : null}
        </div>
      </div>
    </div>
  );
};
