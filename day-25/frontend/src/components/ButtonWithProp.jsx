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

//Parent component
//Child component
//flow of props from parent to child
//Home>BUttonWithProp>child-1>child-2>child-3