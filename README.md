# baby-shower-daniel

Aplicación React + TypeScript creada con Vite. Esta app usa `pnpm` y Supabase para guardar invitados/RSVP.

## Requisitos previos

- Node.js 18+ (recomendado)
- pnpm 8+ (o la versión que uses en tu entorno)
- Cuenta de Supabase

## Setup rápido (nuevo proyecto)

1. Clonar el repositorio

```bash
git clone <tu-repo-url>.git baby-shower-daniel
cd baby-shower-daniel
```

2. Instalar dependencias

```bash
pnpm install
```

3. Copia archivo de entorno

```bash
cp .env.example .env
# o si no existe .env.example:
# touch .env
```

4. Configurar credenciales Supabase (ver siguiente sección)

5. Ejecutar en modo desarrollo

```bash
pnpm dev
```

Abrir `http://localhost:5173` en el navegador.

## Supabase (credenciales necesarias)

En `src/utils/supabase.ts`, se usa:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY`

Archivo `.env` recomendado:

```env
VITE_SUPABASE_URL=https://<tu-proyecto>.supabase.co
VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY=<tu-public-anon-key>
```

> Nota: nunca guardes las keys de servicio (`service_role`) en el frontend. Solo almacena la `anon` para operaciones cliente.

## Comandos principales

- `pnpm dev` – correr servidor de desarrollo con Hot Reload
- `pnpm build` – compilar producción (TypeScript + Vite)
- `pnpm preview` – servir build de producción localmente
- `pnpm lint` – correr ESLint

## Estructura relevante del proyecto

- `src/main.tsx` – punto de entrada Vite
- `src/App.tsx` – componente raíz
- `src/pages/Home.tsx` – página principal
- `src/components/RSVPForm.tsx` – formulario de confirmación de asistencia
- `src/utils/supabase.ts` – cliente de Supabase
- `src/lib/api-mapper.ts` y `src/lib/utils.ts` – utilidades de API y datos

## Supabase: tablas esperadas

Ejemplo de tabla (puede variar según implementación):

- `guests` con campos:
  - `id` (uuid)
  - `name` (text)
  - `email` (text)
  - `attending` (boolean)
  - `notes` (text)

Ajusta en Supabase según el flujo de tu app.

## Deployment rápido (opcional)

1. Generar build:

```bash
pnpm build
```

2. Hospedar con Vercel/Netlify o en un contenedor estático.

3. Si usas Supabase, verifica políticas RLS (Row Level Security) y reglas public/index.

## Otras notas

- Al compartir el proyecto, incluye `.env.example` con variables (`VITE_SUPABASE_URL`, `VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY`) sin valores.
- Revisa `vite.config.ts` y `tsconfig.json` si cambias rutas o alias.
