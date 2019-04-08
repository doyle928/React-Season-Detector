import React from "react";

const Loading = props => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">{props.msg}</div>
    </div>
  );
};

Loading.defaultProps = {
  msg: "Loading..."
};

export default Loading;
