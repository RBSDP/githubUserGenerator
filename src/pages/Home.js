import React, { useState, useContext } from "react";
import Axios from "axios";
import {
  Row,
  Container,
  Col,
  Input,
  Button,
  InputGroup,
} from "reactstrap";
// Remove the following import
// import { InputGroupAddon } from "reactstrap";

import UserCard from "../components/UserCard";
import Repos from "../components/Repos";
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../context/UserContext";
import { toast } from "react-toastify";

const Home = () => {
  const context = useContext(UserContext);
  const [query, setQuery] = useState("");
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const fetchDetails = async () => {
    try {
      const { data } = await Axios.get(`https://api.github.com/users/${query}`);
      console.log({data})
      setUser(data);
    } catch (error) {
      toast("Not able to locate user", { type: "error" });
    }
  };

   //put anypage brhind login
   if(!context.user?.uid){
     navigate('/signin')
   }
  
  return (
    <Container>
      <Row className=" mt-3">
        <Col md="5">
          <InputGroup>
            <Input
              type="text"
              value={query} // Update this line to bind input value to state
              placeholder="Please provide the username"
              onChange={(e) => setQuery(e.target.value)} // Add this line to update the 'query' state
            />
            <Button onClick={fetchDetails} color="primary" >Fetch User</Button>
          </InputGroup>
          {user ? <UserCard user={user}/> :null}
        </Col>
        <Col md="7">{user ? <Repos repos_url={user.repos_url}/> :null }</Col>
      </Row>
    </Container>
  );
};

export default Home;
