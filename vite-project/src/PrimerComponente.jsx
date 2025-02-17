import React from 'react'

export default function PrimerComponente() {
  return (
    //Todo componente deberá estar dentro de un contenedor, ya sea div, ya sea label, ya sea container
    <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">1</th>
      <th scope="col">2</th>
      <th scope="col">3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Componente 1</td>
      <td>Componente 1</td>
      <td>Componente 1</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Componente 2</td>
      <td>Componente 2</td>
      <td>Componente 2</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Componente 3</td>
      <td>Componente 3</td>
      <td>Componente 3</td>
    </tr>
  </tbody>
</table>
  )
}
