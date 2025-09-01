const DashboardPage = () => {
  const { user, logout } = useAuth();
  
  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="p-6">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="h-10 w-10 text-cyan-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">{user.name}</h3>
                <p className="text-gray-600">{user.email}</p>
              </div>
              
              <nav className="space-y-2">
                <a href="/dashboard" className="flex items-center px-3 py-2 text-gray-900 bg-gray-100 rounded-lg">
                  <svg className="h-5 w-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                  Dashboard
                </a>
                <a href="/dashboard/cursos" className="flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
                  <svg className="h-5 w-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                  </svg>
                  Mis cursos
                </a>
                <a href="/dashboard/recursos" className="flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
                  <svg className="h-5 w-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  Recursos descargados
                </a>
                <a href="/dashboard/asesorias" className="flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
                  <svg className="h-5 w-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                    <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                  </svg>
                  Mis asesorías
                </a>
                <button
                  onClick={logout}
                  className="flex items-center px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg w-full text-left"
                >
                  <svg className="h-5 w-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" />
                  </svg>
                  Cerrar sesión
                </button>
              </nav>
            </Card>
          </div>
          
          {/* Main Content */}
          <div className="lg:col-span-3">
            <Card className="p-8">
              <h1 className="text-2xl font-bold text-gray-900 mb-6">Bienvenido, {user.name} 👋</h1>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl p-6 text-white">
                  <h3 className="text-lg font-semibold mb-2">Progreso en cursos</h3>
                  <div className="text-3xl font-bold mb-1">{user.progress.completedCourses}/{user.progress.totalCourses}</div>
                  <div className="text-cyan-100">cursos completados</div>
                </div>
                
                <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl p-6 text-white">
                  <h3 className="text-lg font-semibold mb-2">Logros</h3>
                  <div className="text-3xl font-bold mb-1">{user.progress.badges.length}</div>
                  <div className="text-green-100">badges obtenidos</div>
                </div>
              </div>
              
              <h2 className="text-xl font-bold text-gray-900 mb-4">Tus últimos cursos</h2>
              <div className="space-y-4">
                {mockCourses.slice(0, 2).map((course) => (
                  <div key={course.id} className="flex items-center p-4 border border-gray-200 rounded-lg">
                    <img src={course.image} alt={course.title} className="w-16 h-16 rounded-lg object-cover" />
                    <div className="ml-4 flex-1">
                      <h3 className="font-medium text-gray-900">{course.title}</h3>
                      <p className="text-sm text-gray-600">{course.area}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-500">Progreso</div>
                      <div className="w-24 bg-gray-200 rounded-full h-2 mt-1">
                        <div className="bg-cyan-600 h-2 rounded-full" style={{ width: '60%' }}></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Tus badges</h2>
                <div className="flex flex-wrap gap-2">
                  {user.progress.badges.map((badge, index) => (
                    <Badge key={index} variant="primary" className="px-4 py-2">
                      {badge}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

const AdminPage = () => {
  const { user } = useAuth();
  const [consultations, setConsultations] = useState(mockConsultations);
  const [filter, setFilter] = useState('all');

  if (!user || user.role !== 'admin') return null;

  const filteredConsultations = filter === 'all' 
    ? consultations 
    : consultations.filter(c => c.status.toLowerCase() === filter);

  const updateStatus = (id, status) => {
    setConsultations(consultations.map(c => 
      c.id === id ? { ...c, status } : c
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Panel de Administración</h1>
          <p className="text-gray-600">Gestiona las solicitudes de asesoría de los usuarios</p>
        </div>

        <Card className="mb-8">
          <div className="p-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <h2 className="text-xl font-bold text-gray-900">Solicitudes de Asesoría</h2>
              <div className="flex gap-2">
                <Button
                  variant={filter === 'all' ? 'primary' : 'outline'}
                  size="sm"
                  onClick={() => setFilter('all')}
                >
                  Todas
                </Button>
                <Button
                  variant={filter === 'pendiente' ? 'primary' : 'outline'}
                  size="sm"
                  onClick={() => setFilter('pendiente')}
                >
                  Pendientes
                </Button>
                <Button
                  variant={filter === 'confirmada' ? 'primary' : 'outline'}
                  size="sm"
                  onClick={() => setFilter('confirmada')}
                >
                  Confirmadas
                </Button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Paciente</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mentor</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Área</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredConsultations.map((consultation) => (
                    <tr key={consultation.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {consultation.patientName}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {consultation.mentor}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {consultation.area}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {consultation.date} a las {consultation.time}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <Badge 
                          variant={
                            consultation.status === 'Confirmada' ? 'success' : 
                            consultation.status === 'Pendiente' ? 'warning' : 'default'
                          }
                        >
                          {consultation.status}
                        </Badge>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex gap-2">
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => updateStatus(consultation.id, 'Confirmada')}
                            disabled={consultation.status === 'Confirmada'}
                          >
                            Confirmar
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="sm"
                            className="text-red-600"
                          >
                            Eliminar
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 text-center">
            <div className="text-3xl font-bold text-cyan-600 mb-2">24</div>
            <div className="text-gray-600">Solicitudes totales</div>
          </Card>
          <Card className="p-6 text-center">
            <div className="text-3xl font-bold text-yellow-600 mb-2">8</div>
            <div className="text-gray-600">Pendientes</div>
          </Card>
          <Card className="p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">16</div>
            <div className="text-gray-600">Confirmadas</div>
          </Card>
        </div>
      </div>
    </div>
  );
};

// Main App Component
const App = () => {
  const [currentPath, setCurrentPath] = useState('/');

  useEffect(() => {
    const path = window.location.pathname;
    setCurrentPath(path);
  }, []);

  const renderPage = () => {
    switch (currentPath) {
      case '/':
        return <HomePage />;
      case '/recursos':
        return <ResourcesPage />;
      case '/academia':
        return <AcademiaPage />;
      case '/asesorias':
        return <AsesoriasPage />;
      case '/contacto':
        return <ContactoPage />;
      case '/login':
        return <LoginPage />;
      case '/register':
        return <RegisterPage />;
      case '/dashboard':
        return <DashboardPage />;
      case '/admin':
        return <AdminPage />;
      default:
        if (currentPath.startsWith('/recursos/')) {
          const resourceId = parseInt(currentPath.split('/').pop());
          const resource = mockResources.find(r => r.id === resourceId);
          return resource ? <ResourceDetailPage resource={resource} /> : <HomePage />;
        } else if (currentPath.startsWith('/academia/')) {
          const courseId = parseInt(currentPath.split('/').pop());
          const course = mockCourses.find(c => c.id === courseId);
          return course ? <CourseDetailPage course={course} /> : <AcademiaPage />;
        }
        return <HomePage />;
    }
  };

  return (
    <AuthProvider>
      {currentPath !== '/login' && currentPath !== '/register' && <Header />}
      {renderPage()}
      {currentPath !== '/login' && currentPath !== '/register' && <Footer />}
    </AuthProvider>
  );
};

export default App;import React, { useState, useEffect, createContext, useContext } from 'react';

// Context for authentication
const AuthContext = createContext();

// Mock data
const mockMentors = [
  {
    id: 1,
    name: 'Dra. Ana Martínez',
    specialty: 'Neurofoniatria',
    experience: '12 años',
    image: 'https://placehold.co/300x300/3498db/ffffff?text=AM',
    bio: 'Experta en trastornos de la deglución y neurología del habla.'
  },
  {
    id: 2,
    name: 'Dr. Carlos Rodríguez',
    specialty: 'Voz y Canto',
    experience: '8 años',
    image: 'https://placehold.co/300x300/2ecc71/ffffff?text=CR',
    bio: 'Especialista en rehabilitación vocal y entrenamiento de cantantes.'
  },
  {
    id: 3,
    name: 'Dra. Laura Sánchez',
    specialty: 'TEA y Comunicación Aumentativa',
    experience: '10 años',
    image: 'https://placehold.co/300x300/9b59b6/ffffff?text=LS',
    bio: 'Pionera en el uso de tecnologías asistivas para personas con autismo.'
  }
];

const mockCourses = [
  {
    id: 1,
    title: 'NeuroDeglución Avanzada',
    area: 'Neurofoniatria',
    level: 'Avanzado',
    duration: '8 semanas',
    price: 299,
    image: 'https://placehold.co/400x250/3498db/ffffff?text=NeuroDeglucion',
    description: 'Curso completo sobre evaluación y tratamiento de trastornos de la deglución en adultos con patologías neurológicas.',
    modules: [
      'Anatomía y fisiología de la deglución',
      'Evaluación clínica e instrumental',
      'Técnicas de rehabilitación',
      'Manejo multidisciplinario'
    ],
    quizzes: [
      {
        id: 1,
        question: '¿Cuál es la fase más crítica de la deglución?',
        options: ['Oral', 'Faringea', 'Esófaga', 'Preparación'],
        correct: 1
      },
      {
        id: 2,
        question: '¿Qué técnica se utiliza para mejorar la coordinación respiración-deglución?',
        options: ['Masaje laríngeo', 'Shaker', 'Maniobra de Mendelsohn', 'Supraglótica'],
        correct: 3
      }
    ]
  },
  {
    id: 2,
    title: 'Intervención en TEA',
    area: 'Trastornos del Espectro Autista',
    level: 'Intermedio',
    duration: '6 semanas',
    price: 249,
    image: 'https://placehold.co/400x250/e74c3c/ffffff?text=TEA',
    description: 'Estrategias prácticas para la intervención fonoaudiológica en niños con Trastorno del Espectro Autista.',
    modules: [
      'Diagnóstico y evaluación',
      'Comunicación aumentativa',
      'Juego simbólico',
      'Intervención familiar'
    ],
    quizzes: [
      {
        id: 1,
        question: '¿Cuál es un marcador temprano de TEA?',
        options: ['Hiperactividad', 'Ausencia de puntoo declarativo', 'Habla temprana', 'Excelente memoria'],
        correct: 1
      }
    ]
  },
  {
    id: 3,
    title: 'Rehabilitación de la Voz',
    area: 'Foniatría',
    level: 'Intermedio',
    duration: '5 semanas',
    price: 199,
    image: 'https://placehold.co/400x250/f39c12/ffffff?text=Voz',
    description: 'Técnicas avanzadas de rehabilitación vocal para pacientes con disfonías funcionales y orgánicas.',
    modules: [
      'Evaluación perceptiva y acústica',
      'Terapia vocal conductual',
      'Manejo de nódulos vocales',
      'Entrenamiento para profesionales de la voz'
    ],
    quizzes: [
      {
        id: 1,
        question: '¿Qué técnica se utiliza para reducir la hiperfunción laríngea?',
        options: ['Respiración diafragmática', 'Técnica de resonancia', 'Entrenamiento de loudness', 'Todos los anteriores'],
        correct: 3
      }
    ]
  },
  {
    id: 4,
    title: 'Afasias y Trastornos del Lenguaje',
    area: 'Neurofoniatria',
    level: 'Avanzado',
    duration: '7 semanas',
    price: 279,
    image: 'https://placehold.co/400x250/8e44ad/ffffff?text=Afasias',
    description: 'Profundización en la evaluación y tratamiento de afasias y otros trastornos del lenguaje adquiridos.',
    modules: [
      'Clasificación de afasias',
      'Evaluación neuropsicolingüística',
      'Terapia basada en evidencia',
      'Rehabilitación cognitiva'
    ]
  }
];

const mockResources = [
  {
    id: 1,
    title: 'Guía Clínica de Disfagia',
    type: 'Guía',
    area: 'Neurofoniatria',
    level: 'Profesional',
    file: 'guia_disfagia.pdf',
    downloads: 1247,
    image: 'https://placehold.co/300x200/3498db/ffffff?text=Guia+Disfagia'
  },
  {
    id: 2,
    title: 'Protocolo TEA',
    type: 'Protocolo',
    area: 'Trastornos del Espectro Autista',
    level: 'Intermedio',
    file: 'protocolo_tea.pdf',
    downloads: 892,
    image: 'https://placehold.co/300x200/e74c3c/ffffff?text=Protocolo+TEA'
  },
  {
    id: 3,
    title: 'Plantillas de Evaluación',
    type: 'Plantilla',
    area: 'General',
    level: 'Todos los niveles',
    file: 'plantillas_evaluacion.zip',
    downloads: 1563,
    image: 'https://placehold.co/300x200/27ae60/ffffff?text=Plantillas'
  },
  {
    id: 4,
    title: 'Artículo: Nuevas Técnicas en Voz',
    type: 'Artículo',
    area: 'Foniatría',
    level: 'Avanzado',
    file: 'articulo_voz.pdf',
    downloads: 678,
    image: 'https://placehold.co/300x200/f39c12/ffffff?text=Articulo+Voz'
  }
];

const mockConsultations = [
  {
    id: 1,
    patientName: 'María González',
    mentor: 'Dra. Ana Martínez',
    area: 'Neurofoniatria',
    date: '2024-01-15',
    time: '10:00',
    status: 'Pendiente',
    notes: 'Consulta sobre caso de disfagia post-AVC'
  },
  {
    id: 2,
    patientName: 'Carlos Pérez',
    mentor: 'Dr. Carlos Rodríguez',
    area: 'Voz',
    date: '2024-01-16',
    time: '14:30',
    status: 'Confirmada',
    notes: 'Evaluación de nódulos vocales'
  }
];

// Auth Provider Component
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate auth check
    const storedUser = localStorage.getItem('tufono-user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    // Simulate login
    const mockUser = {
      id: 1,
      name: email.split('@')[0],
      email,
      role: email === 'admin@tufono.com' ? 'admin' : 'user',
      progress: {
        completedCourses: 2,
        totalCourses: 8,
        badges: ['Neurofoniatria Básica', 'TEA Intro']
      }
    const LoginPage = () => {
  const { login, loading } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    try {
      await login(formData.email, formData.password);
    } catch (err) {
      setError('Credenciales inválidas. Por favor, intenta nuevamente.');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="flex justify-center">
            <svg className="h-12 w-12 text-cyan-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
          </div>
          <h2 className="mt-6 text-3xl font-bold text-gray-900">Iniciar sesión</h2>
          <p className="mt-2 text-gray-600">Accede a tu cuenta de TuFonoFormacion</p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}
          
          <div className="space-y-4">
            <Input
              label="Correo electrónico"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            
            <Input
              label="Contraseña"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? 'Iniciando sesión...' : 'Iniciar sesión'}
            </Button>
          </div>

          <div className="text-center">
            <p className="text-gray-600">
              ¿No tienes cuenta?{' '}
              <a href="/register" className="text-cyan-600 hover:text-cyan-700 font-medium">
                Regístrate aquí
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

const RegisterPage = () => {
  const { register, loading } = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (formData.password !== formData.confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }
    
    try {
      await register(formData.name, formData.email, formData.password);
      setSuccess(true);
    } catch (err) {
      setError('Error al registrar. Por favor, intenta nuevamente.');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (success) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="h-8 w-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">¡Registro exitoso!</h2>
            <p className="mt-4 text-gray-600">
              Tu cuenta ha sido creada correctamente. Ahora puedes iniciar sesión con tus credenciales.
            </p>
            <div className="mt-8">
              <Button href="/login" className="w-full">
                Iniciar sesión
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="flex justify-center">
            <svg className="h-12 w-12 text-cyan-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
          </div>
          <h2 className="mt-6 text-3xl font-bold text-gray-900">Crear cuenta</h2>
          <p className="mt-2 text-gray-600">Regístrate para acceder a nuestros cursos y recursos</p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}
          
          <div className="space-y-4">
            <Input
              label="Nombre completo"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            
            <Input
              label="Correo electrónico"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            
            <Input
              label="Contraseña"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            
            <Input
              label="Confirmar contraseña"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? 'Registrando...' : 'Crear cuenta'}
            </Button>
          </div>

          <div className="text-center">
            <p className="text-gray-600">
              ¿Ya tienes cuenta?{' '}
              <a href="/login" className="text-cyan-600 hover:text-cyan-700 font-medium">
                Inicia sesión aquí
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
    setUser(mockUser);
    localStorage.setItem('tufono-user', JSON.stringify(mockUser));
    return Promise.resolve();
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('tufono-user');
  };

  const register = (name, email, password) => {
    const mockUser = {
      id: Date.now(),
      name,
      email,
      role: 'user',
      progress: {
        completedCourses: 0,
        totalCourses: 8,
        badges: []
      }
    };
    setUser(mockUser);
    localStorage.setItem('tufono-user', JSON.stringify(mockUser));
    return Promise.resolve();
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hooks
const useAuth = () => useContext(AuthContext);

// UI Components
const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseClasses = "px-6 py-3 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 focus:ring-cyan-500",
    secondary: "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 focus:ring-blue-500",
    outline: "border border-cyan-500 text-cyan-600 bg-transparent hover:bg-cyan-50 focus:ring-cyan-500",
    ghost: "text-gray-600 hover:bg-gray-100 focus:ring-gray-500"
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const Card = ({ children, className = '' }) => {
  return (
    <div className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl ${className}`}>
      {children}
    </div>
  );
};

const Input = ({ label, type = 'text', ...props }) => {
  return (
    <div className="space-y-2">
      {label && <label className="block text-sm font-medium text-gray-700">{label}</label>}
      <input
        type={type}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors duration-200"
        {...props}
      />
    </div>
  );
};

const Select = ({ label, options, ...props }) => {
  return (
    <div className="space-y-2">
      {label && <label className="block text-sm font-medium text-gray-700">{label}</label>}
      <select
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white transition-colors duration-200"
        {...props}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value || option}>
            {option.label || option}
          </option>
        ))}
      </select>
    </div>
  );
};

const Badge = ({ children, variant = 'default', className = '' }) => {
  const variants = {
    default: 'bg-gray-100 text-gray-800',
    primary: 'bg-cyan-100 text-cyan-800',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    danger: 'bg-red-100 text-red-800'
  };

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};

// Main Components
const Header = () => {
  const { user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center">
                <svg className="h-8 w-8 text-cyan-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                <span className="ml-2 text-xl font-bold text-gray-900">TuFonoFormacion</span>
              </div>
            </div>
            <nav className="hidden md:ml-8 md:flex md:space-x-8">
              <a href="/" className="text-gray-700 hover:text-cyan-600 px-3 py-2 text-sm font-medium transition-colors duration-200">Inicio</a>
              <a href="/recursos" className="text-gray-700 hover:text-cyan-600 px-3 py-2 text-sm font-medium transition-colors duration-200">Recursos</a>
              <a href="/academia" className="text-gray-700 hover:text-cyan-600 px-3 py-2 text-sm font-medium transition-colors duration-200">Academia</a>
              <a href="/asesorias" className="text-gray-700 hover:text-cyan-600 px-3 py-2 text-sm font-medium transition-colors duration-200">Asesorías</a>
              <a href="/contacto" className="text-gray-700 hover:text-cyan-600 px-3 py-2 text-sm font-medium transition-colors duration-200">Contacto</a>
            </nav>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <>
                <span className="text-sm text-gray-600">Hola, {user.name}</span>
                {user.role === 'admin' && (
                  <Button variant="outline" size="sm" href="/admin">Admin</Button>
                )}
                <Button variant="ghost" onClick={logout}>Cerrar sesión</Button>
              </>
            ) : (
              <>
                <Button variant="outline" href="/login">Iniciar sesión</Button>
                <Button href="/register">Registrarse</Button>
              </>
            )}
          </div>

          <div className="flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-cyan-600 p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <a href="/" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-cyan-600">Inicio</a>
            <a href="/recursos" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-cyan-600">Recursos</a>
            <a href="/academia" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-cyan-600">Academia</a>
            <a href="/asesorias" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-cyan-600">Asesorías</a>
            <a href="/contacto" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-cyan-600">Contacto</a>
            {user ? (
              <>
                <button onClick={logout} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-cyan-600">Cerrar sesión</button>
              </>
            ) : (
              <>
                <a href="/login" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-cyan-600">Iniciar sesión</a>
                <a href="/register" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-cyan-600">Registrarse</a>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center">
              <svg className="h-8 w-8 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
              <span className="ml-2 text-xl font-bold">TuFonoFormacion</span>
            </div>
            <p className="mt-4 text-gray-300">
              Plataforma de educación continua para fonoaudiólogos. Ofrecemos cursos, recursos y asesorías especializadas para tu desarrollo profesional.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">Enlaces</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors duration-200">Inicio</a></li>
              <li><a href="/recursos" className="text-gray-300 hover:text-white transition-colors duration-200">Recursos</a></li>
              <li><a href="/academia" className="text-gray-300 hover:text-white transition-colors duration-200">Academia</a></li>
              <li><a href="/asesorias" className="text-gray-300 hover:text-white transition-colors duration-200">Asesorías</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">Contacto</h3>
            <ul className="mt-4 space-y-2 text-gray-300">
              <li>info@tufonoformacion.com</li>
              <li>+56 9 1234 5678</li>
              <li>Santiago, Chile</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2024 TuFonoFormacion. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

const CourseCard = ({ course, onClick }) => {
  return (
    <Card onClick={onClick} className="cursor-pointer transform transition-all duration-300 hover:-translate-y-2">
      <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <Badge variant="primary">{course.area}</Badge>
          <Badge>{course.level}</Badge>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{course.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-cyan-600">${course.price}</span>
          <span className="text-sm text-gray-500">{course.duration}</span>
        </div>
      </div>
    </Card>
  );
};

const MentorCard = ({ mentor }) => {
  return (
    <Card className="text-center">
      <img src={mentor.image} alt={mentor.name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
      <h3 className="text-xl font-bold text-gray-900 mb-1">{mentor.name}</h3>
      <p className="text-cyan-600 font-medium mb-2">{mentor.specialty}</p>
      <p className="text-gray-600 text-sm mb-3">{mentor.experience} de experiencia</p>
      <p className="text-gray-600 text-sm mb-4">{mentor.bio}</p>
      <Button variant="outline" className="w-full">Ver perfil</Button>
    </Card>
  );
};

const ResourceCard = ({ resource, onClick }) => {
  return (
    <Card onClick={onClick} className="cursor-pointer">
      <img src={resource.image} alt={resource.title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <Badge variant="success">{resource.type}</Badge>
          <Badge>{resource.area}</Badge>
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">{resource.title}</h3>
        <div className="flex items-center text-sm text-gray-500">
          <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
            <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
          </svg>
          {resource.downloads} descargas
        </div>
      </div>
    </Card>
  );
};

// Pages
const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cyan-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Plataforma líder en educación fonoaudiológica</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Eleva tu práctica clínica con formación especializada
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Accede a cursos, recursos y asesorías diseñadas por expertos para fonoaudiólogos que buscan excelencia en su práctica profesional.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg">Explorar cursos</Button>
                <Button variant="outline" size="lg" className="text-lg">Conocer más</Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://placehold.co/600x400/cyan/white?text=Formación+Fonoaudiológica" 
                alt="Formación fonoaudiológica" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold text-cyan-600">500+</div>
                <div className="text-gray-600">Profesionales formados</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Sobre Nosotros</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              En TuFonoFormacion creemos en el poder de la educación continua para transformar la práctica fonoaudiológica.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="h-8 w-8 text-cyan-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Excelencia Académica</h3>
              <p className="text-gray-600">
                Nuestros contenidos son desarrollados y revisados por expertos con amplia experiencia clínica y académica.
              </p>
            </Card>
            
            <Card className="text-center p-8">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="h-8 w-8 text-cyan-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Contenido Actualizado</h3>
              <p className="text-gray-600">
                Mantenemos nuestros materiales al día con las últimas evidencias científicas y avances en la práctica clínica.
              </p>
            </Card>
            
            <Card className="text-center p-8">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="h-8 w-8 text-cyan-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Comunidad Profesional</h3>
              <p className="text-gray-600">
                Conecta con colegas, comparte experiencias y resuelve tus dudas en un entorno de aprendizaje colaborativo.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Áreas de Formación</h2>
            <p className="text-xl text-gray-600">Descubre nuestros cursos más populares</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockCourses.slice(0, 3).map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline">Ver todos los cursos</Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-cyan-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">¿Listo para transformar tu práctica profesional?</h2>
          <p className="text-xl mb-8 opacity-90">
            Únete a cientos de fonoaudiólogos que ya están mejorando sus habilidades con nuestra plataforma.
          </p>
          <Button size="lg" className="bg-white text-cyan-600 hover:bg-gray-100">Comenzar ahora</Button>
        </div>
      </section>
    </div>
  );
};

const ResourcesPage = () => {
  const [selectedArea, setSelectedArea] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');
  
  const areas = ['Todos', ...new Set(mockResources.map(r => r.area))];
  
  const filteredResources = mockResources.filter(resource => {
    const matchesArea = selectedArea === 'Todos' || resource.area === selectedArea;
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesArea && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Recursos para Fonoaudiólogos</h1>
          <p className="text-xl text-gray-600">
            Accede a guías clínicas, protocolos, plantillas y artículos científicos actualizados.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <Input
                label="Buscar recursos"
                placeholder="Ej: Disfagia, TEA, Voz..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="w-full md:w-64">
              <Select
                label="Área de interés"
                value={selectedArea}
                onChange={(e) => setSelectedArea(e.target.value)}
                options={areas.map(area => ({ value: area, label: area }))}
              />
            </div>
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredResources.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>

        {filteredResources.length === 0 && (
          <div className="text-center py-12">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="mt-4 text-lg font-medium text-gray-900">No se encontraron recursos</h3>
            <p className="mt-2 text-gray-500">Intenta con otros términos de búsqueda o filtra por otra área.</p>
          </div>
        )}
      </div>
    </div>
  );
};

const CourseDetailPage = ({ course }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const handleQuizSubmit = () => {
    setQuizSubmitted(true);
  };

  const getQuizScore = () => {
    if (!quizSubmitted) return 0;
    const correctAnswers = course.quizzes.filter((quiz, index) => 
      quizAnswers[index] === quiz.correct
    ).length;
    return Math.round((correctAnswers / course.quizzes.length) * 100);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <button className="flex items-center text-cyan-600 hover:text-cyan-700 mb-6">
          <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Volver a cursos
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="overflow-hidden">
              <img src={course.image} alt={course.title} className="w-full h-64 object-cover" />
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="primary">{course.area}</Badge>
                  <Badge>{course.level}</Badge>
                </div>
                
                <h1 className="text-3xl font-bold text-gray-900 mb-4">{course.title}</h1>
                <p className="text-xl text-gray-600 mb-6">{course.description}</p>
                
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center">
                    <span className="text-3xl font-bold text-cyan-600">${course.price}</span>
                    <span className="text-gray-500 ml-2">por curso</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">Duración</div>
                    <div className="font-medium">{course.duration}</div>
                  </div>
                </div>

                {/* Tabs */}
                <div className="border-b border-gray-200 mb-6">
                  <nav className="flex space-x-8">
                    {['overview', 'modules', 'quiz'].map((tab) => (
                      <button
                        key={tab}
                        className={`py-4 px-1 border-b-2 font-medium text-sm capitalize transition-colors duration-200 ${
                          activeTab === tab
                            ? 'border-cyan-500 text-cyan-600'
                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                        }`}
                        onClick={() => setActiveTab(tab)}
                      >
                        {tab}
                      </button>
                    ))}
                  </nav>
                </div>

                {/* Tab Content */}
                {activeTab === 'overview' && (
                  <div className="prose max-w-none">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Acerca del curso</h3>
                    <p className="text-gray-600 mb-4">
                      Este curso avanzado proporciona una formación integral en {course.area.toLowerCase()}, 
                      combinando conocimientos teóricos con aplicaciones prácticas basadas en evidencia científica.
                    </p>
                    <p className="text-gray-600">
                      Dirigido a fonoaudiólogos con experiencia clínica que desean profundizar en esta área específica 
                      y mejorar sus habilidades diagnósticas y terapéuticas.
                    </p>
                  </div>
                )}

                {activeTab === 'modules' && (
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-6">Módulos del curso</h3>
                    <div className="space-y-4">
                      {course.modules.map((module, index) => (
                        <div key={index} className="flex items-center p-4 border border-gray-200 rounded-lg">
                          <div className="flex-shrink-0 w-8 h-8 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center font-medium">
                            {index + 1}
                          </div>
                          <div className="ml-4">
                            <h4 className="font-medium text-gray-900">{module}</h4>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'quiz' && (
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-6">Evaluación</h3>
                    
                    {!quizSubmitted ? (
                      <div className="space-y-6">
                        {course.quizzes.map((quiz, index) => (
                          <div key={quiz.id} className="border border-gray-200 rounded-lg p-6">
                            <h4 className="font-semibold text-gray-900 mb-4">
                              {index + 1}. {quiz.question}
                            </h4>
                            <div className="space-y-2">
                              {quiz.options.map((option, optionIndex) => (
                                <label key={optionIndex} className="flex items-center p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                                  <input
                                    type="radio"
                                    name={`quiz-${quiz.id}`}
                                    value={optionIndex}
                                    onChange={(e) => setQuizAnswers({
                                      ...quizAnswers,
                                      [index]: parseInt(e.target.value)
                                    })}
                                    className="text-cyan-600 focus:ring-cyan-500"
                                  />
                                  <span className="ml-3">{option}</span>
                                </label>
                              ))}
                            </div>
                          </div>
                        ))}
                        
                        <Button onClick={handleQuizSubmit} className="w-full">
                          Enviar respuestas
                        </Button>
                      </div>
                    ) : (
                      <div className="text-center py-12">
                        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <svg className="h-12 w-12 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <h4 className="text-2xl font-bold text-gray-900 mb-2">¡Quiz completado!</h4>
                        <p className="text-gray-600 mb-4">Tu puntaje: {getQuizScore()}%</p>
                        <div className="flex gap-4">
                          <Button variant="outline">Volver a intentar</Button>
                          <Button>Continuar curso</Button>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </Card>
          </div>

          <div>
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Información del curso</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Duración</span>
                  <span className="font-medium">{course.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Nivel</span>
                  <span className="font-medium">{course.level}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Área</span>
                  <span className="font-medium">{course.area}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Módulos</span>
                  <span className="font-medium">{course.modules.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Quizzes</span>
                  <span className="font-medium">{course.quizzes.length}</span>
                </div>
              </div>
              
              <hr className="my-6" />
              
              <Button size="lg" className="w-full">
                Inscribirse en el curso
              </Button>
            </Card>

            <Card className="p-6 mt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Mentores del curso</h3>
              <div className="space-y-4">
                {mockMentors.slice(0, 2).map((mentor) => (
                  <div key={mentor.id} className="flex items-center">
                    <img src={mentor.image} alt={mentor.name} className="w-10 h-10 rounded-full object-cover" />
                    <div className="ml-3">
                      <div className="font-medium text-gray-900 text-sm">{mentor.name}</div>
                      <div className="text-cyan-600 text-sm">{mentor.specialty}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

const AcademiaPage = () => {
  const [selectedArea, setSelectedArea] = useState('Todos');
  
  const areas = ['Todos', ...new Set(mockCourses.map(c => c.area))];
  const filteredCourses = selectedArea === 'Todos' 
    ? mockCourses 
    : mockCourses.filter(c => c.area === selectedArea);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Academia TuFonoFormacion</h1>
          <p className="text-xl text-gray-600 mb-8">
            Cursos interactivos y especializados para tu desarrollo profesional continuo.
          </p>
          
          <div className="max-w-md mx-auto">
            <Select
              label="Filtrar por área de formación"
              value={selectedArea}
              onChange={(e) => setSelectedArea(e.target.value)}
              options={areas.map(area => ({ value: area, label: area }))}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.707a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="mt-4 text-lg font-medium text-gray-900">No hay cursos disponibles</h3>
            <p className="mt-2 text-gray-500">Intenta con otra área de formación.</p>
          </div>
        )}
      </div>
    </div>
  );
};

const AsesoriasPage = () => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    mentor: '',
    area: '',
    date: '',
    time: '',
    patientName: '',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="text-center p-12">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="h-12 w-12 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">¡Solicitud enviada!</h2>
            <p className="text-gray-600 mb-6">
              Tu solicitud de asesoría ha sido enviada correctamente. Un miembro de nuestro equipo se pondrá en contacto contigo para confirmar los detalles.
            </p>
            <Button onClick={() => setSubmitted(false)}>Enviar otra solicitud</Button>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Solicitar Asesoría Profesional</h1>
          <p className="text-xl text-gray-600">
            Conecta con nuestros expertos para obtener orientación en casos clínicos complejos.
          </p>
        </div>

        <Card className="p-8">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <Input
                label="Nombre del paciente"
                name="patientName"
                value={formData.patientName}
                onChange={handleChange}
                required
              />
              
              <Select
                label="Área de interés"
                name="area"
                value={formData.area}
                onChange={handleChange}
                options={[
                  { value: '', label: 'Selecciona un área' },
                  { value: 'Neurofoniatria', label: 'Neurofoniatria' },
                  { value: 'TEA', label: 'Trastornos del Espectro Autista' },
                  { value: 'Voz', label: 'Voz y Canto' },
                  { value: 'Deglución', label: 'Deglución' },
                  { value: 'Lenguaje', label: 'Lenguaje' }
                ]}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <Select
                label="Seleccionar mentor"
                name="mentor"
                value={formData.mentor}
                onChange={handleChange}
                options={[
                  { value: '', label: 'Selecciona un mentor' },
                  ...mockMentors.map(mentor => ({
                    value: mentor.id,
                    label: mentor.name
                  }))
                ]}
                required
              />
              
              <Input
                label="Fecha sugerida"
                name="date"
                type="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <Input
                label="Hora sugerida"
                name="time"
                type="time"
                value={formData.time}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Detalles del caso y preguntas
              </label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors duration-200"
                placeholder="Describe brevemente el caso clínico, los desafíos que enfrentas y las preguntas específicas que tienes..."
                required
              />
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <div className="flex">
                <svg className="h-5 w-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <div>
                  <h4 className="text-sm font-medium text-blue-900">Información importante</h4>
                  <p className="text-sm text-blue-800 mt-1">
                    Las asesorías son sesiones de 45 minutos destinadas a orientación profesional. 
                    Por favor, no compartas información de identificación de pacientes.
                  </p>
                </div>
              </div>
            </div>

            <Button type="submit" size="lg" className="w-full">
              Enviar solicitud de asesoría
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

const ContactoPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="text-center p-12">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="h-12 w-12 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">¡Mensaje enviado!</h2>
            <p className="text-gray-600 mb-6">
              Gracias por contactarnos. Hemos recibido tu mensaje y responderemos lo antes posible.
            </p>
            <Button onClick={() => setSubmitted(false)}>Enviar otro mensaje</Button>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contáctanos</h1>
          <p className="text-xl text-gray-600">
            Estamos aquí para ayudarte. Envíanos un mensaje y te responderemos lo antes posible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <Card className="h-full p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Información de contacto</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center">
                    <svg className="h-5 w-5 text-cyan-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Correo electrónico</h3>
                    <p className="text-gray-600">info@tufonoformacion.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center">
                    <svg className="h-5 w-5 text-cyan-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Teléfono</h3>
                    <p className="text-gray-600">+56 9 1234 5678</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center">
                    <svg className="h-5 w-5 text-cyan-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Dirección</h3>
                    <p className="text-gray-600">Av. Providencia 1234, Santiago, Chile</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Horario de atención</h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>Lunes - Viernes</span>
                    <span>9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sábado</span>
                    <span>10:00 - 14:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Domingo</span>
                    <span>Cerrado</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          
          <div>
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Envíanos un mensaje</h2>
              
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <Input
                    label="Nombre completo"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  
                  <Input
                    label="Correo electrónico"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  
                  <Select
                    label="Asunto"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    options={[
                      { value: '', label: 'Selecciona un asunto' },
                      { value: 'informacion', label: 'Información sobre cursos' },
                      { value: 'asesoria', label: 'Solicitud de asesoría' },
                      { value: 'soporte', label: 'Soporte técnico' },
                      { value: 'otro', label: 'Otro' }
                    ]}
                    required
                  />
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mensaje
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors duration-200"
                      placeholder="Escribe tu mensaje aquí..."
                      required
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full">
                    Enviar mensaje
                  </Button>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
