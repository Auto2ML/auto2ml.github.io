/**
 * KineticTab - Main Application Script
 */

class KineticTab {
    constructor() {
        this.interval = 20; // Default interval in minutes
        this.notificationsEnabled = true;
        this.timerId = null;
        this.bodyParts = bodyPartsData.getAllBodyParts();
        this.currentBodyPart = null;
        this.notificationPermissionGranted = false;

        // DOM Elements
        this.intervalInput = document.getElementById('interval');
        this.notificationsCheckbox = document.getElementById('notifications');
        this.saveButton = document.getElementById('save-settings');
        this.startButton = document.getElementById('start-timer');
        this.stopButton = document.getElementById('stop-timer');
        this.bodyContainer = document.getElementById('body-container');
        this.suggestionText = document.getElementById('suggestion-text');
        this.disclaimerLink = document.getElementById('disclaimer-link');
        this.subtitleDisclaimerLink = document.getElementById('subtitle-disclaimer-link');
        this.disclaimerModal = document.getElementById('disclaimer-modal');
        this.closeModalBtn = document.querySelector('.modal-content .close');
        
        // Initialize
        this.init();
    }

    init() {
        // Load saved settings
        this.loadSettings();
        
        // Insert body SVG
        this.bodyContainer.innerHTML = bodyPartsData.bodySvg;
        
        // Add event listeners
        this.saveButton.addEventListener('click', () => this.saveSettings());
        this.startButton.addEventListener('click', () => this.startTimer());
        this.stopButton.addEventListener('click', () => this.stopTimer());
        
        // Add disclaimer modal event listeners
        this.disclaimerLink.addEventListener('click', (e) => {
            e.preventDefault();
            this.openDisclaimerModal();
        });
        
        this.subtitleDisclaimerLink.addEventListener('click', (e) => {
            e.preventDefault();
            this.openDisclaimerModal();
        });
        
        this.closeModalBtn.addEventListener('click', () => {
            this.closeDisclaimerModal();
        });
        
        // Close modal when clicking outside of it
        window.addEventListener('click', (e) => {
            if (e.target === this.disclaimerModal) {
                this.closeDisclaimerModal();
            }
        });
        
        // Check notification permission
        this.checkNotificationPermission();
    }

    // Load settings from localStorage
    loadSettings() {
        const savedInterval = localStorage.getItem('kineticTabInterval');
        const savedNotifications = localStorage.getItem('kineticTabNotifications');
        
        if (savedInterval) {
            this.interval = parseInt(savedInterval, 10);
            this.intervalInput.value = this.interval;
        }
        
        if (savedNotifications !== null) {
            this.notificationsEnabled = savedNotifications === 'true';
            this.notificationsCheckbox.checked = this.notificationsEnabled;
        }
    }

    // Save settings to localStorage
    saveSettings() {
        const newInterval = parseInt(this.intervalInput.value, 10);
        const newNotifications = this.notificationsCheckbox.checked;
        
        // Validate interval
        if (newInterval < 5 || newInterval > 120 || isNaN(newInterval)) {
            alert(i18n.getTranslation('invalidInterval'));
            return;
        }
        
        // Save settings
        this.interval = newInterval;
        this.notificationsEnabled = newNotifications;
        
        localStorage.setItem('kineticTabInterval', this.interval);
        localStorage.setItem('kineticTabNotifications', this.notificationsEnabled);
        
        // If notifications are enabled, check permission
        if (this.notificationsEnabled) {
            this.checkNotificationPermission();
        }
        
        // Restart timer if active
        if (this.timerId) {
            this.stopTimer();
            this.startTimer();
        }
        
        alert(i18n.getTranslation('settingsSaved'));
    }

    // Check and request notification permission
    checkNotificationPermission() {
        if (!('Notification' in window)) {
            alert(i18n.getTranslation('browserNotSupported'));
            this.notificationsEnabled = false;
            this.notificationsCheckbox.checked = false;
            return;
        }
        
        if (Notification.permission === 'granted') {
            this.notificationPermissionGranted = true;
        } else if (Notification.permission !== 'denied') {
            Notification.requestPermission().then(permission => {
                if (permission === 'granted') {
                    this.notificationPermissionGranted = true;
                }
            });
        }
    }

    // Start timer
    startTimer() {
        if (this.timerId) {
            return; // Timer already running
        }
        
        // Convert minutes to milliseconds
        const intervalMs = this.interval * 60 * 1000;
        
        // Schedule first reminder immediately
        this.showReminder();
        
        // Set interval for subsequent reminders
        this.timerId = setInterval(() => this.showReminder(), intervalMs);
        
        // Update button states
        this.startButton.disabled = true;
        this.stopButton.disabled = false;
    }

    // Stop timer
    stopTimer() {
        if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
            
            // Clear highlights
            this.clearHighlights();
            
            // Reset suggestion text
            this.suggestionText.textContent = i18n.getTranslation('startTimerPrompt');
            
            // Update button states
            this.startButton.disabled = false;
            this.stopButton.disabled = true;
        }
    }

    // Show movement reminder
    showReminder() {
        // Select a random body part
        const randomBodyPart = this.bodyParts[Math.floor(Math.random() * this.bodyParts.length)];
        this.currentBodyPart = randomBodyPart;
        
        // Get a movement suggestion
        const movement = bodyPartsData.getRandomMovement(randomBodyPart);
        
        // Update UI
        this.highlightBodyPart(randomBodyPart);
        this.updateSuggestion(movement);
        
        // Show notification if enabled
        if (this.notificationsEnabled && this.notificationPermissionGranted) {
            this.showNotification(movement);
        }
    }

    // Highlight body part in SVG
    highlightBodyPart(bodyPart) {
        // Clear previous highlights
        this.clearHighlights();
        
        // Find elements corresponding to the body part
        const bodyPartElements = [];
        
        for (const [elementId, category] of Object.entries(bodyPartsData.bodyPartMapping)) {
            if (category === bodyPart) {
                const element = document.getElementById(elementId);
                if (element) {
                    bodyPartElements.push(element);
                }
            }
        }
        
        // Apply highlighting
        bodyPartElements.forEach(element => {
            element.classList.add('active');
        });
    }

    // Clear all highlights
    clearHighlights() {
        document.querySelectorAll('.body-part').forEach(element => {
            element.classList.remove('active');
        });
    }

    // Update suggestion text
    updateSuggestion(movement) {
        this.suggestionText.innerHTML = `
            <strong>${movement.suggestion}</strong>
            <p>${movement.instructions}</p>
        `;
    }

    // Show browser notification
    showNotification(movement) {
        if (!this.notificationPermissionGranted) return;
        
        const notification = new Notification(i18n.getTranslation('notificationTitle'), {
            body: `${movement.suggestion}: ${movement.instructions}`,
            icon: '/favicon.ico' // Add a favicon to your project for this to work
        });
        
        // Close notification after 10 seconds
        setTimeout(() => {
            notification.close();
        }, 10000);
        
        // Focus window when notification is clicked
        notification.onclick = function() {
            window.focus();
            this.close();
        };
    }
    
    // Open disclaimer modal
    openDisclaimerModal() {
        this.disclaimerModal.style.display = 'block';
    }
    
    // Close disclaimer modal
    closeDisclaimerModal() {
        this.disclaimerModal.style.display = 'none';
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const app = new KineticTab();
});