import React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

function NotesRoutes(props) {
  return (
    <div>
      <h2>{props.routesData.label}</h2>
      <div style={{ marginLeft: 15 }}>{props.routesData.icon}</div>

      {/* <SvgIcon >
                <path d = {props.routesData.icon}></path>
            </SvgIcon>   */}
    </div>
  );
}

export default NotesRoutes;
