import React, {useState, useEffect} from "react";
import Form from "./components/Form";
import List from "./components/List";
import "./App.css";

function App(){// Componente principal de la aplicación que maneja el estado de los elementos y la lógica de agregar, editar y eliminar elementos.
  const [items, setItems] = useState([]);
  const [itemToEdit, setItemToEdit] = useState(null);

  useEffect(() => {// Este efecto se ejecuta una vez al montar el componente, para cargar los elementos almacenados en localStorage.
    const storedItems = JSON.parse(localStorage.getItem("items")) || [];
    setItems(storedItems);
  }, []);
  useEffect(() => {// Este efecto se ejecuta cada vez que los items cambian, para guardar los elementos en localStorage.
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);
  const addOrUpdateItem = (value) => {// Esta función agrega un nuevo elemento o actualiza uno existente, dependiendo de si itemToEdit es null o no.
    if (itemToEdit) {
      setItems(items.map(item => item.id === itemToEdit.id ? {...item, value} : item));
      setItemToEdit(null);
    } else {
      setItems([
        ...items,
        { id: Date.now(), value }
      ]);
    }
  };
  const deleteItem = (id) => {// Esta función elimina un elemento de la lista por su id.
    setItems(items.filter(item => item.id !== id));
  };
  const editItem = (item) => {// Esta función establece el elemento a editar, lo que permite que el formulario se llene con los datos del elemento seleccionado.
    setItemToEdit(item);
  };
  return (
    <div className="App">
      <h1>CRUD con LocalStorage</h1>
      <Form 
      addOrUpdateItem={addOrUpdateItem} 
      itemToEdit={itemToEdit} 
      />
      <List 
      items={items} 
      deleteItem={deleteItem} 
      editItem={editItem} 
      />
    </div>
  );
}
export default App;
