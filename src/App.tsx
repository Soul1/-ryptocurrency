import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import {CryptoTable, ConverterBlock} from "./components";
import {useStyles} from "./styles";

const App = () => {
  const s = useStyles();
  return (
    <Container className={s.root} maxWidth="lg">
      <Grid container spacing={1}>
        <Grid item xs={8}>
          <CryptoTable s={s}/>
        </Grid>
        <Grid item xs={4}>
          <ConverterBlock s={s}/>
        </Grid>
      </Grid>
    </Container>
  )
};

export default App;

