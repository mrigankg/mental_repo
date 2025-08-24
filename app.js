// Dashboard data
const dashboardData = {
  "patients": [
    {
      "id": 1,
      "name": "Patient A",
      "age": 34,
      "gender": "Female",
      "condition": "Depression",
      "therapyType": "CBT",
      "startDate": "2024-01-15",
      "sessionFrequency": "Weekly",
      "totalSessions": 16,
      "currentStage": "Rebuilding",
      "phq9Baseline": 18,
      "phq9Current": 8,
      "gad7Baseline": 15,
      "gad7Current": 6,
      "engagementScore": 85,
      "progressData": [
        {"week": 1, "phq9": 18, "gad7": 15, "engagement": 45},
        {"week": 4, "phq9": 16, "gad7": 13, "engagement": 55},
        {"week": 8, "phq9": 12, "gad7": 10, "engagement": 70},
        {"week": 12, "phq9": 9, "gad7": 7, "engagement": 80},
        {"week": 16, "phq9": 8, "gad7": 6, "engagement": 85}
      ]
    },
    {
      "id": 2,
      "name": "Patient B",
      "age": 28,
      "gender": "Male",
      "condition": "Anxiety",
      "therapyType": "DBT",
      "startDate": "2024-02-01",
      "sessionFrequency": "Bi-weekly",
      "totalSessions": 12,
      "currentStage": "Stabilization",
      "phq9Baseline": 12,
      "phq9Current": 10,
      "gad7Baseline": 20,
      "gad7Current": 12,
      "engagementScore": 78,
      "progressData": [
        {"week": 1, "phq9": 12, "gad7": 20, "engagement": 40},
        {"week": 4, "phq9": 11, "gad7": 18, "engagement": 50},
        {"week": 8, "phq9": 10, "gad7": 15, "engagement": 65},
        {"week": 12, "phq9": 10, "gad7": 12, "engagement": 78}
      ]
    },
    {
      "id": 3,
      "name": "Patient C",
      "age": 42,
      "gender": "Female",
      "condition": "PTSD",
      "therapyType": "EMDR",
      "startDate": "2024-03-10",
      "sessionFrequency": "Weekly",
      "totalSessions": 10,
      "currentStage": "Rebuilding",
      "phq9Baseline": 16,
      "phq9Current": 7,
      "gad7Baseline": 18,
      "gad7Current": 8,
      "engagementScore": 92,
      "progressData": [
        {"week": 1, "phq9": 16, "gad7": 18, "engagement": 60},
        {"week": 3, "phq9": 14, "gad7": 15, "engagement": 70},
        {"week": 6, "phq9": 10, "gad7": 12, "engagement": 85},
        {"week": 10, "phq9": 7, "gad7": 8, "engagement": 92}
      ]
    },
    {
      "id": 4,
      "name": "Patient D",
      "age": 19,
      "gender": "Non-binary",
      "condition": "Depression",
      "therapyType": "ACT",
      "startDate": "2024-04-05",
      "sessionFrequency": "Weekly",
      "totalSessions": 8,
      "currentStage": "Stabilization",
      "phq9Baseline": 22,
      "phq9Current": 15,
      "gad7Baseline": 14,
      "gad7Current": 9,
      "engagementScore": 65,
      "progressData": [
        {"week": 1, "phq9": 22, "gad7": 14, "engagement": 35},
        {"week": 2, "phq9": 20, "gad7": 13, "engagement": 45},
        {"week": 4, "phq9": 18, "gad7": 11, "engagement": 55},
        {"week": 8, "phq9": 15, "gad7": 9, "engagement": 65}
      ]
    }
  ],
  "therapyEffectiveness": [
    {
      "therapy": "CBT",
      "averageImprovement": 68,
      "averageSessions": 14,
      "successRate": 82,
      "patientCount": 45
    },
    {
      "therapy": "DBT",
      "averageImprovement": 62,
      "averageSessions": 18,
      "successRate": 76,
      "patientCount": 32
    },
    {
      "therapy": "EMDR",
      "averageImprovement": 74,
      "averageSessions": 12,
      "successRate": 85,
      "patientCount": 28
    },
    {
      "therapy": "ACT",
      "averageImprovement": 65,
      "averageSessions": 16,
      "successRate": 79,
      "patientCount": 38
    }
  ],
  "sessionFrequencyData": [
    {
      "frequency": "Weekly",
      "averageImprovement": 71,
      "averageTime": 14,
      "patientCount": 89
    },
    {
      "frequency": "Bi-weekly",
      "averageImprovement": 58,
      "averageTime": 22,
      "patientCount": 54
    }
  ],
  "recoveryStages": [
    {
      "stage": "Crisis/Acute",
      "description": "Initial crisis phase",
      "patientCount": 8,
      "averageDuration": "2-4 weeks"
    },
    {
      "stage": "Stabilization",
      "description": "Symptom stabilization",
      "patientCount": 23,
      "averageDuration": "2-6 months"
    },
    {
      "stage": "Rebuilding",
      "description": "Skill building and growth",
      "patientCount": 34,
      "averageDuration": "6-12 months"
    },
    {
      "stage": "Maintenance/Thriving",
      "description": "Sustaining progress",
      "patientCount": 18,
      "averageDuration": "Ongoing"
    }
  ],
  "outcomeMeasures": [
    {
      "measure": "PHQ-9",
      "description": "Depression severity",
      "scale": "0-27",
      "interpretation": "Higher scores indicate more severe depression"
    },
    {
      "measure": "GAD-7",
      "description": "Anxiety severity",
      "scale": "0-21",
      "interpretation": "Higher scores indicate more severe anxiety"
    },
    {
      "measure": "Engagement Score",
      "description": "Patient treatment engagement",
      "scale": "0-100",
      "interpretation": "Higher scores indicate better engagement"
    }
  ]
};

