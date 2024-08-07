# GuardShift Frontend

## Resumen

GuardShift es una aplicación frontend que comsume APIs para listar turnos disponibles y confirmados. También consume una endpoint para calcular la asignación de turnos según la disponibilidad de cada empleado en el rango de días de una semana por servicio. El backend proporciona tres endpoints que se pueden ver en la sección [CURLs del Proyecto Desplegado](https://github.com/jDebu/guardshift-backend#curls-del-proyecto-desplegado). Estos endpoints son utilizados en este proyecto frontend
## Componentes

Entre los componentes principales estan las tablas que muestran la informacion de turnos [disponibles](src/components/availabilities/DaysTable.jsx) y [confirmados](src/components/shifts/DaysTable.jsx). Asi como tambien el componente [tabla de turnos totales asignados](src/components/shifts/EmployeesTable.jsx). La [lista de turnos disponibles](http://localhost:5173/disponibilidad/editar?service_id=1&start_date=2020-03-02&end_date=2020-03-08) tiene checkboxes que guardan la disponibilidad del empleado en el dia a un rango de horas para un servicio determinado. Si hay esta información, en la [lista de turnos confirmados](http://localhost:5173/) se puede calcular turnos para distribuir automaticamente los turnos confirmados.

## Requisitos

- **Node.js >= 18.0.0**
  - Se recomienda usar `nvm` para gestionar la versión de Node.js. Puedes seguir [esta guía](https://github.com/nvm-sh/nvm#installing-and-updating) para instalar `nvm` o si desea instalar node seguir [esta otra guía](https://github.com/nodesource/distributions?tab=readme-ov-file#using-ubuntu-nodejs-18)
- **yarn >= 1.22.0**
  - Despues de instalar Node.js, se puede ejecutar para instalar yarn:
  ```bash
  npm install -g yarn
  ```

## Configuración Local

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu_usuario/guardshift-frontend.git
   cd guardshift-frontend
   ```
1. Instala las dependencias:
   ```bash
   yarn
   ```
1. Inicia el servidor de desarrollo:
   ```bash
   yarn dev
   ```
1. Abre tu navegador y navega a http://localhost:5173.

## Build de Producción
```bash
   yarn build
```