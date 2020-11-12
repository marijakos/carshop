
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { PropertyKeys } from 'ag-grid-community';

function AddCar(props) {
    const [open, setOpen] = React.useState(false);
    const [car, setCar] = useState({
        brand: '',
        model: '',
        color: '',
        fuel: '',
        price: '',
        year: ''

    })

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    const inputChange = (event) => {
        setCar({...car, [event.target.name]: event.target.value})
    }

    const handleSave = () => {
        props.addCar(car);
        handleClose();
    }

    return (
        <div>
            <Button  variant="outlined" color="primary" onClick={handleClickOpen}>
                Add Car
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">New Car</DialogTitle>
                <DialogContent>
                <TextField
                    autoFocus
                    name="brand"
                    value={car.brand}
                    onChange={inputChange}
                    margin="dense"
                    label="Brand"
                    fullWidth
                />
                 <TextField
                    name="model"
                    value={car.model}
                    onChange={inputChange}
                    margin="dense"
                    label="Model"
                    fullWidth
                />
                 <TextField
                    name="color"
                    value={car.color}
                    onChange={inputChange}
                    margin="dense"
                    label="Color"
                    fullWidth
                />
                 <TextField
                    name="fuel"
                    value={car.fuel}
                    onChange={inputChange}
                    margin="dense"
                    label="Fuel"
                    fullWidth
                />
                 <TextField
                    name="year"
                    value={car.year}
                    onChange={inputChange}
                    margin="dense"
                    label="Year"
                    fullWidth
                />
                 <TextField
                    name="price"
                    value={car.price}
                    onChange={inputChange}
                    margin="dense"
                    label="Price"
                    fullWidth
                />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleSave} color="primary">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default AddCar;