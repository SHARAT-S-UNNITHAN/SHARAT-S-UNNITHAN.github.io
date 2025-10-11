// Interactive Skill Matcher Quiz
class SkillMatcher {
    constructor() {
        this.questions = [
            {
                id: 1,
                title: "What type of project are you considering?",
                description: "This helps me understand the scope and requirements.",
                options: [
                    {
                        value: "website",
                        label: "Website",
                        description: "Company site, portfolio, or landing page",
                        skills: ["HTML/CSS", "JavaScript", "Responsive Design", "SEO"]
                    },
                    {
                        value: "web-app",
                        label: "Web Application",
                        description: "Interactive platform with user accounts and data",
                        skills: ["React/Vue", "Node.js", "Database", "API Integration", "Authentication"]
                    },
                    {
                        value: "mobile-app",
                        label: "Mobile App",
                        description: "iOS or Android application",
                        skills: ["React Native", "Mobile UI/UX", "App Store Deployment", "Push Notifications"]
                    },
                    {
                        value: "ecommerce",
                        label: "E-commerce Store",
                        description: "Online store with products and payments",
                        skills: ["E-commerce Platforms", "Payment Integration", "Inventory Management", "Security"]
                    },
                    {
                        value: "consultation",
                        label: "Technical Consultation",
                        description: "Architecture review, code audit, or planning",
                        skills: ["System Architecture", "Code Review", "Technical Planning", "Best Practices"]
                    }
                ]
            },
            {
                id: 2,
                title: "What's your timeline for this project?",
                description: "This helps me understand urgency and plan accordingly.",
                options: [
                    {
                        value: "urgent",
                        label: "ASAP (1-2 weeks)",
                        description: "Need to start immediately",
                        impact: "high"
                    },
                    {
                        value: "soon",
                        label: "Soon (1 month)",
                        description: "Ready to start within a month",
                        impact: "medium"
                    },
                    {
                        value: "flexible",
                        label: "Flexible",
                        description: "No specific deadline",
                        impact: "low"
                    },
                    {
                        value: "planning",
                        label: "Just Planning",
                        description: "Exploring options for future",
                        impact: "none"
                    }
                ]
            },
            {
                id: 3,
                title: "What's your budget range?",
                description: "This helps me recommend the right approach.",
                options: [
                    {
                        value: "basic",
                        label: "Basic ($1,000 - $5,000)",
                        description: "Simple website or MVP",
                        match: "good"
                    },
                    {
                        value: "standard",
                        label: "Standard ($5,000 - $15,000)",
                        description: "Full website or simple web app",
                        match: "excellent"
                    },
                    {
                        value: "premium",
                        label: "Premium ($15,000 - $50,000)",
                        description: "Complex application with advanced features",
                        match: "excellent"
                    },
                    {
                        value: "enterprise",
                        label: "Enterprise ($50,000+)",
                        description: "Large-scale platform or multiple systems",
                        match: "good"
                    },
                    {
                        value: "not-sure",
                        label: "Not Sure Yet",
                        description: "Need help estimating",
                        match: "fair"
                    }
                ]
            },
            {
                id: 4,
                title: "What technical requirements do you have?",
                description: "Select all that apply to your project.",
                options: [
                    {
                        value: "responsive",
                        label: "Mobile Responsive",
                        description: "Works perfectly on all devices",
                        skills: ["Responsive Design", "Mobile-First", "Cross-browser Testing"]
                    },
                    {
                        value: "database",
                        label: "Database & Storage",
                        description: "Need to store and manage data",
                        skills: ["Database Design", "API Development", "Data Modeling"]
                    },
                    {
                        value: "payments",
                        label: "Payment Processing",
                        description: "Accept credit cards or online payments",
                        skills: ["Stripe/PayPal", "Security", "Payment Gateway Integration"]
                    },
                    {
                        value: "auth",
                        label: "User Accounts & Login",
                        description: "User registration and authentication",
                        skills: ["Authentication", "Authorization", "Security Best Practices"]
                    },
                    {
                        value: "api",
                        label: "Third-party API Integration",
                        description: "Connect with other services",
                        skills: ["API Integration", "Webhooks", "Data Synchronization"]
                    },
                    {
                        value: "cms",
                        label: "Content Management",
                        description: "Easy content updates for non-technical users",
                        skills: ["CMS Development", "Admin Panels", "Content Modeling"]
                    }
                ],
                multiple: true
            },
            {
                id: 5,
                title: "What's your current technical situation?",
                description: "This helps me understand how to best support you.",
                options: [
                    {
                        value: "new",
                        label: "Starting from Scratch",
                        description: "No existing code or systems",
                        support: "full"
                    },
                    {
                        value: "existing",
                        label: "Have Existing System",
                        description: "Need improvements or new features",
                        support: "enhancement"
                    },
                    {
                        value: "team",
                        label: "Part of a Development Team",
                        description: "Need specific expertise or extra hands",
                        support: "collaboration"
                    },
                    {
                        value: "design",
                        label: "Have Designs Ready",
                        description: "Need development implementation",
                        support: "implementation"
                    },
                    {
                        value: "idea",
                        label: "Just an Idea",
                        description: "Need help with planning and execution",
                        support: "guidance"
                    }
                ]
            }
        ];

        this.currentQuestion = 0;
        this.answers = {};
        this.initializeQuiz();
    }

