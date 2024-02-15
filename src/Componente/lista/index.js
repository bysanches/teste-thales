import './lista.css';

const Lista = (props) => {
  return (
    <div className='lista'>
      <label>{props.label}</label>
      <select
        onChange={(evento) => props.alterado(evento.target.value)}
        required={props.obrigatorio}
        value={props.value}
      >
        <option value="" disabled hidden>Selecione uma opção</option>
        {props.itens.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Lista;
