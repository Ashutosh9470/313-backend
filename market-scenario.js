// Chart color scheme
const primaryColor = '#6a5af9';
const secondaryColor = '#ff5ea2';
const tertiaryColor = '#9b5cf6';
const lightColor = '#f472b6';
const accentColor = '#a855f7';

// Chart 1: Platform Market Share (Doughnut Chart)
const platformCtx = document.getElementById('platformChart');
if (platformCtx) {
  new Chart(platformCtx, {
    type: 'doughnut',
    data: {
      labels: ['Google', 'Facebook/Meta', 'Amazon', 'YouTube', 'TikTok', 'Others'],
      datasets: [{
        data: [28, 22, 18, 15, 12, 5],
        backgroundColor: [
          primaryColor,
          secondaryColor,
          lightColor,
          tertiaryColor,
          accentColor,
          '#e5e7eb'
        ],
        borderColor: ['#fff', '#fff', '#fff', '#fff', '#fff', '#fff'],
        borderWidth: 3
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            font: { size: 13, weight: '600' },
            color: '#555',
            padding: 20,
            usePointStyle: true
          }
        }
      }
    }
  });
}

// Chart 2: Revenue Growth (Line Chart)
const revenueCtx = document.getElementById('revenueChart');
if (revenueCtx) {
  new Chart(revenueCtx, {
    type: 'line',
    data: {
      labels: ['Q1 2023', 'Q2 2023', 'Q3 2023', 'Q4 2023', 'Q1 2024', 'Q2 2024', 'Q3 2025', 'Q4 2026'],
      datasets: [
        {
          label: 'Digital Revenue',
          data: [520, 580, 650, 720, 800, 850, 920, 1050],
          borderColor: primaryColor,
          backgroundColor: 'rgba(106, 90, 249, 0.1)',
          borderWidth: 3,
          fill: true,
          tension: 0.4,
          pointRadius: 5,
          pointBackgroundColor: primaryColor,
          pointBorderColor: '#fff',
          pointBorderWidth: 2,
          pointHoverRadius: 7
        },
        {
          label: 'E-Commerce Revenue',
          data: [320, 360, 400, 450, 510, 570, 640, 750],
          borderColor: secondaryColor,
          backgroundColor: 'rgba(255, 94, 162, 0.1)',
          borderWidth: 3,
          fill: true,
          tension: 0.4,
          pointRadius: 5,
          pointBackgroundColor: secondaryColor,
          pointBorderColor: '#fff',
          pointBorderWidth: 2,
          pointHoverRadius: 7
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: {
          labels: {
            font: { size: 13, weight: '600' },
            color: '#555',
            padding: 20,
            usePointStyle: true
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: function(value) {
              return '$' + value + 'B';
            },
            font: { size: 12, weight: '600' },
            color: '#999'
          },
          grid: {
            color: 'rgba(0, 0, 0, 0.05)',
            drawBorder: false
          }
        },
        x: {
          ticks: {
            font: { size: 12, weight: '600' },
            color: '#999'
          },
          grid: {
            display: false,
            drawBorder: false
          }
        }
      }
    }
  });
}

// Chart 3: Market Segment Distribution (Bar Chart)
const segmentCtx = document.getElementById('segmentChart');
if (segmentCtx) {
  new Chart(segmentCtx, {
    type: 'bar',
    data: {
      labels: ['Retail', 'Finance', 'Tech', 'Healthcare', 'Media', 'Travel'],
      datasets: [{
        label: 'Market Size (in $B)',
        data: [580, 420, 680, 320, 280, 240],
        backgroundColor: [
          primaryColor,
          secondaryColor,
          lightColor,
          tertiaryColor,
          accentColor,
          'rgba(106, 90, 249, 0.7)'
        ],
        borderRadius: 8,
        borderWidth: 0
      }]
    },
    options: {
      indexAxis: 'y',
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        x: {
          ticks: {
            callback: function(value) {
              return '$' + value + 'B';
            },
            font: { size: 12, weight: '600' },
            color: '#999'
          },
          grid: {
            color: 'rgba(0, 0, 0, 0.05)',
            drawBorder: false
          }
        },
        y: {
          ticks: {
            font: { size: 13, weight: '600' },
            color: '#333'
          },
          grid: {
            display: false,
            drawBorder: false
          }
        }
      }
    }
  });
}

// Chart 4: Sector Growth Comparison (Radar Chart)
const growthCtx = document.getElementById('growthChart');
if (growthCtx) {
  new Chart(growthCtx, {
    type: 'radar',
    data: {
      labels: ['Search', 'Social', 'E-commerce', 'Video', 'Mobile', 'Cloud'],
      datasets: [
        {
          label: '2024 Growth (%)',
          data: [15, 18, 22, 28, 24, 19],
          borderColor: primaryColor,
          backgroundColor: 'rgba(106, 90, 249, 0.1)',
          borderWidth: 3,
          pointRadius: 5,
          pointBackgroundColor: primaryColor,
          pointBorderColor: '#fff',
          pointBorderWidth: 2
        },
        {
          label: '2025 Projection (%)',
          data: [12, 20, 26, 32, 28, 23],
          borderColor: secondaryColor,
          backgroundColor: 'rgba(255, 94, 162, 0.1)',
          borderWidth: 3,
          pointRadius: 5,
          pointBackgroundColor: secondaryColor,
          pointBorderColor: '#fff',
          pointBorderWidth: 2
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: {
          labels: {
            font: { size: 13, weight: '600' },
            color: '#555',
            padding: 20,
            usePointStyle: true
          }
        }
      },
      scales: {
        r: {
          ticks: {
            color: '#999',
            font: { size: 12, weight: '600' },
            callback: function(value) {
              return value + '%';
            }
          },
          grid: {
            color: 'rgba(0, 0, 0, 0.05)'
          },
          pointLabels: {
            color: '#333',
            font: { size: 13, weight: '600' }
          }
        }
      }
    }
  });
}
