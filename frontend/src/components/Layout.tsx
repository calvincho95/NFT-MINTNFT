import { Flex } from "@chakra-ui/react"
import { FC } from "react"
import Header from "./Header"
import { Outlet } from "react-router-dom"

const Layout:FC = () => {
  return (
    <Flex  mx="auto" minH="100vh" flexDir="column">
        <Header/>
        <Outlet/>
    </Flex>
  )
}

export default Layout