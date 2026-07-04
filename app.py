from flask import Flask, render_template, request, jsonify

app = Flask(__name__)
app.config['SECRET_KEY'] = 'oscar-heyton-portfolio-2024'

DEVELOPER = {
    'name': 'Oscar Heyton Sanchez Arias',
    'role': 'Desarrollador Backend & Web',
    'description': 'Apasionado por crear soluciones eficientes, escalables y de alto impacto con Python y Flask.',
    'email': 'oscarheyton@example.com',
    'phone': '+51 912 345 678',
    'github': 'https://github.com/oscarheyton',
    'linkedin': 'https://linkedin.com/in/oscarheyton',
    'instagram': 'https://instagram.com/oscarheyton',
}

PROJECTS = [
    {'id':1,'name':'CRUD Flask + MySQL','category':'backend','tech':['Flask','MySQL','Bootstrap'],'desc':'Sistema completo de gestión con operaciones CRUD.','img':'proyecto1.png'},
    {'id':2,'name':'API REST Flask','category':'backend','tech':['Flask','JWT','MySQL'],'desc':'API RESTful con autenticación JWT y documentación Swagger.','img':'proyecto2.png'},
    {'id':3,'name':'Dashboard Analítico','category':'frontend','tech':['Flask','Chart.js','MySQL'],'desc':'Dashboard interactivo con gráficos en tiempo real.','img':'proyecto3.png'},
    {'id':4,'name':'Sistema de Ventas','category':'fullstack','tech':['Flask','MySQL','Tailwind'],'desc':'Gestión de ventas con reportes y estadísticas.','img':'proyecto4.png'},
    {'id':5,'name':'Web Turismo','category':'frontend','tech':['Flask','MySQL','Bootstrap'],'desc':'Plataforma web para reservas y tours turísticos.','img':'proyecto5.png'},
    {'id':6,'name':'E-commerce Flask','category':'fullstack','tech':['Flask','MySQL','Stripe'],'desc':'Tienda en línea completa con carrito y pagos.','img':'proyecto1.png'},
    {'id':7,'name':'Blog Personal','category':'fullstack','tech':['Flask','MySQL','TailwindCSS'],'desc':'Blog con CMS propio, comentarios y categorías.','img':'proyecto2.png'},
]

SKILLS = [
    {'name':'Python','icon':'fab fa-python','percent':90,'color':'#3776AB'},
    {'name':'Flask','icon':'fas fa-flask','percent':85,'color':'#a855f7'},
    {'name':'MySQL','icon':'fas fa-database','percent':80,'color':'#00aeff'},
    {'name':'HTML5','icon':'fab fa-html5','percent':95,'color':'#E34F26'},
    {'name':'CSS3','icon':'fab fa-css3-alt','percent':90,'color':'#1572B6'},
    {'name':'JavaScript','icon':'fab fa-js','percent':80,'color':'#F7DF1E'},
    {'name':'TailwindCSS','icon':'fas fa-wind','percent':85,'color':'#06B6D4'},
    {'name':'Git','icon':'fab fa-git-alt','percent':88,'color':'#F05032'},
    {'name':'GitHub','icon':'fab fa-github','percent':85,'color':'#c084fc'},
    {'name':'Docker','icon':'fab fa-docker','percent':70,'color':'#2496ED'},
    {'name':'AWS','icon':'fab fa-aws','percent':70,'color':'#FF9900'},
]

EXPERIENCE = [
    {'year':'2022 - Actualidad','title':'Ingeniería de Sistemas','place':'Instituto IDAT','desc':'Formación en desarrollo de software, bases de datos y arquitectura de sistemas.','icon':'fas fa-graduation-cap'},
    {'year':'2023 - Actualidad','title':'Desarrollador Python Freelance','place':'Proyectos personales','desc':'Desarrollo de aplicaciones web con Flask, APIs REST y gestión de bases de datos.','icon':'fas fa-briefcase'},
    {'year':'2023','title':'Certificado Python - Platzi','place':'Platzi','desc':'Curso profesional de Python, POO, estructuras de datos y algoritmos.','icon':'fas fa-certificate'},
    {'year':'2024','title':'AWS Cloud Practitioner','place':'Amazon Web Services','desc':'Fundamentos de cloud computing y servicios AWS.','icon':'fab fa-aws'},
    {'year':'2024','title':'Desarrollo Web Full Stack','place':'Udemy','desc':'HTML, CSS, JavaScript, Flask y despliegue en producción.','icon':'fas fa-code'},
]

@app.route('/')
def index():
    return render_template('index.html', developer=DEVELOPER, projects=PROJECTS, skills=SKILLS)

@app.route('/sobre')
def sobre():
    return render_template('sobre.html', developer=DEVELOPER)

@app.route('/habilidades')
def habilidades():
    return render_template('habilidades.html', skills=SKILLS)

@app.route('/proyectos')
def proyectos():
    return render_template('proyectos.html', projects=PROJECTS)

@app.route('/experiencia')
def experiencia():
    return render_template('experiencia.html', experience=EXPERIENCE)

@app.route('/novia')
def novia():
    return render_template('novia.html', developer=DEVELOPER)

@app.route('/familia')
def familia():
    return render_template('familia.html', developer=DEVELOPER)

@app.route('/contacto')
def contacto():
    return render_template('contacto.html', developer=DEVELOPER)

@app.route('/send-message', methods=['POST'])
def send_message():
    data = request.json
    print(f"Mensaje de {data.get('name')} ({data.get('email')}): {data.get('message')}")
    return jsonify({'success': True, 'message': '¡Mensaje enviado correctamente!'})

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
