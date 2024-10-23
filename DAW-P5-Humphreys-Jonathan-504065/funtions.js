document.addEventListener('DOMContentLoaded', function () {
    // Popover
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    const popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl, {
            trigger: 'manual',
            placement: 'top'
        });
    });

    // Button click event
    document.getElementById('submitButton').addEventListener('click', function () {
        const inputFieldValue = document.getElementById('inputField').value.trim();

        if (inputFieldValue) {
            popoverList.forEach(popover => popover.hide());

            document.getElementById('modalInputValue').textContent = inputFieldValue;
            const modal = new bootstrap.Modal(document.getElementById('exampleModal'));
            modal.show();
        } else {

            popoverList.forEach(popover => popover.show());
        }
    });

    // Hide popover
    document.addEventListener('click', function (e) {
        if (!e.target.closest('#submitButton')) {
            popoverList.forEach(popover => popover.hide());
        }
    });
    
});

function validateForm() {
    let email = document.getElementById("email").value;
    let age = document.getElementById("age").value;
    let municipio = document.getElementById("municipio").value;
    let modalContent = document.getElementById("modal-body-content");

    let emailPattern = /^[a-zA-Z0-9._-]+@(gmail\.com|yahoo\.com|hotmail\.com|outlook\.com)$/;

    let errors = [];
        if (!email) {
        errors.push("El correo electrónico no puede estar vacío.");
    } else if (!emailPattern.test(email)) {
        errors.push("El correo electrónico debe ser de un dominio válido (@gmail.com, @yahoo.com, @hotmail.com, @outlook.com).");
    }

    if (!age || age < 0 || !Number.isInteger(parseFloat(age))) {
        errors.push("La edad es incorecta.");
    }

    if (!municipio) {
        errors.push("El municipio no puede estar vacío.");
    }

    if (errors.length > 0) {
        modalContent.innerHTML = "<ul><li>" + errors.join("</li><li>") + "</li></ul>";
    } else {
        modalContent.innerHTML = "Registro completado.";
    }

    let modal = new bootstrap.Modal(document.getElementById('resultModal'));
    modal.show();
}    

