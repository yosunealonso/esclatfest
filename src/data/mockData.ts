export interface Artista {
  id: string;
  nombre: string;
  disciplina: 'Conciertos' | 'Dj Sets' | 'Talleres' | 'Exposiciones' | 'Charlas';
  bio: string;
  imagen: string;
  actividades: string[];
}
export interface Evento {
  id: string;
  titulo: string;
  hora: string;
  dia: 'Viernes' | 'Sábado' | 'Domingo';
  espacio: 'Sala La Polivalent' | 'Hall Sala La Polivalent' | 'Sala Factoría' | 'Sala Visual Room' | 'Sala Exposiciones' | 'Patio 1' | 'Patio 2';
  categoria: Artista['disciplina'];
  descripcion: string;
}
export interface FAQ {
  pregunta: string;
  respuesta: string;
}
export const FESTIVAL_INFO = {
  nombre: "ESCLAT",
  lema: "Festival de música, pensament i creativitat",
  fechas: "Del 23 al 25 de octubre de 2026",
  ubicacion: "Las Naves (València)",
  descripcion: "Esclat es un festival dirigido a público joven que combina música en directo con talleres, conversaciones y otras propuestas vinculadas a la creación contemporánea.",
  enfoque: "",
  valores: "",
  normas: [
    "Respeto absoluto a la diversidad de género, cultural y sostenibilidad del espacio.",
    "El acceso a las zonas comunes es libre; los talleres prácticos requieren inscripción previa.",
    "Prohibida la entrada de plásticos de un solo uso en todo el recinto de Las Naves."
  ]
};

