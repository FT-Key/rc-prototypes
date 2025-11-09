# 🏢 Care Systems - Prototipos Funcionales

<div align="center">
  <img src="./src/assets/care-systems-logo.svg" alt="Care Systems Logo" width="150"/>
  
  ### Sistemas de Gestión Integrados
  **People Care System** | **Customer Care System** | **Gestión Académica**
  
  ![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react)
  ![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-38B2AC?style=for-the-badge&logo=tailwind-css)
  ![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=for-the-badge&logo=vite)
</div>

---

## 📋 Descripción

**Care Systems** es una colección de prototipos no funcionales desarrollados para demostrar las interfaces y flujos de trabajo de tres sistemas de gestión empresarial y académica:

- 🧑‍💼 **People Care**: Gestión de recursos humanos
- 🎧 **Customer Care**: Atención al cliente y gestión de reclamos
- 📚 **Academic Management**: Gestión académica integral

Estos prototipos están diseñados para validación de interfaces con clientes, permitiendo probar la experiencia de usuario antes del desarrollo del backend.

---

## ✨ Características

### 🎨 Diseño Moderno
- Interfaz limpia y profesional con Tailwind CSS
- Sistema de colores coherente y accesible
- Animaciones suaves y transiciones fluidas
- Responsive design para todos los dispositivos

### 🔧 Componentes Funcionales
- Formularios con validación visual
- Estados de éxito y error diferenciados
- Simulación de generación de tickets e IDs
- Feedback inmediato al usuario

### 📦 Casos de Uso Implementados

#### Customer Care System
1. **Registrar Consulta** - Formulario de alta de reclamos con generación de tickets
2. **Seguimiento y Cierre** - Gestión de reclamos pendientes y registro de soluciones

#### People Care System
3. **Registrar Empleado/Docente** - Alta de personal con validaciones
4. **Evaluar Desempeño** - Sistema de evaluación con criterios múltiples

---

## 🚀 Instalación

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### Pasos de instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/care-systems.git

# Navegar al directorio
cd care-systems

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

---

## 📁 Estructura del Proyecto

```
care-systems/
├── src/
│   ├── assets/
│   │   └── care-systems-logo.svg
│   ├── components/
│   │   ├── TopNav.jsx              # Barra de navegación
│   │   └── PrototypeCard.jsx       # Tarjeta de prototipo
│   ├── pages/
│   │   ├── Home.jsx                # Página principal
│   │   ├── customer/
│   │   │   ├── CustomerRegister.jsx
│   │   │   └── CustomerFollowClose.jsx
│   │   └── people/
│   │       ├── PeopleRegisterEmployee.jsx
│   │       └── PeopleEvaluate.jsx
│   ├── App.jsx
│   ├── index.css                   # Estilos globales y sistema de diseño
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

---

## 🎨 Sistema de Diseño

### Paleta de Colores

| Sistema | Color Principal | Uso |
|---------|----------------|-----|
| **Customer Care** | `emerald-500` → `teal-600` | Gestión de clientes |
| **People Care** | `violet-500` → `purple-600` | Recursos humanos |
| **General** | `blue-500` → `indigo-600` | Elementos comunes |
| **Base** | `slate-900` → `slate-800` | Navegación y headers |

### Clases Utilitarias Personalizadas

```css
.btn-primary      /* Botón azul principal */
.btn-secondary    /* Botón verde (Customer) */
.btn-accent       /* Botón violeta (People) */
.btn-outline      /* Botón con borde */
.input-field      /* Campo de entrada estilizado */
.input-label      /* Etiqueta de formulario */
.badge           /* Insignia base */
.badge-success   /* Estado exitoso */
.badge-warning   /* Estado pendiente */
.badge-error     /* Estado de error */
```

---

## 🧪 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Servidor de desarrollo con hot reload

# Build
npm run build        # Compilar para producción

# Preview
npm run preview      # Previsualizar build de producción

# Lint
npm run lint         # Verificar código con ESLint
```

---

## 📚 Casos de Uso Documentados

### Customer Care System

#### Caso 1: Registrar Consulta
- **Actores**: Alumno/Cliente, Agente de atención
- **Flujo**: Ingreso de datos → Validación → Generación de ticket
- **Validaciones**: Email formato válido, campos obligatorios

#### Caso 2: Seguimiento y Cierre
- **Actores**: Agente de atención
- **Flujo**: Selección de ticket → Registro de solución → Cierre
- **Features**: Lista de pendientes, historial, notificaciones

### People Care System

#### Caso 3: Registrar Empleado
- **Actores**: RRHH
- **Flujo**: Datos personales → Datos laborales → Generación de ID
- **Validaciones**: DNI numérico, email, modalidad de trabajo

#### Caso 4: Evaluar Desempeño
- **Actores**: RRHH, Supervisor
- **Flujo**: Selección empleado → Criterios → Calificación → Reporte
- **Criterios**: Puntualidad, Desempeño, Compromiso, Comunicación

---

## ⚠️ Limitaciones

> **Importante**: Estos son prototipos NO FUNCIONALES

- ❌ No hay conexión a base de datos real
- ❌ Los datos no persisten entre sesiones
- ❌ No hay autenticación de usuarios
- ❌ No se envían emails reales
- ✅ Simulación de IDs y tickets
- ✅ Validaciones visuales funcionales
- ✅ Estados y feedback UI completos

---

## 🛠️ Tecnologías Utilizadas

- **React 18.3** - Biblioteca de interfaz de usuario
- **React Router DOM 6.x** - Enrutamiento SPA
- **Tailwind CSS 3.4** - Framework de estilos utility-first
- **Vite 5.x** - Build tool y dev server
- **Lucide React** - Iconos SVG modernos
- **PostCSS** - Procesador CSS

---

## 🎯 Próximos Pasos

### Fase 1: Backend (Pendiente)
- [ ] API REST con Node.js/Express
- [ ] Base de datos PostgreSQL/MySQL
- [ ] Autenticación JWT
- [ ] Sistema de roles y permisos

### Fase 2: Funcionalidades Adicionales
- [ ] Gestión Académica completa
- [ ] Dashboard con estadísticas
- [ ] Sistema de notificaciones
- [ ] Generación de reportes PDF
- [ ] Integración de pagos

### Fase 3: Optimizaciones
- [ ] Tests unitarios con Vitest
- [ ] Tests E2E con Cypress
- [ ] Optimización de rendimiento
- [ ] PWA y modo offline

---

## 👥 Equipo
Reynoso Gabriel / Toledo Franco Nicolás / Samuel Solaliga

**Trabajo Final Integrador (TFI)**  
Universidad/Institución - Año 2025

---

## 📄 Licencia

Este proyecto es parte de un Trabajo Final Integrador académico.

---

## 📞 Contacto

Para consultas sobre el proyecto:
- 📧 Email: fr4nc0t2@gmail.com
- 🌐 Web: [Demo](https://as-prototypes.netlify.app/)

---

<div align="center">
  
### ⭐ Si este proyecto te fue útil, dale una estrella en GitHub

**Hecho con ❤️ usando React + Tailwind CSS**

</div>