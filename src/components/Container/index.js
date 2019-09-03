import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import MaterialContainer from "@material-ui/core/Container";

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <MaterialContainer maxWidth="sm">
        <Typography
          component="div"
          style={{ backgroundColor: "#cfe8fc", height: "10vh" }}
        />
      </MaterialContainer>
    </React.Fragment>
  );
}
