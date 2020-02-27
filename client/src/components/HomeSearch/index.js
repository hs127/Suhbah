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


//sign up Modal 

function HomeSearch(props) {

  return (
    <div>
      <h1>What kind of housing are you searching for?</h1>
      <br />
      <FormControl>
        <InputLabel htmlFor="age-native-simple">I prefer to live in </InputLabel>
        <Select
          native
          placeholder="Select Residental Type"
          value={props.homeType}
          onChange={props.handleInputChange}
          inputProps={{
            name: 'homeType'
          }}
        >
          <option value="apartment">Apartment</option>
          <option value="house">House</option>
          <option value="condo">Condo</option>
          <option value="townhouse">Townhouse</option>
          <option value="other">Other</option>
          <option value="nopreference">No Preference</option>
        </Select>
      </FormControl>
      <br />
      <br />
      <FormControl>
        <InputLabel htmlFor="standard-adornment-amount">Select Current Rent Amount/Roomate</InputLabel>
        <Input
          name="rentPay"
          value={props.rentPay}
          onChange={props.handleInputChange}
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
        />
      </FormControl>
      <br />
      <FormControl>
        <InputLabel htmlFor="age-native-simple">Rent Duration</InputLabel>
        <Select
          native
          placeholder="Rent Duration"
          value={props.rentDuration}
          onChange={props.handleInputChange}
          inputProps={{
            name: 'rentDuration'
          }}
        >
          <option value="" />
          <option value="short">Short</option>
          <option value="long">Long</option>
          <option value="all">Not Particular</option>
        </Select>
      </FormControl>
      <br />
      <TextField
        placeholder="City Name"
        label="city"
        name="city"
        value={props.city}
        onChange={props.handleInputChange}
        margin="normal"
      />
      <br />
      <TextField
        placeholder="State"
        label="State"
        name="state"
        value={props.state}
        onChange={props.handleInputChange}
        margin="normal"
      />
      <br />
      <TextField
        placeholder="zipcode"
        label="zipcode"
        name="zipcode"
        value={props.zipCode}
        onChange={props.handleInputChange}
        margin="normal"
      />
      <br />

      <Grid container>
        <form noValidate>
          <TextField
            id="date"
            label="Move In Date"
            type="date"
            name="moveInDate"
            value={props.moveInDate}
            onChange={props.handleInputChange}

            InputLabelProps={{
              shrink: true,
            }}
          />
        </form>
        <form noValidate>
          <TextField
            id="date"
            label="Move Out Date"
            type="date"
            name="moveOutDate"
            value={props.moveInDate}
            OnChange={props.handleInputChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </form>
      </Grid>

      <TextField
        multiline
        rows="4"
        placeholder="Comments about what you are looking for"
        label="Comments about what you are looking for"
        name="addComments"
        value={props.addComments}
        onChange={props.handleInputChange}
      />
      <br />

      <Button onClick={(e) => props.handleHomeSearchSubmit(e)} variant="contained">Update Profile</Button>
    </div>
  );
}

export default HomeSearch;
