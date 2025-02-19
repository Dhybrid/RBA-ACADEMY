const form = document.getElementById('registrationForm');
const sections = document.querySelectorAll('.form-section');
const steps = document.querySelectorAll('.step');
const progressBar = document.querySelector('.progress-bar .progress');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const submitBtn = document.getElementById('submitBtn');
let currentSection = 0;

// Function to show the current section
function showSection(index) {
    sections.forEach((section, i) => {
        section.classList.toggle('active', i === index);
    });
    steps.forEach((step, i) => {
        step.classList.toggle('active', i === index);
        step.classList.toggle('completed', i < index);
    });
    prevBtn.disabled = index === 0;
    nextBtn.style.display = index === sections.length - 1 ? 'none' : 'block';
    submitBtn.style.display = index === sections.length - 1 ? 'block' : 'none';
    updateProgressBar(index);
}

// Function to update the progress bar
function updateProgressBar(index) {
    const progressWidth = (index / (sections.length - 1)) * 100;
    progressBar.style.width = `${progressWidth}%`;
}

// Function to validate the current section
function validateSection(index) {
    const inputs = sections[index].querySelectorAll('input, select');
    let isValid = true;
    inputs.forEach(input => {
        if (input.hasAttribute('required') && !input.value.trim()) {
            isValid = false;
            input.classList.add('invalid');
        } else {
            input.classList.remove('invalid');
        }
        if (input.type === 'email' && !validateEmail(input.value)) {
            isValid = false;
            input.classList.add('invalid');
            document.getElementById('emailError').textContent = 'Please enter a valid email address.';
            document.getElementById('emailError').style.display = 'block';
        } else {
            document.getElementById('emailError').style.display = 'none';
        }
    });
    return isValid;
}

// Email validation function
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Function to update the preview section
function updatePreview() {
    const previewContent = document.getElementById('previewContent');
    const formData = new FormData(form);
    let html = '<ul>';
    formData.forEach((value, key) => {
        html += `<li><strong>${key}:</strong> ${value}</li>`;
    });
    html += '</ul>';
    previewContent.innerHTML = html;
}

// Event listeners for navigation
nextBtn.addEventListener('click', () => {
    if (validateSection(currentSection)) {
        currentSection++;
        showSection(currentSection);
        if (currentSection === sections.length - 1) {
            updatePreview();
        }
    }
});

prevBtn.addEventListener('click', () => {
    currentSection--;
    showSection(currentSection);
});

// Event listener for step clicks
steps.forEach((step, index) => {
    step.addEventListener('click', () => {
        if (index <= currentSection) {
            currentSection = index;
            showSection(currentSection);
        }
    });
});

// Event listener for form submission
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Form submitted successfully!');
    // You can add AJAX submission logic here
});

// Initialize the form
showSection(currentSection);