import React, { useState } from 'react'
import { Button, Container, TextField } from '@material-ui/core'
import { Table, TableBody, TableCell, TableContainer, TableRow } from '@material-ui/core'
import Paper from '@material-ui/core/Paper';
import useInputs from '../../Hooks/useInputs';
import { MetroSpinner } from "react-spinners-kit";


export default function Input() {
  const [ctahandler, deleteHandler, updateHandler, ctaUpdateHandler, flag, error, AddData, setAddData, data, Loading, handleChange] = useInputs()

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <p style={{ fontWeight: "bold", fontSize: "19px" }}>Your ToDos</p>
      </div>
      <Container >
        <TextField label="Type" value={AddData} variant="outlined" fullWidth="bool" onChange={(e) => setAddData(e.target.value)} />
        <input type="file" onChange={handleChange} />

        {
          flag ?
            (<Button onClick={ctaUpdateHandler} color="primary" variant="contained">Edit</Button>)
            :
            (<Button onClick={ctahandler} color="secondary" variant="contained" >Add</Button>)
        }
        <p>{error}</p>
      </Container>

      <Container>
        {
          Loading ? (<center><MetroSpinner color="black" /></center>)
            :
            (
              <TableContainer component={Paper}>
                <Table aria-label="simple table">

                  <TableRow align="center">
                    <TableCell style={{ fontWeight: "bold" }}>Todo List</TableCell>
                    <TableCell style={{ fontWeight: "bold" }} align="right"></TableCell>

                  </TableRow>
                  <TableBody>

                    {
                      data.map((items, index) => {
                        return (
                          <>

                            <TableRow>
                              <TableCell align="left">{index}--{items.task}
                              </TableCell>
                              <TableCell>  <img src={items.image} style={{ height: 100, width: 100, diaplay: "grid", justifyContent: "right" }} alt="broken-img" /></TableCell>
                              <TableCell align="right">
                                <Button color="secondary" variant="contained" onClick={() => deleteHandler(index)}>delete</Button>
                                <Button onClick={() => updateHandler(items, index)} color="primary" variant="contained" style={{ marginLeft: 10 }}>Edit</Button>
                              </TableCell>
                            </TableRow>

                          </>
                        )
                      })
                    }

                  </TableBody>
                </Table>
              </TableContainer>

            )
        }
      </Container>
    </>
  )
}
