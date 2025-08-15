import React from 'react'

const SpecialityPage = ({params} : {params : {speciality : string}}) => {
    const speciality = params.speciality;
  return (
    <div>SpecialityPage : {speciality}</div>
  )
}

export default SpecialityPage