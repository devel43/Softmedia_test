import React, { useEffect } from 'react'
import { Header } from '../components/Header'
import * as DICTIONARIES_API from '../api/dictionaries'
import { RATINGS } from '../constants'
import StudetsList from '../containers/StudetsList'
import { Container } from '@material-ui/core'
import Button from '@material-ui/core/Button';

interface indexProps {
  getRatingsDictionary: Function,
  modal_createUser: Function,
  getAllUsers: Function
}

function IndexPage({getRatingsDictionary, modal_createUser, getAllUsers}: indexProps) {

  useEffect(()=>{
    /**
     * Emulate backend dictionary in localStorage
     */
    DICTIONARIES_API.setRatingsToStorage(RATINGS)

    /**
     * Fake get dictionary from api
     */
    const ratingsDictionary = DICTIONARIES_API.getRatingsDictionary();

    /**
     * Set dictionary to store
     */
    getRatingsDictionary(ratingsDictionary)
  }, [getRatingsDictionary])

  useEffect(() => {
    getAllUsers()
  }, [getAllUsers])

  return (
    <>
      <Header />
      <Container className="mainContainer">
        <Button variant="contained" color="primary" onClick={e => modal_createUser()}>
          Add new student
        </Button>
        <StudetsList />
      </Container>
    </>
  )
}

export default IndexPage