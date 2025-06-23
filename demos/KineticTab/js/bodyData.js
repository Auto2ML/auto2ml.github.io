/**
 * Body parts and movement suggestions database for KineticTab
 */

const bodyPartsData = {
    // Simple human body SVG representation
    bodySvg: `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 400">
            <g id="human-body">
                <!-- Head -->
                <circle id="head" class="body-part" cx="100" cy="50" r="30" />
                
                <!-- Neck -->
                <rect id="neck" class="body-part" x="90" y="80" width="20" height="20" />
                
                <!-- Torso -->
                <rect id="torso" class="body-part" x="70" y="100" width="60" height="100" />
                
                <!-- Arms -->
                <rect id="left-arm" class="body-part" x="40" y="110" width="30" height="80" />
                <rect id="right-arm" class="body-part" x="130" y="110" width="30" height="80" />
                
                <!-- Hands/Wrists -->
                <rect id="left-wrist" class="body-part" x="40" y="190" width="30" height="15" />
                <rect id="right-wrist" class="body-part" x="130" y="190" width="30" height="15" />
                
                <!-- Legs -->
                <rect id="left-leg" class="body-part" x="70" y="200" width="25" height="120" />
                <rect id="right-leg" class="body-part" x="105" y="200" width="25" height="120" />
                
                <!-- Feet -->
                <rect id="left-foot" class="body-part" x="60" y="320" width="35" height="15" />
                <rect id="right-foot" class="body-part" x="105" y="320" width="35" height="15" />
                
                <!-- Shoulders -->
                <rect id="left-shoulder" class="body-part" x="55" y="100" width="15" height="15" />
                <rect id="right-shoulder" class="body-part" x="130" y="100" width="15" height="15" />
                
                <!-- Eyes -->
                <circle id="eyes" class="body-part" cx="100" cy="40" r="5" />
            </g>
        </svg>
    `,

 // Movement suggestions database - multilingual
movements: {
    "neck": [
        { 
            suggestion: {
                en: "Gentle Neck Rotations",
                es: "Rotaciones Suaves de Cuello"
            }, 
            instructions: {
                en: "Slowly rotate your head clockwise 5 times, then counter-clockwise 5 times.",
                es: "Gira lentamente la cabeza en sentido horario 5 veces, luego en sentido antihorario 5 veces."
            }
        },
        { 
            suggestion: {
                en: "Neck Stretches",
                es: "Estiramientos de Cuello"
            }, 
            instructions: {
                en: "Tilt your head toward each shoulder, holding for 15 seconds on each side.",
                es: "Inclina tu cabeza hacia cada hombro, manteniendo la posición durante 15 segundos en cada lado."
            }
        },
        { 
            suggestion: {
                en: "Chin Tucks",
                es: "Flexiones de Mentón"
            }, 
            instructions: {
                en: "Pull your chin in toward your neck, hold for 5 seconds, and release. Repeat 10 times.",
                es: "Lleva tu mentón hacia tu cuello, mantén durante 5 segundos y suelta. Repite 10 veces."
            }
        }
    ],
    "shoulders": [
        { 
            suggestion: {
                en: "Shoulder Rolls",
                es: "Rotación de Hombros"
            }, 
            instructions: {
                en: "Roll your shoulders backward 10 times, then forward 10 times.",
                es: "Gira tus hombros hacia atrás 10 veces, luego hacia adelante 10 veces."
            }
        },
        { 
            suggestion: {
                en: "Shoulder Blade Squeeze",
                es: "Apretones de Omóplatos"
            }, 
            instructions: {
                en: "Squeeze your shoulder blades together, hold for 5 seconds, and release. Repeat 10 times.",
                es: "Junta tus omóplatos, mantén durante 5 segundos y suelta. Repite 10 veces."
            }
        },
        { 
            suggestion: {
                en: "Arm Circles",
                es: "Círculos con los Brazos"
            }, 
            instructions: {
                en: "Extend your arms to the sides and make small circles, gradually increasing the size. Do 10 in each direction.",
                es: "Extiende tus brazos a los lados y haz pequeños círculos, aumentando gradualmente el tamaño. Haz 10 en cada dirección."
            }
        }
    ],
    "back": [
        { 
            suggestion: {
                en: "Seated Spinal Twist",
                es: "Torsión Espinal Sentado"
            }, 
            instructions: {
                en: "Sit in your chair, twist to the right and hold for 15 seconds. Repeat on the left side.",
                es: "Siéntate en tu silla, gira a la derecha y mantén durante 15 segundos. Repite en el lado izquierdo."
            }
        },
        { 
            suggestion: {
                en: "Back Extensions",
                es: "Extensiones de Espalda"
            }, 
            instructions: {
                en: "Place your hands on your lower back and gently lean backward, holding for 10 seconds.",
                es: "Coloca tus manos en la parte baja de tu espalda e inclínate suavemente hacia atrás, manteniendo durante 10 segundos."
            }
        },
        { 
            suggestion: {
                en: "Cat-Cow Stretch",
                es: "Estiramiento Gato-Vaca"
            }, 
            instructions: {
                en: "Stand up, place hands on thighs, alternate between arching and rounding your back 10 times.",
                es: "Ponte de pie, coloca las manos en los muslos, alterna entre arquear y redondear tu espalda 10 veces."
            }
        },
        { 
            suggestion: {
                en: "Upper Back Stretch",
                es: "Estiramiento de la Parte Superior de la Espalda"
            }, 
            instructions: {
                en: "Clasp your hands in front of you, lower your head in line with your arms, and press forward. Hold for 10 to 30 seconds.",
                es: "Entrelaza tus manos frente a ti, baja la cabeza alineada con tus brazos y presiona hacia adelante. Mantén la posición durante 10 a 30 segundos."
            }
        },
        { 
            suggestion: {
                en: "Torso Rotation",
                es: "Rotación del Torso"
            }, 
            instructions: {
                en: "Keep your feet on the ground and facing forward. Twist your upper body toward the arm on the chair back. Hold for 10 to 30 seconds. Repeat on the other side.",
                es: "Mantén los pies en el suelo y mirando hacia adelante. Gira tu parte superior del cuerpo hacia el brazo en el respaldo de la silla. Mantén la posición durante 10 a 30 segundos. Repite del otro lado."
            }
        },
        { 
            suggestion: {
                en: "Lower Back Stretch",
                es: "Estiramiento de la Parte Baja de la Espalda"
            }, 
            instructions: {
                en: "Stand up and place both hands on your lower back. Stand upright and slowly, slightly extend backwards. Come back to neutral and repeat several times.",
                es: "Levántate y coloca ambas manos en la parte baja de tu espalda. Párate erguido y lentamente, extiéndete ligeramente hacia atrás. Vuelve a la posición neutral y repite varias veces."
            }
        },
        { 
            suggestion: {
                en: "Latissimus Stretch",
                es: "Estiramiento del Latísimo"
            }, 
            instructions: {
                en: "Extend each arm overhead. Reach to the opposite side. Hold for 10 to 30 seconds. Repeat on the other side.",
                es: "Extiende cada brazo por encima de la cabeza. Alcance hacia el lado opuesto. Mantén la posición durante 10 a 30 segundos. Repite del otro lado."
            }
        }
    ],
    "chest": [
        { 
            suggestion: {
                en: "Chest Stretch",
                es: "Estiramiento de Pecho"
            }, 
            instructions: {
                en: "Clasp your hands behind your back. Push your chest outward and raise your chin. Hold for 10 to 30 seconds.",
                es: "Entrelaza tus manos detrás de tu espalda. Empuja tu pecho hacia afuera y levanta la barbilla. Mantén la posición durante 10 a 30 segundos."
            }
        }
    ],
    "arms": [
        { 
            suggestion: {
                en: "Triceps Stretch",
                es: "Estiramiento de Tríceps"
            }, 
            instructions: {
                en: "Raise your arm, bend it to reach the opposite side. Pull your elbow toward your head with your other hand. Hold for 10 to 30 seconds. Repeat on the other side.",
                es: "Levanta tu brazo, dóblalo para alcanzar el lado opuesto. Jala tu codo hacia tu cabeza con la otra mano. Mantén la posición durante 10 a 30 segundos. Repite del otro lado."
            }
        },
        { 
            suggestion: {
                en: "Upper Body Stretch",
                es: "Estiramiento de la Parte Superior del Cuerpo"
            }, 
            instructions: {
                en: "Clasp your hands above your head, palms outward. Push your arms up, stretching upward. Hold for 10 to 30 seconds.",
                es: "Entrelaza tus manos por encima de tu cabeza, con las palmas hacia afuera. Empuja tus brazos hacia arriba, estirándote hacia arriba. Mantén la posición durante 10 a 30 segundos."
            }
        }
    ],
    "wrists": [
        { 
            suggestion: {
                en: "Wrist Rotations",
                es: "Rotaciones de Muñeca"
            }, 
            instructions: {
                en: "Rotate your wrists in clockwise circles 10 times, then counter-clockwise 10 times.",
                es: "Gira tus muñecas en círculos en sentido horario 10 veces, luego en sentido antihorario 10 veces."
            }
        },
        { 
            suggestion: {
                en: "Wrist Extensions",
                es: "Extensiones de Muñeca"
            }, 
            instructions: {
                en: "Extend one arm, palm up. Use other hand to gently pull fingers back towards you. Hold 15 seconds, repeat on other hand.",
                es: "Extiende un brazo con la palma hacia arriba. Usa la otra mano para tirar suavemente de los dedos hacia ti. Mantén 15 segundos, repite con la otra mano."
            }
        },
        { 
            suggestion: {
                en: "Finger Stretches",
                es: "Estiramientos de Dedos"
            }, 
            instructions: {
                en: "Spread your fingers apart for 5 seconds, then make a fist for 5 seconds. Repeat 10 times.",
                es: "Separa los dedos durante 5 segundos, luego cierra el puño durante 5 segundos. Repite 10 veces."
            }
        },
        { 
            suggestion: {
                en: "Wrist and Forearm Stretch",
                es: "Estiramiento de Muñeca y Antebrazo"
            }, 
            instructions: {
                en: "Stretch your right arm out, turn your hand down, use your left hand to pull your fingers towards you, feel the stretch in your forearm. Hold for 10-30 seconds. Repeat on the other side.",
                es: "Extiende tu brazo derecho, gira la mano hacia abajo, usa tu mano izquierda para jalar tus dedos hacia ti, siente el estiramiento en tu antebrazo. Mantén la posición durante 10-30 segundos. Repite del otro lado."
            }
        }
    ],
    "hips": [
        { 
            suggestion: {
                en: "Hip and Knee Stretch",
                es: "Estiramiento de Cadera y Rodilla"
            }, 
            instructions: {
                en: "Hug one knee at a time, pulling it toward your chest. Hold for 10 to 30 seconds. Alternate legs.",
                es: "Abraza una rodilla a la vez, tirándola hacia tu pecho. Mantén la posición durante 10 a 30 segundos. Alterna piernas."
            }
        }
    ],
    "legs": [
        { 
            suggestion: {
                en: "Leg Extensions",
                es: "Extensiones de Piernas"
            }, 
            instructions: {
                en: "Sit in your chair and extend one leg until straight, hold for 10 seconds. Repeat on each leg 5 times.",
                es: "Siéntate en tu silla y extiende una pierna hasta estirarla, mantén durante 10 segundos. Repite en cada pierna 5 veces."
            }
        },
        { 
            suggestion: {
                en: "Ankle Rotations",
                es: "Rotaciones de Tobillo"
            }, 
            instructions: {
                en: "Lift one foot off the ground and rotate your ankle 10 times in each direction. Repeat with the other foot.",
                es: "Levanta un pie del suelo y gira tu tobillo 10 veces en cada dirección. Repite con el otro pie."
            }
        },
        { 
            suggestion: {
                en: "Standing Calf Raises",
                es: "Elevaciones de Pantorrilla de Pie"
            }, 
            instructions: {
                en: "Stand up and raise yourself onto your toes, then lower back down. Repeat 15 times.",
                es: "Ponte de pie y elévate sobre los dedos de tus pies, luego baja. Repite 15 veces."
            }
        },
        { 
            suggestion: {
                en: "Hamstrings Stretch",
                es: "Estiramiento de Isquiotibiales"
            }, 
            instructions: {
                en: "While seated, extend one leg, prop your foot on a second chair. Bend forward from your waist. Hold for 10 to 30 seconds. Repeat on the other side.",
                es: "Mientras estás sentado, extiende una pierna, apoya el pie en una segunda silla. Inclínate hacia adelante desde la cintura. Mantén la posición durante 10 a 30 segundos. Repite del otro lado."
            }
        }
    ],
    "eyes": [
        { 
            suggestion: {
                en: "20-20-20 Rule",
                es: "Regla 20-20-20"
            }, 
            instructions: {
                en: "Look at something 20 feet away for 20 seconds every 20 minutes.",
                es: "Mira algo a 6 metros de distancia durante 20 segundos cada 20 minutos."
            }
        },
        { 
            suggestion: {
                en: "Eye Rolls",
                es: "Rotaciones de Ojos"
            }, 
            instructions: {
                en: "Roll your eyes clockwise 5 times, then counter-clockwise 5 times.",
                es: "Gira los ojos en sentido horario 5 veces, luego en sentido antihorario 5 veces."
            }
        },
        { 
            suggestion: {
                en: "Focus Shifting",
                es: "Cambio de Enfoque"
            }, 
            instructions: {
                en: "Focus on your finger held close to your face, then shift focus to something in the distance. Repeat 10 times.",
                es: "Enfoca en tu dedo cerca de tu cara, luego cambia el enfoque a algo en la distancia. Repite 10 veces."
            }
        }
    ]
},

    // Map SVG element IDs to body part categories
    bodyPartMapping: {
        "head": "neck",
        "neck": "neck",
        "left-shoulder": "shoulders",
        "right-shoulder": "shoulders",
        "torso": "back",
        "left-arm": "shoulders",
        "right-arm": "shoulders",
        "left-wrist": "wrists",
        "right-wrist": "wrists",
        "left-leg": "legs",
        "right-leg": "legs",
        "left-foot": "legs",
        "right-foot": "legs",
        "eyes": "eyes"
    },

    // Get all available body parts for movement
    getAllBodyParts() {
        return Object.keys(this.movements);
    },

    // Get a random movement suggestion for a specific body part
    getRandomMovement(bodyPart) {
        const movements = this.movements[bodyPart];
        if (!movements || movements.length === 0) {
            return {
                suggestion: {
                    en: "No movement available",
                    es: "No hay movimiento disponible"
                },
                instructions: {
                    en: "Try another body part",
                    es: "Prueba otra parte del cuerpo"
                }
            };
        }
        
        const randomIndex = Math.floor(Math.random() * movements.length);
        const movement = movements[randomIndex];
        
        // Get the movement in the current language
        const currentLanguage = i18n ? i18n.currentLanguage : 'en';
        
        return {
            suggestion: movement.suggestion[currentLanguage] || movement.suggestion.en,
            instructions: movement.instructions[currentLanguage] || movement.instructions.en
        };
    },

    // Get the body part category from an SVG element ID
    getBodyPartCategory(elementId) {
        return this.bodyPartMapping[elementId] || null;
    }
};