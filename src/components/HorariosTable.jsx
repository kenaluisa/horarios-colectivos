import HorarioRow from "./HorarioRow";

function HorariosTable({ horarios }) {
  if (horarios.length === 0) {
    return <p>No hay horarios disponibles.</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Hora</th>
          <th>Destino</th>
          <th>Empresa</th>
        </tr>
      </thead>
      <tbody>
        {horarios.map(h => (
          <HorarioRow key={h.id} horario={h} />
        ))}
      </tbody>
    </table>
  );
}

export default HorariosTable;
