function HorarioRow({ horario }) {
  return (
    <tr>
      <td>{horario.hora}</td>
      <td>{horario.destino}</td>
      <td>{horario.empresa}</td>
    </tr>
  );
}

export default HorarioRow;
