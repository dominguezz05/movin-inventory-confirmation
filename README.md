# MOVIN — Desafío de Confirmación de Inventario (Parte B)

Aplicación web modular y de alto rendimiento desarrollada como parte de la prueba técnica para **MOVIN**, enfocada en la gestión de inventario y el cálculo dinámico de volúmenes en tiempo real.

## 🚀 Stack Tecnológico
- **Framework:** React 19 con TypeScript y Vite.
- **Estilos:** Tailwind CSS v4 con identidad visual corporativa (sistema MOVIN).
- **Control de versiones:** Git con commits atómicos estructurados.
- **Despliegue:** Vercel (Producción continua).

## 🏗️ Arquitectura y Estructura
El proyecto sigue un diseño modular y desacoplado:
- **`Header`**: Barra de navegación con indicador dinámico de volumen total ($m^3$) y panel de depuración técnico.
- **`RoomSection` / `ItemRow`**: Componentes atómicos para la gestión por estancias e ítems con estados especiales.
- **`InventoryFooter`**: Contenedor inferior de ancho completo con microinteracciones de confirmación de éxito.
- **Custom Hooks (`useInventory`)**: Lógica de negocio centralizada y reactiva para el recálculo volumétrico.

