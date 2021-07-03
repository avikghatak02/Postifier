import React, { useState, useEffect } from "react";
import axios from "axios";
import { Parameter } from "./Parameter";
export const PUT = ({ url, setURL, makeReq }) => {
  const [data, setData] = useState("");
  const [reqBody, setReqBody] = useState("");
  const [resCode, setResCode] = useState("");
  const checkJson = () => {
    try {
      JSON.parse(reqBody);
    } catch (error) {
      return false;
    }
    return true;
  };
  useEffect(() => {
    if (url !== "") {
      if (checkJson()) {
        axios
          .put(url, JSON.parse(reqBody))
          .then((response) => {
            setData(JSON.stringify(response.data));
            setResCode(response.status);
          })
          .catch((err) => {
            setData(err);
            setResCode("404");
          });
      } else if (reqBody == "") {
        setData("Fill the request JSON");
      } else {
        setData(`<!DOCTYPE html>
      <html lang="en">
      
      <head>
        <meta charset="utf-8">
        <title>Error</title>
      </head>
      
      <body>
        <pre>Bad Request</pre>
      </body>
      
      </html>`);
      }
    }
  }, [makeReq]);
  return (
    <div className="postContainer">
      <div className="ParameterContainer">
        <Parameter url={url} setURL={setURL} />
      </div>
      <div className="textCont">
        <p>Enter Request JSON</p>
        <textarea
          className="textarea"
          onChange={(e) => {
            setReqBody(e.target.value);
          }}
        ></textarea>
      </div>
      <div className="responseCont">
        <p>Response</p>
        <div className="response">
          <p>Status Code : {resCode}</p>
          <p>{data}</p>
        </div>
      </div>
    </div>
  );
};
