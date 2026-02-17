function FiltroDestino({ busqueda, setBusqueda }) {
  return (
    <input
      type="text"
      placeholder="Buscar destino..."
      value={busqueda}
      onChange={(e) => setBusqueda(e.target.value)}
    />
  );
}

export default FiltroDestino;
