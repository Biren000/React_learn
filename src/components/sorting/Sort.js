import React, { useMemo, useState } from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ItemData } from "../../commonComponents/TableData";

const Sort = () => {
  const [data, setData] = useState(ItemData);
  const [order, setOrder] = useState("ASC");

  const sorting = (colData) => {
    if (order === "ASC") {
      const sorted = [...data].sort((a, b) =>
        a[colData].toLowerCase() > b[colData].toLowerCase() ? 1 : -1
      );
      setData(sorted);
      setOrder("DSC");
    } else {
      const sorted = [...data].sort((a, b) =>
        a[colData].toLowerCase() < b[colData].toLowerCase() ? 1 : -1
      );
      setData(sorted);
      setOrder("ASC");
    }
  };

  return (
    <>
      <div className="my-5">
        <Container>
          <Row>
            <Col md={12}>
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th onClick={() => sorting("id")}>#</th>
                    <th onClick={() => sorting("fname")}>Fname</th>
                    <th onClick={() => sorting("contact")}>Phone No.</th>
                    <th onClick={() => sorting("email")}>Email ID</th>
                    <th onClick={() => sorting("age")}>Age</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((value) => {
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

export default Sort;
