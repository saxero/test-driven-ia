
Genera una barra de búsqueda que permita a los usuarios encontrar opciones de destinos de viaje.

Contexto Técnico

- **API Endpoint**: `GET /api/destinations/search`
- **Parámetros esperados**: `query` (string), `limit` (number, opcional, default: 10), `offset` (number, opcional, default: 0)
- **Respuesta esperada**: JSON con array de destinos y metadatos de paginación
- **Debouncing**: Implementar delay de 300ms para optimizar llamadas a la API
- **Estado de carga**: Manejar estados de loading, success, error y empty results
  
Criterios de aceptación: 

- Renderizado correcto del componente
- Activación de debouncing después de 300ms
- Formateo correcto de parámetros de API
- Manejo de respuestas exitosas y erróneas
- Validación de input y sanitización
- Navegación por teclado en dropdown
