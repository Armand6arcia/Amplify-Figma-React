import './App.css'
import { withAuthenticator } from "@aws-amplify/ui-react";
import NavBarHeader from "./ui-components/NavBarHeader"
import XamiSide from "./ui-components/XamiSide"
import { Home } from './Pages/Home'

function App() {
    return (
      <>
        <header><NavBarHeader /></header>

        <XamiSide height={'94vh'} width={'260px'}/>
      </>
    )
}

export default withAuthenticator(App)