import React from 'react';
import { Link } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import { withStyles, Button } from '@material-ui/core';


function PaginaNaoEncontrada(props) {
    
    const { classes } = props;

    return (
        <div className={classes.content}>
            <SentimentVeryDissatisfiedIcon className={classes.SadIcon}/>
            <Typography component="h1" className={classes.heading} variant="h5" >
                Página não encontrada
            </Typography>
            <Typography>
                A página que você está procurando não pôde ser encontrada.
            </Typography>
            <Button
                type="submit"
                size="large"
                variant="contained"
                color="primary"
                component={Link} to={'/'}
                className={classes.button}
            >
                Voltar para página inicial
            </Button>
        </div>
    );
    
}

const styles = theme => ({
    "@global": {
        body: {
            padding: 0,
            margin: 0
        }
    },
    content: {
        textAlign: 'center',
        position: 'relative',
        paddingTop: '100px',
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            padding: '90px 2%',
          },
    },
    button: {
        marginTop: '30px'
    },
    SadIcon: {
        fontSize: '190px',
        color: '#000'
    },
    heading: {
        fontWeight: '700',
        paddingBottom: '10px',
        color: '#000',
        textAlign: 'center'
    },
});

export default withStyles(styles)(PaginaNaoEncontrada);