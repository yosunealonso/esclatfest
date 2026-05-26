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
    id: '1',
    nombre: 'Las Petunias',
    disciplina: 'Conciertos',
    bio: 'Las Petunias han crecido hasta convertirse en una de las voces más emocionantes de la nueva ola underground española. Su primer LP, “Creo que soy de porcelana“, es un testimonio sonoro de sus ansiedades, romances y el vértigo de ser veinteañeras con mucho que decir. Es un álbum que golpea fuerte con sus letras íntimas y su energía desenfrenada, pero que también encuentra momentos para la dulzura, recordándonos que ser frágil no es una debilidad, sino una fortaleza.',
    imagen: '', 
    actividades: ['Concierto Principal', 'Charla']
  },
  {
    id: '2',
    nombre: 'Luna Valle',
    disciplina: 'Conciertos',
    bio: 'Luna Valle es una artista valenciana con mucho que contar que ha sorprendido a la escena con canciones como “Estado de Alarma”, “Cultura Audiovisual” o “Tardas Mucho en Contestar” donde refleja su propio universo a través de sus composiciones.',
    imagen: '',
    actividades: ['Concierto']
  },
  {
    id: '3',
    nombre: 'Amarillo Fiesta',
    disciplina: 'Conciertos',
    bio: 'Amarillo Fiesta buscan que sus canciones sean divertidas frikis y con una buena dosis de nostalgia dosmilera, como ellas. Hablan sobre el amor bien, problemas de precariedad juvenil, dramas millenials, noches de fiesta y pelis. Todo lo que les juntó y les pegó con súper glue desde que se conocieron. Son Cris, Gema y Jesús. Sólo les faltaba montar una banda y aquí están.',
    imagen: '',
    actividades: ['Concierto']
  },
  {
    id: '4',
    nombre: 'Paula Margalef',
    disciplina: 'Conciertos',
    bio: 'Sus canciones tienen bastante influencia de la música los 60s, tanto de música anglosajona como brasileña, le encanta la bossa-nova y la samba. Pero al final conserva un cascarón al que algunos darían el nombre “indie rock”, gran y ambiguo paraguas. Música de guitarra, con letras principalmente autobiográficas, armonías vocales y acordes pretenciosos.',
    imagen: '',
    actividades: ['Concierto']
  },
  {
    id: '5',
    nombre: 'Hanna Plum',
    disciplina: 'Dj Sets',
    bio: 'Los sonidos que vertebran a esta DJ son pop y electrónicos sin cerrarse a muchos otros, que dan sentido a su imaginario fuera de los márgenes. Es así que se complementa rodeade de artistas disidentes con propuestas eclécticas y versátiles.',
    imagen: '',
    actividades: ['Concierto']
  },
  {
    id: '6',
    nombre: 'Diamante Negro',
    disciplina: 'Conciertos',
    bio: 'Diamante Negro es un grupo de pop de guitarras con letras en español formado en Barcelona. El proyecto empezó a tomar forma en 2018 en formato de dúo, Benoît y Lucas, y adquirió su formato de trío estable en 2019 cuando se incorporó a la batería Pol.',
    imagen: '',
    actividades: ['Concierto']
  },
  {
    id: '7',
    nombre: 'Tetas frías',
    disciplina: 'Conciertos',
    bio: 'Esta banda de Barcelona etiqueta su propuesta como “turbo electro mega roc de tu abuela” (sic). Punk entre el cachondeo y el cabreo o, para ser más concretos, entre el shitposting y el centro social autogestionado. Sus canciones duran solo un instante, pero siempre les da tiempo a sacarte una sonrisa y después dejártela congelada.',
    imagen: '',
    actividades: ['Concierto']
  },
  {
    id: '8',
    nombre: 'Santiago de Aranda',
    disciplina: 'Conciertos',
    bio: 'Santiago de Aranda es una banda afincada en Madrid formada en 2023 por Carmen (Bajo), Maria (guitarra), Violeta (voz) y Arturo (batería). Con influencias tan dispares como Las Vulpes o Radiohead, han construido un sonido madrileño, garajero y potente, que combina voces enfadadas y letras provocativas. En directo busca crear una atmósfera de desquicie y de catarsis en la que el público no sepa si hacer un pogo o subirse al escenario a gritar.',
    imagen: '',
    actividades: ['Concierto']
  },
  {
    id: '9',
    nombre: 'Agosto',
    disciplina: 'Conciertos',
    bio: 'Más allá de su relación amor-odio con el verano, lo que une a María y Nacho es un gusto por el dream pop y el shoegaze, géneros que se caracterizan por letras nostálgicas, sonidos etéreos y atmosféricos y en general una música que no se prodigaba mucho en nuestro país hasta hace bien poco.',
    imagen: '',
    actividades: ['Concierto']
  },
  {
    id: '10',
    nombre: 'Malditas Gaviotas',
    disciplina: 'Conciertos',
    bio: 'Una banda que ha sabido capturar la esencia del indie y el romanticismo en su música. Con un sonido único que fusiona melodías suaves y letras profundas.',
    imagen: '',
    actividades: ['Concierto']
  }
];

export const AGENDA: Evento[] = [
  {
    id: 'e1',
    titulo: 'Concierto de Apertura',
    hora: '19:00 - 20:30',
    dia: 'Viernes',
    espacio: 'Sala La Polivalent',
    categoria: 'Conciertos',
    descripcion: ''
  },
  {
    id: 'e2',
    titulo: 'Charla: ¿Y si un festival fuera algo más que música?',
    hora: '17:00 - 18:30',
    dia: 'Viernes',
    espacio: 'Sala Factoría',
    categoria: 'Charlas',
    descripcion: 'Espacio de debate abierto sobre los límites de la creación joven contemporánea.'
  },
  {
    id: 'e3',
    titulo: 'Taller',
    hora: '11:00 - 13:00',
    dia: 'Sábado',
    espacio: 'Sala Factoría',
    categoria: 'Talleres',
    descripcion: ''
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