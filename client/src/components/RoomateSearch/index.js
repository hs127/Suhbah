import React from "react";
import "./style.css";
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import Grid from '@material-ui/core/Grid';


function RoomateSearch(props) {

  return (
    <div>
      <Grid container>
        <FormControl>
          <InputLabel htmlFor="age-native-simple">Has a Place?</InputLabel>
          <Select
            native
            placeholder="Place"
            value={props.query.placeInd}
            onChange={props.handleSearchInputChange}
            inputProps={{
              name: 'placeInd'
            }}
          >
            <option />
            <option value="havePlace">Yes</option>
            <option value="noPlace">No</option>
          </Select>
        </FormControl>
        <form noValidate>
          <TextField
            placeholder="State"
            label="State"
            name="state"
            value={props.query.state}
            onChange={props.handleSearchInputChange}
            margin="normal"
          />
        </form>

        <FormControl>
          <InputLabel htmlFor="age-native-simple">Gender</InputLabel>
          <Select
            native
            placeholder="Select Gender"
            value={props.query.gender}
            onChange={props.handleSearchInputChange}
            inputProps={{
              name: 'gender'
            }}
          >
            <option value="Gender" />
            <option value="female">Female</option>
            <option value="male">Male</option>
          </Select>
        </FormControl>
        <Button onClick={(e) => props.handleRoomateSearch(e)} variant="contained">Search Companions</Button>
      </Grid>


    </div>
  );
}

export default RoomateSearch;
