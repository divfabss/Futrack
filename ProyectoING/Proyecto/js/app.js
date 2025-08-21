// ==========================
// Usuarios de prueba
// ==========================
const DEMO_USERS = [
  { correo: "demo@futrack.com", contrasena: "123456", rol: "usuario", nombre: "Cliente Demo" },
  { correo: "Luis@gmail.com", contrasena: "123456", rol: "usuario", nombre: "Luis Ricardo" },
  { correo: "admin@futrack.com", contrasena: "admin123", rol: "admin", nombre: "Fabian" }
];

// ==========================
// Canchas de prueba
// ==========================
const canchasDemo = [
  {id:1, nombre:"Cancha Sabana", localidad:"Sabana", jugadores:11, precio:10000, img:"/Proyecto/img/1.png"},
  {id:2, nombre:"Cancha Heredia", localidad:"Heredia", jugadores:22, precio:15000, img:"/Proyecto/img/2.png"},
  {id:3, nombre:"Cancha San Miguel", localidad:"San Miguel", jugadores:11, precio:12000, img:"/Proyecto/img/3.png"},
  {id:4, nombre:"Cancha Liberia", localidad:"Liberia", jugadores:7, precio:8000, img:"/Proyecto/img/4.png"},
  {id:5, nombre:"Cancha Alajuela", localidad:"Alajuela", jugadores:11, precio:14000, img:"/Proyecto/img/5.png"},
  {id:6, nombre:"Cancha Escazú", localidad:"Escazú", jugadores:22, precio:20000, img:"/Proyecto/img/6.png"},
];

// ==========================
// LOGIN
// ==========================
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const correo = document.getElementById("correo").value;
      const contrasena = document.getElementById("contrasena").value;

      const user = DEMO_USERS.find(u => u.correo === correo && u.contrasena === contrasena);
      if (user) {
        localStorage.setItem("usuario", JSON.stringify(user));
        if (user.rol === "admin") {
          window.location.href = "/admin.html";
        } else {
          window.location.href = "/canchas.html";
        }
      } else {
        alert("Usuario o contraseña incorrectos");
      }
    });
  }

  // Si estamos en canchas.html, mostrar la lista
  if (document.getElementById("canchasDestacadas") && document.getElementById("canchasCercanas")) {
    mostrarCanchas();
  }
});

// ==========================
// Mostrar Canchas
// ==========================
function mostrarCanchas(lista = canchasDemo) {
  const destacadas = document.getElementById("canchasDestacadas");
  const cercanas = document.getElementById("canchasCercanas");

  destacadas.innerHTML = "";
  cercanas.innerHTML = "";

  // Repartimos las canchas: las 3 primeras destacadas, el resto cercanas
  lista.slice(0,3).forEach(c => destacadas.appendChild(crearCard(c)));
  lista.slice(3).forEach(c => cercanas.appendChild(crearCard(c)));
}

// Función para crear una card
function crearCard(c) {
  const div = document.createElement("div");
  div.classList.add("card");
  div.innerHTML = `
    <img src="${c.img}" alt="Imagen de ${c.nombre}" onerror="this.src='/Proyecto/img/placeholder.png'">
    <div class="card-body">
      <h3>${c.nombre}</h3>
      <p><b>Localidad:</b> ${c.localidad}</p>
      <p><b>Jugadores:</b> ${c.jugadores}</p>
      <p><b>Precio:</b> ₡${c.precio.toLocaleString()}/hora</p>
      <button onclick="reservar(${c.id})">Reservar</button>
    </div>
  `;
  return div;
}

// ==========================
// Buscar / Filtrar
// ==========================
function buscarCanchas() {
  const q = document.getElementById("search").value.toLowerCase();
  const filtradas = canchasDemo.filter(c =>
    c.nombre.toLowerCase().includes(q) ||
    c.localidad.toLowerCase().includes(q)
  );
  mostrarCanchas(filtradas);
}

function limpiarBusqueda() {
  document.getElementById("search").value = "";
  mostrarCanchas(canchasDemo);
}

// ==========================
// Simular Reserva -> redirige a detalle.html
// ==========================
function reservar(id) {
  const cancha = canchasDemo.find(c => c.id === id);
  if (cancha && (cancha.id === 1 || cancha.id === 2)) {
    // Solo Sabana y Heredia redirigen a detalle
    window.location.href = `/detalle.html?id=${id}`;
  } else {
    alert("Esta cancha aún no tiene flujo de reserva disponible");
  }
}

// ==========================
// Logout
// ==========================
function logout() {
  localStorage.removeItem("usuario");
  window.location.href = "/index.html";
}
