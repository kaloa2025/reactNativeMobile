
import { Text } from "react-native";
import { Header } from "react-native/Libraries/NewAppScreen";
import MobileList from "./src/Components/MobileList.js"

const App = () => { 
    return(
        <Header title="Mobile">
          <MobileList/>
          </Header>
    )
}

export default App