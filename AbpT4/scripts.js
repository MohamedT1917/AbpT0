// Form validation and submission handling

function validateLoginForm() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    let valid = true;

    if (!email || !validateEmail(email)) {
        showError('email', 'Please enter a valid email address.');
        valid = false;
    } else {
        clearError('email');
    }

    if (!password || password.length < 6) {
        showError('password', 'Password must be at least 6 characters long.');
        valid = false;
    } else {
        clearError('password');
    }

    if (valid) {
        // Perform login actions (this could be an API call, here we simply redirect for demonstration)
        window.location.href = 'home.html';
    }
}
function validateRegisterForm() {
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    let valid = true;

    if (!firstName) {
        showError('first-name', 'Please enter your first name.');
        valid = false;
    } else {
        clearError('first-name');
    }

    if (!lastName) {
        showError('last-name', 'Please enter your last name.');
        valid = false;
    } else {
        clearError('last-name');
    }

    if (!username) {
        showError('username', 'Please enter a username.');
        valid = false;
    } else {
        clearError('username');
    }

    if (!email || !validateEmail(email)) {
        showError('email', 'Please enter a valid email address.');
        valid = false;
    } else {
        clearError('email');
    }

    if (!password || password.length < 6) {
        showError('password', 'Password must be at least 6 characters long.');
        valid = false;
    } else {
        clearError('password');
    }

    if (password !== confirmPassword) {
        showError('confirm-password', 'Passwords do not match.');
        valid = false;
    } else {
        clearError('confirm-password');
    }

    if (valid) {
        // Save user data in localStorage for demonstration
        localStorage.setItem('firstName', firstName);
        localStorage.setItem('lastName', lastName);
        // Redirect to home page
        window.location.href = 'home.html';
    }
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    let error = field.nextElementSibling;
    if (!error || !error.classList.contains('error')) {
        error = document.createElement('div');
        error.classList.add('error');
        field.parentNode.insertBefore(error, field.nextSibling);
    }
    error.textContent = message;
}

function clearError(fieldId) {
    const field = document.getElementById(fieldId);
    let error = field.nextElementSibling;
    if (error && error.classList.contains('error')) {
        error.textContent = '';
    }
}

// Update the user's name dynamically based on the entered information

document.addEventListener("DOMContentLoaded", function() {
    const firstName = localStorage.getItem('firstName');
    const lastName = localStorage.getItem('lastName');

    if (firstName && lastName) {
        const userName = `${firstName} ${lastName}`;
        const userIcon = `${firstName.charAt(0)}${lastName.charAt(0)}`;

        document.getElementById('user-name').textContent = userName;
        document.querySelector('.user-icon').textContent = userIcon;
    }
});

function validatePredictionForm() {
    const weight = document.getElementById('weight').value;
    const partnerWeight = document.getElementById('partner-weight').value;
    const height = document.getElementById('height').value;
    const partnerHeight = document.getElementById('partner-height').value;
    const birthDate = document.getElementById('birth-date').value;
    const partnerBirthDate = document.getElementById('partner-birth-date').value;
    const photo = document.getElementById('photo').files.length;
    const paymentMethod = document.getElementById('payment-method').value;
    let valid = true;

    if (!weight) {
        showError('weight', 'Please enter your weight.');
        valid = false;
    } else {
        clearError('weight');
    }

    if (!partnerWeight) {
        showError('partner-weight', 'Please enter your partner\'s weight.');
        valid = false;
    } else {
        clearError('partner-weight');
    }

    if (!height) {
        showError('height', 'Please enter your height.');
        valid = false;
    } else {
        clearError('height');
    }

    if (!partnerHeight) {
        showError('partner-height', 'Please enter your partner\'s height.');
        valid = false;
    } else {
        clearError('partner-height');
    }

    if (!birthDate) {
        showError('birth-date', 'Please enter your birth date.');
        valid = false;
    } else {
        clearError('birth-date');
    }

    if (!partnerBirthDate) {
        showError('partner-birth-date', 'Please enter your partner\'s birth date.');
        valid = false;
    } else {
        clearError('partner-birth-date');
    }

    if (photo === 0) {
        showError('photo', 'Please upload a photo of the couple.');
        valid = false;
    } else {
        clearError('photo');
    }

    if (!paymentMethod) {
        showError('payment-method', 'Please select a payment method.');
        valid = false;
    } else {
        clearError('payment-method');
    }

    if (valid) {
        // Simulate server request and redirect to confirmation page
        window.location.href = 'confirmation.html';
    }
}

