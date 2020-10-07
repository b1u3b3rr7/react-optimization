import React from "react";
import { withStyles, TextField, Grid } from "@material-ui/core";

const styles = {
  form: {
    padding: 8,
    border: "1px solid lightgray",
  },
};

const Form = props => {
  const { classes, member, onChange } = props;

  const nameField = React.useMemo(
    () => (
      <TextField
        inputProps={ { "data-id": member.id } }
        name="name"
        value={member.name}
        onChange={onChange}
      />
    ),
    [member.name, member.id],
  );

  const phoneField = React.useMemo(
    () => (
      <TextField
        inputProps={ { "data-id": member.id } }
        name="phone"
        value={member.phone}
        onChange={onChange}
      />
    ),
    [member.phone, member.id],
  );

  return (
    <Grid container spacing={2} className={classes.form}>
      <Grid item xs={2}>
        {member.id}
      </Grid>
      <Grid item xs={5}>
        {nameField}
      </Grid>
      <Grid item xs={5}>
        {phoneField}
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(React.memo(Form));