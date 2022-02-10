import Box from "@mui/material/Box";
import * as React from "react";
import sunset4k from './sunset4k.jpg';
const Header = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: 176,
        backgroundImage: `url(${sunset4k})`,
        boxSizing: "border-box",
        // objectFit: "cover !important",
        backgroundSize: "cover",
        backgroundPosition: "center",
        
      }}
    >
      
     
    </Box>
  );
};

export default Header;
