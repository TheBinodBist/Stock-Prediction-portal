import React from 'react'

const Button = ({ text , classname}) => {
  return (
    <>

      <a href="" className={`btn ${classname}`}>{text}</a>
    </>
  )
}

export default Button
