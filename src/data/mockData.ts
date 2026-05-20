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
  enfoque: "Parte de una programación musical diversa",
  valores: "Los temas a tratar "
};

export const ARTISTAS: Artista[] = [
  {
    id: '1',
    nombre: 'Las Petunias',
    disciplina: 'Conciertos',
    bio: 'Las Petunias han crecido hasta convertirse en una de las voces más emocionantes de la nueva ola underground española. Su primer LP, “Creo que soy de porcelana“, es un testimonio sonoro de sus ansiedades, romances y el vértigo de ser veinteañeras con mucho que decir. Es un álbum que golpea fuerte con sus letras íntimas y su energía desenfrenada, pero que también encuentra momentos para la dulzura, recordándonos que ser frágil no es una debilidad, sino una fortaleza.',
    imagen: '', 
    actividades: ['Concierto Principal', 'Mesa redonda:']
  },
  {
    id: '2',
    nombre: 'Luna Valle',
    disciplina: 'Conciertos',
    bio: '',
    imagen: '',
    actividades: ['']
  },
  {
    id: '3',
    nombre: 'Amarillo Fiesta',
    disciplina: 'Conciertos',
    bio: '',
    imagen: '',
    actividades: ['']
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