// Chart color palette
const chartColors = ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545', '#D2BA4C', '#964325', '#944454', '#13343B'];

// Initialize dashboard
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeCharts();
    populatePatients();
    populatePatientSelector();
    populateOutcomeMeasures();
    initializeModal();
});

// Navigation functionality
function initializeNavigation() {
    const navTabs = document.querySelectorAll('.nav-tab');
    const tabContents = document.querySelectorAll('.tab-content');
    
    navTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetTab = tab.getAttribute('data-tab');
            
            // Update active tab
            navTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // Update active content
            tabContents.forEach(content => content.classList.remove('active'));
            document.getElementById(`${targetTab}-tab`).classList.add('active');
        });
    });
}

// Initialize all charts
function initializeCharts() {
    createRecoveryStageChart();
    createTherapyEffectivenessChart();
    createInterventionsChart();
    createSessionFrequencyChart();
    createOutcomesChart();
    
    // Initialize progress chart (will be empty until patient is selected)
    createProgressChart();
}

// Recovery Stage Distribution Chart
function createRecoveryStageChart() {
    const ctx = document.getElementById('recoveryStageChart').getContext('2d');
    
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: dashboardData.recoveryStages.map(stage => stage.stage),
            datasets: [{
                data: dashboardData.recoveryStages.map(stage => stage.patientCount),
                backgroundColor: chartColors.slice(0, 4),
                borderWidth: 2,
                borderColor: '#ffffff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 20,
                        usePointStyle: true
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const stage = dashboardData.recoveryStages[context.dataIndex];
                            return `${stage.stage}: ${stage.patientCount} patients (${stage.averageDuration})`;
                        }
                    }
                }
            }
        }
    });
}

// Therapy Effectiveness Chart
function createTherapyEffectivenessChart() {
    const ctx = document.getElementById('therapyEffectivenessChart').getContext('2d');
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: dashboardData.therapyEffectiveness.map(therapy => therapy.therapy),
            datasets: [
                {
                    label: 'Success Rate (%)',
                    data: dashboardData.therapyEffectiveness.map(therapy => therapy.successRate),
                    backgroundColor: chartColors[0],
                    borderRadius: 4,
                    yAxisID: 'y'
                },
                {
                    label: 'Avg Improvement (%)',
                    data: dashboardData.therapyEffectiveness.map(therapy => therapy.averageImprovement),
                    backgroundColor: chartColors[1],
                    borderRadius: 4,
                    yAxisID: 'y'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            },
            plugins: {
                legend: {
                    position: 'top'
                }
            }
        }
    });
}