    initializeQuiz() {
        console.log('Initializing quiz...');
        this.renderQuestion();
    }

    renderQuestion() {
        const question = this.questions[this.currentQuestion];
        const quizContainer = document.getElementById('quiz-container');
        
        if (!quizContainer) {
            console.error('Quiz container not found!');
            return;
        }

        const optionsHTML = question.options.map(option => `
            <div class="option-card" data-value="${option.value}">
                <input type="${question.multiple ? 'checkbox' : 'radio'}" name="question-${question.id}" value="${option.value}" id="option-${option.value}">
                <div class="option-content">
                    <h4>${option.label}</h4>
                    <p>${option.description}</p>
                </div>
            </div>
        `).join('');

        quizContainer.innerHTML = `
            <div class="quiz-question active" data-question="${question.id}">
                <h3 class="question-title">${question.title}</h3>
                <p class="question-description">${question.description}</p>
                <div class="options-grid">
                    ${optionsHTML}
                </div>
                <div class="quiz-navigation">
                    <button class="quiz-btn btn-prev" ${this.currentQuestion === 0 ? 'disabled' : ''}>
                        <i class="fas fa-arrow-left"></i> Previous
                    </button>
                    <button class="quiz-btn btn-next" ${this.getSelectedOptions().length === 0 ? 'disabled' : ''}>
                        ${this.currentQuestion === this.questions.length - 1 ? 'See Results' : 'Next'} <i class="fas fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        `;

        this.updateProgress();
        this.setupOptionSelection();
        this.setupNavigationListeners();
    }

    setupOptionSelection() {
        const optionCards = document.querySelectorAll('.option-card');
        const isMultiple = this.questions[this.currentQuestion].multiple;

        optionCards.forEach(card => {
            card.addEventListener('click', () => {
                if (isMultiple) {
                    card.classList.toggle('selected');
                    const checkbox = card.querySelector('input[type="checkbox"]');
                    checkbox.checked = !checkbox.checked;
                } else {
                    // Single selection - deselect all others
                    optionCards.forEach(c => c.classList.remove('selected'));
                    card.classList.add('selected');
                    const radio = card.querySelector('input[type="radio"]');
                    radio.checked = true;
                }

                // Enable/disable next button
                const nextBtn = document.querySelector('.btn-next');
                nextBtn.disabled = this.getSelectedOptions().length === 0;
            });
        });
    }

    setupNavigationListeners() {
        const nextBtn = document.querySelector('.btn-next');
        const prevBtn = document.querySelector('.btn-prev');

        if (nextBtn) {
            nextBtn.addEventListener('click', () => this.nextQuestion());
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', () => this.previousQuestion());
        }
    }

    getSelectedOptions() {
        const currentQuestion = this.questions[this.currentQuestion];
        if (currentQuestion.multiple) {
            const checkboxes = document.querySelectorAll(`input[type="checkbox"]:checked`);
            return Array.from(checkboxes).map(cb => cb.value);
        } else {
            const radio = document.querySelector(`input[type="radio"]:checked`);
            return radio ? [radio.value] : [];
        }
    }

    updateProgress() {
        const progressFill = document.getElementById('progress-fill');
        const currentQuestion = document.getElementById('current-question');
        
        if (progressFill && currentQuestion) {
            const progress = ((this.currentQuestion + 1) / this.questions.length) * 100;
            progressFill.style.width = `${progress}%`;
            currentQuestion.textContent = this.currentQuestion + 1;
        }
    }

