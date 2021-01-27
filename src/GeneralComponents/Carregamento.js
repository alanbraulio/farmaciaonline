import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core';
class Carregamento extends Component {
    render() {
        const {classes} = this.props;

        return (
            <div>
                <CircularProgress className={classes.Carregamento} />
            </div>
        );
    }
}

const styles = () => ({
    Carregamento: {
        position: 'absolute',
        left: '0',
        right: '0',
        margin: 'auto',
        top: '0',
        bottom: '0',
        zIndex: '2',
    }
});

export default withStyles(styles)(Carregamento);
