/**
 * KineticTab - Internationalization Module
 * Handles language switching between English and Spanish
 */

class I18n {
    constructor() {
        this.currentLanguage = 'en';
        this.translations = {
            'en': {
                // Header
                'siteTitle': 'KineticTab',
                'siteTagline': 'Stay healthy with regular movement breaks',
                
                // Settings
                'settingsTitle': 'Reminder Settings',
                'intervalLabel': 'Reminder Interval (minutes):',
                'notificationsLabel': 'Enable Notifications:',
                'saveButton': 'Save Settings',
                'startButton': 'Start Reminders',
                'stopButton': 'Stop Reminders',
                
                // Body display
                'focusAreaTitle': 'Current Focus Area',
                'suggestionTitle': 'Movement Suggestion',
                'startTimerPrompt': 'Start the timer to get movement suggestions',
                
                // Footer
                'disclaimerLink': 'Medical Disclaimer',
                
                // Modal
                'disclaimerTitle': 'Medical Disclaimer',
                'disclaimerText': `
                    <p>The information and movement suggestions provided on this website are intended for general informational purposes only and do not constitute medical advice. We are not medical professionals, and the content presented here should not be considered a substitute for consultation with a qualified healthcare provider.</p>
                    <p>If you experience any pain, discomfort, or other symptoms while performing the suggested movements, or if you have any pre-existing medical conditions, please discontinue use immediately and consult with your physician or other qualified healthcare professional before continuing.</p>
                    <p>The creators and operators of this website are not responsible for any injuries or health problems that may arise from the use of this website or the performance of the suggested movements. By using this website, you acknowledge and agree to this disclaimer.</p>
                    <p>Always listen to your body and consult with your doctor before starting any new exercise or movement routine.</p>
                `,
                
                // Notifications
                'notificationTitle': 'KineticTab Movement Reminder',
                'notificationPermissionDenied': 'Notification permission was denied',
                'browserNotSupported': 'This browser does not support desktop notifications',
                'settingsSaved': 'Settings saved successfully!'
            },
            'es': {
                // Header
                'siteTitle': 'KineticTab',
                'siteTagline': 'Mantente saludable con pausas regulares para moverte',
                
                // Settings
                'settingsTitle': 'Configuración de Recordatorios',
                'intervalLabel': 'Intervalo de Recordatorio (minutos):',
                'notificationsLabel': 'Activar Notificaciones:',
                'saveButton': 'Guardar Configuración',
                'startButton': 'Iniciar Recordatorios',
                'stopButton': 'Detener Recordatorios',
                
                // Body display
                'focusAreaTitle': 'Área de Enfoque Actual',
                'suggestionTitle': 'Sugerencia de Movimiento',
                'startTimerPrompt': 'Inicia el temporizador para recibir sugerencias de movimiento',
                
                // Footer
                'disclaimerLink': 'Aviso Médico',
                
                // Modal
                'disclaimerTitle': 'Aviso Médico',
                'disclaimerText': `
                    <p>La información y sugerencias de movimiento proporcionadas en este sitio web están destinadas únicamente a fines informativos generales y no constituyen consejo médico. No somos profesionales médicos, y el contenido presentado aquí no debe considerarse un sustituto de la consulta con un proveedor de atención médica calificado.</p>
                    <p>Si experimenta dolor, malestar u otros síntomas mientras realiza los movimientos sugeridos, o si tiene alguna condición médica preexistente, suspenda el uso inmediatamente y consulte con su médico u otro profesional de la salud calificado antes de continuar.</p>
                    <p>Los creadores y operadores de este sitio web no son responsables por lesiones o problemas de salud que puedan surgir por el uso de este sitio web o la realización de los movimientos sugeridos. Al utilizar este sitio web, usted reconoce y acepta este aviso.</p>
                    <p>Siempre escucha a tu cuerpo y consulta con tu médico antes de comenzar cualquier nuevo ejercicio o rutina de movimiento.</p>
                `,
                
                // Notifications
                'notificationTitle': 'Recordatorio de Movimiento KineticTab',
                'notificationPermissionDenied': 'El permiso de notificación fue denegado',
                'browserNotSupported': 'Este navegador no admite notificaciones de escritorio',
                'settingsSaved': '¡Configuración guardada correctamente!'
            }
        };
        
        // Initialize translation
        this.init();
    }
    
    init() {
        // Load language preference from localStorage if available
        const savedLanguage = localStorage.getItem('kineticTabLanguage');
        if (savedLanguage && ['en', 'es'].includes(savedLanguage)) {
            this.currentLanguage = savedLanguage;
        }
        
        // Add event listeners to language buttons
        document.getElementById('lang-en').addEventListener('click', () => this.setLanguage('en'));
        document.getElementById('lang-es').addEventListener('click', () => this.setLanguage('es'));
        
        // Set initial language button states
        this.updateLanguageButtons();
        
        // Apply translations
        this.translatePage();
    }
    
    setLanguage(lang) {
        if (this.currentLanguage === lang) return;
        
        this.currentLanguage = lang;
        localStorage.setItem('kineticTabLanguage', lang);
        
        // Update UI
        this.updateLanguageButtons();
        this.translatePage();
    }
    
    updateLanguageButtons() {
        document.getElementById('lang-en').classList.toggle('active', this.currentLanguage === 'en');
        document.getElementById('lang-es').classList.toggle('active', this.currentLanguage === 'es');
    }
    
    translatePage() {
        const elements = document.querySelectorAll('[data-i18n]');
        
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.translations[this.currentLanguage][key];
            
            if (translation) {
                // Check if the translation contains HTML
                if (key === 'disclaimerText') {
                    element.innerHTML = translation;
                } else {
                    element.textContent = translation;
                }
            }
        });
    }
    
    // Helper method to get translation for a specific key
    getTranslation(key) {
        return this.translations[this.currentLanguage][key] || key;
    }
}

// Initialize the i18n module
const i18n = new I18n();