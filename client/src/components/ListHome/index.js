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

function Listing(props) {

  return (
    <div>
      <h1>Residental Details</h1>
      <TextField
        placeholder="Listing Name"
        label="I live by a lake"
        name="listingName"
        value={props.listingName}
        onChange={props.handleInputChange}
        margin="normal"
      />
      <br />
      <FormControl>
        <InputLabel htmlFor="age-native-simple">I live in a </InputLabel>
        <Select
          native
          placeholder="Select Residental Type"
          value={props.homeType}
          onChange={props.handleInputChange}
          inputProps={{
            name: 'homeType'
          }}
        >
          <option value="" />
          <option value="apartment">Apartment</option>
          <option value="house">House</option>
          <option value="condo">Condo</option>
          <option value="townhouse">Townhouse</option>
          <option value="townhouse">Other</option>
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
        <InputLabel htmlFor="age-native-simple">Current Rent Duration</InputLabel>
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
        placeholder="Comments or Concerns"
        label="Comments"
        name="addComments"
        value={props.addComments}
        onChange={props.handleInputChange}
      />
      <br />

      <Button onClick={props.handleListingSubmit} variant="contained">Update Profile</Button>
    </div>

  );
}

export default Listing;
