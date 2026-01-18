<?php
sleep(2); // Simula demora del servidor (opcional)

header('Content-Type: text/plain; charset=utf-8');

$codStr = $_GET['cod'] ?? null;

// 1) Falta el parámetro
if ($codStr === null || $codStr === '') {
  http_response_code(400); // Bad Request
  echo "ERROR: Falta el parámetro 'cod'. Ejemplo: ?cod=1";
  exit;
}

// 2) Validación del parámetro (valor entre 1 y 12)
$cod = (int)$codStr;
if ($cod < 1 || $cod > 12) {
  http_response_code(400); // Bad Request
  echo "ERROR: 'cod' debe estar en el rango 1-12.";
  exit;
}

$HOROSCOPO = [
  1  => "Aries: Hoy los cambios serán físicos, personales, de carácter, Te sentirás impulsivo y tomarás  iniciativas. Período en donde considerarás unirte a agrupaciones de beneficencia, o de ayuda a los demás.",
  2  => "Tauro: Hoy los cambios serán privados, íntimos. Recuerdos. Ayuda, solidaridad. Asuntos en lugares de retiro. Tu cónyuge puede aportar buen status a tu vida o apoyo a tu profesión.",
  3  => "Géminis: Los asuntos de hoy tienen que ver con las amistades, reuniones, actividades con ellos. Día esperanzado, ilusiones. Mucha energía sexual y fuerza emocional. Deseos difíciles de controlar.",
  4  => "Cancer: Este día la profesión y las relaciones con superiores y con tu madre serán de importancia. Actividad en relación a estos temas. Momentos positivos con compañeros de trabajo. Actividad laboral agradable.",
  5  => "Leo: Este día los estudios, los viajes, el extranjero y la espiritualidad serán lo importante. Pensamientos, religión y filosofía también. Vivencias kármicas de la época te vuelven responsable tomando decisiones.",
  6  => "Virgo: Para este día toma importancia tu vida sexual, tal vez miedos, temas legales, juicios o herencias. Experiencias extrañas. Hay karma de prueba durante este período en tu parte psicológica, generándose algunos replanteos.",
  7  => "Libra: Hoy todo asunto tiene que ver con tu pareja, también con socios, con la gente o el público. Ellos serán lo más importante del día. Ganancias a través de especulaciones o del juego. Actividades vocacionales artísticas.",
  8  => "Escorpio: Hoy todo asunto tiene que ver con temas de trabajo y de salud. Presta atención a ambos. Experiencias diversas con compañeros. Durante este período tendrás muchos recursos para ganar dinero.",
  9  => "Sagitario: Durante este día se vivirán cambios en relación a los noviazgos o a los hijos. Creatividad, actividad, diversiones y salidas. Período de encuentros con personas o situaciones que te impresionan.",
  10 => "Capricornio: Los cambios del día tienen que ver con tu hogar, con la convivencia y con el padre. Asuntos relativos al carácter en la convivencia. El karma de responsabilidad de estos momentos te acercará al mundo de lo desconocido, mucha madurez y contacto con el más allá.",
  11 => "Acuario: Hoy todo asunto tiene que ver con el entorno inmediato, hermanos y vecinos, con la comunicación, los viajes cortos o traslados frecuentes. El hablar y trasladarse será importante hoy. Mentalidad e ideas activas.",
  12 => "Piscis: Durante este día se vivirán cambios en la economía, movimientos en los ingresos, negocios, valores. Momentos de gran fuerza y decisión profesionales, buscarás el liderazgo."
];

// 4) OK
http_response_code(200);
echo $HOROSCOPO[$cod];
