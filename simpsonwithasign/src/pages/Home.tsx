import { Flex } from "@chakra-ui/react"
import { FC } from "react"
import CameraModule from "../components/CameraModule"

const Home:FC = () => {
  return (
    <Flex>
        <CameraModule/>
    </Flex>
  )
}

export default Home