import React from "react";
import {
    Grid,
    Paper,
    FormControl,
    Typography,
    Avatar
} from '@mui/material';


const Box = (props) => {
    return (
        <div >
            <Paper elevation={2} style={{ padding: 20 }}>
                <FormControl>
                    <Grid
                        container
                        spacing={4}
                        sx={{ justifyContent: 'space-between' }}
                    >
                        <Grid item xs={8}>
                            <Typography
                                color="textSecondary"
                                gutterBottom
                                variant="overline"
                            >
                                {props.name}
                            </Typography>
                            <Typography
                                color="textPrimary"
                                variant="h4"
                            >
                                {props.value || '0'}
                            </Typography>
                        </Grid>
                        
                        <Grid item xs={4}>
                            <Avatar
                                sx={{
                                    backgroundColor: '#18c942',
                                    height: 56,
                                    width: 56

                                }}
                            >
                                {props.children}
                            </Avatar>
                        </Grid>

                    </Grid>
                </FormControl>
            </Paper>
        </div>
    )
}

export default Box