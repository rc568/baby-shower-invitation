# Invitación Baby Shower

Aplicación sencilla React + TypeScript creada con Vite y conecta con Supabase para el formulario de invitados.

## Requisitos previos

- Node.js 18+
- pnpm 8+
- Cuenta de Supabase

## Setup

1. Clonar el repositorio

```bash
git clone git@github.com:rc568/baby-shower-invitation.git
cd baby-shower-invitation
```

2. Instalar dependencias

```bash
pnpm install
```

3. Agregar varibles de entorno

```bash
cp .env.template .env
```

4. Ejecutar en modo desarrollo

```bash
pnpm dev
```

## Supabase

En `src/utils/supabase.ts`, se usa las variables de entorno:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY`

Ejemplo de tabla:

- `guest` con campos:
  - `id` (int8)
  - `name` (text)
  - `num_guests` (int2)
  - `message` (text)
  - `is_attending` (boolean)
