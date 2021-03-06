import React from "react";
import "./style.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';



function RoomateSearch(props) {
  const { searchErrors } = props;
  return (
    <div>
      <Container className="formColor">
        <Row>
          <h1 className="formh1">Search for a صديق <span style={{ fontSize: 18 }}> [Sadēq] </span></h1>
        </Row>
        <Row>
          <Col className="test">
            <FormControl
              required
              error={searchErrors.placeInd.length === 0 ? false : true}>
              <InputLabel htmlFor="age-native-simple">Place?</InputLabel>
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
            {props.searchErrors.placeInd.length > 0 && (
              <span className="error">{props.searchErrors.placeInd}</span>
            )}
          </Col>
          <Col className="test">
            <FormControl required
              error={searchErrors.gender.length === 0 ? false : true}>

              <InputLabel htmlFor="age-native-simple">Gender</InputLabel>
              <Select
                native
                placeholder="Place"
                value={props.query.gender}
                onChange={props.handleSearchInputChange}
                inputProps={{
                  name: 'gender'
                }}
              >
                <option />
                <option value="female">Female</option>
                <option value="male">Male</option>
              </Select>
            </FormControl>
            {props.searchErrors.gender.length > 0 && (
              <span className="error">{props.searchErrors.gender}</span>
            )}

          </Col>
          <Col>
            <TextField
              required
              // className={searchErrors.state.length > 0 ? "error" : null}
              error={searchErrors.state.length === 0 ? false : true}
              placeholder="State"
              label="State"
              name="state"
              hintText="State"
              name="state"
              floatingLabelText="state"
              value={props.query.state}
              onChange={props.handleSearchInputChange}
            />
            {props.searchErrors.state.length > 0 && (
              <span className="error">{props.searchErrors.state}</span>
            )}
          </Col>

        </Row>
        <Row>
          <Col md={{ span: 6, offset: 3 }} className="test userButtons">
            <Button onClick={(e) => props.handleRoomateSearch(e)}>Search Companions</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default RoomateSearch;
