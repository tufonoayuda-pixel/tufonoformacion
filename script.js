// MENÚ MÓVIL
const menuToggle = document.getElementById('menu-toggle');
const mainNav = document.getElementById('main-nav');

menuToggle.addEventListener('click', function() {
  mainNav.classList.toggle('open');
  menuToggle.classList.toggle('open');
});

// Cerrar menú móvil al navegar
function closeMenu() {
  mainNav.classList.remove('open');
  menuToggle.classList.remove('open');
}

// Temarios de cursos
const temarios = {
  "Disfagia y Alimentación Oral a lo largo del ciclo vital": `
    <h3>Temario del Curso: Disfagia y Alimentación Oral</h3>
    <ul>
      <li><strong>Módulo 1:</strong> Fundamentos de la Deglución
        <ul>
          <li>Anatomía y Fisiología de la Deglución Normal</li>
          <li>Neurofisiología y control motor de la deglución</li>
          <li>Desarrollo de la deglución en el ciclo vital (Neonato a Adulto Mayor)</li>
        </ul>
      </li>
      <li><strong>Módulo 2:</strong> Evaluación de la Disfagia
        <ul>
          <li>Evaluación Clínica: Protocolos e Instrumentos</li>
          <li>Evaluación Instrumental: Videofluoroscopía (VDF) y Nasofibroscopía (FEES)</li>
          <li>Interpretación de hallazgos y diagnóstico diferencial</li>
        </ul>
      </li>
      <li><strong>Módulo 3:</strong> Intervención en Disfagia Pediátrica
        <ul>
          <li>Trastornos de la alimentación en neonatos y lactantes</li>
          <li>Abordaje en trastornos sensoriales y conductuales</li>
          <li>Estrategias terapéuticas para población pediátrica</li>
        </ul>
      </li>
      <li><strong>Módulo 4:</strong> Intervención en Disfagia Adultos
        <ul>
          <li>Disfagia Orofaríngea Neurogénica (ACV, TEC, Parkinson)</li>
          <li>Manejo de la Presbifagia y Sarcopenia</li>
          <li>Rehabilitación en pacientes oncológicos y post-intubación</li>
        </ul>
      </li>
    </ul>
  `,
  "Terapia Miofuncional Orofacial": `
    <h3>Temario del Curso: Terapia Miofuncional Orofacial</h3>
    <ul>
      <li>Anatomía y fisiología orofacial</li>
      <li>Diagnóstico diferencial de las alteraciones miofuncionales</li>
      <li>Protocolos de evaluación clínica</li>
      <li>Intervención en deglución atípica</li>
      <li>Técnicas y ejercicios terapéuticos</li>
      <li>Casos clínicos y seguimiento</li>
    </ul>
  `
}

// Mostrar y ocultar sección de registro
function mostrarRegistro(curso) {
  document.getElementById('registro').style.display = 'block';
  document.getElementById('curso-inscripcion').value = curso || '';
  // Insertar el temario adecuado
  document.getElementById('temario-contenido').innerHTML = temarios[curso] || "<p>Selecciona un curso para ver el temario.</p>";
  window.scrollTo({ top: document.getElementById('registro').offsetTop - 60, behavior: 'smooth' });
}
function ocultarRegistro() {
  document.getElementById('registro').style.display = 'none';
}

// Simular envío de inscripción
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('form-inscripcion');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const curso = document.getElementById('curso-inscripcion').value;
      alert('¡Inscripción exitosa! Te hemos enviado un correo con los detalles del curso: ' + curso);
      ocultarRegistro();
      form.reset();
    });
  }
  // Manual recursos inicia en introducción
  renderRecursos('intro');
});

