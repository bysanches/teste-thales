import React from "react";
import "./Resultado.css";

/* como seria a tipagem no typescript:
 *
 * type Props = {
 *  calculoGeral: {
 *    resultado: number
 *  }
 *  resultadoMedia: number
 * }
 */

const Resultado /* : FunctionComponent<Props> */ = (props) => {
  return (
    <section className="resultado">
      <form className="resultado">
        <h3 className="resultado-box">
          <label>Resultado da :{props.calculoGeral.resultado} </label>
          <br />
          Resultado da Média : {props.resultadoMedia}
          <br />O resultado
        </h3>
      </form>
    </section>
  );
};

export default Resultado;
