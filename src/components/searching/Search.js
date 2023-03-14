import React, { useMemo, useState } from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { ItemData } from "../../commonComponents/TableData";

const Search = () => {
  const [search, setSearch] = useState("");

  const searchItem = useMemo(() => {
    if (!search) {
      return ItemData;
    } else {
      return ItemData.filter((item) => {
        return (
          item.fname.toLowerCase().includes(search.toLowerCase()) ||
          item.contact.toLowerCase().includes(search.toLowerCase()) ||
          item.email.toLowerCase().includes(search.toLowerCase()) ||
          item.age.toLowerCase().includes(search.toLowerCase())
        );
      });
    }
  }, [ItemData, search]);
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
          <Row>
            <Col md={12}>
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Fname</th>
                    <th>Phone No.</th>
                    <th>Email ID</th>
                    <th>Age</th>
                  </tr>
                </thead>
                <tbody>
                  {searchItem.map((value) => {
                    return (
                      <tr>
                        <td>{value.id}</td>
                        <td>{value.fname}</td>
                        <td>{value.contact}</td>
                        <td>{value.email}</td>
                        <td>{value.age}</td>
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

export default Search;