// MANUAL OROFACIAL (Recursos)
const manualRecursos = {
  intro: `
    <h3>Introducción</h3>
    <p>Este manual presenta fundamentos y principios de los ejercicios orofaciales para fonoaudiología clínica.</p>
    <ul>
      <li><b>Isotónicos:</b> Mejoran movilidad y oxigenación muscular.</li>
      <li><b>Isométricos:</b> Aumentan la fuerza muscular.</li>
      <li><b>Isocinéticos:</b> Ejercicios de contrarresistencia intensos.</li>
    </ul>
    <blockquote>
      <b>El ejercicio no es el objetivo, sino el medio para mejorar la percepción y el tono.</b>
    </blockquote>
  `,
  muscle: `
    <h3>Grupos Musculares</h3>
    <ul>
      <li><b>Músculos Elevadores de la Mandíbula:</b> Temporal, Masetero, Pterigoides Medial.
        <ul>
          <li>Fortalecer: Masaje inductor (8 rep).</li>
          <li>Estirar: Masaje externo contrario (10 rep).</li>
        </ul>
      </li>
      <li><b>Músculo Buccinador:</b>
        <ul>
          <li>Fortalecer: Dedo índice boca/adentro, forzar hacia fuera. Beso labios (5 cada lado).</li>
          <li>Estirar: Masaje bidigital de oreja a comisura (5 cada lado).</li>
        </ul>
      </li>
      <li><b>Músculo Orbicular de la Boca:</b>
        <ul>
          <li>Fortalecer: Labios hacia dentro, mantener 3s y chasquear (8 rep).</li>
          <li>Estirar: Masaje estirando filtro y orbicular de nariz hacia abajo (8 a 10 rep).</li>
        </ul>
      </li>
      <li><b>Músculos Suprahioides:</b>
        <ul>
          <li>Fortalecer: Barrido lengua (10 rep).</li>
          <li>Estirar: Punta lengua papila 3s y relajar (10 rep).</li>
        </ul>
      </li>
      <li><b>Musculatura Externa de la Lengua:</b>
        <ul>
          <li>Fortalecer: Chupar lengua en paladar, mantener 3s y chasquear (8 a 10 rep).</li>
          <li>Estirar: Dedo índice en lengua, 3s y relajar (5 a 8 rep).</li>
        </ul>
      </li>
      <li><b>Musculatura Intrínseca de la Lengua:</b>
        <ul>
          <li>Fortalecer: Lengua afinada, mantener 3s y relajar (5 a 8 rep).</li>
          <li>Estirar: Llevar lengua afinada a comisuras labiales (5 cada lado).</li>
        </ul>
      </li>
    </ul>
  `,
  face: `
    <h3>Ejercicios para la Cara</h3>
    <ul>
      <li><b>Elevación de Cejas:</b> Elevar cejas y relajar. Repetir.</li>
      <li><b>Dilatación y Contracción de Nariz:</b> Mover alas de la nariz, fruncir como "olor malo".</li>
      <li><b>Ojos:</b> Abrir/cerrar fuerte, rotación, parpadear mirando a diferentes lados.</li>
      <li><b>Sonrisa-Beso:</b> Sonreír ampliamente y contraer labios en beso.</li>
      <li><b>Fortalecimiento Zigomático y Buccinador:</b> Sonreír de un lado, luego del otro; sonrisa con labios cerrados, comisuras hacia los lados, volver haciendo "O".</li>
      <li><b>Inflar/Vaciar Mejillas:</b> Llenar de aire y expulsar; chupar mejillas y relajar.</li>
    </ul>
  `,
  mouth: `
    <h3>Ejercicios para la Boca</h3>
    <ul>
      <li><b>Beso Abierto:</b> Hacer un beso entreabierto y relajar.</li>
      <li><b>Lateralización de Beso:</b> Llevar beso a derecha e izquierda.</li>
      <li><b>Chasquido de Labios:</b> Enviar beso con cabeza girada.</li>
      <li><b>Extensión de Labios:</b> Bajar/subir labio dentro de la boca.</li>
      <li><b>Resistencia de Labios:</b> Labios en "O", intentar unirlos forzadamente.</li>
      <li><b>Sonrisa Estirada Cerrada:</b> Sonrisa amplia con labios unidos.</li>
      <li><b>Beso Cerrado:</b> Labio contra labio como "p".</li>
    </ul>
  `,
  neck: `
    <h3>Ejercicios para el Cuello</h3>
    <ul>
      <li><b>Papada 1:</b> Cabeza hacia atrás, cruzar mandíbula y maxilar.</li>
      <li><b>Papada con Lateralización:</b> Cabeza a derecha/izquierda, mirar arriba, abrir/cerrar mandíbula.</li>
      <li><b>Papada 2/3:</b> Cabeza atrás, elevar mandíbula y labio inferior / abrir y cerrar boca.</li>
      <li><b>Boca de Sapo:</b> Contraer cuello haciendo "boca de sapo".</li>
    </ul>
  `,
  tongue: `
    <h3>Ejercicios para la Lengua</h3>
    <ul>
      <li><b>Elevación:</b> Empujar lengua contra paladar y relajar.</li>
      <li><b>Contrarresistencia:</b> Igual pero con mano en mentón.</li>
      <li><b>Rotación:</b> Limpiar dientes con movimientos circulares.</li>
      <li><b>4 puntos cardinales:</b> Punta lengua en N-S/E-O.</li>
      <li><b>Afinamiento:</b> Afinar lengua, contar hasta 3 y relajar.</li>
      <li><b>Barrido antero-posterior:</b> Punta lengua en paladar de adelante atrás y volver por debajo.</li>
    </ul>
  `,
  final: `
    <h3>Notas Finales</h3>
    <ul>
      <li>Cada caso requiere evaluación individualizada.</li>
      <li>Elija el ejercicio ideal según la necesidad.</li>
      <li>Si hay incomodidad, suspenda y reemplace el ejercicio.</li>
    </ul>
    <p><b>Manual creado por:</b> Flgo. Cristóbal San Martín<br>
    <b>Contacto:</b> @flgo_crissanmartin<br>
    <b>Uso educativo Tufonoformacion.</b></p>
  `
};

function renderRecursos(section) {
  document.querySelectorAll('.recursos-nav a').forEach(el => el.classList.remove('active'));
  document.querySelector('.recursos-nav a[data-section="'+section+'"]').classList.add('active');
  document.getElementById('recursos-content').innerHTML = manualRecursos[section] || '';
}
function switchRecursos(event, section) {
  event.preventDefault();
  renderRecursos(section);
}
