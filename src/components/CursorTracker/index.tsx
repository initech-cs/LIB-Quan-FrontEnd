import React, { MutableRefObject } from "react";
import "./styles.scss";

interface Props {
  leftEye: MutableRefObject<HTMLDivElement | null>;
  rightEye: MutableRefObject<HTMLDivElement | null>;
}

export default function CursorTracker(props: Props): JSX.Element {
  return (
    <div className="envelope">
      <div className="opener"></div>
      <div className="eyes">
        <div ref={props.leftEye} className="eye"></div>
        <div ref={props.rightEye} className="eye"></div>
      </div>
    </div>
  );
}
