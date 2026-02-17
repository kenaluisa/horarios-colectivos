import { useMemo, useState } from "react";
import { horariosGenerales, lineaIguazu } from "./data/horarios";
import { getProximo } from "./utils/getProximo";
import HorariosSection from "./components/HorariosSection";

function App() {
  const [busqueda, setBusqueda] = useState("");

  const horariosFiltrados = useMemo(() => {
    return horariosGenerales
      .filter(h =>
        h.destino.toLowerCase().includes(busqueda.toLowerCase())
      )
      .sort((a, b) => a.hora.localeCompare(b.hora));
  }, [busqueda]);

  const proximoId = getProximo(horariosFiltrados);

  return (
    <div className="app">
      <header className="header">
        <h1>Horarios desde San Antonio - Misiones</h1>
        <p>Transporte interurbano</p> 
        <input
        type="text"
        placeholder="Buscar destino..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />
      </header>

      <main className="container">
<HorariosSection
  titulo="Salidas Generales"
  horarios={horariosFiltrados}
  proximoId={proximoId}
  tipo="general"
/>

<HorariosSection
  titulo="Puerto Iguazú - Ida"
  horarios={lineaIguazu.ida}
  proximoId={getProximo(lineaIguazu.ida)}
  tipo="ida"
/>

<HorariosSection
  titulo="Puerto Iguazú - Vuelta"
  horarios={lineaIguazu.vuelta}
  proximoId={getProximo(lineaIguazu.vuelta)}
  tipo="vuelta"
/>

      </main>
    </div>
  );
}

export default App;
