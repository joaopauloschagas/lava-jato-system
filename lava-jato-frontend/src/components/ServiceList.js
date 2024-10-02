import React from 'react';

function ServiceList() {
  const services = ['Lavagem simples', 'Polimento', 'Encerramento', 'Limpeza de motor'];


  return (
   <section>
    <h2>Nossos Serviços</h2>
    <ul>
      {services.map(service => (
        <li key={service}>{service}</li>
      ))}
    </ul>
   </section>
  );
}

export default ServiceList;