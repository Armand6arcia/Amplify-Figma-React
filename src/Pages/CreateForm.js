import { withAuthenticator } from '@aws-amplify/ui-react';
import { XamiCardsCreateForm } from '../ui-components';

const CreateForm =() =>{
    return (
    <>
    <div><a href="/"><img src="hogar.png" width={'18px'}></img></a>    /    Nueva aplicación</div>
            
    <div class="titulopagina"><p>Crear aplicación</p></div>

    <XamiCardsCreateForm width={'50%'}/>
    </>
    )
}

export default withAuthenticator(CreateForm);