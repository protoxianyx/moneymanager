"use client"

// import React, { useRef, useState } from "react";

const WriterArea = () => {

    // const editorRef = useRef(null);
    // const [html, setHtml] = useState("<p>Type here...</p>");

  const handleInput = () => {
    // setHtml(editorRef.current.innerHTML);
  };

  return (
    <div
      // contentEditable="true"
      className=" border"
      onInput={handleInput}
      // ref={editorRef}
      // dangerouslySetInnerHTML={{ __html: html }}
    >
      {/* {html} */} j
    </div>
  );
};

export default WriterArea;
