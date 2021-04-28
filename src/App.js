import { useState, useEffect } from 'react';
import {
    FormGroup,
    FormControlLabel,
    Checkbox,
    Chip,
    makeStyles
} from '@material-ui/core';
import { useSnackbar } from 'notistack';

const useStyles = makeStyles((theme) => ({
    chip: {
        margin: theme.spacing(0.5),
    },
}));

const ChipTest = ({ label }) => {
    const classes = useStyles();
    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        return () => {
            enqueueSnackbar(`${label} clean up`, { variant: 'success' });
        }
    }, []);
    return (
        <Chip
            label={label}
            className={classes.chip}
        />
    );
};

export default function App() {
    const [arrChip, setArrChip] = useState([]);

    const handleChange = (event) => {
        const isChecked = event.currentTarget.checked;
        const name = event.target.name;

        if (isChecked) {
            setArrChip([...arrChip, name]);
        } else {
            setArrChip(arrChip.filter(e => e !== name));
        }
    };

    return (
        <>
            <FormGroup>
                <FormControlLabel
                    control={
                        <Checkbox
                            onChange={handleChange}
                            name="test1"
                            color="primary"
                        />
                    }
                    label="테스트1"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            onChange={handleChange}
                            name="test2"
                            color="primary"
                        />
                    }
                    label="테스트2"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            onChange={handleChange}
                            name="test3"
                            color="primary"
                        />
                    }
                    label="테스트3"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            onChange={handleChange}
                            name="test4"
                            color="primary"
                        />
                    }
                    label="테스트4"
                />
            </FormGroup>
            {arrChip.map(ch => (
                <ChipTest label={ch}/>
            ))}
        </>
    );
}
