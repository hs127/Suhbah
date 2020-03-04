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
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'


//sign up Modal 

function Listing(props) {

  return (
    <div>
      <Container className="formColor">
        <Row>
          <h1 className="formh1">Home Details</h1>
        </Row>
        <Row>
          <Col className="test">
            <TextField
              placeholder="Castle of Narnia"
              label="lakeListing Name"
              name="listingName"
              value={props.listingName}
              onChange={props.handleInputChange}
              margin="normal"
            />
          </Col>
        </Row>
        <Row>
          <Col className="test">
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
          </Col>
          <Col className="test">
            <FormControl>
              <InputLabel htmlFor="standard-adornment-amount">Rent Amount/Roomate</InputLabel>
              <Input
                name="rentPay"
                value={props.rentPay}
                onChange={props.handleInputChange}
                startAdornment={<InputAdornment position="start">$</InputAdornment>}
              />
            </FormControl>
          </Col>
        </Row>
        <Row>
          <Col className="test">
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
                <option value="short">Short</option>
                <option value="long">Long</option>
                <option value="all">Not Particular</option>
              </Select>
            </FormControl>
          </Col>
        </Row>
        <Row>
          <Col className="test">
            <TextField
              placeholder="City"
              label="City"
              name="city"
              value={props.city}
              onChange={props.handleInputChange}
              margin="normal"
            />
          </Col>
          <Col className="test">
            <TextField
              placeholder="State"
              label="State"
              name="state"
              value={props.state}
              onChange={props.handleInputChange}
              margin="normal"
            />
          </Col>
          <Col className="test">
            <TextField
              placeholder="Zipcode"
              label="Zipcode"
              name="zipcode"
              value={props.zipCode}
              onChange={props.handleInputChange}
              margin="normal"
            />
          </Col>
        </Row>

        <Row>

          <Col className="test">
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
          </Col>
          <Col className="test">
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
          </Col>
        </Row>
        <Row>
          <Col className="test">
            <TextField
              multiline
              rows="4"
              placeholder="Comments about your place"
              label="Comments"
              name="addComments"
              value={props.addComments}
              onChange={props.handleInputChange}
            />
          </Col>
        </Row>
        <Col className="test userButtons">
          <button onClick={(e) => props.handleListingSubmit(e)} variant="contained">List Home</button>
        </Col>
      </Container>
    </div>

  );
}

export default Listing;
