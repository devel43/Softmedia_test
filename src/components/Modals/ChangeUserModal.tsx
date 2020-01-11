import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import md5 from 'md5'
import { IRating } from '../../interfaces/dictionaries';
import { User } from '../../interfaces/user';

interface Props {
  ratings: Array<IRating>,
  hideModal: Function,
  editUser: Function,
  activeUser: User
}

export function ChangeUserModal({ ratings, hideModal, editUser, activeUser }: Props) {
  
  const [info, changeInfo] = useState(activeUser || {
    firstName: "",
    secondName: "",
    lastName: "",
    dateOfBirthday: new Date().toString(),
    id: "",
    rating: 5
  })

  const generateId = (oldId :String) => {
    if(oldId) {
      return oldId
    } else {
      return md5(new Date().toString())
    }
  }

  /**
   * Generate info object and add the id
   * @param newInfo 
   */
  const infoGenerator = (newInfo:any) => {
    changeInfo({
      ...info,
      ...newInfo,
      id: generateId(activeUser.id)
    })
  }

  /**
   * Date of born action
   */
  const handleDateChange = (dateOfBirthday: any) => {
    infoGenerator({dateOfBirthday})
  };

  /**
   * Rating action
   */
  const handleRatingChange = (event:any) => {
    infoGenerator({
      rating: Number(event.target.value)
    })
  }

  /**
   * Name changer
   */
  const handleNameChange = (event:any, name:string) => {
    infoGenerator({
      [name]: event.target.value
    })
  }

  const postData = (e:any) => {
    e.preventDefault()
    editUser(info);
    hideModal();
  }

  return (
    <>
      <h2 id="transition-modal-title">Add new student</h2>
      <form onSubmit={postData} className="register-form">
        <TextField value={info.firstName} id="firstName" label="First name" onChange={e => {handleNameChange(e, 'firstName')}} className="register-form__item" required />
        <TextField value={info.secondName} id="secondName" label="Second name" onChange={e => {handleNameChange(e, 'secondName')}} className="register-form__item" required />
        <TextField value={info.lastName} id="lastName" label="Last name" onChange={e => {handleNameChange(e, 'lastName')}} className="register-form__item" required  />
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            className="register-form__item"
            margin="normal"
            id="date-picker-dialog"
            label="Born date"
            format="dd/MM/yyyy"
            value={info.dateOfBirthday}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </MuiPickersUtilsProvider>
        <FormControl className="register-form__item">
          <InputLabel htmlFor="age-native-simple">Rating</InputLabel>
          <Select
            native
            value={info.rating}
            onChange={handleRatingChange}
            inputProps={{
              name: 'rating',
              id: 'rating-native-simple',
            }}
          >
            {ratings.map(rating => {return <option value={rating.id} key={rating.id}>{rating.name}</option>})}
          </Select>
        </FormControl>
        <div style={{width: "100%", marginTop: "20px"}}>
          <Button variant="contained" color="primary" type="submit">
            Add student
          </Button>
        </div>
      </form>
    </>
  )
}