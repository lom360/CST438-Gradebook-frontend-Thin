import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Dialog } from '@mui/material';

class AddAssignment extends React.Component {
    render() {
        const addForm = (e) => {
            alert("Adding new Assignment");
        }

        return (
            <Button onClick={addForm} variant="outlined" color="primary">Add Assignment</Button>
        )
    }
}

export default AddAssignment;