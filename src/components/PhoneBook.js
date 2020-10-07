import React from 'react';
import lodash from 'lodash';
import randomName from 'random-name';
import Form from './Form';

import { withStyles, Grid, TextField } from '@material-ui/core';

const randomNumber = () => String(Math.floor((Math.random() * 100) % 10));
const randomPhone = () => `010-xxxx-xxxx`.replace(/x/g, () => randomNumber());

const memberCount = 10;
const members = lodash
    .range(memberCount)
    .map(i => ({ id: i, name: randomName(), phone: randomPhone() }));

class PhoneBook extends React.Component {
    state = { members };

    handleChange = e => {
        const {
            dataset: { id },
            name: field,
            value,
        } = e.target;

        const members = [...this.state.members];
        const index = members.findIndex(member => member.id === Number(id));
        members[index] = { ...members[index], [field]: value };

        this.setState({ members: [...members] });
    };

    render() {
        const { classes } = this.props;
        const { members } = this.state;
        return (
            <div className={classes.root}>
                <h2>PhoneBook</h2>
                {members.map(member => (
                    <Form key={member.id} member={member} onChange={this.handleChange} />
                ))}
            </div>
        );
    }
}

const styles = {
    root: {
        margin: "0 200px",
    },
    row: {
        margin: 16,
    },
};

export default withStyles(styles)(PhoneBook);