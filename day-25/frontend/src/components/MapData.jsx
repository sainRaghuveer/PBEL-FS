import React from 'react'

const MapData = ({ item, ...props }) => {
  console.log(item)
  return (
    <>
      <div key={item.name.firstname} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
        <h4>{item.name.firstname}</h4>
        <p>{item.address.city}</p>
        <p>{item.email}</p>
      </div>
    </>
  )
}

export default MapData