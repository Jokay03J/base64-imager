import React, { useEffect, useState } from "react";
import { useFileStore } from "../store/file";
import { css } from "@emotion/react";

export default function FileConvertor() {
  const [convertedFile, setConvertedFile] = useState("");
  const file = useFileStore((state) => state.file);

  useEffect(() => {
    if (file && file.type.startsWith("image/")) {
      let reader = new FileReader();
      reader.onload = function () {
        let base64String = reader.result
          .replace("data:", "")
          .replace(/^.+,/, "");
        setConvertedFile(() => base64String);
      };
      reader.readAsDataURL(file);
    }
  }, [file]);

  return (
    <div
      css={css`
        width: 100%;
        display: flex;
        flex-direction: column;
      `}
    >
      <div
        onClick={async () => {
          await navigator.clipboard.writeText(
            `data:${file.type};base64,${convertedFile}`
          );
          alert("base 64 copier");
        }}
        css={css`
          ${convertedFile
            ? `          display: flex;
align-items: center;
font-size: 20px;
height: 50px;
width: 100%;
overflow-x: scroll;
overflow-y: hidden;
cursor: pointer;`
            : ``}
        `}
      >
        {file ? convertedFile : ""}
      </div>
      {convertedFile ? (
        <img
          css={css`
            height: 50px;
            width: auto;
            margin: 5px;
          `}
          src={`data:${file.type};base64,${convertedFile}`}
        ></img>
      ) : null}
    </div>
  );
}
