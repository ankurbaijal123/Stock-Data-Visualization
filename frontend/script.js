document.addEventListener('DOMContentLoaded', function () {
  console.log('Page loaded, attempting to fetch companies');

  // Fetch the list of companies
  fetch('/companies')
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .then(companies => {
          const companyList = document.getElementById('companyList');
          const searchInput = document.getElementById('searchInput');

          // Remove duplicates
          const uniqueCompanies = [...new Set(companies)];

          if (!uniqueCompanies || uniqueCompanies.length === 0) {
              companyList.innerHTML = '<li class="list-group-item">No companies available</li>';
              return;
          }

          // Function to render companies , only unique companies are there
          function renderCompanies(companiesToRender) {
              companyList.innerHTML = ''; 
              companiesToRender.forEach(company => {
                  const listItem = document.createElement('li');
                  listItem.classList.add('list-group-item');
                  listItem.textContent = company;
                  listItem.addEventListener('click', () => loadCompanyData(company));
                  companyList.appendChild(listItem);
              });
          }

          renderCompanies(uniqueCompanies);

          // first company list will be displayed by default 
          if (uniqueCompanies.length > 0) {
              loadCompanyData(uniqueCompanies[0]); 
              companyList.firstChild.classList.add('selected'); 
          }

          // Search functionality
          searchInput.addEventListener('input', () => {
              const searchValue = searchInput.value.toLowerCase();
              const filteredCompanies = uniqueCompanies.filter(company => 
                  company.toLowerCase().includes(searchValue)
              );
              renderCompanies(filteredCompanies);
          });
      })
      .catch(error => console.error('Error fetching companies:', error));
});


let chartInstance;

  // Fetch the data for the selected company and display the chart
function loadCompanyData(company) {
  console.log('Company selected:', company);


  fetch(`/data/${company}`)
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .then(data => {
          const metricSelect = document.getElementById('metricSelect');
          const selectedMetric = metricSelect.value;

          // Create chart data
          createChart(data, selectedMetric, company);

          const companyListItems = document.querySelectorAll('.list-group-item');
          companyListItems.forEach(item => item.classList.remove('selected'));
          const selectedItem = Array.from(companyListItems).find(item => item.textContent === company);
          if (selectedItem) {
              selectedItem.classList.add('selected'); // Highlight the selected company
          }
          metricSelect.addEventListener('change', () => {
              updateChart(data, metricSelect.value, company);
          });
      })
      .catch(error => console.error('Error loading company data:', error));
}

// Function to create the initial chart with animation
function createChart(data, selectedMetric, company) {
  const chartData = {
      labels: data.map(entry => entry.index_date), // Dates on the x-axis
      datasets: [{
          label: `${company} - ${getMetricLabel(selectedMetric)}`, // Update the label based on selected metric
          data: data.map(entry => Number(entry[selectedMetric])), // Use the selected metric
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderWidth: 1,
          fill: true, // Fill the area under the line
      }]
  };

  const ctx = document.getElementById('companyChart').getContext('2d');

  // Destroy the existing chart for dynamic view of the chart
  if (chartInstance) {
      chartInstance.destroy();
  }

  // Create a new chart instance with enhanced animation options
  chartInstance = new Chart(ctx, {
      type: 'line',
      data: chartData,
      options: {
          responsive: true,
          maintainAspectRatio: false, 
          scales: {
              y: {
                  beginAtZero: true,
                  grid: {
                      color: 'rgba(255, 255, 255, 0.2)', 
                  },
                  ticks: {
                      color: 'white', 
                  },
              },
              x: {
                  ticks: {
                      color: 'white', 
                  },
              }
          },
          animation: {
              tension: {
                  duration: 2000, 
                  easing: 'easeInOutBounce', 
                  from: 1, 
                  to: 0, 
                  loop: true 
              },
              borderWidth: {
                  duration: 1000,
                  easing: 'easeInOutQuad',
                  from: 1,
                  to: 3,
                  loop: false
              },
              opacity: {
                  duration: 1000,
                  easing: 'easeInOutQuart',
                  from: 0,
                  to: 1,
                  loop: false
              },
              onComplete: function () {
                  console.log('Chart animation complete!');
              }
          },
          plugins: {
              legend: {
                  labels: {
                      color: 'white' 
                  }
              }
          }
      }
  });
}

// Function to update the chart for new comapny
function updateChart(data, selectedMetric, company) {
  chartInstance.data.datasets[0].label = `${company} - ${getMetricLabel(selectedMetric)}`;
  chartInstance.data.datasets[0].data = data.map(entry => Number(entry[selectedMetric])); 
  chartInstance.update(); 
}

function getMetricLabel(metric) {
  switch (metric) {
      case 'closing_index_value':
          return 'Closing Value';
      case 'open_index_value':
          return 'Opening Value';
      case 'high_index_value':
          return 'High Value';
      case 'low_index_value':
          return 'Low Value';
      case 'points_change':
          return 'Points Change';
      case 'change_percent':
          return 'Change Percentage';
      case 'volume':
          return 'Volume';
      case 'turnover_rs_cr':
          return 'Turnover (Rs Cr)';
      case 'pe_ratio':
          return 'PE Ratio';
      case 'pb_ratio':
          return 'PB Ratio';
      case 'div_yield':
          return 'Dividend Yield';
      default:
          return metric; 
  }
}

// Function to download the chart as an image
function downloadChart() {
  const canvas = document.getElementById('companyChart');
  const link = document.createElement('a');
  link.href = canvas.toDataURL('image/png'); 
  link.download = 'chart.png'; 
  link.click();
}

// Event for download button
document.getElementById('downloadButton').addEventListener('click', downloadChart);
