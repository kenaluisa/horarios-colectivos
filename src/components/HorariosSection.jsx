import { Bus, Leaf, Waves } from "lucide-react";

function HorariosSection({ titulo, horarios, proximoId, tipo }) {
  if (horarios.length === 0) return null;

  const renderIcon = () => {
    switch (tipo) {
      case "general":
        return <Bus size={22} />;
      case "ida":
        return <Leaf size={22} />;
      case "vuelta":
        return <Waves size={22} />;
      default:
        return <Bus size={22} />;
    }
  };

  return (
    <div className="section">
      <div className="section-header">
        <div className="section-icon">
          {renderIcon()}
        </div>
        <h2>{titulo}</h2>
      </div>

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
            <tr
              key={h.id}
              className={h.id === proximoId ? "proximo" : ""}
            >
              <td data-label="Hora">{h.hora}</td>
              <td data-label="Destino">{h.destino}</td>
              <td data-label="Empresa">{h.empresa}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default HorariosSection;
