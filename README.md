# Prueba tecnica front-end

## Descripción del Proyecto
Este proyecto es una web desarrollada en React con integración de Tailwind CSS y Redux. El objetivo del proyecto es mostrar,organizar y editar un arbol de habilidades de minecraft basandonos en grafos.
## Tecnologías del Proyecto
### Principales

<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> 
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" 
alt="typescript" width="40" height="40"/>
<img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" width="40" height="40"/>
<img src="https://www.vectorlogo.zone/logos/js_redux/js_redux-icon.svg" alt="redux" width="40" height="40"/>
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vite/vite-original.svg" alt="vitw" width="40" height="40"/>
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" alt="vitw" width="40" height="40"/>

- **React**: Biblioteca de JavaScript para construir interfaces de usuario. 
- **Tailwind CSS**: Framework de CSS para diseñar interfaces modernas utilizando utilizdades de clase.
- **Redux**: Una biblioteca de manejo de estado global para aplicaciones.
- **Vite**: Herramienta de construcción rápida para proyectos React.
- **TypeScript**: Como lenguaje se uso para un mayor control en la entrada y salida de datos. 
- **git**: para el control de versiones, lo que permite realizar un seguimiento de los cambios en el código. 

### Secundarias
<img src="https://www.vectorlogo.zone/logos/eslint/eslint-icon.svg" alt="eslint" width="40" height="40"/>
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postcss/postcss-original.svg" alt="vitw" height="40"/>

- **ESLint**: Herramienta para mantener un código limpio y consistente.
- **Prettier**: Formateador de código para garantizar un estilo uniforme.
- **PostCSS**: Utilizado para procesar estilos CSS con Tailwind.

## Instrucciones de Arranque y Configuración
### Requisitos previos
- **Node.js** (versión 16 o superior).
- **npm** o **yarn** instalado.

### Pasos
1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/gitrubio/prueba-grafos.git
   cd prueba-grafos
   ```
 Instalar dependencias:

 ```bash
npm install
```
 o con Yarn:

```bash
yarn install
```
2. **Iniciar proyecto**:

Iniciar el proyecto en modo desarrollo:

```bash
npm run dev
```
o con Yarn:

```bash
yarn dev
```
Abrir en el navegador:

El proyecto estará disponible en http://localhost:5173. 
Scripts Disponibles
```bash
npm run dev: Inicia el servidor en modo desarrollo.
npm run build: Genera una versión optimizada del proyecto.
```

3. **Instalar Plugins de Tailwind:**

Ejemplo: Para agregar soporte a una minilibreria de componentes:

```bash
npm install tailwindcss-animate
```
Y agrégalo al archivo de configuración:
```javascript
module.exports = {
  plugins: [require("tailwindcss-animate")],
};
```

**Estructura del proyecto:**
```css
src/
│── assets/
│   ├── authApi.tsx
│   ├── cockApi.tsx
├── components/
│   ├── ui/
│   │   ├── Loader.tsx
│   │   ├── Modal.tsx
│   │   ├── Popover.tsx
│   │── Config.tsx
│   │── CustomNode.tsx
│   │── Error.tsx
│   │── SkillTree.tsx
│── constants/
│   ├── data.tsx
│── helpers/
│   ├── utils.tsx
│── hooks/
│   ├── useMinecraft.tsx
│── store/
│   ├── minecraft/
│   ├── index.tsx
├── views/
│   ├── Minecraft.tsx
├── App.tsx
└── main.tsx
```
Autor
[Carlos Rubio]
[carloviloria0@gmail.com]