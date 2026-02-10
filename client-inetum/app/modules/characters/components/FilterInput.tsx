import React from "react";
import { Box, Tab, Tabs, TextField } from "@mui/material";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

const FilterInput: React.FC<Props> = ({ value, onChange }) => {
  return (
    <Box
      sx={{
        width: { xs: "100%", sm: "250px" },
        alignSelf: "flex-start",
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Box>
        <Tabs
          value={0}
          aria-label="basic tabs example"
          sx={{
            "& .MuiTabs-indicator": {
              backgroundColor: "#391677 !important",
            },
          }}
        >
          <Tab
            label="Filtros"
            sx={{
              color: "#391677 !important",
            }}
          />
        </Tabs>
      </Box>
      <TextField
        label="Ingrese el nombre"
        variant="outlined"
        placeholder="Ingrese el nombre"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </Box>
  );
};

export default FilterInput;
