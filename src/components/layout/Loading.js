import React from "react";
import loading from "../../assets/loading.gif";
const Loading = () => {
  return (
    <div style={Load}>
      <img src={loading} alt="loading" />
    </div>
  );
};
const Load = {
  display: "flex",
  justifyContent: "center",
  alignSelf: "center",
  alignItems: "center",
  height: "100vh",
};
export default Loading;
