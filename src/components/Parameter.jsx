import React, { useEffect, useState } from "react";
import "./Style/Parameter.css";
import { ParamItem } from "./ParamItem";
export const Parameter = ({ url, setURL }) => {
  const [key, setKey] = useState("");
  const [value, setValue] = useState("");
  const [add, setAdd] = useState(false);
  let str = url.includes("?") ? url.split("?")[0] : url;
  useEffect(() => {
    if (url.includes("?")) {
      document.querySelector(".key").value = url.split("?")[1].split("=")[0]
        ? url.split("?")[1].split("=")[0]
        : "";
      document.querySelector(".value").value = url.split("?")[1].split("=")[1]
        ? url.split("?")[1].split("=")[1].split("&")[0]
        : "";
      setKey(document.querySelector(".key").value);
      setValue(document.querySelector(".value").value);
    }
  }, [url]);
  useEffect(() => {
    if (key && value) setURL(str + "?" + key + "=" + value);
    else if (key && value === "") setURL(str + "?" + key);
    else if (value && key === "") setURL(str + "?=" + value);
    else setURL(str);
  }, [add]);
  let element = [];
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount((url.match(/&/g) || []).length);
  }, [url]);
  if (url.includes("?") && count) {
    for (let index = 0; index < count; index++) {
      element[index] = (
        <div key={index + 1} className="midItemP">
          <ParamItem id={index + 1} url={url} setURL={setURL} />
        </div>
      );
    }
  }
  return (
    <div className="paramCont">
      <p>Parameters</p>
      <div className="keyVal">
        <input
          type="text"
          className="key"
          onChange={(e) => {
            setKey(e.target.value);
          }}
        />
        <input
          type="text"
          className="value"
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button
          className="add"
          onClick={() => {
            setAdd(!add);
          }}
        >
          Add
        </button>
        <button
          className="plus"
          onClick={() => {
            setCount((prev) => prev + 1);
          }}
        >
          +
        </button>
        <div className="mainItemP">{element}</div>
      </div>
    </div>
  );
};
