import React from "react";
import s from "./AddPlayers.module.css"
import {Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import { Button } from '@material-ui/core'

const AddPlayers = (addPlayer: any) => {

    return (
        <div>
            <Formik
                initialValues={{username: '', points: ''}}
                validationSchema={Yup.object({
                    username: Yup.string()
                        .required('Required')
                        .max(15, 'Username is too long')
                        .matches(/^[a-zA-Z\s]*$/, 'Only letters allowed'),
                    points: Yup.string()
                        .required('Required')
                })}
                onSubmit={(values, {setSubmitting}) => {
                    addPlayer.addPlayer(values.username, values.points)
                    setSubmitting(false);
                }}
            >
                <div className={s.formContainer}>
                    <p>Add new player</p>
                    <Form>
                        <div className={s.field1}>
                            <label htmlFor="username">Username</label>
                            <Field className={s.innerField} name="username" type="text"/>
                            <div className={s.error}>
                                <ErrorMessage name="username"/>
                            </div>
                        </div>
                        <div className={s.field2}>
                            <label htmlFor="points">Points</label>
                            <Field className={s.innerField} name="points" type="number"
                                   min="0" max="999"/>
                            <div className={s.error}>
                                <ErrorMessage name="points"/>
                            </div>
                        </div>
                        <div className={s.button}>
                            <Button className={s.submitButton} type="submit" size="small"
                                    variant="contained" color="primary" disableElevation>
                                Submit
                            </Button>
                        </div>
                    </Form>
                </div>
            </Formik>
        </div>
    );
}

export default AddPlayers;