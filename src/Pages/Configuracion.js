import { withAuthenticator } from '@aws-amplify/ui-react';
import { OrganizacionUpdateForm } from '../ui-components';

const Configuracion =() =>{
    return (
        <>
        <div><a href="/"><img src="hogar.png" width={'18px'}></img></a>    /    Configuración</div>
                
        <div class="titulopagina"><p>Configuración de la organización</p></div>
    
        <OrganizacionUpdateForm width={'50%'}/>
        </>
    )
}

export default withAuthenticator(Configuracion);