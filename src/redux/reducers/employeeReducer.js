const INITIAL_STATE = {
    employees: localStorage.getItem('employees') != null ? JSON.parse(localStorage.getItem('employees')) : []
}

const employeeReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_EMPLOYEE':
            let newEmployee = {
                id: action.payload.id,
                name: action.payload.name,
                email: action.payload.email,
                role: action.payload.role,
                phone: action.payload.phone,
                status: action.payload.status,
            }
            state.employees.push(newEmployee)
            localStorage.setItem('employees', JSON.stringify(state.employees))
            return state
        case 'UPDATE_EMPLOYEE':
            let updatedEmployee = {
                id: action.payload.id,
                name: action.payload.name,
                email: action.payload.email,
                role: action.payload.role,
                phone: action.payload.phone,
                status: action.payload.status,
            }
            let existingIndex = state.employees.findIndex(employee => employee.id === action.payload.id)
            if(existingIndex > -1) {
                state.employees[existingIndex] = updatedEmployee
            }
            localStorage.setItem('employees', JSON.stringify(state.employees))
            return state
        case 'DELETE_EMPLOYEE': 
            let index = state.employees.findIndex(employee => employee.id === action.payload)
            if(index > -1) {
                state.employees.splice(index, 1)
            }
            localStorage.setItem('employees', JSON.stringify(state.employees))
            return state
        case 'CHANGE_STATUS':
            let changeIndex = state.employees.findIndex(employee => employee.id === action.payload.id)
            if(changeIndex > -1) {
                let userToChange = state.employees[changeIndex]
                userToChange.status = action.payload.status
                state.employees[changeIndex] = userToChange
            }
            localStorage.setItem('employees', JSON.stringify(state.employees))
            return state
        default:
            return state
    }
}

export default employeeReducer