    nextQuestion() {
        // Save current answer
        const questionId = this.questions[this.currentQuestion].id;
        this.answers[questionId] = this.getSelectedOptions();

        if (this.currentQuestion === this.questions.length - 1) {
            this.showResults();
        } else {
            this.currentQuestion++;
            this.renderQuestion();
        }
    }

    previousQuestion() {
        if (this.currentQuestion > 0) {
            this.currentQuestion--;
            this.renderQuestion();
        }
    }

    showResults() {
    const score = this.calculateMatchScore();
    const recommendations = this.generateRecommendations();
    
    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('results-container').style.display = 'block';

    this.renderScore(score);
    this.renderRecommendations(recommendations);
    this.renderNextSteps(score);
    
    // ADD THIS LINE to set up the recommendation button
    this.setupRecommendationButton();
}

    setupRecommendationButton() {
    const recommendationBtn = document.getElementById('get-recommendation');
    const retakeBtn = document.getElementById('retake-quiz');
    
    console.log('Setting up recommendation button:', recommendationBtn);
    
    if (recommendationBtn) {
        // Remove any existing event listeners by cloning
        const newRecBtn = recommendationBtn.cloneNode(true);
        recommendationBtn.parentNode.replaceChild(newRecBtn, recommendationBtn);
        
        // Add click event listener
        newRecBtn.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('Get Recommendation button clicked!');
            this.sendQuizResults();
        });
        
