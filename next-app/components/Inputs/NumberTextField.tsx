import { TextField } from "@mui/material";
import React from "react";
type Props = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  rows: number;
};
const NumberTextField = ({ onChange, rows }: Props) => {
  return (
    <TextField
      id="outlined-number"
      label="Number"
      type="number"
      defaultValue={1}
      rows={rows}
      onChange={onChange}
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
};

export default NumberTextField;
