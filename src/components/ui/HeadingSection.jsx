import { Box } from "@mui/material";

const HeadingSection = ({
  label = "",
  title = "",
  showLine = true,
  description = "",
}) => {
  return (
    <>
      {label && <Box className="labe-title">{label}</Box>}
      {title && <Box className="main-section-title">{title}</Box>}
      {showLine && <Box className="small-line-title-down"></Box>}
      {description && <Box className="sub-section-title">{description}</Box>}
    </>
  );
};

export default HeadingSection;
