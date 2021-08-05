import React from 'react';
import s from './Menu.module.css';
import {Paper, Tabs, Tab} from '@material-ui/core';
import {Route} from 'react-router-dom'

function Menu() {

    const [value, setValue] = React.useState((window.location.pathname === '/showMode') ? 0 : 1);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div className={s.container}>
            <Route render={({history}) => (
                <Paper className={s.paper}>
                    <Tabs
                        value={value}
                        indicatorColor="primary"
                        onChange={handleChange}
                        aria-label="navigation menu tabs"
                        centered
                    >
                        <Tab className={s.tab} label="Show mode" onClick={() => {
                            history.push('/showMode')
                        }}/>
                        <Tab className={s.tab} label="Edit mode" onClick={() => {
                            history.push('/editMode')
                        }}/>
                    </Tabs>
                </Paper>
            )}/>
        </div>
    );
}

export default Menu;