function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    let error = field.nextElementSibling;
    if (!error || !error.classList.contains('error')) {
        error = document.createElement('div');
        error.classList.add('error');
        field.parentNode.insertBefore(error, field.nextSibling);
    }
    error.textContent = message;
}

function clearError(fieldId) {
    const field = document.getElementById(fieldId);
    let error = field.nextElementSibling;
    if (error && error.classList.contains('error')) {
        error.textContent = '';
    }
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Admin Dashboard functions

document.addEventListener("DOMContentLoaded", function() {
    // Dummy data for requests
    const requests = [
        {
            id: 1,
            firstName: "John",
            lastName: "Doe",
            email: "john.doe@example.com",
            weight: "70kg",
            partnerWeight: "60kg",
            height: "170cm",
            partnerHeight: "160cm",
            birthDate: "1990-01-01",
            partnerBirthDate: "1992-03-15",
            photo: "photo_link",
            paymentMethod: "Credit Card",
            paymentStatus: "Paid",
            status: "Pending"
        },
        {
            id: 2,
            firstName: "Jane",
            lastName: "Smith",
            email: "jane.smith@example.com",
            weight: "65kg",
            partnerWeight: "75kg",
            height: "165cm",
            partnerHeight: "180cm",
            birthDate: "1988-06-24",
            partnerBirthDate: "1990-11-05",
            photo: "photo_link",
            paymentMethod: "PayPal",
            paymentStatus: "Pending",
            status: "In-Progress"
        }
    ];

    // Populate the requests table
    const requestsTableBody = document.querySelector("#requests-table tbody");
    requests.forEach(request => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${request.id}</td>
            <td>${request.firstName}</td>
            <td>${request.lastName}</td>
            <td>${request.email}</td>
            <td>${request.weight}</td>
            <td>${request.partnerWeight}</td>
            <td>${request.height}</td>
            <td>${request.partnerHeight}</td>
            <td>${request.birthDate}</td>
            <td>${request.partnerBirthDate}</td>
            <td><a href="${request.photo}" target="_blank">View Photo</a></td>
            <td>${request.paymentMethod}</td>
            <td>${request.paymentStatus}</td>
            <td>${request.status}</td>
            <td>
                <button onclick="viewRequest(${request.id})">View</button>
                <button onclick="processRequest(${request.id})">Process</button>
            </td>
        `;

        requestsTableBody.appendChild(row);
    });

    // Update stats
    document.getElementById("pending-requests").textContent = requests.filter(r => r.status === "Pending").length;
    document.getElementById("in-progress-requests").textContent = requests.filter(r => r.status === "In-Progress").length;
    document.getElementById("completed-requests").textContent = requests.filter(r => r.status === "Completed").length;

    // Logout functionality
    document.getElementById("logout").addEventListener("click", function() {
        // Add backend logout logic here
        
        // For demo purposes, redirect to login page
        window.location.href = 'admin-login.html';
    });
});

function viewRequest(id) {
    // Add logic to view request details
    alert(`View request ${id}`);
}

function processRequest(id) {
    // Add logic to process the request
    alert(`Process request ${id}`);
}

// Update the user's name dynamically based on the entered information

document.addEventListener("DOMContentLoaded", function() {
    const firstName = localStorage.getItem('firstName');
    const lastName = localStorage.getItem('lastName');

    if (firstName && lastName) {
        const userName = `${firstName} ${lastName}`;
        const userIcon = `${firstName.charAt(0)}${lastName.charAt(0)}`;

        document.getElementById('user-name').textContent = userName;
        document.querySelector('.user-icon').textContent = userIcon;
    }
});

