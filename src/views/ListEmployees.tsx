import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Switch from '@mui/material/Switch'
import Fab from '@mui/material/Fab'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import { useSelector, useDispatch } from 'react-redux'
import { deleteEmployee, changeStatus } from '../redux/actions/index'
import { useNavigate } from "react-router-dom"

function ListEmployees(props) {
  const dispatch = useDispatch()
  let navigate = useNavigate()
  var employeesList = useSelector(state => state.employees)
  // employeesList = employeesList.filter(emp => emp.status)

  const handleChange = (row) => {
    let message = row.status ? 'deactivate' : 'activate'
    if(window.confirm(`Are you sure to ${message} this employee?`)) {
      row.status = !row.status
      dispatch(changeStatus(row))
      window.location.reload()
    }
  }

  const editEmployee = (id) => {
    navigate(`/edit/${id}`, { replace: true })
  }

  const removeEmployee = (id) => {
    if(window.confirm('Are you sure to remove this employee?')) {
      dispatch(deleteEmployee(id))
      window.location.reload()
    }
  }

  return (
      <div>
        <Container fixed>
        <h1>List of Employees</h1>
        <Button href="/add" variant="contained" sx={{ m: 3 }}>Add New Employee</Button>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Role</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Active</TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {employeesList.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.role}</TableCell>
                  <TableCell>{row.phone}</TableCell>
                  <TableCell>
                  <Switch
                    checked={row.status}
                    onChange={() => handleChange(row)}
                    inputProps={{ 'aria-label': 'controlled' }}
                  />
                  </TableCell>
                  <TableCell align="right">
                    <Fab size="small" color="primary" aria-label="add"  sx={{ mr: 2 }} onClick={() => editEmployee(row.id)}>
                      <EditIcon />
                    </Fab>
                    <Fab size="small" color="error" aria-label="add" onClick={() => removeEmployee(row.id)}>
                      <DeleteIcon />
                    </Fab>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        </Container>
      </div>
    )
}

export default ListEmployees