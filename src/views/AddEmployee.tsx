import React, { useState  } from 'react'
import Container from '@mui/material/Container'
import TextField from '@mui/material/TextField'
import Select from '@mui/material/Select'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Button from '@mui/material/Button'
import { addEmployeeForm } from '../redux/actions/index'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import uuid from 'react-uuid'

function AddEmployee() {
    let [name, setName] = useState('')
    let [email, setEmail] = useState('')
    let [role, setRole] = useState('')
    let [phone, setPhone] = useState('')
    let [formErrors, setFormErrors] = useState({
        valid: true,
        name: false,
        email: false,
        role: false,
        phone: false
    })

    let navigate = useNavigate()
    
    const dispatch = useDispatch()

    const handleValidation = () => {
        let formCheck = {
            valid: true,
            name: false,
            email: false,
            role: false,
            phone: false
        }
        if(!name) {
            formCheck.valid = false
            formCheck.name = true
        }
        if(!email) {
            formCheck.valid = false
            formCheck.email = true
        }
        if(!role) {
            formCheck.valid = false
            formCheck.role = true
        }
        if(!phone) {
            formCheck.valid = false
            formCheck.phone = true
        }
        setFormErrors(formCheck)
        return formCheck.valid
    }

    let saveEmployee = () => {
        if(handleValidation()) {
            dispatch(addEmployeeForm({
                id: uuid(),
                name,
                email,
                role,
                phone,
                status: true
            }))
            navigate("/", { replace: true })
        }
    }

    const changeName = (value) => {
        setName(value)
        handleValidation()
    }

    const changeEmail = (value) => {
        setEmail(value)
        handleValidation()
    }

    const changeRole = (value) => {
        setRole(value)
        handleValidation()
    }

    const changePhone = (value) => {
        setPhone(value)
        handleValidation()
    }

    return (
        <div>
            <Container fixed>
                <h1>Add Employee</h1>
                <TextField label="Name" variant="outlined" fullWidth size="small" margin="normal" value={name} onChange={(e) => changeName(e.target.value)} error={formErrors.name} helperText={formErrors.name ? 'Required Field' : ''} />
                <TextField label="Email" variant="outlined" fullWidth size="small" margin="normal" value={email} onChange={(e) => changeEmail(e.target.value)} error={formErrors.email} helperText={formErrors.email ? 'Required Field' : ''} />
                <FormControl fullWidth size="small" margin="normal" error={formErrors.role}>
                    <InputLabel id="demo-simple-select-standard-label">Role</InputLabel>
                    <Select
                        value={role}
                        label="Role"
                        onChange={(e) => changeRole(e.target.value as string)}
                        >
                        <MenuItem value={'Manager'}>Manager</MenuItem>
                        <MenuItem value={'Lead'}>Lead</MenuItem>
                        <MenuItem value={'Developer'}>Developer</MenuItem>
                    </Select>
                </FormControl>
                <TextField label="Phone" variant="outlined" fullWidth size="small" margin="normal" value={phone} onChange={(e) => changePhone(e.target.value)} error={formErrors.phone} helperText={formErrors.phone ? 'Required Field' : ''} />
                <Button href="/" variant="outlined" sx={{ mx: 2 }}>Cancel</Button>
                <Button variant="contained" onClick={saveEmployee}>Save</Button>
            </Container>
        </div>
    )
}

export default AddEmployee