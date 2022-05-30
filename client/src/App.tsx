import * as React from "react"
import {
  ChakraProvider,
} from "@chakra-ui/react"

/* import RoutesApp from "./routes" */
import Routes from "./routes";
import { theme } from "./styles/theme";
import { AuthContextProvider } from "./context/AuthContext";

const App = () => {
  return (
    <>
      <ChakraProvider theme={theme}>
        <AuthContextProvider>
            <Routes />
        </AuthContextProvider>
          
      </ChakraProvider>
    </>
    
  )
}
export default App;
