import { createContext, useContext, useState } from 'react';

// Crear el contexto
const SearchContext = createContext();

// Proveedor del contexto que envuelve los componentes hijos y provee el estado y la función para actualizarlo
export const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </SearchContext.Provider>
  );
};

// Hook personalizado para usar el contexto de búsqueda
export const useSearch = () => useContext(SearchContext);
