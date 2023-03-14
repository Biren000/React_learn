import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import "./crud.css";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const Crud = () => {
  const [inputData, setInputData] = useState({
    // id: id,
    fname: "",
    contact: "",
    email: "",
    age: "",
  });
  const [items, setItems] = useState([]);
  const [id, setId] = useState("");

  const getData = (e) => {
    const { name, value } = e.target;

    setInputData((oldItems) => {
      return { ...oldItems, [name]: value };
    });
  };

  // Add Item
  const addItem = () => {
    if (id) {
      setItems((oldItems) => {
        return oldItems.map((update, index) => {
          if (id === index + 1) {
            return inputData;
          } else {
            return update;
          }
        });
      });
    } else {
      setItems((oldItems) => {
        return [...oldItems, inputData];
      });
    }
    setInputData({
      fname: "",
      contact: "",
      email: "",
      age: "",
    });
    setId("");
    // console.log("items", items);
  };

  const editItem = (id) => {
    const found = items.find((update, index) => index + 1 === id);
    // console.log("hey", found);
    setInputData(found);
    setId(id);
  };

  // Delete row
  const deleteItem = (id) => {
    const updatedItems = items.filter((elem, index) => {
      return index + 1 !== id;
    });
    setItems(updatedItems);
  };

  return (
    <div className="crud_area">
      <div className="heading">
        <h2>Add, Edit & Delete</h2>
      </div>
      <div className="head">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item md={3}>
              <TextField
                id="outlined-basic"
                label="Name"
                size="small"
                sx={{ width: "100%" }}
                variant="outlined"
                name="fname"
                value={inputData.fname}
                onChange={getData}
              />
            </Grid>
            <Grid item md={3}>
              <TextField
                id="outlined-basic"
                label="Contact"
                sx={{ width: "100%" }}
                variant="outlined"
                size="small"
                name="contact"
                value={inputData.contact}
                onChange={getData}
              />
            </Grid>
            <Grid item md={3}>
              <TextField
                id="outlined-basic"
                size="small"
                label="Email"
                sx={{ width: "100%" }}
                variant="outlined"
                name="email"
                value={inputData.email}
                onChange={getData}
              />
            </Grid>
            <Grid item md={2}>
              <TextField
                id="outlined-basic"
                size="small"
                sx={{ width: "100%" }}
                label="Age"
                variant="outlined"
                name="age"
                value={inputData.age}
                onChange={getData}
              />
            </Grid>
            <Grid item md={1}>
              <Button variant="contained" color="success" onClick={addItem}>
                Add
              </Button>
            </Grid>
          </Grid>
        </Box>
      </div>
      <div className="body">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Sr No.</StyledTableCell>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell>Contact No.</StyledTableCell>
                <StyledTableCell>Email I'd</StyledTableCell>
                <StyledTableCell>Age</StyledTableCell>
                <StyledTableCell>Action</StyledTableCell>
              </TableRow>
            </TableHead>

            {items.map((dataVal, index) => {
              return (
                <>
                  <TableBody>
                    <StyledTableRow key={index}>
                      <StyledTableCell>{dataVal.id}</StyledTableCell>
                      <StyledTableCell>{dataVal.fname}</StyledTableCell>
                      <StyledTableCell>{dataVal.contact}</StyledTableCell>
                      <StyledTableCell>{dataVal.email}</StyledTableCell>
                      <StyledTableCell>{dataVal.age}</StyledTableCell>
                      <StyledTableCell>
                        <Stack direction="row" spacing={2}>
                          <Button
                            variant="contained"
                            color="success"
                            onClick={() => editItem(index + 1)}
                          >
                            Edit
                          </Button>
                          <Button
                            variant="contained"
                            color="error"
                            onClick={() => deleteItem(index + 1)}
                          >
                            Delete
                          </Button>
                        </Stack>
                      </StyledTableCell>
                    </StyledTableRow>
                  </TableBody>
                </>
              );
            })}
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default Crud;
