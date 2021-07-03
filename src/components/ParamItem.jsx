import React, { useEffect, useState } from "react";
import "./Style/ParameterItem.css";
export const ParamItem = ({ id, url, setUrl }) => {
  const [key, setKey] = useState("");
  const [value, setValue] = useState("");
  let str = url.includes("&") ? url.split("&") : [url];
  let str1 = "";
  let i = 0;
  let str2 = "";
  str.forEach((element) => {
    if (i < id) {
      str1 += element + "&";
    }
    if (i > id) {
      str2 += element + "&";
    }
    i++;
  });
  useEffect(() => {
    if (!str[id]) {
      document.querySelector(`.key${id}`).value = "";
      document.querySelector(`.value${id}`).value = "";
      setKey("");
      setValue("");
    }
    if (str[id]) {
      document.querySelector(`.key${id}`).value = str[id].split("=")[0];
      document.querySelector(`.value${id}`).value = str[id].includes("=")
        ? str[id].split("=")[1]
        : "";
      setKey(str[id].split("=")[0]);
      setValue(document.querySelector(`.value${id}`).value);
    }
  }, [url]);
  //   console.log(str1);
  const set = () => {
    if (!key && !value) {
      let mainStr = str1 + str2;
      mainStr = mainStr.slice(0, -1);
      setUrl(mainStr);
    } else if (!value && key) {
      let mainStr = str1 + key + "&" + str2;
      mainStr = mainStr.slice(0, -1);
      setUrl(mainStr);
    } else {
      let mainStr = str1 + key + "=" + value + "&" + str2;
      mainStr = mainStr.slice(0, -1);
      setUrl(mainStr);
    }
  };

  return (
    <div className="itemP">
      <input
        type="text"
        className={`key${id} keyP`}
        onChange={(e) => {
          setKey(e.target.value);
        }}
      />
      <input
        type="text"
        className={`value${id} valueP`}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button onClick={set} className="add addP">
        Add
      </button>
    </div>
  );
};
