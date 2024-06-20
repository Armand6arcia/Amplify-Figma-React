import { withAuthenticator } from '@aws-amplify/ui-react';
import { XamiCardsUpdateForm } from '../ui-components';

const UpdateForm =() =>{
    return (
        <>
        <div><a href="/"><img src="hogar.png" width={'18px'}></img></a>    /    Configuración</div>
                
        <div class="titulopagina"><p>Configuraciones de la aplicación</p></div>
    
        <XamiCardsUpdateForm width={'50%'}/>
        </>
    )
}

export default withAuthenticator(UpdateForm);