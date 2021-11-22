// DECLARES FUNCTION:
function myFunction() {
    const gender = document.getElementById('gender').value;
    const date = document.getElementById('date').value;

  // INSTRUCTIONS FOR MALE NAMES:  
    if (gender === 'male') {
        const d = new Date(date);
        const g = d.getDay();

        
        if (g == 0 ) {
            alert('Kwasi');
        }
        else if (g == 1 ) {
            alert('Kwadwo');
        }
        else if (g == 2 ) {
            alert('Kwabena');
        }
        else if (g == 3 ) {
            alert('Kwaku');
        }
        else if (g == 4 ) {
            alert('Yaw');
        }
        else if (g == 5 ) {
            alert('Kofi');
        }
        else if (g == 6 ) {
            alert('Kwame');
        }
    } else {
       // INSTRUCTIONS FOR FEMALE NAMES:  
        const d = new Date(date);
        const g = d.getDay();

        if (g == 0 ) {
            alert('Akosua');
        }
        else if (g == 1 ) {
            alert('Adwowa');
        }
        else if (g == 2 ) {
            alert('Abenaa');
        }
        else if (g == 3 ) {
            alert('Akua');
        }
        else if (g == 4 ) {
            alert('Yaa');
        }
        else if (g == 5 ) {
            alert('Afua');
        }
        else if (g == 6 ) {
            alert('Ama');
        }
    }
}