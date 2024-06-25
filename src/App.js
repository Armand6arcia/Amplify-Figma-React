import './App.css'
import { withAuthenticator } from "@aws-amplify/ui-react";
import { NavBarHeader } from "./ui-components/";
import XamiSide from "./ui-components/XamiSide"

function App() {
    return (
      <>
        <header><NavBarHeader width={'100vw'} border={'solid, 0.5px, rgb(199, 199, 199)'}/></header>
        <XamiSide height={'93vh'} width={'250px'} border={'solid, 0.5px, rgb(199, 199, 199)'} marginTop={'-1px'}/>
      </>
    )
}

export default withAuthenticator(App)