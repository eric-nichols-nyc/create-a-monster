import React, { useState, useEffect, useRef } from 'react'
import useMonsterCreator from '../../hooks/useMonsterCreator'
import badwords from './badwords.json'
import names from './MonsterNames'

const input = {
  width: '242px',
  height: '51px',
  textTransform: 'uppercase',
  fontSize: '1.4em',
  padding: '0 16px',
  marginBottom: '8px',
  background: '#0076bc',
  border: '0 none',
  fontWeight: 'bold',
  color: '#005c94'
}

const button = {
  width: '242px',
  height: '51px',
  textTransform: 'uppercase',
  fontSize: '1.4em',
  padding: '0 16px',
  marginTop: '8px',
  cursor: 'pointer',
  fontWeight: 'bold',
  color: "#adadad"
}

const name = {
  width: '242px',
  height: '51px',
  textTransform: 'uppercase',
  fontSize: '1.4em',
  padding: '0 16px',
  marginTop: '32px',
  background: 'white',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontWeight: 'bold',
  color: "#adadad"
}

export default function NameSelector() {
  const {
    setMonsterName,
    monsterName,
    setMonsterNameIsValid
  } = useMonsterCreator()
  const [error1, setError1] = useState(false)
  const [error2, setError2] = useState(false)
  const [values, setValues] = useState({
    firstName: '',
    lastName: ''
  })
  
  const resetInput = e => {
    if (e.target.name === 'firstName' && !values.firstName.length) {
      e.target.value = e.target.defaultValue
    } else if (e.target.name === 'lastName' && !values.lastName.length) {
      e.target.value = e.target.defaultValue
    }
  }

  const clearInput = e => {
    if (e.target.name === 'firstName' && !values.firstName.length) {
      e.target.value = ''
    } else if (e.target.name === 'lastName' && !values.lastName.length) {
      e.target.value = ''
    }
  }

  function getLastName() {
    var applicableNames = []

    for (var i = 0; i < names.length; i++) {
      if (
        names[i].lastName.substr(0, 1).toLowerCase() ===
        values.lastName.substr(0, 1).toLowerCase()
      ) {
        applicableNames.push(names.at(i))
      }
    }

    var monsterName = ''
    monsterName =
      applicableNames[Math.round((applicableNames.length - 1) * Math.random())]

    return monsterName.lastName
  }

  const handleChange = evt => {
    const { name, value } = evt.target
    setValues({
      ...values,
      [name]: value
    })
  }

  const submit = () => {
    if (badwords.words.includes(values.firstName) || !values.firstName.length) {
      setError1(true)
    } else {
      setError1(false)
    }
    if (!values.lastName.length) {
      setError2(true)
    } else {
      setError2(false)
    }
    if (!badwords.words.includes(values.firstName) && values.lastName.length) {
      setMonsterName(values.firstName + ' ' + getLastName(values.lastName))
      setMonsterNameIsValid(true)
    }
  }

  return (
    <div>
      <div>
        <input
          css={input}
          name="firstName"
          defaultValue="First Name"
          onFocus={e => clearInput(e)}
          onBlur={e => resetInput(e)}
          maxLength="10"
          onChange={evt => {
            handleChange(evt)
          }}
        />
        {error1 && <div className="error"> error </div>}{' '}
      </div>{' '}
      <div>
        <input
          css={input}
          name="lastName"
          defaultValue="Last Initial"
          onFocus={e => clearInput(e)}
          onBlur={e => resetInput(e)}
          maxLength="1"
          onChange={evt => {
            handleChange(evt)
          }}
        />
        {error2 && <div className="error"> error </div>}{' '}
      </div>{' '}
      <button css={button} onClick={submit}>
        Generate{' '}
      </button>{' '}
      <div css={name}>
        <p> {monsterName} </p>{' '}
      </div>{' '}
    </div>
  )
}
