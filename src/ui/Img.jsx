import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { FALLBACK } from "../assets";

const DEFAULT_FALLBACK = FALLBACK

const StyledImg = styled("img")(({ theme }) => ({
  maxWidth: "100%",
  height: "auto",
  display: "block",
}));

const Img = ({ src, alt = "image", loading = "lazy", ...rest }) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleImgError = () => {
    if (!hasError) {
      setImgSrc(DEFAULT_FALLBACK);
      setHasError(true);
    }
  };

  return (
    <StyledImg
      src={imgSrc}
      alt={alt}
      loading={loading}
      onError={handleImgError}
      {...rest}
    />
  );
};

export default Img;
