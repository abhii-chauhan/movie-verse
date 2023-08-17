import React, { useContext } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Fingerprint from '@mui/icons-material/Fingerprint';
import { Link } from "react-router-dom";
import { Appstate } from "../App";

const Header = () => {
  const useAppstate = useContext(Appstate);
  return (
    <div className="text-3xl flex justify-between items-center text-red-500 font-bold p-3 border-b-2 border-gray-500">
     <Link to={'/'}> <span>
        Movie<span className="text-white">Verse</span>
      </span></Link>
      {useAppstate.login ?
      <Link to={'/addmovie'}>
        <h1 className="text-lg cursor-pointer flex items-center">
          <Button variant="outlined" color="error" >
            <AddIcon className="mr-1" color="warning" />
            <span className="text-white">Add New</span>
          </Button>
        </h1>
      </Link>
      :
      <Link to={'/login'}>
        <h1 className="text-lg bg-green-700 cursor-pointer flex items-center">
          <Button variant="outlined" color="success" >
          <Stack direction="row" spacing={1}>
      <IconButton aria-label="fingerprint" color="error">
        <Fingerprint />
      </IconButton>
      </Stack>
          <span className="text-black font-medium capitalize">Login</span>
          </Button>
        </h1>
      </Link>
      }
    </div>
  );
};

export default Header;