const attractionsData = {
    museos: [
        {
            name: 'Museo de Historia Mexicana',
            address: 'Dr. José Ma. Coss 445, Centro, 64000 Monterrey, N.L.',
            date: 'Todo el año',
            cost: 'Entrada gratuita',
            googleMapsLink: 'https://www.google.com/maps?q=Museo+de+Historia+Mexicana',
            image: 'assets/museo/historia_mex.jpg'
        },
        {
            name: 'Museo del Noreste',
            address: 'Dr. José Ma. Coss 445, Centro, 64000 Monterrey, N.L.',
            date: 'Todo el año',
            cost: 'Entrada: $50 MXN',
            googleMapsLink: 'https://www.google.com/maps?q=Museo+del+Noreste',
            image: 'assets/museo/noroeste.jpg'
        },
        {
            name: 'Museo MARCO',
            address: 'Juan Zuazua, Padre Raymundo Jardón y, Centro, 64000 Monterrey, N.L.',
            date: 'Todo el año',
            cost: 'Entrada: $90 MXN',
            googleMapsLink: 'https://www.google.com/maps?q=Museo+MARCO',
            image: 'assets/museo/marco.jpg'
        },
        {
            name: 'Museo del Palacio',
            address: 'Ignacio Zaragoza & 5 de Mayo, Centro, 64000 Monterrey, N.L.',
            date: 'Todo el año',
            cost: 'Entrada gratuita',
            googleMapsLink: 'https://www.google.com/maps?q=Museo+del+Palacio',
            image: 'assets/museo/palacio.jpg'
        },
        {
            name: 'Museo del Vidrio',
            address: 'Mariano Escobedo 1735, Treviño, 64570 Monterrey, N.L.',
            date: 'Todo el año',
            cost: 'Entrada: $30 MXN',
            googleMapsLink: 'https://www.google.com/maps?q=Museo+del+Vidrio',
            image: 'assets/museo/vidrio.jpg'
        }
    ],
    parques: [
        {
            name: 'Parque Fundidora',
            address: 'Adolfo Prieto S/N, Obrera, 64010 Monterrey, N.L.',
            date: 'Todo el año',
            cost: 'Entrada gratuita',
            googleMapsLink: 'https://www.google.com/maps?q=Parque+Fundidora',
            image: 'assets/parque/fundidora.jpg'
        },
        {
            name: 'Parque La Huasteca',
            address: 'Parque La Huasteca, Miguel Hidalgo, 66196 Cdad. Santa Catarina, N.L.',
            date: 'Todo el año',
            cost: 'Entrada gratuita',
            googleMapsLink: 'https://www.google.com/maps?q=Parque+La+Huasteca',
            image: 'assets/parque/huasteca.jpg'
        },
        {
            name: 'Parque Ecologico Chipinque',
            address: 'Carretera a Chipinque Km. 2.5, Valle de San Angel, 66290 San Pedro Garza García, N.L.',
            date: 'Todo el año',
            cost: 'Entrada: $50 MXN',
            googleMapsLink: 'https://www.google.com/maps?q=Parque+Chipinque',
            image: 'assets/parque/chipinque.jpg'
        },
        {
            name: 'Parque Zoologico La Pastora',
            address: 'Av Eloy Cavazos, Jardines de La Pastora, 67140 Guadalupe, N.L.',
            date: 'Todo el año',
            cost: 'Entrada: $80 MXN',
            googleMapsLink: 'https://www.google.com/maps?q=Parque+Zoologico+La+Pastora',
            image: 'assets/parque/pastora.jpg'
        },
        {
            name: 'Parque Nacional Cumbres',
            address: 'Nuevo León, México',
            date: 'Todo el año',
            cost: 'Entrada: $30 MXN',
            googleMapsLink: 'https://www.google.com/maps?q=Parque+Nacional+Cumbres',
            image: 'assets/parque/cumbres.jpg'
        }
    ],
    arenas: [
        {
            name: 'Arena Monterrey',
            address: 'Av. Madero 2500, Monterrey, N.L.',
            date: 'Ver calendario de eventos',
            cost: 'Depende del evento',
            googleMapsLink: 'https://www.google.com/maps?q=Arena+Monterrey',
            image: 'assets/arenas/monterrey.jpg'
        },
        {
            name: 'Auditorio Pabellón M',
            address: 'Av. Constitución 1001, Monterrey, N.L.',
            date: 'Ver calendario de eventos',
            cost: 'Depende del evento',
            googleMapsLink: 'https://www.google.com/maps?q=Auditorio+Pabellon+M',
            image: 'assets/arenas/pabellon.jpg'
        },
        {
            name: 'Estadio BBVA',
            address: 'Prolongación Francisco I. Madero 100, Guadalupe, N.L.',
            date: 'Ver calendario de eventos',
            cost: 'Depende del evento',
            googleMapsLink: 'https://www.google.com/maps?q=Estadio+BBVA',
            image: 'assets/arenas/bbva.jpg'
        },
        {
            name: 'Estadio Universitario',
            address: 'Cd. Universitaria, San Nicolás de los Garza, N.L.',
            date: 'Ver calendario de eventos',
            cost: 'Depende del evento',
            googleMapsLink: 'https://www.google.com/maps?q=Estadio+Universitario',
            image: 'assets/arenas/universitario.jpg'
        },
        {
            name: 'Auditorio Citibanamex',
            address: 'Av. Fundidora s/n, Obrera, 64010 Monterrey, N.L.',
            date: 'Ver calendario de eventos',
            cost: 'Depende del evento',
            googleMapsLink: 'https://www.google.com/maps?q=Auditorio¡Citibanamex',
            image: 'assets/arenas/citib.jpg'
        }
    ]
};

// Evento al cambiar el tipo de atracción
document.getElementById('attractionType').addEventListener('change', function() {
    const type = this.value;
    const attractionSection = document.getElementById('attractions');
    const attractionList = document.getElementById('attractionList');
    const attractionTypeTitle = document.getElementById('attractionTypeTitle');

    // Si no selecciona ninguna opción, oculta la sección
    if (!type) {
        attractionSection.style.display = 'none';
        return;
    }

    // Limpia la lista anterior
    attractionList.innerHTML = '';

    // Actualiza el título de la sección
    attractionTypeTitle.textContent = type.charAt(0).toUpperCase() + type.slice(1);

    // Recorre las atracciones del tipo seleccionado
    attractionsData[type].forEach(attraction => {
        const colDiv = document.createElement('div');
        colDiv.classList.add('col-md-4', 'attraction-item');

        const attractionContent = `
            <div class="card">
                <img src="${attraction.image}" class="card-img-top" alt="${attraction.name}">
                <div class="card-body">
                    <h5 class="card-title">${attraction.name}</h5>
                    <p class="card-text"><strong>Dirección:</strong> ${attraction.address}</p>
                    <p class="card-text"><strong>Fecha:</strong> ${attraction.date}</p>
                    <p class="card-text"><strong>Costo:</strong> ${attraction.cost}</p>
                    <a href="${attraction.googleMapsLink}" target="_blank" class="btn page">Ver en Google Maps</a>
                </div>
            </div>
        `;
        colDiv.innerHTML = attractionContent;
        attractionList.appendChild(colDiv);
    });

    // Muestra la sección
    attractionSection.style.display = 'block';
});