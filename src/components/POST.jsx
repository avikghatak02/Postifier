import React, { useEffect, useState } from "react";
import { Parameter } from "./Parameter";
import "./Style/POST.css";
import axios from "axios";
import { Scrollbars } from "react-custom-scrollbars";
export const POST = ({ url, setURL, makeReq }) => {
  const [data, setData] = useState("");
  const [reqBody, setReqBody] = useState("");
  const [resCode, setResCode] = useState("");
  let obj = "";
  const checkJson = (reqBody) => {
    try {
      JSON.parse(reqBody);
    } catch (error) {
      return false;
    }
    return true;
  };
  async function fetchData(req) {
    if (url !== "") {
      if (checkJson(reqBody)) {
        console.log(req);
        const request = await axios
          .post(url, JSON.parse(req))
          .then((response) => {
            setData(JSON.stringify(response.data));
            setResCode(response.status);
          })
          .catch((err) => {
            setData(err);
            setResCode("404");
          });
        return request;
      } else if (reqBody == "") {
        setData("Fill the request JSON");
      } else {
        const request = `<!DOCTYPE html>
    <html lang="en">

    <head>
      <meta charset="utf-8">
      <title>Error</title>
    </head>

    <body>
      <pre>Bad Request</pre>
    </body>

    </html>`;
        setData(request);
        // console.log("err");
        return request;
      }
    }
  }
  useEffect(() => {
    let output = fetchData(reqBody);
    console.log(output);
  }, [makeReq]);
  useEffect(() => {
    console.log(data);
  }, [data]);
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
          <p> {data}</p>
        </div>
      </div>
    </div>
  );
};
