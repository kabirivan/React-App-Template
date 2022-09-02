import { Box, Typography, Button, TextField } from "@mui/material";
import { FC, useState } from "react";
import {
  incrementAction,
  decrementAction,
  incrementByAmountAction,
} from "../../redux/slices/counter";
import { useDispatch, useSelector } from "../../redux/store/index";

const CounterView: FC = () => {
  const [value, setValue] = useState<number>(0);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const onChangeTextField = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value));
  };
  const handleIncrement = () => {
    dispatch(incrementAction());
  };
  const handleDecrement = () => {
    dispatch(decrementAction());
  };
  const handleIncrementByAmount = () => {
    dispatch(incrementByAmountAction(value));
  };

  return (
    <>
      <Box sx={{ mt: 2 }}>
        <Typography color="textPrimary" variant="h4" align="center">
          {`Estados Redux: ${count}`}
        </Typography>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ mt: 3 }}
        >
          <TextField
            id="outlined-basic"
            label="Value"
            variant="outlined"
            value={value}
            onChange={onChangeTextField}
            type="number"
          />
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ mt: 1 }}
        >
          <Box
            sx={{
              mt: 3,
              display: "flex",
              direction: "row",
              justifyContent: "flex-start",
              spacing: 2,
            }}
          >
            <Button variant="contained" onClick={handleDecrement}>
              Disminuir -1
            </Button>
            <Box sx={{ ml: 2 }} />
            <Button variant="contained" onClick={handleIncrementByAmount}>
              {value >= 0 ? "Sumar " : "Restar "}
              {value}
            </Button>
            <Box sx={{ ml: 2 }} />
            <Button variant="contained" onClick={handleIncrement}>
              Aumentar +1
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CounterView;
