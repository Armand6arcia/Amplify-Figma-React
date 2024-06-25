import { withAuthenticator } from '@aws-amplify/ui-react';
import { XamiCardCollection } from '../ui-components';

const Home =() =>{
    return (
        <>
            <div><a href="/"><img src="hogar.png" width={'18px'}></img></a>  /  </div>

            <table className='table'>
	            <tr>
		            <td class="titulopagina">Aplicaciones</td>
		            <td ><a href="/CreateForm" class="botoncrear">NUEVA APLICACIÓN</a></td>
	            </tr>
            </table>

            <div class="cardscollection">
                <XamiCardCollection />
            </div>           
        </>
      )
}

export default withAuthenticator(Home);