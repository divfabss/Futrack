# ⚽ Futrack

**Futrack** es un sistema web para la **gestión de reservas de canchas de fútbol**, pensado tanto para **usuarios** (clientes que reservan canchas) como para **administradores** (encargados de los recintos).  

El sistema incluye:
- Registro e inicio de sesión.
- Exploración de canchas destacadas y cercanas.
- Detalle de cada cancha con imágenes, precios y calendario de reservas.
- Proceso de pago simulado (SINPE o Tarjeta de Crédito).
- Chat ficticio de **Preguntas Frecuentes**.
- Panel de administración con estadísticas y gestión de mensajes de usuarios.

---

## 🚀 Características principales

### 👤 Módulo de Usuario
- Registro e inicio de sesión con validación.
- Búsqueda y filtrado de canchas por nombre o localidad.
- Visualización de canchas destacadas y cercanas.
- Selección de fechas en un calendario y confirmación de reserva.
- Opción de pago mediante **SINPE** o **Tarjeta de Crédito**.
- Chat de **Preguntas Frecuentes** para aclarar dudas.

### 🛠️ Módulo de Administrador
- Acceso restringido mediante login de administrador.
- Panel con estadísticas:
  - Reservas del mes.
  - Ingresos generados.
  - Canchas activas.
- Gestión de canchas (nombre, ubicación, jugadores, precio, imagen).
- Bandeja ficticia de mensajes de usuarios para responder consultas.

---

## 🖥️ Tecnologías utilizadas

- **Frontend:**  
  - HTML5  
  - CSS3 (incluye estilos modernos y animaciones de fondo)  
  - JavaScript (DOM, eventos, localStorage)

- **Arquitectura:**  
  - Proyecto basado en archivos estáticos.  
  - Simulación de datos mediante objetos JavaScript (usuarios y canchas demo).  
  - LocalStorage para simular persistencia de sesión.  

---

## 📂 Estructura del proyecto

Proyecto/
│── index.html # Pantalla de inicio / login
│── registro.html # Registro de usuarios
│── canchas.html # Exploración de canchas
│── detalle.html # Detalle de cancha y reserva
│── pago.html # Confirmación y pago de reservas
│── admin.html # Panel de administración
│
├── css/
│ ├── styles.css # Estilos generales
│ ├── login.css # Estilos de login y registro
│ ├── reservacion.css # Estilos de detalle y pago
│ ├── admin.css # Estilos del panel admin
│
├── js/
│ └── app.js # Lógica principal del sistema
│
└── img/ # Imágenes de canchas y placeholders


---

## 📖 Guía de uso

1. **Clonar o descargar** el proyecto.  
2. Abrir `index.html` en un navegador.  
3. Ingresar con un usuario de prueba:  

   **Usuarios de prueba:**
   - Cliente:  
     - Correo: `demo@futrack.com`  
     - Contraseña: `123456`  
   - Administrador:  
     - Correo: `admin@futrack.com`  
     - Contraseña: `admin123`  

4. Según el rol ingresado, el sistema redirige al módulo correspondiente.  

---

## 📝 Notas importantes

- El proyecto es una **simulación académica**:  
  - No hay conexión real a bases de datos.  
  - El chat y los pagos son demostrativos.  
- Todo se maneja con **JavaScript y LocalStorage** para la persistencia temporal.

---

## 👨‍💻 Autor

Proyecto desarrollado por **Fabián Álvarez y Luis Ricardo** como parte de prácticas de desarrollo web.  