export const ARTISTAS: Artista[] = [
  {
    id: 't1',
    nombre: 'Ansiedad y Autotune',
    disciplina: 'Charlas',
    bio: 'La salud mental en la industria musical. Un espacio para debatir y visibilizar los retos psicológicos de la creación artística contemporánea.',
    imagen: '',
    actividades: ['Charla - Viernes 23']
  },
  {
    id: 't2',
    nombre: 'Fanzine Lab',
    disciplina: 'Talleres',
    bio: 'Risografía y la escena independiente (En colaboración con Nice Guy Press). Aprende técnicas de autoedición e impresión.',
    imagen: '',
    actividades: ['Taller - Viernes 23']
  },
  {
    id: 't3',
    nombre: 'Visiones Emergentes',
    disciplina: 'Exposiciones',
    bio: 'Muestra permanente de arte y diseño de estudiantes locales. Una mirada al futuro de la creatividad visual.',
    imagen: '',
    actividades: ['Exposición Permanente - Todos los días']
  },
  {
    id: 'c1',
    nombre: 'Santiago de Aranda',
    disciplina: 'Conciertos',
    bio: 'Banda afincada en Madrid. Con influencias tan dispares como Las Vulpes o Radiohead, han construido un sonido madrileño, garajero y potente, que combina voces enfadadas y letras provocativas.',
    imagen: 'santiagodearanda.jpg',
    actividades: ['Concierto - Viernes 23']
  },
  {
    id: 'c2',
    nombre: 'Agosto',
    disciplina: 'Conciertos',
    bio: 'Gusto por el dream pop y el shoegaze, géneros que se caracterizan por letras nostálgicas, sonidos etéreos y atmosféricos.',
    imagen: 'agosto.jpg',
    actividades: ['Concierto - Viernes 23']
  },
  {
    id: 'c3',
    nombre: 'Paula Margalef',
    disciplina: 'Conciertos',
    bio: 'Música con influencia de los 60s, bossa-nova y samba. Indie rock de guitarra, con letras principalmente autobiográficas y armonías vocales.',
    imagen: 'paulamargalef.jpg',
    actividades: ['Concierto - Viernes 23']
  },
  {
    id: 'c4',
    nombre: 'Tetas frías',
    disciplina: 'Conciertos',
    bio: 'Banda de Barcelona con su propuesta “turbo electro mega roc de tu abuela”. Punk entre el cachondeo y el cabreo. Sus canciones duran solo un instante.',
    imagen: 'tetasfrias.jpg',
    actividades: ['Concierto - Viernes 23']
  },
  {
    id: 't4',
    nombre: '¿Dónde estaban las tías?',
    disciplina: 'Charlas',
    bio: 'Conversación sobre la invisibilización de las mujeres en la historia del arte y cómo reescribir el relato desde el presente.',
    imagen: '',
    actividades: ['Charla - Sábado 24']
  },
  {
    id: 't5',
    nombre: 'Barro y Sonido',
    disciplina: 'Talleres',
    bio: 'Creación de instrumentos de cerámica. Un taller experimental que une la alfarería tradicional con el diseño sonoro.',
    imagen: '',
    actividades: ['Taller - Sábado 24']
  },
  {
    id: 't6',
    nombre: 'El impacto de la IA generativa',
    disciplina: 'Charlas',
    bio: 'El impacto de la Inteligencia Artificial generativa en el medioambiente y en el arte. Retos éticos y ecológicos.',
    imagen: '',
    actividades: ['Charla - Sábado 24']
  },
  {
    id: 'p1',
    nombre: 'Cine de Foso',
    disciplina: 'Exposiciones',
    bio: 'Muestra de cortometrajes independientes y videoclips de la escena valenciana.',
    imagen: '',
    actividades: ['Proyecciones - Sábado 24']
  },
  {
    id: 'c5',
    nombre: 'Malditas Gaviotas',
    disciplina: 'Conciertos',
    bio: 'Una banda que ha sabido capturar la esencia del indie y el romanticismo en su música. Con un sonido único que fusiona melodías suaves y letras profundas.',
    imagen: 'malditasgaviotas.jpg',
    actividades: ['Concierto - Sábado 24']
  },
  {
    id: 'c6',
    nombre: 'Diamante Negro',
    disciplina: 'Conciertos',
    bio: 'Grupo de pop de guitarras con letras en español formado en Barcelona, con su formato de trío estable desde 2019.',
    imagen: 'diamantenegro.jpg',
    actividades: ['Concierto - Sábado 24']
  },
  {
    id: 'c7',
    nombre: 'Las Petunias',
    disciplina: 'Conciertos',
    bio: 'Una de las voces más emocionantes de la nueva ola underground española. Su primer LP es un testimonio sonoro de sus ansiedades, romances y el vértigo de ser veinteañeras.',
    imagen: 'petunias.jpg',
    actividades: ['Concierto - Sábado 24']
  },
  {
    id: 'd1',
    nombre: 'Hanna Plum',
    disciplina: 'Dj Sets',
    bio: 'Los sonidos que vertebran a esta DJ son pop y electrónicos sin cerrarse a muchos otros, que dan sentido a su imaginario fuera de los márgenes.',
    imagen: 'hannaplum.jpg',
    actividades: ['Dj Set - Sábado 24']
  },
  {
    id: 't7',
    nombre: 'Vivir del Cuento (Literalmente)',
    disciplina: 'Charlas',
    bio: 'Cómo autopublicarse, sobrevivir a las redes sociales y vender en ferias de autopublicación. Guía de supervivencia creativa.',
    imagen: '',
    actividades: ['Charla - Domingo 25']
  },
  {
    id: 't8',
    nombre: 'Upcycling de Ropa',
    disciplina: 'Talleres',
    bio: 'Taller de Upcycling de Ropa de Segunda Mano. Dale una segunda vida a tus prendas mediante la customización y el diseño circular.',
    imagen: '',
    actividades: ['Taller - Domingo 25']
  },
  {
    id: 'c8',
    nombre: 'La Kala',
    disciplina: 'Conciertos',
    bio: 'Una de las nuevas propuestas frescas que se suman a la escena contemporánea.',
    imagen: 'lakala.jpg',
    actividades: ['Concierto - Domingo 25']
  },
  {
    id: 'c9',
    nombre: 'Amarillo Fiesta',
    disciplina: 'Conciertos',
    bio: 'Canciones divertidas, frikis y con nostalgia dosmilera. Hablan sobre el amor, problemas de precariedad juvenil, dramas millenials, noches de fiesta y pelis.',
    imagen: 'amarillofiesta.jpg',
    actividades: ['Concierto - Domingo 25']
  },
  {
    id: 'c10',
    nombre: 'La Reina Mora',
    disciplina: 'Conciertos',
    bio: 'Directo vibrante que fusiona géneros y pone el foco en la presencia escénica y la conexión emocional con el público.',
    imagen: 'lareinamora.jpg',
    actividades: ['Concierto - Domingo 25']
  },
  {
    id: 'c11',
    nombre: 'Luna Valle',
    disciplina: 'Conciertos',
    bio: 'Artista valenciana que refleja su propio universo a través de composiciones honestas y melodías cautivadoras.',
    imagen: 'lunavalle.jpg',
    actividades: ['Concierto - Domingo 25']
  },
  {
    id: 'c12',
    nombre: 'LG1DO',
    disciplina: 'Conciertos',
    bio: 'Propuesta musical emergente que cierra el festival rompiendo las barreras de los géneros tradicionales.',
    imagen: 'lg1do.jpg',
    actividades: ['Concierto - Domingo 25']
  }
];