        // Also add onclick as backup
        newRecBtn.onclick = (e) => {
            e.preventDefault();
            this.sendQuizResults();
        };
    }

    if (retakeBtn) {
        const newRetakeBtn = retakeBtn.cloneNode(true);
        retakeBtn.parentNode.replaceChild(newRetakeBtn, retakeBtn);
        
        newRetakeBtn.addEventListener('click', () => {
            this.restartQuiz();
        });
    }
}

    sendQuizResults() {
    console.log('Sending quiz results...');
    console.log('Answers:', this.answers);
    
    const emailSubject = "Project Consultation Request - Quiz Results";
    const emailBody = this.createRecommendationEmail();
    
    // Create mailto link with YOUR email
    const mailtoLink = `mailto:sharatsunnithan3@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    console.log('Mailto link:', mailtoLink);
    
    // Open email client
    window.location.href = mailtoLink;
}

createRecommendationEmail() {
    const score = this.calculateMatchScore();
    const recommendations = this.generateRecommendations();
    
    let emailContent = `Hello Sharat,\n\n`;
    emailContent += `I just completed your project matching quiz and would like to discuss my project requirements.\n\n`;
    
    emailContent += `📊 QUIZ RESULTS:\n`;
    emailContent += `Match Score: ${score}%\n\n`;
    
    emailContent += `🎯 MY PROJECT DETAILS:\n`;
    
    // Add all quiz answers
    this.questions.forEach((question, index) => {
        const answerValues = this.answers[question.id] || [];
        if (answerValues.length > 0) {
            const selectedOptions = question.options.filter(opt => 
                answerValues.includes(opt.value)
            );
            const answerText = selectedOptions.map(opt => opt.label).join(', ');
            emailContent += `• ${question.title}: ${answerText}\n`;
        }
    });
    
    emailContent += `\n💡 RECOMMENDATIONS FROM QUIZ:\n`;
    if (recommendations.length > 0) {
        recommendations.forEach((rec, index) => {
            emailContent += `${index + 1}. ${rec.title}: ${rec.description}\n`;
        });
    } else {
        emailContent += `The quiz recommended we schedule a call to discuss specific requirements.\n`;
    }
    
    emailContent += `\n🤔 ADDITIONAL NOTES:\n`;
    emailContent += `[Please share any additional details about your project here]\n\n`;
    
    emailContent += `📅 NEXT STEPS:\n`;
    emailContent += `• Please let me know your availability for a quick call\n`;
    emailContent += `• Share your initial thoughts based on my requirements\n`;
    emailContent += `• Provide any additional information you might need\n\n`;
    
    emailContent += `Looking forward to hearing from you!\n\n`;
    emailContent += `Best regards,\n`;
    emailContent += `[Your Name]\n`;
    emailContent += `[Your Email Address]`;
    
    return emailContent;
}
// Add this fallback method
showEmailFallback(emailBody) {
    const resultsContainer = document.getElementById('results-container');
    const fallbackHTML = `
        <div class="email-fallback" style="background: var(--bg-light); padding: 2rem; border-radius: var(--border-radius); margin: 2rem 0;">
            <h4>Email Client Not Available</h4>
            <p>Please copy the text below and send it to: <strong>sharatsunnithan3@gmail.com</strong></p>
            <textarea style="width: 100%; height: 300px; padding: 1rem; border: 1px solid var(--border-color); border-radius: var(--border-radius); background: var(--bg-color); color: var(--text-color); font-family: monospace;" readonly>${emailBody}</textarea>
            <button class="btn btn-primary" onclick="this.previousElementSibling.select(); document.execCommand('copy'); alert('Copied to clipboard!')">
                <i class="fas fa-copy"></i> Copy to Clipboard
            </button>
        </div>
    `;
    
    const nextSteps = document.getElementById('next-steps');
    if (nextSteps) {
        nextSteps.insertAdjacentHTML('afterend', fallbackHTML);
    }
}

    createRecommendationEmail() {
        const score = this.calculateMatchScore();
        const recommendations = this.generateRecommendations();
        
        let emailContent = `Hello Sharat,\n\n`;
        emailContent += `I just completed your project matching quiz and would like to discuss my project requirements.\n\n`;
        
        emailContent += `📊 QUIZ RESULTS:\n`;
        emailContent += `Match Score: ${score}%\n\n`;
        
        emailContent += `🎯 MY PROJECT DETAILS:\n`;
        emailContent += this.formatAnswersForEmail();
        
        emailContent += `\n💡 RECOMMENDATIONS FROM QUIZ:\n`;
        if (recommendations.length > 0) {
            recommendations.forEach((rec, index) => {
                emailContent += `${index + 1}. ${rec.title}: ${rec.description}\n`;
            });
        } else {
            emailContent += `The quiz recommended we schedule a call to discuss specific requirements.\n`;
        }
        
        emailContent += `\n🤔 ADDITIONAL NOTES:\n`;
        emailContent += `[Please share any additional details about your project here]\n\n`;
        
        emailContent += `📅 NEXT STEPS:\n`;
        emailContent += `• Please let me know your availability for a quick call\n`;
        emailContent += `• Share your initial thoughts based on my requirements\n`;
        emailContent += `• Provide any additional information you might need\n\n`;
        
        emailContent += `Looking forward to hearing from you!\n\n`;
        emailContent += `Best regards,\n`;
        emailContent += `[Your Name]\n`;
        emailContent += `[Your Email Address]`;
        
        return emailContent;
    }

    formatAnswersForEmail() {
        let formattedAnswers = '';
        
        this.questions.forEach((question, index) => {
            const answerValues = this.answers[question.id] || [];
            if (answerValues.length > 0) {
                const selectedOptions = question.options.filter(opt => 
                    answerValues.includes(opt.value)
                );
                const answerText = selectedOptions.map(opt => opt.label).join(', ');
                formattedAnswers += `• ${question.title}: ${answerText}\n`;
            }
        });
        
        return formattedAnswers;
    }

    calculateMatchScore() {
        let score = 0;
        let maxScore = 100;

        // Budget match (30% of score)
        const budgetAnswer = this.answers[3]?.[0];
        if (budgetAnswer === 'standard' || budgetAnswer === 'premium') score += 30;
        else if (budgetAnswer === 'basic' || budgetAnswer === 'enterprise') score += 20;
        else if (budgetAnswer === 'not-sure') score += 10;

        // Timeline match (20% of score)
        const timelineAnswer = this.answers[2]?.[0];
        if (timelineAnswer === 'soon') score += 20;
        else if (timelineAnswer === 'flexible') score += 15;
        else if (timelineAnswer === 'urgent') score += 10;

        // Technical requirements match (50% of score)
        const techAnswers = this.answers[4] || [];
        score += Math.min(techAnswers.length * 8, 40);

        // Project type bonus (10% of score)
        const projectAnswer = this.answers[1]?.[0];
        if (projectAnswer === 'web-app' || projectAnswer === 'mobile-app') score += 10;

        return Math.min(score, maxScore);
    }

    generateRecommendations() {
        const recommendations = [];
        const projectType = this.answers[1]?.[0];
        const budget = this.answers[3]?.[0];
        const techReqs = this.answers[4] || [];

        // Project type recommendation
        if (projectType === 'website') {
            recommendations.push({
                title: "Custom Website Development",
                description: "I'll create a fast, responsive website tailored to your brand with modern technologies and SEO optimization."
            });
        } else if (projectType === 'web-app') {
            recommendations.push({
                title: "Full-Stack Web Application",
                description: "Complete development of your web application with frontend, backend, database, and deployment."
            });
        } else if (projectType === 'mobile-app') {
            recommendations.push({
                title: "Cross-Platform Mobile App",
                description: "Development of a native-feeling mobile app that works on both iOS and Android using React Native."
            });
        }

        // Budget recommendation
        if (budget === 'basic') {
            recommendations.push({
                title: "MVP Approach",
                description: "Let's start with a minimum viable product to validate your idea, then iterate based on user feedback."
            });
        } else if (budget === 'premium' || budget === 'enterprise') {
            recommendations.push({
                title: "Scalable Architecture",
                description: "I'll build your project with scalability in mind, ensuring it can grow with your user base and feature needs."
            });
        }

        // Technical requirements recommendations
        if (techReqs.includes('payments')) {
            recommendations.push({
                title: "Secure Payment Integration",
                description: "Implementation of Stripe or PayPal with proper security measures and compliance."
            });
        }

        if (techReqs.includes('database')) {
            recommendations.push({
                title: "Database Design & Optimization",
                description: "Custom database architecture designed for your specific data needs and performance requirements."
            });
        }

        return recommendations;
    }

    renderScore(score) {
        const scoreCircle = document.getElementById('match-score');
        let matchLevel, matchText, matchDescription;

        if (score >= 80) {
            matchLevel = 'excellent';
            matchText = 'Excellent Match!';
            matchDescription = 'Your project requirements align perfectly with my expertise. I\'m confident I can deliver outstanding results.';
        } else if (score >= 60) {
            matchLevel = 'good';
            matchText = 'Good Match';
            matchDescription = 'Your project is a good fit for my skills. There might be some areas where we\'ll need to collaborate closely.';
        } else {
            matchLevel = 'fair';
            matchText = 'Fair Match';
            matchDescription = 'While I can help with aspects of your project, there might be better specialists for your specific needs.';
        }

        scoreCircle.innerHTML = `
            <div class="score-circle" id="score-circle"></div>
            <div class="score-text ${matchLevel}">${matchText}</div>
            <div class="score-description">${matchDescription}</div>
        `;

        // Animate the score circle
        setTimeout(() => {
            const circle = document.getElementById('score-circle');
            if (circle) {
                circle.style.background = `conic-gradient(var(--primary-color) ${score}%, var(--border-color) ${score}%)`;
            }
        }, 100);
    }

    renderRecommendations(recommendations) {
        const container = document.getElementById('recommendations');
        
        if (recommendations.length === 0) {
            container.innerHTML = '<p>Based on your answers, I recommend we schedule a call to discuss your specific needs.</p>';
            return;
        }

        container.innerHTML = `
            <h4>Recommended Approach</h4>
            ${recommendations.map(rec => `
                <div class="recommendation-item">
                    <h4>${rec.title}</h4>
                    <p>${rec.description}</p>
                </div>
            `).join('')}
        `;
    }

    renderNextSteps(score) {
    const container = document.getElementById('next-steps');

    let nextSteps = [];
    
    if (score >= 70) {
        nextSteps = [
            "Schedule a discovery call to discuss details",
            "Review project requirements and timeline",
            "Provide detailed proposal and quote",
            "Start development within 1-2 weeks"
        ];
    } else if (score >= 50) {
        nextSteps = [
            "Schedule a consultation call",
            "Discuss project feasibility and alternatives",
            "Explore potential collaborations",
            "Provide initial recommendations"
        ];
    } else {
        nextSteps = [
            "Schedule a quick chat to understand your needs",
            "I can recommend other specialists if needed",
            "Discuss potential learning resources",
            "Explore simplified approaches"
        ];
    }

    container.innerHTML = `
        <h4>Suggested Next Steps</h4>
        <ul>
            ${nextSteps.map(step => `<li>${step}</li>`).join('')}
        </ul>
        <p><strong>Click "Get Detailed Recommendations" to send your quiz results directly to my inbox!</strong></p>
    `;
}

    restartQuiz() {
        this.currentQuestion = 0;
        this.answers = {};
        document.getElementById('results-container').style.display = 'none';
        document.getElementById('quiz-container').style.display = 'block';
        this.renderQuestion();
    }
}

// Initialize the quiz when the page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing quiz...');
    new SkillMatcher();
});