// Interventions Comparison Chart - Fixed implementation
function createInterventionsChart() {
    const ctx = document.getElementById('interventionsChart').getContext('2d');
    
    // Calculate maximum patient count for normalization
    const maxPatientCount = Math.max(...dashboardData.therapyEffectiveness.map(t => t.patientCount));
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: dashboardData.therapyEffectiveness.map(therapy => therapy.therapy),
            datasets: [
                {
                    label: 'Success Rate (%)',
                    data: dashboardData.therapyEffectiveness.map(therapy => therapy.successRate),
                    backgroundColor: chartColors[0],
                    borderRadius: 4
                },
                {
                    label: 'Avg Improvement (%)',
                    data: dashboardData.therapyEffectiveness.map(therapy => therapy.averageImprovement),
                    backgroundColor: chartColors[1],
                    borderRadius: 4
                },
                {
                    label: 'Patient Count',
                    data: dashboardData.therapyEffectiveness.map(therapy => therapy.patientCount),
                    backgroundColor: chartColors[2],
                    borderRadius: 4,
                    yAxisID: 'y1'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    beginAtZero: true,
                    max: 100,
                    title: {
                        display: true,
                        text: 'Percentage (%)'
                    }
                },
                y1: {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Patient Count'
                    },
                    grid: {
                        drawOnChartArea: false,
                    },
                }
            },
            plugins: {
                legend: {
                    position: 'top'
                },
                tooltip: {
                    callbacks: {
                        afterLabel: function(context) {
                            const therapy = dashboardData.therapyEffectiveness[context.dataIndex];
                            return `Average Sessions: ${therapy.averageSessions}`;
                        }
                    }
                }
            }
        }
    });
}

// Session Frequency Chart
function createSessionFrequencyChart() {
    const ctx = document.getElementById('sessionFrequencyChart').getContext('2d');
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: dashboardData.sessionFrequencyData.map(data => data.frequency),
            datasets: [{
                label: 'Average Improvement (%)',
                data: dashboardData.sessionFrequencyData.map(data => data.averageImprovement),
                backgroundColor: [chartColors[0], chartColors[1]],
                borderRadius: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        afterLabel: function(context) {
                            const frequency = dashboardData.sessionFrequencyData[context.dataIndex];
                            return [
                                `Patient Count: ${frequency.patientCount}`,
                                `Average Duration: ${frequency.averageTime} weeks`
                            ];
                        }
                    }
                }
            }
        }
    });
}

// Progress Chart (will be updated when patient is selected)
function createProgressChart(patientData = null) {
    const ctx = document.getElementById('progressChart').getContext('2d');
    
    // Clear existing chart if it exists
    if (window.progressChart instanceof Chart) {
        window.progressChart.destroy();
    }
    
    let data, labels;
    
    if (patientData) {
        labels = patientData.progressData.map(d => `Week ${d.week}`);
        data = {
            labels: labels,
            datasets: [
                {
                    label: 'PHQ-9 Score',
                    data: patientData.progressData.map(d => d.phq9),
                    borderColor: chartColors[2],
                    backgroundColor: chartColors[2] + '30',
                    fill: false,
                    tension: 0.3
                },
                {
                    label: 'GAD-7 Score',
                    data: patientData.progressData.map(d => d.gad7),
                    borderColor: chartColors[1],
                    backgroundColor: chartColors[1] + '30',
                    fill: false,
                    tension: 0.3
                },
                {
                    label: 'Engagement Score',
                    data: patientData.progressData.map(d => d.engagement),
                    borderColor: chartColors[0],
                    backgroundColor: chartColors[0] + '30',
                    fill: false,
                    tension: 0.3,
                    yAxisID: 'y1'
                }
            ]
        };
    } else {
        labels = ['Select a patient to view progress'];
        data = {
            labels: labels,
            datasets: []
        };
    }
    
    window.progressChart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Assessment Scores'
                    }
                },
                y1: {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    beginAtZero: true,
                    max: 100,
                    title: {
                        display: true,
                        text: 'Engagement Score (%)'
                    },
                    grid: {
                        drawOnChartArea: false,
                    },
                }
            },
            plugins: {
                legend: {
                    position: 'top'
                }
            }
        }
    });
}

