import React, { useEffect, useState } from 'react';
import { Marquee } from "@chakra-ui/react"
import {
  IoLogoFigma,
  IoLogoGitlab,
  IoLogoJavascript,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoLogoVimeo,
} from "react-icons/io5";
import ButtonWithProp from '@/components/buttonWithProp';
import { Button, HStack } from "@chakra-ui/react"
import { RiArrowRightLine, RiMailLine } from "react-icons/ri"
import PaginationComp from '@/components/PaginationComp';
import MapData from '@/components/MapData';


const items = [
  { icon: IoLogoFigma, label: "Figma", color: "#F24E1E" },
  { icon: IoLogoTwitter, label: "Twitter", color: "#1da1f2" },
  { icon: IoLogoLinkedin, label: "LinkedIn", color: "#0077b5" },
  { icon: IoLogoGitlab, label: "GitLab", color: "#fc6d26" },
  { icon: IoLogoVimeo, label: "Vimeo", color: "#1ab7ea" },
  { icon: IoLogoJavascript, label: "JavaScript", color: "#f7df1e" },
]

const Home = () => {
  const [count, setCount] = useState(3);
  const [data, setData] = useState([]);
  const [userData, setUserData] = useState([]);

  const fetchData = () => {
    fetch('https://fakestoreapi.com/products/')
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err))
  }

  const fetchUserData = () => {
    fetch('https://fakestoreapi.com/users/')
      .then((res) => res.json())
      .then((data) => setUserData(data))
      .catch((err) => console.log(err))
  }


  const incrementCount = () => {
    console.log("Increment button clicked");
    setCount(count + 1);
  }

  const decrementCount = () => {
    console.log("Decrement button clicked");
    setCount(count - 1);
  }

  useEffect(() => {
    fetchData();
    fetchUserData();
  }, []);


  return (
    <div>
      <h2>Welcome to the Home Page</h2>
      <p>This is the home page content.</p>
      <p>Count: {count}</p>
      <ButtonWithProp
        label="Increment"
        onClick={incrementCount}
      />
      <ButtonWithProp
        label="Decrement"
        onClick={decrementCount}
      />
      <HStack>
        <Button colorPalette="gray" variant="solid" spinnerPlacement="end" >
          <RiMailLine /> Email
        </Button>
        <Button colorPalette="teal" variant="outline">
          Call us <RiArrowRightLine />
        </Button>
      </HStack>

      <div>

        <Marquee.Root autoFill spacing="2rem">
          <Marquee.Viewport>
            <Marquee.Content>
              {items.map((item, i) => (
                <Marquee.Item key={i} px="2rem">
                  {item.icon && (
                    <item.icon
                      size="3rem"
                      aria-label={item.label}
                      color={item.color}
                    />
                  )}
                </Marquee.Item>
              ))}
            </Marquee.Content>
          </Marquee.Viewport>
        </Marquee.Root>

        <h3>Fetched Data:</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
          {userData.map((item) => (
            <MapData key={item.id} item={item} />
          ))}
        </div>

      </div>
    </div>
  )
}

export default Home

//State is plain javascript object that holds information about a component's current situation. It is mutable and can be changed over time, usually in response to user actions or network responses. In React, state is managed within a component and can be updated using the setState method or the useState hook in functional components.