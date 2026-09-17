/* ====================================================================
   Voca9 — Lógica principal
   HTML5 + CSS3 + JavaScript vanilla
   Sin backend, sin dependencias externas
   ==================================================================== */

(function () {
  'use strict';

  /* ==================================================================
     DATOS DEL TEST — Separados de la lógica
     Cada opción aporta puntos a una o varias áreas vocacionales
     Áreas: tec, ing, csa, art, hum, adm
     ================================================================== */
  const VOCATIONAL_AREAS = {
    tec: {
      id: 'tec',
      name: 'Tecnología e informática',
      short: 'Tecnología',
      description: 'El área de tecnología e informática abarca todo lo relacionado con el uso, desarrollo y gestión de sistemas computacionales, programación, análisis de datos y soporte técnico. Es un campo en constante evolución que requiere pensamiento lógico, curiosidad por aprender y adaptabilidad ante los cambios rápidos.',
      capacidades: ['Pensamiento lógico', 'Resolución de problemas', 'Atención al detalle', 'Aprendizaje autónomo'],
      intereses: ['Programación', 'Desarrollo web', 'Análisis de datos', 'Inteligencia artificial', 'Soporte técnico', 'Ciberseguridad'],
      ocupaciones: ['Desarrollador de software', 'Analista de datos', 'Administrador de sistemas', 'Diseñador web', 'Especialista en soporte TI', 'Ingeniero de ciberseguridad'],
      caminos: ['Cursos de programación online', 'Tecnólogo en sistemas', 'Ingeniería de sistemas', 'Bootcamps de desarrollo web', 'Certificaciones en redes y seguridad'],
      iconSvg: '<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="url(#ic-tec)" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/><path d="M7 8l2 2-2 2M13 12h4"/></svg>'
    },
    ing: {
      id: 'ing',
      name: 'Ingeniería y áreas técnicas',
      short: 'Ingeniería',
      description: 'La ingeniería y las áreas técnicas se enfocan en el diseño, construcción, optimización y mantenimiento de sistemas, máquinas y procesos. Combina conocimientos matemáticos y científicos con creatividad práctica para resolver problemas del mundo real y mejorar la calidad de vida de las personas.',
      capacidades: ['Razonamiento matemático', 'Pensamiento espacial', 'Creatividad técnica', 'Trabajo metódico'],
      intereses: ['Diseño técnico', 'Construcción', 'Electrónica', 'Automatización', 'Mecánica', 'Procesos industriales'],
      ocupaciones: ['Ingeniero civil', 'Ingeniero mecánico', 'Ingeniero electrónico', 'Técnico industrial', 'Diseñador CAD', 'Especialista en automatización'],
      caminos: ['Ingeniería civil o mecánica', 'Tecnólogo en electrónica', 'Cursos de diseño CAD', 'Formación técnica SENA', 'Participación en clubes de robótica'],
      iconSvg: '<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="url(#ic-ing)" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>'
    },
    csa: {
      id: 'csa',
      name: 'Ciencias y salud',
      short: 'Ciencias y salud',
      description: 'El área de ciencias y salud reúne disciplinas dedicadas a la investigación, el cuidado de la salud y el estudio de los seres vivos. Es ideal para personas con vocación de servicio, curiosidad científica y deseo de contribuir al bienestar de otros a través del conocimiento.',
      capacidades: ['Pensamiento analítico', 'Observación detallada', 'Empatía', 'Disciplina metodológica'],
      intereses: ['Investigación', 'Laboratorio', 'Biología', 'Medicina', 'Bienestar', 'Ciencias naturales'],
      ocupaciones: ['Médico', 'Enfermero', 'Biólogo', 'Laboratorista clínico', 'Fisioterapeuta', 'Investigador científico'],
      caminos: ['Medicina o enfermería', 'Bacteriología', 'Licenciatura en biología o química', 'Tecnólogo en salud', 'Cursos de primeros auxilios', 'Voluntariado en salud'],
      iconSvg: '<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="url(#ic-csa)" stroke-width="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z"/></svg>'
    },
    art: {
      id: 'art',
      name: 'Arte, diseño y comunicación',
      short: 'Arte y diseño',
      description: 'El área de arte, diseño y comunicación agrupa disciplinas creativas enfocadas en la expresión visual, audiovisual y narrativa. Es un campo para personas con sensibilidad estética, imaginación activa y deseo de comunicar ideas, emociones y historias a través de distintos medios.',
      capacidades: ['Creatividad', 'Sensibilidad estética', 'Comunicación expresiva', 'Pensamiento divergente'],
      intereses: ['Diseño gráfico', 'Fotografía', 'Audiovisual', 'Música', 'Ilustración', 'Creación de contenido'],
      ocupaciones: ['Diseñador gráfico', 'Fotógrafo', 'Productor audiovisual', 'Ilustrador', 'Comunicador', 'Creador de contenido digital'],
      caminos: ['Diseño gráfico o comunicación visual', 'Artes audiovisuales', 'Fotografía profesional', 'Cursos de ilustración digital', 'Licenciatura en comunicación', 'Talleres de creación de contenido'],
      iconSvg: '<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="url(#ic-art)" stroke-width="2"><circle cx="13.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="10.5" r="2.5"/><circle cx="8.5" cy="7.5" r="2.5"/><circle cx="6.5" cy="12.5" r="2.5"/><path d="M12 22a10 10 0 1 1 0-20"/></svg>'
    },
    hum: {
      id: 'hum',
      name: 'Humanidades, educación y ciencias sociales',
      short: 'Humanidades',
      description: 'Las humanidades, la educación y las ciencias sociales se centran en el estudio del ser humano, sus expresiones, su historia y sus relaciones sociales. Es un área para personas con sensibilidad social, interés en comprender a otros y vocación por enseñar, investigar o aportar a la comunidad.',
      capacidades: ['Comprensión lectora', 'Empatía social', 'Comunicación verbal', 'Pensamiento crítico'],
      intereses: ['Educación', 'Psicología', 'Idiomas', 'Comunicación social', 'Historia', 'Investigación social'],
      ocupaciones: ['Docente', 'Psicólogo', 'Trabajador social', 'Periodista', 'Traductor', 'Investigador social'],
      caminos: ['Licenciatura en educación', 'Psicología', 'Trabajo social', 'Comunicación social', 'Licenciatura en idiomas', 'Estudios sociales y culturales'],
      iconSvg: '<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="url(#ic-hum)" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>'
    },
    adm: {
      id: 'adm',
      name: 'Administración, negocios y emprendimiento',
      short: 'Administración',
      description: 'El área de administración, negocios y emprendimiento se enfoca en la gestión de recursos, la creación de empresas y el desarrollo de proyectos. Es ideal para personas con iniciativa, capacidad de organización, visión estratégica y motivación por crear o liderar iniciativas.',
      capacidades: ['Liderazgo', 'Organización', 'Visión estratégica', 'Comunicación persuasiva'],
      intereses: ['Administración', 'Finanzas', 'Marketing', 'Emprendimiento', 'Gestión', 'Ventas'],
      ocupaciones: ['Administrador de empresas', 'Contador', 'Especialista en marketing', 'Emprendedor', 'Gestor de proyectos', 'Asesor financiero'],
      caminos: ['Administración de empresas', 'Contaduría pública', 'Marketing digital', 'Tecnólogo en gestión', 'Cursos de emprendimiento', 'Programas de liderazgo'],
      iconSvg: '<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="url(#ic-adm)" stroke-width="2"><path d="M3 3v18h18"/><path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14"/></svg>'
    }
  };

  /* Lista de áreas para iteración */
  const AREA_KEYS = Object.keys(VOCATIONAL_AREAS);

  /* Definición de gradientes para iconos del modal */
  const ICON_DEFS = '<defs><linearGradient id="ic-tec" x1="0" y1="0" x2="24" y2="24"><stop stop-color="#00D4FF"/><stop offset="1" stop-color="#3B82F6"/></linearGradient><linearGradient id="ic-ing" x1="0" y1="0" x2="24" y2="24"><stop stop-color="#00D4FF"/><stop offset="1" stop-color="#3B82F6"/></linearGradient><linearGradient id="ic-csa" x1="0" y1="0" x2="24" y2="24"><stop stop-color="#00D4FF"/><stop offset="1" stop-color="#3B82F6"/></linearGradient><linearGradient id="ic-art" x1="0" y1="0" x2="24" y2="24"><stop stop-color="#00D4FF"/><stop offset="1" stop-color="#3B82F6"/></linearGradient><linearGradient id="ic-hum" x1="0" y1="0" x2="24" y2="24"><stop stop-color="#00D4FF"/><stop offset="1" stop-color="#3B82F6"/></linearGradient><linearGradient id="ic-adm" x1="0" y1="0" x2="24" y2="24"><stop stop-color="#00D4FF"/><stop offset="1" stop-color="#3B82F6"/></linearGradient></defs>';

  /* ==================================================================
     PREGUNTAS DEL TEST
     18 preguntas: 6 capacidades, 6 intereses, 6 posibilidades
     Cada opción reparte puntos a áreas
     ================================================================== */
  const QUESTIONS = [
    /* --- CAPACIDADES (1-6) --- */
    {
      id: 1, category: 'capacidades',
      text: 'Cuando enfrento un problema complejo, mi primera reacción es...',
      options: [
        { text: 'Descomponerlo en partes lógicas y buscar un patrón', scores: { tec: 3, ing: 2 } },
        { text: 'Imaginar varias soluciones creativas y elegir la más original', scores: { art: 3, hum: 1 } },
        { text: 'Analizar cómo afecta a las personas involucradas', scores: { hum: 3, csa: 1 } },
        { text: 'Organizar un plan con pasos, tiempos y recursos', scores: { adm: 3, ing: 1 } },
        { text: 'Investigar el origen y las causas con método', scores: { csa: 3, tec: 1 } }
      ]
    },
    {
      id: 2, category: 'capacidades',
      text: 'Mis compañeros suelen pedirme ayuda cuando necesitan...',
      options: [
        { text: 'Que les explique cómo funciona una app o herramienta digital', scores: { tec: 3, adm: 1 } },
        { text: 'Que arme, repare o construya algo físico', scores: { ing: 3, tec: 1 } },
        { text: 'Consejo personal o alguien que los escuche', scores: { hum: 3, csa: 1 } },
        { text: 'Ideas creativas para un proyecto o presentación', scores: { art: 3, hum: 1 } },
        { text: 'Organizar un evento, dinero o recursos del grupo', scores: { adm: 3, ing: 1 } }
      ]
    },
    {
      id: 3, category: 'capacidades',
      text: 'La tarea o actividad en la que siento que destaco más es...',
      options: [
        { text: 'Programar, resolver acertijos lógicos o trabajar con computadores', scores: { tec: 3, ing: 1 } },
        { text: 'Diseñar, dibujar, editar fotos o crear contenido visual', scores: { art: 3, hum: 1 } },
        { text: 'Experimentar, observar fenómenos o cuidar seres vivos', scores: { csa: 3, ing: 1 } },
        { text: 'Debatir, escribir, leer o analizar textos', scores: { hum: 3, art: 1 } },
        { text: 'Liderar grupos, planificar o vender ideas', scores: { adm: 3, tec: 1 } }
      ]
    },
    {
      id: 4, category: 'capacidades',
      text: 'Si tengo que aprender algo nuevo, prefiero que sea...',
      options: [
        { text: 'Un lenguaje de programación o una herramienta tecnológica', scores: { tec: 3, ing: 1 } },
        { text: 'Una técnica de diseño, fotografía o producción audiovisual', scores: { art: 3, hum: 1 } },
        { text: 'Sobre el cuerpo humano, la naturaleza o cómo funciona un laboratorio', scores: { csa: 3, ing: 1 } },
        { text: 'Un idioma, una cultura o cómo piensan las personas', scores: { hum: 3, art: 1 } },
        { text: 'Cómo administrar dinero, crear una empresa o hacer marketing', scores: { adm: 3, tec: 1 } }
      ]
    },
    {
      id: 5, category: 'capacidades',
      text: 'Cuando trabajo en equipo, el rol que asumo con más frecuencia es...',
      options: [
        { text: 'El que resuelve problemas técnicos o digitales', scores: { tec: 3, ing: 1 } },
        { text: 'El que diseña o hace que todo se vea bien', scores: { art: 3, hum: 1 } },
        { text: 'El que cuida del bienestar del grupo y mediar conflictos', scores: { hum: 3, csa: 1 } },
        { text: 'El que investiga datos y verifica la información', scores: { csa: 3, tec: 1 } },
        { text: 'El que coordina, asigna tareas y controla avances', scores: { adm: 3, ing: 1 } }
      ]
    },
    {
      id: 6, category: 'capacidades',
      text: 'Considero que mi capacidad más fuerte es...',
      options: [
        { text: 'Pensamiento lógico y análisis sistemático', scores: { tec: 3, ing: 2 } },
        { text: 'Creatividad e imaginación', scores: { art: 3, hum: 1 } },
        { text: 'Observación y atención al detalle', scores: { csa: 3, ing: 1 } },
        { text: 'Comunicación y comprensión de las personas', scores: { hum: 3, adm: 1 } },
        { text: 'Organización y visión de conjunto', scores: { adm: 3, ing: 1 } }
      ]
    },

    /* --- INTERESES (7-12) --- */
    {
      id: 7, category: 'intereses',
      text: 'En mi tiempo libre, lo que más disfruto es...',
      options: [
        { text: 'Explorar nuevas tecnologías, apps o videojuegos', scores: { tec: 3, art: 1 } },
        { text: 'Armar cosas, hacer manualidades o experimentar con mecanismos', scores: { ing: 3, art: 1 } },
        { text: 'Cuidar animales, plantas o hacer experiments sencillos', scores: { csa: 3, ing: 1 } },
        { text: 'Dibujar, escribir, tomar fotos o crear contenido', scores: { art: 3, hum: 1 } },
        { text: 'Leer, debatir o aprender sobre diferentes culturas', scores: { hum: 3, art: 1 } },
        { text: 'Vender cosas, organizar eventos o pensar en negocios', scores: { adm: 3, tec: 1 } }
      ]
    },
    {
      id: 8, category: 'intereses',
      text: 'Si pudiera pasar un día completo con un profesional, elegiría a...',
      options: [
        { text: 'Un programador o desarrollador de software', scores: { tec: 3, ing: 1 } },
        { text: 'Un ingeniero que diseña puentes o máquinas', scores: { ing: 3, tec: 1 } },
        { text: 'Un médico o investigador de laboratorio', scores: { csa: 3, hum: 1 } },
        { text: 'Un diseñador, fotógrafo o creador audiovisual', scores: { art: 3, hum: 1 } },
        { text: 'Un psicólogo, docente o trabajador social', scores: { hum: 3, csa: 1 } },
        { text: 'Un emprendedor o administrador de empresas', scores: { adm: 3, ing: 1 } }
      ]
    },
    {
      id: 9, category: 'intereses',
      text: 'Los videos, libros o canales que más llaman mi atención son sobre...',
      options: [
        { text: 'Tecnología, inteligencia artificial o ciberseguridad', scores: { tec: 3, ing: 1 } },
        { text: 'Construcción, ingeniería o cómo funcionan las máquinas', scores: { ing: 3, tec: 1 } },
        { text: 'Salud, biología o descubrimientos científicos', scores: { csa: 3, hum: 1 } },
        { text: 'Arte, diseño, cine o tendencia creativas', scores: { art: 3, hum: 1 } },
        { text: 'Psicología, historia o fenómenos sociales', scores: { hum: 3, csa: 1 } },
        { text: 'Emprendimiento, marketing o finanzas personales', scores: { adm: 3, tec: 1 } }
      ]
    },
    {
      id: 10, category: 'intereses',
      text: 'Si me regalaran un curso gratuito, elegiría uno de...',
      options: [
        { text: 'Programación web o desarrollo de apps', scores: { tec: 3, ing: 1 } },
        { text: 'Diseño 3D, electrónica o robótica', scores: { ing: 3, art: 1 } },
        { text: 'Primeros auxilios o introducción a la medicina', scores: { csa: 3, hum: 1 } },
        { text: 'Diseño gráfico, fotografía o edición de video', scores: { art: 3, hum: 1 } },
        { text: 'Oratoria, escritura creativa o idiomas', scores: { hum: 3, art: 1 } },
        { text: 'Creación de empresas o marketing digital', scores: { adm: 3, tec: 1 } }
      ]
    },
    {
      id: 11, category: 'intereses',
      text: 'El proyecto escolar que más me entusiasmó fue...',
      options: [
        { text: 'Crear un programa, una página web o una presentación digital', scores: { tec: 3, art: 1 } },
        { text: 'Construir un modelo, un circuito o un prototipo', scores: { ing: 3, tec: 1 } },
        { text: 'Un experimento de ciencias o un estudio sobre la naturaleza', scores: { csa: 3, ing: 1 } },
        { text: 'Una obra de teatro, un cartel, un video o una revista', scores: { art: 3, hum: 1 } },
        { text: 'Una investigación social, una entrevista o un debate', scores: { hum: 3, csa: 1 } },
        { text: 'Planificar una feria, un evento o una campaña de ventas', scores: { adm: 3, hum: 1 } }
      ]
    },
    {
      id: 12, category: 'intereses',
      text: 'Cuando imagino un espacio de trabajo ideal, lo veo...',
      options: [
        { text: 'Con varios monitores, código y herramientas digitales', scores: { tec: 3, ing: 1 } },
        { text: 'Con planos, herramientas y prototipos físicos', scores: { ing: 3, tec: 1 } },
        { text: 'En un laboratorio, hospital o espacio al aire libre', scores: { csa: 3, hum: 1 } },
        { text: 'En un estudio creativo con música, luz y color', scores: { art: 3, hum: 1 } },
        { text: 'En un aula, biblioteca o espacio comunitario', scores: { hum: 3, csa: 1 } },
        { text: 'En una oficina dinámica o en mi propio negocio', scores: { adm: 3, tec: 1 } }
      ]
    },

    /* --- POSIBILIDADES (13-18) --- */
    {
      id: 13, category: 'posibilidades',
      text: 'Al pensar en mi futuro, lo que más me motiva es...',
      options: [
        { text: 'Crear tecnología que resuelva problemas reales', scores: { tec: 3, ing: 1 } },
        { text: 'Diseñar y construir cosas que mejoren la vida de las personas', scores: { ing: 3, csa: 1 } },
        { text: 'Cuidar la salud y el bienestar de otros', scores: { csa: 3, hum: 1 } },
        { text: 'Expresar ideas y emociones que conecten con la gente', scores: { art: 3, hum: 1 } },
        { text: 'Enseñar, acompañar o aportar a mi comunidad', scores: { hum: 3, csa: 1 } },
        { text: 'Crear mi propia empresa o liderar un proyecto', scores: { adm: 3, tec: 1 } }
      ]
    },
    {
      id: 14, category: 'posibilidades',
      text: 'Considero que en mi entorno (familia, colegio, comunidad)...',
      options: [
        { text: 'Hay acceso a computadores e internet que podría aprovechar', scores: { tec: 3, adm: 1 } },
        { text: 'Conozco talleres, ferias o personas relacionadas con técnica e ingeniería', scores: { ing: 3, tec: 1 } },
        { text: 'Tengo contacto con centros de salud, hospitales o laboratorios', scores: { csa: 3, hum: 1 } },
        { text: 'Existen espacios culturales, artísticos o de creación de contenido', scores: { art: 3, hum: 1 } },
        { text: 'Hay oportunidades para enseñar, liderar grupos o participar socialmente', scores: { hum: 3, adm: 1 } },
        { text: 'Veoo oportunidades de negocio, emprendimiento o comercio', scores: { adm: 3, ing: 1 } }
      ]
    },
    {
      id: 15, category: 'posibilidades',
      text: 'Si pudiera estudiar en cualquier lugar, me gustaría...',
      options: [
        { text: 'Un centro tecnológico o una academia de programación', scores: { tec: 3, ing: 1 } },
        { text: 'Una escuela técnica o facultad de ingeniería', scores: { ing: 3, tec: 1 } },
        { text: 'Una universidad de ciencias de la salud', scores: { csa: 3, hum: 1 } },
        { text: 'Una escuela de arte, diseño o comunicación', scores: { art: 3, hum: 1 } },
        { text: 'Una universidad de educación o ciencias sociales', scores: { hum: 3, csa: 1 } },
        { text: 'Una escuela de negocios o programa de emprendimiento', scores: { adm: 3, tec: 1 } }
      ]
    },
    {
      id: 16, category: 'posibilidades',
      text: 'Lo que más me atrae de una ocupación u oficio es...',
      options: [
        { text: 'La innovación constante y el aprendizaje continuo', scores: { tec: 3, csa: 1 } },
        { text: 'Ver resultados tangibles de lo que construyo o diseño', scores: { ing: 3, art: 1 } },
        { text: 'Sentir que aporto al bienestar y la salud de las personas', scores: { csa: 3, hum: 1 } },
        { text: 'La libertad de crear y expresarme de forma única', scores: { art: 3, hum: 1 } },
        { text: 'El impacto positivo en la sociedad y las personas', scores: { hum: 3, csa: 1 } },
        { text: 'La posibilidad de crecer económicamente y ser independiente', scores: { adm: 3, ing: 1 } }
      ]
    },
    {
      id: 17, category: 'posibilidades',
      text: 'Una meta que me gustaría alcanzar en los próximos años es...',
      options: [
        { text: 'Desarrollar una app, un sitio web o un proyecto digital', scores: { tec: 3, ing: 1 } },
        { text: 'Construir o diseñar algo que funcione y sea útil', scores: { ing: 3, art: 1 } },
        { text: 'Participar en un proyecto de salud o investigación', scores: { csa: 3, hum: 1 } },
        { text: 'Crear una obra, una marca personal o un portfolio creativo', scores: { art: 3, hum: 1 } },
        { text: 'Acompañar a otros como docente, mentor o voluntario', scores: { hum: 3, csa: 1 } },
        { text: 'Iniciar un pequeño negocio o proyecto emprendedor', scores: { adm: 3, tec: 1 } }
      ]
    },
    {
      id: 18, category: 'posibilidades',
      text: 'Si alguien me preguntara qué tipo de impacto quiero tener, diría que...',
      options: [
        { text: 'Quiero transformar cómo las personas usan la tecnología', scores: { tec: 3, ing: 1 } },
        { text: 'Quiero construir infraestructura o soluciones físicas para el futuro', scores: { ing: 3, csa: 1 } },
        { text: 'Quiero mejorar la calidad de vida y la salud de las personas', scores: { csa: 3, hum: 1 } },
        { text: 'Quiero inspirar y mover emociones con mis creaciones', scores: { art: 3, hum: 1 } },
        { text: 'Quiero educar, formar y acompañar a nuevas generaciones', scores: { hum: 3, csa: 1 } },
        { text: 'Quiero generar empleo y oportunidades para mi comunidad', scores: { adm: 3, ing: 1 } }
      ]
    }
  ];

  /* Categorías con etiquetas legibles */
  const CATEGORY_LABELS = {
    capacidades: 'Capacidades',
    intereses: 'Intereses',
    posibilidades: 'Posibilidades'
  };

  /* ==================================================================
     ESTADO DEL TEST
     ================================================================== */
  const STORAGE_KEY = 'voca9_session';
  let currentQuestion = 0;
  let answers = []; /* Array de índices de opción seleccionada */
  let results = null; /* Resultados calculados */

  /* ==================================================================
     UTILIDADES
     ================================================================== */

  /* Selecciona un elemento */
  function $(selector) {
    return document.querySelector(selector);
  }

  /* Crea un elemento con atributos opcionales */
  function el(tag, attrs) {
    const node = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (key) {
        if (key === 'class') {
          node.className = attrs[key];
        } else if (key === 'html') {
          node.innerHTML = attrs[key];
        } else {
          node.setAttribute(key, attrs[key]);
        }
      });
    }
    return node;
  }

  /* Guarda la sesión en localStorage */
  function saveSession() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        currentQuestion: currentQuestion,
        answers: answers
      }));
    } catch (e) {
      /* localStorage no disponible — no crítico */
    }
  }

  /* Carga la sesión desde localStorage */
  function loadSession() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      if (data) {
        const parsed = JSON.parse(data);
        if (parsed && Array.isArray(parsed.answers)) {
          return parsed;
        }
      }
    } catch (e) {
      /* Datos corruptos — ignorar */
    }
    return null;
  }

  /* Elimina la sesión guardada */
  function clearSession() {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      /* No crítico */
    }
  }

  /* ==================================================================
     NAVEGACIÓN Y UI
     ================================================================== */

  /* Navbar scroll */
  function initNavbar() {
    const navbar = $('#navbar');
    const navToggle = $('#navToggle');
    const navLinks = $('#navLinks');
    const navOverlay = $('#navOverlay');

    window.addEventListener('scroll', function () {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });

    /* Menú móvil */
    navToggle.addEventListener('click', function () {
      const isOpen = navLinks.classList.toggle('open');
      navToggle.classList.toggle('open', isOpen);
      navToggle.setAttribute('aria-expanded', String(isOpen));
      navOverlay.style.display = isOpen ? 'block' : 'none';
    });

    navOverlay.addEventListener('click', function () {
      navLinks.classList.remove('open');
      navToggle.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      navOverlay.style.display = 'none';
    });

    /* Cerrar menú al hacer clic en un enlace */
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        navOverlay.style.display = 'none';
      });
    });

    /* Scroll spy — resaltar enlace activo */
    const sections = ['hero', 'how', 'test', 'areas', 'equipo'];
    window.addEventListener('scroll', function () {
      const scrollPos = window.scrollY + 100;
      let active = sections[0];
      sections.forEach(function (id) {
        const sec = document.getElementById(id);
        if (sec && sec.offsetTop <= scrollPos) {
          active = id;
        }
      });
      navLinks.querySelectorAll('a').forEach(function (link) {
        const href = link.getAttribute('href').slice(1);
        link.classList.toggle('active', href === active);
      });
    });
  }

  /* Botón volver arriba */
  function initBackToTop() {
    const btn = $('#backToTop');
    window.addEventListener('scroll', function () {
      btn.classList.toggle('show', window.scrollY > 400);
      btn.style.display = window.scrollY > 400 ? 'flex' : 'none';
    });
    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* Scroll reveal con IntersectionObserver */
  function initScrollReveal() {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const delay = parseInt(entry.target.getAttribute('data-delay') || '0', 10);
          setTimeout(function () {
            entry.target.classList.add('revealed');
          }, delay);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.reveal').forEach(function (el) {
      observer.observe(el);
    });
  }

  /* ==================================================================
     CANVAS DEL HERO — Constelación de nodos
     ================================================================== */
  function initHeroCanvas() {
    const canvas = $('#heroCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let nodes = [];
    let animationId = null;
    let mouseX = -1000, mouseY = -1000;

    function resize() {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      initNodes();
    }

    function initNodes() {
      const count = Math.min(Math.floor(canvas.width * canvas.height / 18000), 80);
      nodes = [];
      for (let i = 0; i < count; i++) {
        nodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          r: Math.random() * 1.5 + 0.5,
          opacity: Math.random() * 0.5 + 0.2
        });
      }
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      /* Conexiones entre nodos cercanos */
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            const alpha = (1 - dist / 130) * 0.15;
            ctx.strokeStyle = 'rgba(0, 212, 255, ' + alpha + ')';
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }

        /* Conexión con el cursor */
        const mdx = nodes[i].x - mouseX;
        const mdy = nodes[i].y - mouseY;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mdist < 160) {
          const alpha = (1 - mdist / 160) * 0.25;
          ctx.strokeStyle = 'rgba(59, 130, 246, ' + alpha + ')';
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(mouseX, mouseY);
          ctx.stroke();
        }
      }

      /* Nodos */
      nodes.forEach(function (n) {
        /* Mover */
        n.x += n.vx;
        n.y += n.vy;

        /* Rebotar en bordes */
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1;

        /* Dibujar */
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 212, 255, ' + n.opacity + ')';
        ctx.fill();
      });

      animationId = requestAnimationFrame(draw);
    }

    canvas.addEventListener('mousemove', function (e) {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    });

    canvas.addEventListener('mouseleave', function () {
      mouseX = -1000;
      mouseY = -1000;
    });

    window.addEventListener('resize', function () {
      cancelAnimationFrame(animationId);
      resize();
      draw();
    });

    resize();
    draw();
  }

  /* ==================================================================
     TEST VOCACIONAL — Lógica
     ================================================================== */
  function initTest() {
    const startBtn = $('#startTestBtn');
    const prevBtn = $('#prevBtn');
    const nextBtn = $('#nextBtn');
    const resumeNote = $('#resumeNote');
    const resumeBtn = $('#resumeBtn');

    /* Verificar si hay sesión guardada */
    const session = loadSession();
    if (session && session.answers.length > 0 && session.answers.length < QUESTIONS.length) {
      resumeNote.style.display = 'block';
    }

    startBtn.addEventListener('click', function () {
      startTest();
    });

    resumeBtn.addEventListener('click', function () {
      const s = loadSession();
      if (s) {
        currentQuestion = s.currentQuestion;
        answers = s.answers;
        startTest(true);
      }
    });

    prevBtn.addEventListener('click', function () {
      if (currentQuestion > 0) {
        currentQuestion--;
        renderQuestion();
      }
    });

    nextBtn.addEventListener('click', function () {
      /* Verificar que la pregunta actual esté respondida */
      if (answers[currentQuestion] === undefined) return;

      if (currentQuestion < QUESTIONS.length - 1) {
        currentQuestion++;
        renderQuestion();
      } else {
        /* Final del test */
        finishTest();
      }
    });
  }

  /* Iniciar test */
  function startTest(resumed) {
    if (!resumed) {
      currentQuestion = 0;
      answers = [];
    }
    $('#testIntro').style.display = 'none';
    $('#testActive').style.display = 'block';
    $('#testResults').style.display = 'none';
    renderQuestion();
    saveSession();
  }

  /* Renderizar pregunta actual */
  function renderQuestion() {
    const q = QUESTIONS[currentQuestion];
    const container = $('#questionContainer');
    const progressLabel = $('#progressLabel');
    const progressCategory = $('#progressCategory');
    const progressFill = $('#progressFill');
    const progressBar = $('#progressBar');
    const prevBtn = $('#prevBtn');
    const nextBtn = $('#nextBtn');

    /* Actualizar progreso */
    const progress = ((currentQuestion + 1) / QUESTIONS.length) * 100;
    progressLabel.textContent = 'Pregunta ' + (currentQuestion + 1) + ' de ' + QUESTIONS.length;
    progressCategory.textContent = CATEGORY_LABELS[q.category];
    progressFill.style.width = progress + '%';
    progressBar.setAttribute('aria-valuenow', String(Math.round(progress)));

    /* Actualizar color del label de categoría */
    const catClass = 'cat-' + q.category;

    /* Construir HTML de la pregunta */
    const optionsHtml = q.options.map(function (opt, idx) {
      const isSelected = answers[currentQuestion] === idx;
      const letter = String.fromCharCode(65 + idx); /* A, B, C... */
      return '<button class="option-card' + (isSelected ? ' selected' : '') + '" ' +
        'data-index="' + idx + '" role="radio" aria-checked="' + isSelected + '" ' +
        'aria-label="Opción ' + letter + ': ' + opt.text + '">' +
        '<span class="option-letter">' + letter + '</span>' +
        '<span class="option-text">' + opt.text + '</span>' +
        '<svg class="option-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6L9 17l-5-5"/></svg>' +
        '</button>';
    }).join('');

    container.innerHTML =
      '<div class="test-question show">' +
      '<span class="question-category-label ' + catClass + '">' + CATEGORY_LABELS[q.category] + '</span>' +
      '<h3 class="question-text">' + q.text + '</h3>' +
      '<div class="question-options" role="radiogroup" aria-label="Opciones de respuesta">' +
      optionsHtml +
      '</div>' +
      '</div>';

    /* Adjuntar eventos a las opciones */
    container.querySelectorAll('.option-card').forEach(function (card) {
      card.addEventListener('click', function () {
        const idx = parseInt(this.getAttribute('data-index'), 10);
        selectOption(idx);
      });
    });

    /* Estado de botones */
    prevBtn.disabled = currentQuestion === 0;
    const answered = answers[currentQuestion] !== undefined;
    nextBtn.disabled = !answered;

    /* Texto del botón final */
    if (currentQuestion === QUESTIONS.length - 1) {
      nextBtn.innerHTML = 'Ver mi orientación ' +
        '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>';
    } else {
      nextBtn.innerHTML = 'Continuar ' +
        '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>';
    }

    saveSession();
  }

  /* Seleccionar una opción */
  function selectOption(idx) {
    answers[currentQuestion] = idx;

    /* Actualizar UI de las opciones */
    const container = $('#questionContainer');
    container.querySelectorAll('.option-card').forEach(function (card) {
      const cardIdx = parseInt(card.getAttribute('data-index'), 10);
      if (cardIdx === idx) {
        card.classList.add('selected');
        card.setAttribute('aria-checked', 'true');
      } else {
        card.classList.remove('selected');
        card.setAttribute('aria-checked', 'false');
      }
    });

    /* Habilitar botón continuar */
    $('#nextBtn').disabled = false;
    saveSession();
  }

  /* ==================================================================
     SISTEMA DE PUNTUACIÓN Y RESULTADOS
     ================================================================== */
  function calculateResults() {
    const scores = {};
    AREA_KEYS.forEach(function (key) {
      scores[key] = 0;
    });

    /* Sumar puntos de cada respuesta */
    answers.forEach(function (optIdx, qIdx) {
      const q = QUESTIONS[qIdx];
      if (q && q.options[optIdx]) {
        const optScores = q.options[optIdx].scores;
        Object.keys(optScores).forEach(function (area) {
          if (scores[area] !== undefined) {
            scores[area] += optScores[area];
          }
        });
      }
    });

    /* Calcular puntuaciones por dimensión */
    const dimensionScores = { capacidades: 0, intereses: 0, posibilidades: 0 };
    const dimensionMax = { capacidades: 0, intereses: 0, posibilidades: 0 };

    answers.forEach(function (optIdx, qIdx) {
      const q = QUESTIONS[qIdx];
      if (q && q.options[optIdx]) {
        const optScores = q.options[optIdx].scores;
        let qMax = 0;
        Object.keys(optScores).forEach(function (area) {
          if (scores[area] !== undefined) {
            qMax = Math.max(qMax, optScores[area]);
          }
        });
        dimensionScores[q.category] += qMax;
        dimensionMax[q.category] += 3; /* Máximo por pregunta: 3 puntos */
      }
    });

    /* Convertir a porcentajes */
    const maxPossible = QUESTIONS.length * 3; /* Máximo por pregunta: 3 pts */
    const percentages = {};
    AREA_KEYS.forEach(function (key) {
      percentages[key] = Math.round((scores[key] / maxPossible) * 100);
    });

    /* Porcentajes de dimensiones */
    const dimPercentages = {};
    Object.keys(dimensionScores).forEach(function (dim) {
      dimPercentages[dim] = dimensionMax[dim] > 0
        ? Math.round((dimensionScores[dim] / dimensionMax[dim]) * 100)
        : 0;
    });

    /* Ordenar áreas por puntuación descendente */
    const ranked = AREA_KEYS.slice().sort(function (a, b) {
      return scores[b] - scores[a];
    });

    /* Recopilar respuestas del usuario para explicación */
    const userStrengths = [];
    const userInterests = [];
    const userPossibilities = [];

    answers.forEach(function (optIdx, qIdx) {
      const q = QUESTIONS[qIdx];
      if (q && q.options[optIdx]) {
        const opt = q.options[optIdx];
        if (q.category === 'capacidades') userStrengths.push(opt.text);
        else if (q.category === 'intereses') userInterests.push(opt.text);
        else if (q.category === 'posibilidades') userPossibilities.push(opt.text);
      }
    });

    return {
      scores: scores,
      percentages: percentages,
      ranked: ranked,
      dimensionPercentages: dimPercentages,
      userStrengths: userStrengths,
      userInterests: userInterests,
      userPossibilities: userPossibilities
    };
  }

  /* ==================================================================
     MOSTRAR RESULTADOS
     ================================================================== */
  function finishTest() {
    results = calculateResults();

    const topArea = VOCATIONAL_AREAS[results.ranked[0]];
    const secondArea = VOCATIONAL_AREAS[results.ranked[1]];
    const thirdArea = VOCATIONAL_AREAS[results.ranked[2]];

    const resultsContainer = $('#testResults');

    /* Construir HTML de resultados */
    const areasListHtml = results.ranked.map(function (key) {
      const area = VOCATIONAL_AREAS[key];
      const pct = results.percentages[key];
      return '<div class="area-result-row">' +
        '<div class="area-result-header">' +
        '<span class="area-result-name">' + area.name + '</span>' +
        '<span class="area-result-percent" data-target="' + pct + '">0%</span>' +
        '</div>' +
        '<div class="area-result-bar"><div class="area-result-bar-fill" data-target="' + pct + '"></div></div>' +
        '</div>';
    }).join('');

    /* Tarjeta principal */
    const mainCardHtml =
      '<div class="result-main-card glass">' +
      '<p class="result-main-label">Tu exploración muestra mayor conexión con...</p>' +
      '<h3 class="result-main-name">' + topArea.name + '</h3>' +
      '<p class="result-main-desc">' + topArea.description + '</p>' +
      '<div class="result-main-percent"><span class="num" data-target="' + results.percentages[results.ranked[0]] + '">0</span><span class="sign">%</span></div>' +
      '</div>';

    /* Radar / Dashboard del perfil */
    const radarHtml = buildRadarHtml(results);

    /* Explicación de por qué aparece esta área */
    const explanationHtml = buildExplanationHtml(topArea, results);

    /* Subsecciones de resultado */
    const sectionsHtml = buildResultSections(topArea);

    resultsContainer.innerHTML =
      '<div class="results-header">' +
      '<h2 class="results-title">Tu mapa de posibilidades</h2>' +
      '<p class="results-subtitle">Basado en tus ' + answers.length + ' respuestas, estas son las áreas que aparecen con mayor conexión.</p>' +
      '<div class="results-disclaimer">' +
      '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 9v4M12 17h.01M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/></svg>' +
      'Este resultado no es un diagnóstico profesional ni determina qué carrera debes estudiar. Es una guía de exploración.' +
      '</div>' +
      '</div>' +

      '<div class="results-profile glass">' +
      '<h3 class="profile-title">Tu perfil: capacidades, intereses y posibilidades</h3>' +
      radarHtml +
      '<div class="profile-dimensions">' +
      buildDimensionCard('Capacidades', results.dimensionPercentages.capacidades) +
      buildDimensionCard('Intereses', results.dimensionPercentages.intereses) +
      buildDimensionCard('Posibilidades', results.dimensionPercentages.posibilidades) +
      '</div>' +
      '</div>' +

      mainCardHtml +

      '<div class="result-explanation glass">' +
      '<h4>¿Por qué aparece esta área?</h4>' +
      '<p>Tus respuestas muestran una combinación de capacidades, intereses y posibilidades que se relacionan con <strong>' + topArea.name + '</strong>. Aquí resumimos lo que encontramos:</p>' +
      explanationHtml +
      '</div>' +

      sectionsHtml +

      '<div class="results-areas-list">' +
      '<h4 style="color:var(--c-white);margin-bottom:var(--sp-2);font-family:var(--font-display);">Todas las áreas exploradas</h4>' +
      areasListHtml +
      '</div>' +

      '<div class="results-actions">' +
      '<button class="btn btn-primary" id="downloadBtn">' +
      '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>' +
      ' Descargar mi orientación' +
      '</button>' +
      '<button class="btn btn-secondary" id="restartBtn">' +
      '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8M3 3v5h5"/></svg>' +
      ' Reiniciar orientación' +
      '</button>' +
      '<button class="btn btn-secondary" id="exploreAreasBtn">' +
      ' Explorar áreas ' +
      '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>' +
      '</button>' +
      '</div>';

    /* Mostrar resultados */
    $('#testActive').style.display = 'none';
    $('#testResults').style.display = 'block';

    /* Animar porcentajes */
    animateResults();

    /* Adjuntar eventos a los botones */
    $('#downloadBtn').addEventListener('click', downloadResults);
    $('#restartBtn').addEventListener('click', restartTest);
    $('#exploreAreasBtn').addEventListener('click', function () {
      document.getElementById('areas').scrollIntoView({ behavior: 'smooth' });
    });

    /* Guardar sesión completada */
    saveSession();
  }

  /* Construir tarjeta de dimensión */
  function buildDimensionCard(name, pct) {
    return '<div class="dimension-card">' +
      '<div class="dimension-name">' + name + '</div>' +
      '<div class="dimension-value" data-target="' + pct + '">0%</div>' +
      '<div class="dimension-bar"><div class="dimension-bar-fill" data-target="' + pct + '"></div></div>' +
      '</div>';
  }

  /* Construir radar visual (SVG) */
  function buildRadarHtml(results) {
    const dims = [
      { label: 'Capacidades', value: results.dimensionPercentages.capacidades },
      { label: 'Intereses', value: results.dimensionPercentages.intereses },
      { label: 'Posibilidades', value: results.dimensionPercentages.posibilidades }
    ];

    const size = 200;
    const center = size / 2;
    const maxRadius = 70;
    const angles = [-Math.PI / 2, -Math.PI / 2 + (2 * Math.PI / 3), -Math.PI / 2 + (4 * Math.PI / 3)];

    /* Polígono de fondo (100%) */
    const fullPoints = angles.map(function (a) {
      return (center + Math.cos(a) * maxRadius) + ',' + (center + Math.sin(a) * maxRadius);
    }).join(' ');

    /* Polígono de datos (0% inicialmente) */
    const dataPoints = angles.map(function (a, i) {
      const r = (dims[i].value / 100) * maxRadius;
      return (center + Math.cos(a) * r) + ',' + (center + Math.sin(a) * r);
    }).join(' ');

    /* Labels */
    const labels = dims.map(function (d, i) {
      const r = maxRadius + 22;
      const x = center + Math.cos(angles[i]) * r;
      const y = center + Math.sin(angles[i]) * r;
      return '<text x="' + x + '" y="' + y + '" text-anchor="middle" dominant-baseline="middle" ' +
        'fill="#94A3B8" font-size="11" font-family="Inter, sans-serif">' + d.label + '</text>';
    }).join('');

    return '<div class="radar-container">' +
      '<svg width="' + size + '" height="' + size + '" viewBox="0 0 ' + size + ' ' + size + '">' +
      '<polygon points="' + fullPoints + '" fill="rgba(0,212,255,0.04)" stroke="rgba(30,58,95,0.4)" stroke-width="1"/>' +
      /* Líneas del centro a los vértices */
      angles.map(function (a) {
        return '<line x1="' + center + '" y1="' + center + '" x2="' +
          (center + Math.cos(a) * maxRadius) + '" y2="' + (center + Math.sin(a) * maxRadius) +
          '" stroke="rgba(30,58,95,0.3)" stroke-width="0.5"/>';
      }).join('') +
      '<polygon class="radar-shape" points="' + dataPoints + '" ' +
      'fill="rgba(0,212,255,0.12)" stroke="url(#radarGrad)" stroke-width="2" ' +
      'style="transition: all 1.2s cubic-bezier(0.16,1,0.3,1);transform-origin:' + center + 'px ' + center + 'px"/>' +
      '<circle cx="' + center + '" cy="' + center + '" r="3" fill="#00D4FF"/>' +
      labels +
      '<defs><linearGradient id="radarGrad" x1="0" y1="0" x2="' + size + '" y2="' + size + '">' +
      '<stop stop-color="#00D4FF"/><stop offset="1" stop-color="#3B82F6"/></linearGradient></defs>' +
      '</svg>' +
      '</div>';
  }

  /* Construir explicación del área principal */
  function buildExplanationHtml(topArea, results) {
    /* Relacionar respuestas del usuario con las capacidades/intereses del área */
    const relatedStrengths = results.userStrengths.slice(0, 3).map(function (s) {
      return '<li>' + s + '</li>';
    }).join('');

    const relatedInterests = results.userInterests.slice(0, 3).map(function (s) {
      return '<li>' + s + '</li>';
    }).join('');

    const relatedPossibilities = results.userPossibilities.slice(0, 3).map(function (s) {
      return '<li>' + s + '</li>';
    }).join('');

    return '<p style="color:var(--c-text-muted);margin-bottom:var(--sp-2);font-weight:500;">Fortalezas que aparecen en tus respuestas:</p>' +
      '<ul class="result-explanation-list">' + (relatedStrengths || '<li>Tus respuestas muestran capacidades variadas</li>') + '</ul>' +
      '<p style="color:var(--c-text-muted);margin-top:var(--sp-2);margin-bottom:var(--sp-2);font-weight:500;">Intereses que aparecen en tus respuestas:</p>' +
      '<ul class="result-explanation-list">' + (relatedInterests || '<li>Tus respuestas muestran intereses diversos</li>') + '</ul>' +
      '<p style="color:var(--c-text-muted);margin-top:var(--sp-2);margin-bottom:var(--sp-2);font-weight:500;">Posibilidades que aparecen en tus respuestas:</p>' +
      '<ul class="result-explanation-list">' + (relatedPossibilities || '<li>Tus respuestas muestran posibilidades amplias</li>') + '</ul>';
  }

  /* Construir subsecciones de resultado */
  function buildResultSections(topArea) {
    const iconSvg = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>';

    const capacidadesHtml = topArea.capacidades.map(function (c) {
      return '<li>' + c + '</li>';
    }).join('');

    const interesesHtml = topArea.intereses.map(function (i) {
      return '<li>' + i + '</li>';
    }).join('');

    const ocupacionesHtml = topArea.ocupaciones.map(function (o) {
      return '<li>' + o + '</li>';
    }).join('');

    const caminosHtml = topArea.caminos.map(function (c) {
      return '<li>' + c + '</li>';
    }).join('');

    return '<div class="result-section">' +
      '<h5>' + iconSvg + ' Fortalezas que aparecen en tus respuestas</h5>' +
      '<ul>' + capacidadesHtml + '</ul>' +
      '</div>' +
      '<div class="result-section">' +
      '<h5>' + iconSvg + ' Intereses relacionados</h5>' +
      '<ul>' + interesesHtml + '</ul>' +
      '</div>' +
      '<div class="result-section">' +
      '<h5>' + iconSvg + ' Posibilidades para explorar</h5>' +
      '<p>' + topArea.description.split('.')[0] + '.</p>' +
      '</div>' +
      '<div class="result-section">' +
      '<h5>' + iconSvg + ' Algunas ocupaciones que podrías investigar</h5>' +
      '<ul>' + ocupacionesHtml + '</ul>' +
      '</div>' +
      '<div class="result-section">' +
      '<h5>' + iconSvg + ' ¿Qué podrías empezar a aprender desde ahora?</h5>' +
      '<ul>' + caminosHtml + '</ul>' +
      '</div>';
  }

  /* Animar resultados (porcentajes y barras) */
  function animateResults() {
    /* Animar números de porcentaje en lista de áreas */
    document.querySelectorAll('.area-result-percent').forEach(function (node) {
      const target = parseInt(node.getAttribute('data-target'), 10);
      animateNumber(node, 0, target, 1500, function (v) {
        return v + '%';
      });
    });

    /* Animar barras de áreas */
    setTimeout(function () {
      document.querySelectorAll('.area-result-bar-fill').forEach(function (node) {
        const target = node.getAttribute('data-target');
        node.style.width = target + '%';
      });
    }, 100);

    /* Animar número del resultado principal */
    const mainNum = document.querySelector('.result-main-percent .num');
    if (mainNum) {
      const target = parseInt(mainNum.getAttribute('data-target'), 10);
      animateNumber(mainNum, 0, target, 1800);
    }

    /* Animar dimensiones */
    document.querySelectorAll('.dimension-value').forEach(function (node) {
      const target = parseInt(node.getAttribute('data-target'), 10);
      animateNumber(node, 0, target, 1200, function (v) {
        return v + '%';
      });
    });

    /* Animar barras de dimensiones */
    setTimeout(function () {
      document.querySelectorAll('.dimension-bar-fill').forEach(function (node) {
        const target = node.getAttribute('data-target');
        node.style.width = target + '%';
      });
    }, 100);
  }

  /* Animar un número desde start hasta end */
  function animateNumber(node, start, end, duration, formatter) {
    const startTime = performance.now();
    function update(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      /* Easing: easeOutCubic */
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.round(start + (end - start) * eased);
      node.textContent = formatter ? formatter(value) : value;
      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        node.textContent = formatter ? formatter(end) : end;
      }
    }
    requestAnimationFrame(update);
  }

  /* Reiniciar test */
  function restartTest() {
    currentQuestion = 0;
    answers = [];
    results = null;
    clearSession();
    $('#testResults').style.display = 'none';
    $('#testActive').style.display = 'none';
    $('#testIntro').style.display = 'block';
    $('#resumeNote').style.display = 'none';
    document.getElementById('test').scrollIntoView({ behavior: 'smooth' });
  }

  /* ==================================================================
     DESCARGAR RESULTADOS (imprimir / guardar como PDF)
     ================================================================== */
  function downloadResults() {
    if (!results) return;

    const topArea = VOCATIONAL_AREAS[results.ranked[0]];

    /* Crear una ventana de impresión optimizada */
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      alert('Tu navegador bloqueó la ventana emergente. Permítela para descargar tu orientación.');
      return;
    }

    const areasList = results.ranked.map(function (key) {
      const area = VOCATIONAL_AREAS[key];
      const pct = results.percentages[key];
      return '<li><strong>' + area.name + ':</strong> ' + pct + '%</li>';
    }).join('');

    const strengthsList = results.userStrengths.slice(0, 3).map(function (s) {
      return '<li>' + s + '</li>';
    }).join('');

    const interestsList = results.userInterests.slice(0, 3).map(function (s) {
      return '<li>' + s + '</li>';
    }).join('');

    const possibilitiesList = results.userPossibilities.slice(0, 3).map(function (s) {
      return '<li>' + s + '</li>';
    }).join('');

    const ocupacionesList = topArea.ocupaciones.map(function (o) {
      return '<li>' + o + '</li>';
    }).join('');

    const caminosList = topArea.caminos.map(function (c) {
      return '<li>' + c + '</li>';
    }).join('');

    printWindow.document.write(
      '<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8">' +
      '<title>Voca9 - Mi orientación vocacional</title>' +
      '<style>' +
      'body{font-family:Georgia,serif;max-width:700px;margin:0 auto;padding:40px;color:#1a1a1a;line-height:1.6;}' +
      'h1{color:#2563EB;font-size:1.8rem;border-bottom:2px solid #3B82F6;padding-bottom:10px;}' +
      'h2{color:#2563EB;font-size:1.2rem;margin-top:30px;}' +
      '.badge{background:#EFF6FF;border:1px solid #BFDBFE;padding:8px 16px;border-radius:8px;display:inline-block;font-size:0.85rem;color:#2563EB;margin-bottom:20px;}' +
      '.area-principal{background:#F0F9FF;border:1px solid #BAE6FD;border-radius:12px;padding:20px;margin:20px 0;}' +
      '.area-principal h3{font-size:1.4rem;color:#0C4A6E;margin:0 0 8px;}' +
      '.area-principal .pct{font-size:2rem;font-weight:bold;color:#2563EB;}' +
      'ul{padding-left:20px;}' +
      'li{margin:4px 0;}' +
      '.disclaimer{background:#FFFBEB;border:1px solid #FDE68A;border-radius:8px;padding:12px;margin:20px 0;font-size:0.85rem;color:#92400E;}' +
      '.dimensions{display:flex;gap:20px;margin:15px 0;}' +
      '.dim{flex:1;text-align:center;background:#F8FAFC;border:1px solid #E2E8F0;border-radius:8px;padding:12px;}' +
      '.dim .label{font-size:0.8rem;color:#64748B;text-transform:uppercase;}' +
      '.dim .val{font-size:1.5rem;font-weight:bold;color:#2563EB;}' +
      '.footer-print{margin-top:40px;padding-top:15px;border-top:1px solid #E2E8F0;text-align:center;color:#94A3B8;font-size:0.8rem;}' +
      '@media print{body{padding:20px;}}' +
      '</style></head><body>' +
      '<div class="badge">Voca9 — Orientación vocacional</div>' +
      '<h1>Tu mapa de posibilidades</h1>' +
      '<p>Basado en tus respuestas, estas son las áreas que aparecen con mayor conexión.</p>' +
      '<div class="disclaimer">Este resultado no es un diagnóstico profesional ni determina qué carrera debes estudiar. Es una guía de exploración.</div>' +

      '<div class="area-principal">' +
      '<h3>Tu exploración muestra mayor conexión con: ' + topArea.name + '</h3>' +
      '<p>' + topArea.description + '</p>' +
      '<div class="pct">' + results.percentages[results.ranked[0]] + '%</div>' +
      '</div>' +

      '<div class="dimensions">' +
      '<div class="dim"><div class="label">Capacidades</div><div class="val">' + results.dimensionPercentages.capacidades + '%</div></div>' +
      '<div class="dim"><div class="label">Intereses</div><div class="val">' + results.dimensionPercentages.intereses + '%</div></div>' +
      '<div class="dim"><div class="label">Posibilidades</div><div class="val">' + results.dimensionPercentages.posibilidades + '%</div></div>' +
      '</div>' +

      '<h2>Todas las áreas exploradas</h2>' +
      '<ul>' + areasList + '</ul>' +

      '<h2>Fortalezas que aparecen en tus respuestas</h2>' +
      '<ul>' + (strengthsList || '<li>Tus respuestas muestran capacidades variadas</li>') + '</ul>' +

      '<h2>Intereses que aparecen en tus respuestas</h2>' +
      '<ul>' + (interestsList || '<li>Tus respuestas muestran intereses diversos</li>') + '</ul>' +

      '<h2>Posibilidades que aparecen en tus respuestas</h2>' +
      '<ul>' + (possibilitiesList || '<li>Tus respuestas muestran posibilidades amplias</li>') + '</ul>' +

      '<h2>Ocupaciones que podrías investigar</h2>' +
      '<ul>' + ocupacionesList + '</ul>' +

      '<h2>¿Qué podrías empezar a aprender desde ahora?</h2>' +
      '<ul>' + caminosList + '</ul>' +

      '<div class="footer-print">Voca9 — Explora. Conócete. Proyéctate.<br>Proyecto escolar · 2026</div>' +

      '<script>window.onload=function(){setTimeout(function(){window.print();},300);}<\/script>' +
      '</body></html>'
    );
    printWindow.document.close();
  }

  /* ==================================================================
     MAPA DE VOCACIONES — Áreas
     ================================================================== */
  function initAreas() {
    const grid = $('#areasGrid');
    if (!grid) return;

    /* Crear tarjetas de áreas */
    grid.innerHTML = AREA_KEYS.map(function (key) {
      const area = VOCATIONAL_AREAS[key];
      /* Icono simple */
      const iconMap = {
        tec: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="url(#ic-' + key + ')" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>',
        ing: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="url(#ic-' + key + ')" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
        csa: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="url(#ic-' + key + ')" stroke-width="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z"/></svg>',
        art: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="url(#ic-' + key + ')" stroke-width="2"><circle cx="13.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="10.5" r="2.5"/><circle cx="8.5" cy="7.5" r="2.5"/><circle cx="6.5" cy="12.5" r="2.5"/><path d="M12 22a10 10 0 1 1 0-20"/></svg>',
        hum: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="url(#ic-' + key + ')" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>',
        adm: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="url(#ic-' + key + ')" stroke-width="2"><path d="M3 3v18h18"/><path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14"/></svg>'
      };

      return '<article class="area-card reveal" data-area="' + key + '" tabindex="0" role="button" aria-label="Ver detalles de ' + area.name + '">' +
        '<div class="area-card-icon">' + (iconMap[key] || '') + ICON_DEFS + '</div>' +
        '<h3>' + area.name + '</h3>' +
        '<p>' + area.description.split('.')[0] + '.</p>' +
        '<span class="area-card-cta">Ver detalles ' +
        '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>' +
        '</span>' +
        '</article>';
    }).join('');

    /* Adjuntar eventos */
    grid.querySelectorAll('.area-card').forEach(function (card) {
      card.addEventListener('click', function () {
        const key = this.getAttribute('data-area');
        openAreaModal(key);
      });
      card.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          const key = this.getAttribute('data-area');
          openAreaModal(key);
        }
      });
    });

    /* Re-observar los elementos nuevos para scroll reveal */
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    grid.querySelectorAll('.reveal').forEach(function (el) {
      observer.observe(el);
    });
  }

  /* Abrir modal de área */
  function openAreaModal(key) {
    const area = VOCATIONAL_AREAS[key];
    if (!area) return;

    const modal = $('#areaModal');
    const modalTitle = $('#modalTitle');
    const modalIcon = $('#modalIcon');
    const modalBody = $('#modalBody');

    /* Iconos */
    const iconMap = {
      tec: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="url(#ic-tec)" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>',
      ing: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="url(#ic-ing)" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
      csa: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="url(#ic-csa)" stroke-width="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z"/></svg>',
      art: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="url(#ic-art)" stroke-width="2"><circle cx="13.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="10.5" r="2.5"/><circle cx="8.5" cy="7.5" r="2.5"/><circle cx="6.5" cy="12.5" r="2.5"/><path d="M12 22a10 10 0 1 1 0-20"/></svg>',
      hum: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="url(#ic-hum)" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>',
      adm: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="url(#ic-adm)" stroke-width="2"><path d="M3 3v18h18"/><path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14"/></svg>'
    };

    modalTitle.textContent = area.name;
    modalIcon.innerHTML = (iconMap[key] || '') + ICON_DEFS;

    const capacidadesList = area.capacidades.map(function (c) { return '<li>' + c + '</li>'; }).join('');
    const interesesList = area.intereses.map(function (i) { return '<li>' + i + '</li>'; }).join('');
    const ocupacionesList = area.ocupaciones.map(function (o) { return '<li>' + o + '</li>'; }).join('');
    const caminosList = area.caminos.map(function (c) { return '<li>' + c + '</li>'; }).join('');

    modalBody.innerHTML =
      '<h4>Descripción</h4><p>' + area.description + '</p>' +
      '<h4>Capacidades relacionadas</h4><ul>' + capacidadesList + '</ul>' +
      '<h4>Intereses relacionados</h4><ul>' + interesesList + '</ul>' +
      '<h4>Ejemplos de ocupaciones</h4><ul>' + ocupacionesList + '</ul>' +
      '<h4>Posibles caminos de aprendizaje</h4><ul>' + caminosList + '</ul>' +
      '<div class="modal-disclaimer">Ninguna carrera u ocupación garantiza empleo o éxito. Esta información es solo para fines de exploración.</div>';

    modal.style.display = 'flex';

    /* Foco al botón de cerrar para accesibilidad */
    const closeBtn = $('#modalClose');
    if (closeBtn) closeBtn.focus();

    /* Cerrar modal */
    closeBtn.onclick = function () {
      modal.style.display = 'none';
    };

    /* Cerrar al hacer clic fuera */
    modal.onclick = function (e) {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    };
  }

  /* Cerrar modal con Escape */
  function initModalKeyboard() {
    document.addEventListener('keydown', function (e) {
      const modal = $('#areaModal');
      if (e.key === 'Escape' && modal.style.display !== 'none') {
        modal.style.display = 'none';
      }
    });
  }

  /* ==================================================================
     INICIALIZACIÓN
     ================================================================== */
  function init() {
    initNavbar();
    initBackToTop();
    initScrollReveal();
    initHeroCanvas();
    initTest();
    initAreas();
    initModalKeyboard();
  }

  /* Iniciar cuando el DOM esté listo */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
