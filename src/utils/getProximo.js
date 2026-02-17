export function getProximo(horarios) {
  const ahora = new Date();
  const horaActual = ahora.getHours();
  const minutosActuales = ahora.getMinutes();

  const minutosTotalesActual = horaActual * 60 + minutosActuales;

  const horariosConMinutos = horarios.map(h => {
    const [hora, minuto] = h.hora.split(":").map(Number);
    return {
      ...h,
      minutosTotales: hora * 60 + minuto
    };
  });

  const proximo = horariosConMinutos.find(
    h => h.minutosTotales > minutosTotalesActual
  );

  return proximo ? proximo.id : null;
}