export const AGENDA: Evento[] = [
  // DÍA 23
  {
    id: 'e1',
    titulo: 'Ansiedad y Autotune',
    hora: '11:00 - 12:30',
    dia: 'Viernes',
    espacio: 'Sala Visual Room',
    categoria: 'Charlas',
    descripcion: 'La salud mental en la industria musical.'
  },
  {
    id: 'e2',
    titulo: 'Fanzine Lab',
    hora: '12:30 - 14:00',
    dia: 'Viernes',
    espacio: 'Sala Factoría',
    categoria: 'Talleres',
    descripcion: 'Risografía y la escena independiente (En colaboración con Nice Guy Press).'
  },
  {
    id: 'e3',
    titulo: 'Visiones Emergentes',
    hora: '16:30 - 18:30',
    dia: 'Viernes',
    espacio: 'Sala Exposiciones',
    categoria: 'Exposiciones',
    descripcion: 'Muestra de arte y diseño de estudiantes.'
  },
  {
    id: 'e4',
    titulo: 'Santiago de Aranda',
    hora: '18:00 - 19:00',
    dia: 'Viernes',
    espacio: 'Patio 1',
    categoria: 'Conciertos',
    descripcion: 'Concierto en directo en el Patio Principal.'
  },
  {
    id: 'e5',
    titulo: 'Agosto',
    hora: '19:30 - 20:30',
    dia: 'Viernes',
    espacio: 'Patio 1',
    categoria: 'Conciertos',
    descripcion: 'Concierto en directo en el Patio Principal.'
  },
  {
    id: 'e6',
    titulo: 'Paula Margalef',
    hora: '21:00 - 22:00',
    dia: 'Viernes',
    espacio: 'Patio 1',
    categoria: 'Conciertos',
    descripcion: 'Concierto en directo en el Patio Principal.'
  },
  {
    id: 'e7',
    titulo: 'Tetas frías',
    hora: '22:30 - 24:00',
    dia: 'Viernes',
    espacio: 'Patio 1',
    categoria: 'Conciertos',
    descripcion: 'Cierre de jornada con concierto en directo.'
  },

  // DÍA 24
  {
    id: 'e8',
    titulo: '¿Dónde estaban las tías?',
    hora: '11:00 - 12:30',
    dia: 'Sábado',
    espacio: 'Sala Visual Room',
    categoria: 'Charlas',
    descripcion: 'Invisibilización de las mujeres en la historia del arte.'
  },
  {
    id: 'e9',
    titulo: 'Barro y Sonido',
    hora: '12:30 - 14:00',
    dia: 'Sábado',
    espacio: 'Sala Factoría',
    categoria: 'Talleres',
    descripcion: 'Creación de instrumentos de cerámica.'
  },
  {
    id: 'e10',
    titulo: 'El impacto de la IA generativa',
    hora: '16:00 - 17:30',
    dia: 'Sábado',
    espacio: 'Sala Visual Room',
    categoria: 'Charlas',
    descripcion: 'Su repercusión en el medioambiente y en el arte.'
  },
  {
    id: 'e11',
    titulo: 'Cine de Foso',
    hora: '17:30 - 18:40',
    dia: 'Sábado',
    espacio: 'Sala Exposiciones',
    categoria: 'Exposiciones',
    descripcion: 'Muestra de cortometrajes independientes y videoclips de la escena valenciana.'
  },
  {
    id: 'e12',
    titulo: 'Malditas Gaviotas',
    hora: '19:00 - 20:00',
    dia: 'Sábado',
    espacio: 'Patio 1',
    categoria: 'Conciertos',
    descripcion: 'Concierto en directo en el Patio Principal.'
  },
  {
    id: 'e13',
    titulo: 'Diamante Negro',
    hora: '20:30 - 21:30',
    dia: 'Sábado',
    espacio: 'Patio 1',
    categoria: 'Conciertos',
    descripcion: 'Concierto en directo en el Patio Principal.'
  },
  {
    id: 'e14',
    titulo: 'Las Petunias',
    hora: '22:00 - 23:15',
    dia: 'Sábado',
    espacio: 'Patio 1',
    categoria: 'Conciertos',
    descripcion: 'Concierto en directo en el Patio Principal.'
  },
  {
    id: 'e15',
    titulo: 'Hanna Plum',
    hora: '23:45 - 02:00',
    dia: 'Sábado',
    espacio: 'Patio 2',
    categoria: 'Dj Sets',
    descripcion: 'Sesión nocturna de DJ Set.'
  },

  // DÍA 25
  {
    id: 'e16',
    titulo: 'Vivir del Cuento (Literalmente)',
    hora: '11:00 - 12:15',
    dia: 'Domingo',
    espacio: 'Sala Visual Room',
    categoria: 'Charlas',
    descripcion: 'Cómo autopublicarse, sobrevivir a las redes y vender en ferias de autopublicación.'
  },
  {
    id: 'e17',
    titulo: 'Upcycling de Ropa',
    hora: '12:15 - 14:00',
    dia: 'Domingo',
    espacio: 'Sala Factoría',
    categoria: 'Talleres',
    descripcion: 'Taller práctico de prendas de segunda mano.'
  },
  {
    id: 'e18',
    titulo: 'La Kala',
    hora: '19:00 - 19:45',
    dia: 'Domingo',
    espacio: 'Patio 1',
    categoria: 'Conciertos',
    descripcion: 'Concierto en directo en el Patio Principal.'
  },
  {
    id: 'e19',
    titulo: 'Amarillo Fiesta',
    hora: '20:15 - 21:15',
    dia: 'Domingo',
    espacio: 'Patio 1',
    categoria: 'Conciertos',
    descripcion: 'Concierto en directo en el Patio Principal.'
  },
  {
    id: 'e20',
    titulo: 'La Reina Mora',
    hora: '21:45 - 22:30',
    dia: 'Domingo',
    espacio: 'Patio 1',
    categoria: 'Conciertos',
    descripcion: 'Concierto en directo en el Patio Principal.'
  },
  {
    id: 'e21',
    titulo: 'Luna Valle',
    hora: '22:45 - 23:45',
    dia: 'Domingo',
    espacio: 'Patio 1',
    categoria: 'Conciertos',
    descripcion: 'Concierto en directo en el Patio Principal.'
  },
  {
    id: 'e22',
    titulo: 'LG1DO',
    hora: '00:00 - 01:30',
    dia: 'Domingo',
    espacio: 'Patio 1',
    categoria: 'Conciertos',
    descripcion: 'Actuación de cierre del festival.'
  }
];

export const FAQS: FAQ[] = [
  {
    pregunta: "¿Cómo puedo acceder a las actividades y conciertos?",
    respuesta: "El festival cuenta con accesos gratuitos para ciertas áreas y conciertos, mientras que los talleres prácticos requieren de una inscripción previa debido al aforo limitado de las salas en Las Naves."
  },
  {
    pregunta: "¿Cuáles son las normas básicas del festival?",
    respuesta: "ESCLAT es un espacio seguro libre de discriminación. Promovemos de forma activa la sostenibilidad urbana, la diversidad de género y la gestión responsable de residuos dentro de Las Naves."
  }
];