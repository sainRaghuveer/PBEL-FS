import React from 'react';
import { Avatar, Button, Card } from "@chakra-ui/react"

const MapData = ({ item, ...props }) => {
  console.log(item)
  return (
    < >
      <Card.Root width="320px">
        <Card.Body gap="2">
           <Avatar.Root>
        <Avatar.Fallback name="Segun Adebayo" />
        <Avatar.Image src="https://bit.ly/sage-adebayo" />
      </Avatar.Root>
          <Card.Title mt="2">{item.name.firstname}</Card.Title>
          <Card.Description>
            This is the card body. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Curabitur nec odio vel dui euismod fermentum.
            Curabitur nec odio vel dui euismod fermentum.
          </Card.Description>
        </Card.Body>
        <Card.Footer justifyContent="flex-end">
          <Button variant="outline">View</Button>
          <Button>Join</Button>
        </Card.Footer>
      </Card.Root>

     
    </>
  )
}

export default MapData