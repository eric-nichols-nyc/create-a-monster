import React from 'react'
import Accessories from '../Accessories'
import useMonsterCreator from '../../hooks/useMonsterCreator'

export default function Customize() {
  const { currentStep } = useMonsterCreator()

  return (
    <div>
      <Accessories />
    </div>
  )
}
