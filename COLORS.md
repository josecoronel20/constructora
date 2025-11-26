# Guía de Colores - Servicios del Hogar Zona Norte

Paleta optimizada para un sitio de servicios del hogar: profesional, moderna, confiable y neutra.

## Paleta de Colores

### 1. Azul Petróleo / Navy Moderno
- **HEX:** `#0A2A43`
- **Tailwind:** `bg-[#0A2A43]` o `text-[#0A2A43]`
- **Brand:** `bg-brand-navy` o `text-brand-navy`
- **Uso:**
  - Header principal
  - Fondo del menú
  - Secciones de confianza ("Por qué elegirnos")
  - Botones secundarios (outline)
  - Encabezados en landings

### 2. Azul Acero Claro
- **HEX:** `#3F6E8F`
- **Tailwind:** `bg-[#3F6E8F]` o `text-[#3F6E8F]`
- **Brand:** `bg-brand-steel` o `text-brand-steel`
- **Uso:**
  - Títulos secundarios
  - Destacar subtítulos o bloques informativos
  - Íconos en secciones técnicas
  - Separadores suaves

### 3. Gris Claro Neutro
- **HEX:** `#F4F5F7`
- **Tailwind:** `bg-[#F4F5F7]` o `text-[#F4F5F7]`
- **Brand:** `bg-brand-light` o `text-brand-light`
- **Uso:**
  - Fondos de secciones amplias
  - Testimonios
  - Cards de servicios
  - Listados de localidades y servicios
  - Fondos de formularios

### 4. Gris Medio Profesional
- **HEX:** `#636B75`
- **Tailwind:** `bg-[#636B75]` o `text-[#636B75]`
- **Brand:** `bg-brand-medium` o `text-brand-medium`
- **Uso:**
  - Textos secundarios
  - Descripciones dentro de las cards
  - Bordes sutiles
  - Iconografía complementaria

### 5. Amarillo Ámbar de Acento
- **HEX:** `#F2B441`
- **Tailwind:** `bg-[#F2B441]` o `text-[#F2B441]`
- **Brand:** `bg-brand-amber` o `text-brand-amber`
- **Uso:**
  - Botón principal (WhatsApp, Contacto, Presupuesto)
  - Llamados a la acción
  - Etiquetas destacadas ("Atención en el día", "Garantía escrita", etc.)
  - Líneas o detalles que den ritmo visual

## Uso con shadcn/ui

Los colores están integrados con el sistema de variables CSS de shadcn/ui:

- **Primary:** Azul petróleo (`#0A2A43`)
- **Accent:** Amarillo ámbar (`#F2B441`)
- **Background:** Gris claro neutro (`#F4F5F7`)
- **Foreground:** Azul petróleo (`#0A2A43`)
- **Muted:** Gris claro neutro (`#F4F5F7`)
- **Muted Foreground:** Gris medio profesional (`#636B75`)
- **Border:** Gris medio profesional (`#636B75`)

### Ejemplo con componentes shadcn/ui:

```tsx
import { Button } from "@/components/ui/button"

// Botón primario (usará el amarillo ámbar)
<Button>Contactar</Button>

// Botón secundario (usará el azul petróleo)
<Button variant="secondary">Más información</Button>

// Botón outline (borde azul petróleo)
<Button variant="outline">Ver servicios</Button>
```

## Distribución Visual Recomendada

### Header + Hero
- Fondo: Azul petróleo (`#0A2A43`)
- Texto: Blanco
- CTA: Amarillo (`#F2B441`)

### Sección Servicios
- Fondo: Gris claro (`#F4F5F7`)
- Cards: Blanco con bordes gris medio (`#636B75`)
- Iconos: Azul acero (`#3F6E8F`)

### Sección Localidades
- Fondo: Blanco
- Títulos: Azul acero (`#3F6E8F`)
- Links: Azul petróleo (`#0A2A43`)

### Sección "Por qué elegirnos"
- Fondo: Azul petróleo (`#0A2A43`)
- Iconos: Amarillo ámbar (`#F2B441`)
- Texto: Blanco

### Footer
- Fondo: Azul petróleo (`#0A2A43`)
- Links: Gris claro (`#F4F5F7`)
- Títulos: Azul acero (`#3F6E8F`)
- CTA secundario: Blanco con borde amarillo (`#F2B441`)

