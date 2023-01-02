import React, { useRef } from "react";
import { css } from "@emotion/react";
import { useFileStore } from "../store/file";

export default function FileInput({ expended = false }) {
  const fileInputRef = useRef();
  const setFile = useFileStore((state) => state.setFile);

  function handleClick() {
    fileInputRef.current.click();
  }

  async function handleSetFile() {
    if (fileInputRef.current.files[0].type.startsWith("image/")) {
      setFile(fileInputRef.current.files[0]);
    } else {
      await alert("incorrect file type, only image are supported !");
    }
  }

  return (
    <>
      <input
        ref={fileInputRef}
        type={"file"}
        accept="*"
        onChange={handleSetFile}
        css={css`
          ${expended
            ? ``
            : `opacity: 0;
            height: 0px;
            width: 0px;`}
        `}
      ></input>
      <button
        css={css`
          height: fit-content;
          width: fit-content;
          margin: 10px;
          background-color: white;
          border: 5px solid black;
          color: black;
          text-transform: uppercase;
          padding: 5px;
          cursor: pointer;
        `}
        onClick={handleClick}
      >
        sélectionner un fichier
      </button>
    </>
  );
}
