import { useState } from "react";
import { ToggleButton, ToggleButtonGroup, Tooltip } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Sidebar() {
  const handleChange = (event, nextView) => {
    switch (nextView) {
      case "linkedIn":
        window.open("https://www.linkedin.com/in/rei-khai/");
        break;
      case "github":
        window.open("https://github.com/reikhai?tab=repositories");
        break;
      default:
    }
  };

  return (
    <>
      <ToggleButtonGroup
        orientation="vertical"
        exclusive
        onChange={handleChange}
        color="primary"
        sx={{
          bgcolor: "background.default",
          position: "fixed",
          top: "350px",
          left: 0,
          zIndex: 9999,
        }}
      >
        <ToggleButton value="github" aria-label="github">
          <Tooltip title="Github" placement="left-start">
            <GitHubIcon />
          </Tooltip>
        </ToggleButton>

        <ToggleButton value="linkedIn" aria-label="linkedIn">
          <Tooltip title="LinkedIn" placement="left-start">
            <LinkedInIcon />
          </Tooltip>
        </ToggleButton>
      </ToggleButtonGroup>
    </>
  );
}
