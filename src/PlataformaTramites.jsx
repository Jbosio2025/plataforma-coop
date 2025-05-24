
import React from "react";
import { useState } from "react";

export default function PlataformaTramites() {
  const [estado, setEstado] = useState("en_proceso");

  return (
    <main style={{ maxWidth: 800, margin: "2rem auto", fontFamily: "sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "#005b96" }}>Autogestión - Coop. 15 de Mayo LTDA</h1>

      <h2>Datos del Usuario</h2>
      <input placeholder="Nombre *" />
      <input placeholder="Apellido *" />
      <input placeholder="DNI *" />
      <input placeholder="Correo electrónico *" type="email" />
      <input placeholder="CUIL / CUIT *" />

      <h2>Domicilio</h2>
      <input placeholder="Calle *" />
      <input placeholder="Número *" />
      <input placeholder="Localidad *" />
      <input placeholder="Código Postal *" />

      <h2>Documentación</h2>
      <input type="file" accept="application/pdf" />
      <input type="file" accept=".dwf" />

      <h2>Fotos del Lote</h2>
      <input type="file" accept="image/jpeg" />
      <input type="file" accept="image/jpeg" />

      <button onClick={() => alert("Formulario enviado (simulado)")}>Enviar Solicitud</button>

      <h2>Estado del Trámite</h2>
      <p>Nº de Cuenta: <strong>40.000</strong></p>
      <p>Estado actual: <strong>{estado === "en_proceso" ? "En proceso" : "Finalizado"}</strong></p>
      <button onClick={() => setEstado(estado === "en_proceso" ? "finalizado" : "en_proceso")}>
        Simular Cambio de Estado
      </button>
    </main>
  );
}
