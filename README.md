# 🚀 Oscar Heyton — Portfolio AAA Premium

Portafolio web cyberpunk/neón ultra moderno desarrollado con Flask + Python.

## 🛠 Tecnologías
- Python 3.10+
- Flask 3.0
- HTML5 / CSS3 / JavaScript
- TailwindCSS (CDN)
- Font Awesome
- AOS Animations
- Typed.js
- Particles.js

## ⚡ Instalación rápida

```bash
pip install -r requirements.txt
python app.py
```

Abre: http://localhost:5000

## 📁 Estructura
```
portfolio/
├── app.py
├── requirements.txt
├── static/
│   ├── css/style.css
│   ├── js/script.js
│   └── img/
│       ├── perfil.png        ← Tu foto de perfil
│       ├── proyectos/        ← Imágenes de proyectos
│       └── novia/            ← Fotos de tu persona especial
└── templates/
    ├── index.html
    ├── sobre.html
    ├── habilidades.html
    ├── proyectos.html
    ├── experiencia.html
    ├── novia.html
    └── contacto.html
```

## 🖼 Personalización de imágenes
1. Coloca tu foto como `static/img/perfil.png`
2. Agrega imágenes de proyectos en `static/img/proyectos/`
3. Agrega fotos en `static/img/novia/`

## 🌐 Deploy en AWS
```bash
# Instalar gunicorn
pip install gunicorn
gunicorn -w 4 -b 0.0.0.0:5000 app:app
```

## 👨‍💻 Autor
**Oscar Heyton Sanchez Arias** — Desarrollador Backend & Web
