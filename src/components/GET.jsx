import React, { useEffect, useState } from "react";
import { Parameter } from "./Parameter";
import "./Style/GET.css";
import axios from "axios";
export const GET = ({ url, setURL, makeReq }) => {
  const [data, setData] = useState("");
  const [resCode, setResCode] = useState("");
  const checkJson = (reqBody) => {
    try {
      JSON.parse(reqBody);
    } catch (error) {
      return false;
    }
    return true;
  };
  useEffect(() => {
    if (url !== "") {
      axios(url)
        .then((response) => {
          checkJson(response)
            ? setData(JSON.stringify(response.data))
            : setData(JSON.stringify(response));
          setResCode(response.status);
        })
        .catch((err) => {
          console.log(err);
          setData(JSON.stringify(err));
          setResCode("404");
        });
    }
  }, [makeReq]);
  return (
    <div className="ParameterContainer">
      <Parameter url={url} setURL={setURL} />
      <div className="responseCont">
        <p>Response</p>
        <div className="response getResponse">
          <p>Status Code : {resCode}</p>
          <p>{data}</p>
        </div>
      </div>
    </div>
  );
};
