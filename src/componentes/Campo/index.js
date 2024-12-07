import './Campo.css';

const Campo = ({ label, valor, aoAlterado, obrigatorio, type = "text" }) => {
  const aoDigitado = (evento) => {
    aoAlterado(evento.target.value);
  };

  return (
    <div className={`campo campo-${type}`}>
      <label className='campolabel'>{label}</label>
      <input
        type={type}
        value={valor}
        onChange={aoDigitado}
        required={obrigatorio}
        placeholder={`Digite o seu ${label}`}
      />
    </div>
  );
};

export default Campo;
