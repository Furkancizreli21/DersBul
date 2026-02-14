"use client";
import React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
function valuetext(value: number) {
  return `${value} ₺`;
}
const PriceFilters = () => {
  const [value, setValue] = React.useState<number[]>([100, 500]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };
  return (
    <div>
      <div className="flex justify-between items-center">
        <span className="font-bold text-lg">Filtreler</span>
        <button onClick={() => setValue([100, 500])} className="text-blue-500 text-sm">
          Temizle
        </button>
      </div>

      <div className="space-y-4">
        <span className="font-medium">Saatlik Ücret</span>

        <Box sx={{ width: "100%" }}>
          <Slider
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            min={0}
            max={5000}
          />
        </Box>

        <div className="flex justify-between text-sm text-gray-600">
          <span>{value[0]} ₺</span>
          <span>{value[1]} ₺</span>
        </div>
      </div>
    </div>
  );
};

export default PriceFilters;
