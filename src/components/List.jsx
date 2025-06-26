import React from 'react';
import Item from './Item';

function List({ alumnos, handleEdit, handleDelete }) {
  return (
    <div className="card">
      <h2>Evaluaciones Guardadas</h2>
      {alumnos.length === 0 ? (
        <p className="mensaje-vacio">No hay evaluaciones guardadas aún. ¡Agrega una!</p>
      ) : (
        alumnos.map((alumno, i) => (
          <Item
            key={i}
            alumno={alumno}
            onEdit={() => handleEdit(i)}
            onDelete={() => handleDelete(i)}
          />
        ))
      )}
    </div>
  );
}

export default List;

