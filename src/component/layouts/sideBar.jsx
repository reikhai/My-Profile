import { useState } from "react";
import { ToggleButton, ToggleButtonGroup, Tooltip } from "@mui/material";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PersonIcon from "@mui/icons-material/Person";
import { MoonIcon } from "../darkMode/moon";
import { SunIcon } from "../darkMode/sun";

export default function Sidebar({ modeChange, theme }) {
  const [view, setView] = useState("profile");

  const handleChange = (event, nextView) => {
    setView(nextView);
  };

  const handleClick = (event) => {
    const attr = event.currentTarget.getAttribute("data-scroll-to");
    const anchor = (event.target.ownerDocument || document).querySelector(
      `#${attr}`
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <>
      <ToggleButtonGroup
        orientation="vertical"
        value={view}
        exclusive
        onChange={handleChange}
        color="primary"
        sx={{
          bgcolor: "background.default",
          position: "fixed",
          top: "280px",
          right: 0,
          zIndex: 9999,
        }}
      >
        <ToggleButton
          value="profile"
          aria-label="profile"
          onClick={handleClick}
          data-scroll-to="profile"
        >
          <Tooltip title="Profile" placement="left-start">
            <PersonIcon />
          </Tooltip>
        </ToggleButton>

        <ToggleButton
          onClick={handleClick}
          value="experience"
          aria-label="experience"
          data-scroll-to="experience"
        >
          <Tooltip title="Experience" placement="left-start">
            <WorkspacePremiumIcon />
          </Tooltip>
        </ToggleButton>

        <ToggleButton
          onClick={handleClick}
          value="project"
          aria-label="project"
          data-scroll-to="project"
        >
          <Tooltip title="Project" placement="left-start">
            <ListAltIcon />
          </Tooltip>
        </ToggleButton>

        <ToggleButton onClick={modeChange} value="light">
          {theme.palette.mode === "dark" ? <MoonIcon /> : <SunIcon />}
        </ToggleButton>
      </ToggleButtonGroup>
    </>
  );
}