// Outcomes Chart
function createOutcomesChart() {
    const ctx = document.getElementById('outcomesChart').getContext('2d');
    
    const baselineData = dashboardData.patients.map(p => p.phq9Baseline);
    const currentData = dashboardData.patients.map(p => p.phq9Current);
    const patientLabels = dashboardData.patients.map(p => p.name);
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: patientLabels,
            datasets: [
                {
                    label: 'Baseline PHQ-9',
                    data: baselineData,
                    backgroundColor: chartColors[2],
                    borderRadius: 4
                },
                {
                    label: 'Current PHQ-9',
                    data: currentData,
                    backgroundColor: chartColors[0],
                    borderRadius: 4
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'PHQ-9 Score'
                    }
                }
            },
            plugins: {
                legend: {
                    position: 'top'
                }
            }
        }
    });
}

// Populate patient cards
function populatePatients() {
    const patientsGrid = document.getElementById('patientsGrid');
    
    dashboardData.patients.forEach(patient => {
        const patientCard = createPatientCard(patient);
        patientsGrid.appendChild(patientCard);
    });
}

// Create individual patient card
function createPatientCard(patient) {
    const card = document.createElement('div');
    card.className = 'patient-card';
    card.setAttribute('data-patient-id', patient.id);
    
    const phq9Improvement = Math.round(((patient.phq9Baseline - patient.phq9Current) / patient.phq9Baseline) * 100);
    const gad7Improvement = Math.round(((patient.gad7Baseline - patient.gad7Current) / patient.gad7Baseline) * 100);
    
    card.innerHTML = `
        <div class="patient-header">
            <div>
                <h4 class="patient-name">${patient.name}</h4>
                <div class="patient-info">${patient.age} years, ${patient.gender}</div>
                <div class="patient-info">${patient.condition} - ${patient.therapyType}</div>
            </div>
            <div class="patient-stage">${patient.currentStage}</div>
        </div>
        
        <div class="patient-metrics">
            <div class="patient-metric">
                <div class="patient-metric-label">PHQ-9</div>
                <div class="patient-metric-value ${phq9Improvement > 0 ? 'improvement-positive' : 'improvement-neutral'}">${patient.phq9Current}</div>
            </div>
            <div class="patient-metric">
                <div class="patient-metric-label">GAD-7</div>
                <div class="patient-metric-value ${gad7Improvement > 0 ? 'improvement-positive' : 'improvement-neutral'}">${patient.gad7Current}</div>
            </div>
        </div>
        
        <div class="progress-bar-container">
            <div class="progress-bar-label">
                <span>Engagement</span>
                <span>${patient.engagementScore}%</span>
            </div>
            <div class="progress-bar">
                <div class="progress-bar-fill" style="width: ${patient.engagementScore}%"></div>
            </div>
        </div>
    `;
    
    card.addEventListener('click', () => showPatientModal(patient));
    
    return card;
}

// Populate patient selector for progress tab
function populatePatientSelector() {
    const selector = document.getElementById('patientSelector');
    
    dashboardData.patients.forEach(patient => {
        const option = document.createElement('option');
        option.value = patient.id;
        option.textContent = `${patient.name} (${patient.condition})`;
        selector.appendChild(option);
    });
    
    selector.addEventListener('change', function() {
        const patientId = parseInt(this.value);
        if (patientId) {
            const patient = dashboardData.patients.find(p => p.id === patientId);
            createProgressChart(patient);
        } else {
            createProgressChart();
        }
    });
}

// Populate outcome measures
function populateOutcomeMeasures() {
    const measuresList = document.getElementById('measuresList');
    
    dashboardData.outcomeMeasures.forEach(measure => {
        const measureItem = document.createElement('div');
        measureItem.className = 'measure-item';
        
        measureItem.innerHTML = `
            <div class="measure-name">${measure.measure}</div>
            <div class="measure-description">${measure.description}</div>
            <div class="measure-scale">Scale: ${measure.scale}</div>
        `;
        
        measuresList.appendChild(measureItem);
    });
}

