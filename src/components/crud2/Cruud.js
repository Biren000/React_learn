import React, { useMemo, useState } from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";

const Cruud = () => {
  const [inputdata, setInputdata] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
  });
  const [items, setItems] = useState([]);
  const [id, setId] = useState("");
  const [search, setSearch] = useState("");

  const getData = (e) => {
    const { name, value } = e.target;

    setInputdata((oldData) => {
      return { ...oldData, [name]: value };
    });
  };

  const addData = () => {
    if (id) {
      setItems((oldData) => {
        return oldData.map((updated, index) => {
          if (id === index + 1) {
            return inputdata;
          } else {
            return updated;
          }
        });
      });
    } else {
      setItems((oldData) => {
        return [inputdata, ...oldData];
      });
    }
    setInputdata({
      fname: "",
      lname: "",
      email: "",
      phone: "",
    });
    setId("");
  };

  const editItem = (id) => {
    const found = items.find((elem, index) => index + 1 === id);
    setInputdata(found);
    setId(id);
  };

  const searchItems = useMemo(() => {
    if (!search) {
      return items;
    } else {
      return items.filter((item) => {
        return (
          item.fname.toLowerCase().includes(search.toLowerCase()) ||
          item.lname.toLowerCase().includes(search.toLowerCase()) ||
          item.email.toLowerCase().includes(search.toLowerCase()) ||
          item.phone.toLowerCase().includes(search.toLowerCase())
        );
      });
    }
  }, [items, search]);

  const deleteItem = (id) => {
    const updateItem = items.filter((elem, index) => {
      return index + 1 !== id;
    });
    setItems(updateItem);
  };
  return (
    <>
      <div className="my-5">
        <Container>
          <Row className="mb-3" gap={2}>
            <Col>
              <Form.Control
                type="text"
                placeholder="Search First Name Here"
                name="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </Col>
          </Row>
          <Row className="mb-3" gap={2}>
            <Col>
              <Form.Control
                type="text"
                placeholder="First Name"
                name="fname"
                value={inputdata.fname}
                onChange={getData}
              />
            </Col>
            <Col>
              <Form.Control
                type="text"
                placeholder="Last Name"
                name="lname"
                value={inputdata.lname}
                onChange={getData}
              />
            </Col>
            <Col>
              <Form.Control
                type="text"
                placeholder="Email I'd"
                name="email"
                value={inputdata.email}
                onChange={getData}
              />
            </Col>
            <Col>
              <Form.Control
                type="text"
                placeholder="Phone Number"
                name="phone"
                value={inputdata.phone}
                onChange={getData}
              />
            </Col>
            <Col>
              <div className="d-grid">
                <Button variant="primary" onClick={addData}>
                  Add Data
                </Button>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email ID</th>
                    <th>Phone No.</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {searchItems.map((dataVal, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{dataVal.fname}</td>
                        <td>{dataVal.lname}</td>
                        <td>{dataVal.email}</td>
                        <td>{dataVal.phone}</td>
                        <td>
                          <Stack direction="horizontal" gap={2}>
                            <Button
                              variant="primary"
                              onClick={() => editItem(index + 1)}
                            >
                              Edit
                            </Button>
                            <Button
                              variant="danger"
                              onClick={() => deleteItem(index + 1)}
                            >
                              Delete
                            </Button>
                          </Stack>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default Cruud;
