import React from 'react'

const ButtonWithProp = ({label, ...props}) => {
    console.log(props)
  return (
    <button style={{padding: "10px", margin: "5px", backgroundColor: "lightgray"}} {...props}>
        {label }
    </button>
  )
}

export default ButtonWithProp