import { withAuthenticator } from "@aws-amplify/ui-react"

const Ayuda =() => {
    return (
        <>
        <div><a href="/"><img src="hogar.png" width={'18px'}></img></a>    /    Ayuda</div>

            <table className='table'>
                <tr>
                    <td class="titulopagina">Solicitar ayuda</td>
                    <td ></td>
                </tr>
            </table>
    
        <div class="layout"> <p>¿Necesitas ayuda o tienes alguna pregunta? No dudes en contactarnos.<br></br><br></br>           
            Si estás enfrentando algún problema, tienes inquietudes o simplemente necesitas 
            asistencia, nuestro equipo de soporte estará encantado de ayudarte. Envía un correo
            electrónico a xami@codster.io  y uno de nuestros representantes de soporte se pondrá en
            contacto contigo a la brevedad posible.<br></br><br></br>
            En tu correo, por favor, proporciona detalles sobre tu consulta o problema, así como cualquier 
            información relevante que pueda ayudarnos a comprender mejor tu situación. Nos esforzaremos por 
            brindarte una respuesta rápida y efectiva.<br></br><br></br>
            Gracias, Xami.
            </p>
        </div>
        </>
        )
    }

export default withAuthenticator(Ayuda);