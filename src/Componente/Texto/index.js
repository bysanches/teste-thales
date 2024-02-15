import Botao from '../Botao/Index'
import './Texto.css'

const Texto = (props) => {
    return (
        <div className='texto'>
            <label>{props.label}</label>
            < input  required={props.obrigatorio} 
            type="text"
            placeholder={`${props.placeholder}...`} 
            value={props.value}
            onChange={(evento) => props.onInputChange(evento.target.value.replace(/[^0-9]/g, ''))}
            />

        </div>
    )
}

export default Texto