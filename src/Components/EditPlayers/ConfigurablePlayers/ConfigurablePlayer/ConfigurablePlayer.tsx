import React, {useEffect, useState} from 'react';
import s from './ConfigurablePlayer.module.css';
import profilePhoto from "../../../assets/images/profilePhoto.png";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import {ErrorMessage, Field, Form, Formik} from "formik";
import SaveIcon from '@material-ui/icons/Save';
import * as Yup from "yup";

interface PlayerInfo {
    profileImage: typeof profilePhoto,
    username: string,
    points: number,
    removePlayer: any,
    id: string,
    changePointsAmount: any,
    changePosition: any
}

function ConfigurablePlayer(props: PlayerInfo) {

    useEffect(()=> {
        props.changePosition()
    }, [])

    const [isEditModeActive, setEditMode] = useState(false);

    return (
        <div className={s.container}>
            {isEditModeActive ? <Formik
                initialValues={{points: props.points}}
                validationSchema={Yup.object({
                    points: Yup.string()
                        .required('*')
                        .matches(/^\d{1,3}$/, '*')
                })}
                onSubmit={(values, {setSubmitting}) => {
                    props.changePointsAmount(values.points, props.id)
                    props.changePosition()
                    setEditMode(false)
                    setSubmitting(false);
                }}
            >
                <div className={s.formContainer}>
                    <Form>
                        <div className={s.error}>
                            <ErrorMessage name="points"/>
                        </div>
                        <div className={s.field}>
                            <Field className={s.innerField} name="points" type="text"/>
                        </div>
                        <div className={s.saveButton}>
                            <IconButton className={s.saveButtonIcon} type="submit">
                                <SaveIcon className={s.saveIcon} fontSize="medium"/>
                            </IconButton>
                        </div>
                    </Form>
                </div>
            </Formik> : <p className={s.points}>{props.points}</p>}
            <img className={s.profileImage} alt='Avatar' src={props.profileImage}/>
            <p className={s.username}>{props.username}</p>
            <IconButton onClick={() => {props.removePlayer(props.id)}}
                        className={s.deleteButton} aria-label="delete">
                <DeleteIcon className={s.deleteIcon} fontSize="medium"/>
            </IconButton>
            {isEditModeActive ? null : <IconButton onClick={() => {setEditMode(true)}} className={s.editButton} aria-label="save">
                <EditIcon className={s.editIcon} fontSize="medium"/>
            </IconButton>}
        </div>
    );
}

export default ConfigurablePlayer;
