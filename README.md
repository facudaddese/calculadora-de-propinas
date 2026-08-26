
# Calculadora de Propinas 

Aplicación web que calcula el subtotal, aplicar un porcentaje de propina y obtiene el total a pagar.

## API utilizada

El catálogo de productos se obtiene de **[FakeStoreAPI](https://fakestoreapi.com/products)**, una API REST pública y gratuita (sin autenticación) pensada para prototipos y proyectos de práctica. Devuelve productos con `id`, `title`, `price`, `description`, `category`, `image` y `rating`.

## Funcionalidades

-   **Menú de productos**: listado obtenido de FakeStoreAPI, con manejo de estados de carga y error.
-   **Orden / carrito**: al tocar un producto se agrega a la orden; si ya estaba agregado, se incrementa su cantidad en vez de duplicarlo.
-   **Eliminar productos** de la orden individualmente.
-   **Selección de propina**: porcentajes predefinidos (10%, 20%, 50%, 70%).
-   **Cálculo de totales**: subtotal (suma de `precio × cantidad` de cada ítem), monto de propina sobre el subtotal, y total final a pagar.


## Tecnologías utilizadas
- React
- TypeScript
- Tailwind CSS
- Custom Hooks
- Fetch API (Async/Await)  

## Autor

**Facundo D'addese** - Estudiante de Licenciatura en Sistemas – Universidad Nacional de Lanús.

[CV](https://drive.google.com/file/d/1dplrGFP7DhLXLQCuj2sA-66sAV0yER_g/view?usp=sharing) | [facundo.daddese19@gmail.com](mailto:facundo.daddese@gmail.com)