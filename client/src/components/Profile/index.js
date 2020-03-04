import React from "react";
import "./style.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dialog from '@material-ui/core/Dialog';
// import { MuiThemeProvider } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';


//sign up Modal 

function Profile(props) {

  return (
    <Container className="formColor">
      <div className="">
        <div className="">
          <Row>
            <Col className="test">
              <h1 className="formh1">Profile Section</h1>
            </Col>
          </Row>

          <React.Fragment>
            <Row style={{ marginBottom: 20 }}>
              <Col md={4} className="test">
                <TextField required
                  id="standard-basic"
                  placeholder="Enter a Username"
                  label="username"
                  name="username"
                  value={props.username}
                  onChange={props.handleInputChange}
                />
              </Col>
            </Row>

            <Row>
              <Col className="test">

                <FormControl>
                  <InputLabel htmlFor="age-native-simple">Age</InputLabel>
                  <Select
                    native
                    placeholder="Select Age Group"
                    value={props.age}
                    onChange={props.handleInputChange}
                    inputProps={{
                      name: 'age'
                    }}
                  >
                    <option value="Select Age Group" />
                    <option value={18}>18-22</option>
                    <option value={22}>23-25</option>
                    <option value={26}>26-30</option>
                    <option value={31}>31-30</option>
                    <option value={41}>41-50</option>
                    <option value={50}>51+</option>
                  </Select>
                </FormControl>
              </Col>
              <Col className="test">
                <FormControl>
                  <InputLabel htmlFor="age-native-simple">Gender</InputLabel>
                  <Select
                    native
                    placeholder="Select Gender"
                    value={props.gender}
                    onChange={props.handleInputChange}
                    inputProps={{
                      name: 'gender'
                    }}
                  >
                    <option value="Gender" />
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                  </Select>
                </FormControl>
              </Col>

            </Row>

            <Row>
              <Col className="test">
                <TextField
                  native
                  placeholder="Occupation"
                  label="Occupation"
                  name="occupation"
                  value={props.occupation}
                  onChange={props.handleInputChange}
                  margin="normal"
                />
              </Col>
            </Row>

            <Row>
              <Col className="test">
                <FormControl>
                  <InputLabel htmlFor="age-native-simple">Smoke?</InputLabel>
                  <Select
                    native
                    placeholder="Smoker?"
                    value={props.smoke}
                    onChange={props.handleInputChange}
                    inputProps={{
                      name: 'smoke'
                    }}
                  >
                    <option value="" />
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                  </Select>
                </FormControl>
              </Col>
              <Col className="test">
                <FormControl>
                  <InputLabel htmlFor="age-native-simple">Kids?</InputLabel>
                  <Select
                    native
                    placeholder="Kids?"
                    value={props.kids}
                    onChange={props.handleInputChange}
                    inputProps={{
                      name: 'kids'
                    }}
                  >
                    <option value="" />
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                  </Select>
                </FormControl>
              </Col>
            </Row>

            <Row>
              <Col className="test">
                <FormControl>
                  <InputLabel htmlFor="age-native-simple">Pets?</InputLabel>
                  <Select
                    native
                    placeholder="Pets?"
                    value={props.pets}
                    onChange={props.handleInputChange}
                    inputProps={{
                      name: 'pets'
                    }}
                  >
                    <option value="" />
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                  </Select>
                </FormControl>
              </Col>
              <Col className="test">
                <FormControl>
                  <InputLabel htmlFor="age-native-simple">Have a Place?</InputLabel>
                  <Select
                    native
                    placeholder="Place"
                    value={props.placeInd}
                    onChange={props.handleInputChange}
                    inputProps={{
                      name: 'placeInd'
                    }}
                  >
                    <option />
                    <option value="havePlace">Yes</option>
                    <option value="noPlace">No</option>
                  </Select>
                </FormControl>
              </Col>
            </Row>
            <Row>
              <Col className="test userButtons">
                <button type="submit" onClick={(e) => { props.handleFormSubmit(e) }}>Submit</button>
              </Col>
            </Row>
          </React.Fragment>

        </div>
      </div>
    </Container >

  );
}

export default Profile;