// Modal functionality
function initializeModal() {
    const modal = document.getElementById('patientModal');
    const modalClose = document.getElementById('modalClose');
    const modalOverlay = modal.querySelector('.modal-overlay');
    
    modalClose.addEventListener('click', hidePatientModal);
    modalOverlay.addEventListener('click', hidePatientModal);
    
    // Close on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
            hidePatientModal();
        }
    });
}

// Show patient details modal
function showPatientModal(patient) {
    const modal = document.getElementById('patientModal');
    const modalTitle = document.getElementById('modalPatientName');
    const modalBody = document.getElementById('modalBody');
    
    modalTitle.textContent = `${patient.name} - Detailed Progress`;
    
    const phq9Improvement = Math.round(((patient.phq9Baseline - patient.phq9Current) / patient.phq9Baseline) * 100);
    const gad7Improvement = Math.round(((patient.gad7Baseline - patient.gad7Current) / patient.gad7Baseline) * 100);
    
    modalBody.innerHTML = `
        <div class="modal-detail-grid">
            <div class="modal-detail-item">
                <div class="modal-detail-label">Age</div>
                <div class="modal-detail-value">${patient.age}</div>
            </div>
            <div class="modal-detail-item">
                <div class="modal-detail-label">Gender</div>
                <div class="modal-detail-value">${patient.gender}</div>
            </div>
            <div class="modal-detail-item">
                <div class="modal-detail-label">Condition</div>
                <div class="modal-detail-value">${patient.condition}</div>
            </div>
            <div class="modal-detail-item">
                <div class="modal-detail-label">Therapy Type</div>
                <div class="modal-detail-value">${patient.therapyType}</div>
            </div>
            <div class="modal-detail-item">
                <div class="modal-detail-label">Session Frequency</div>
                <div class="modal-detail-value">${patient.sessionFrequency}</div>
            </div>
            <div class="modal-detail-item">
                <div class="modal-detail-label">Total Sessions</div>
                <div class="modal-detail-value">${patient.totalSessions}</div>
            </div>
        </div>
        
        <div class="modal-detail-grid">
            <div class="modal-detail-item">
                <div class="modal-detail-label">PHQ-9 Baseline</div>
                <div class="modal-detail-value">${patient.phq9Baseline}</div>
            </div>
            <div class="modal-detail-item">
                <div class="modal-detail-label">PHQ-9 Current</div>
                <div class="modal-detail-value ${phq9Improvement > 0 ? 'improvement-positive' : 'improvement-neutral'}">${patient.phq9Current}</div>
            </div>
            <div class="modal-detail-item">
                <div class="modal-detail-label">PHQ-9 Improvement</div>
                <div class="modal-detail-value ${phq9Improvement > 0 ? 'improvement-positive' : 'improvement-neutral'}">${phq9Improvement}%</div>
            </div>
            <div class="modal-detail-item">
                <div class="modal-detail-label">GAD-7 Baseline</div>
                <div class="modal-detail-value">${patient.gad7Baseline}</div>
            </div>
            <div class="modal-detail-item">
                <div class="modal-detail-label">GAD-7 Current</div>
                <div class="modal-detail-value ${gad7Improvement > 0 ? 'improvement-positive' : 'improvement-neutral'}">${patient.gad7Current}</div>
            </div>
            <div class="modal-detail-item">
                <div class="modal-detail-label">GAD-7 Improvement</div>
                <div class="modal-detail-value ${gad7Improvement > 0 ? 'improvement-positive' : 'improvement-neutral'}">${gad7Improvement}%</div>
            </div>
        </div>
        
        <div class="progress-bar-container">
            <div class="progress-bar-label">
                <span>Current Engagement Score</span>
                <span>${patient.engagementScore}%</span>
            </div>
            <div class="progress-bar">
                <div class="progress-bar-fill" style="width: ${patient.engagementScore}%"></div>
            </div>
        </div>
    `;
    
    modal.classList.remove('hidden');
}

// Hide patient modal
function hidePatientModal() {
    const modal = document.getElementById('patientModal');
    modal.classList.add('hidden');
}