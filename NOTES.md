# MOVIN — Desafío de Confirmación de Inventario (Parte B)

## Decisiones Arquitectónicas y Técnicas

- **Stack Tecnológico:** React, TypeScript, Tailwind CSS y Vite para asegurar un rendimiento óptimo y un tipado estricto.
- **Estructura Modular:** Organización limpia basada en componentes desacoplados (`Header`, `RoomSection`, `ItemRow`, `InventoryFooter`), custom hooks (`useInventory`) y separación de tipos y datos iniciales.
- **Cálculos de Volumen ($m^3$):** Gestión de estado centralizada para recalcular en tiempo real el volumen total y parcial en función de las cantidades y atributos de los ítems.
- **Gestión de Casos Especiales:** Soporte visual para ítems no movibles ("Se queda en casa"), elementos con baja certeza ("A revisar") y volúmenes pendientes.

## Despliegue

- Aplicación empaquetada y optimizada para producción con despliegue continuo en Vercel.
