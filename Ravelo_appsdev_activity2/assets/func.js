let popup = document.getElementById("popup");

    document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const name = document.getElementById('fname').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;
    const description = document.getElementById('descrip').value;
    const recommendation = document.querySelector('input[name="recommend"]:checked').value;
  
    const languages = Array.from(document.querySelectorAll('input[name="languages"]:checked'))
                          .map(checkbox => checkbox.value)
                          .join(", ");

    const comments = document.getElementById('comments').value;

    const output = `
        <h3>User Information</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>Description:</strong> ${description}</p>
        <p><strong>Recommendation:</strong> ${recommendation}</p>
        <p><strong>Languages/Frameworks:</strong> ${languages}</p>
        <p><strong>Comments:</strong> ${comments}</p>
    `;

    document.getElementById('out').innerHTML = output;
    openPopup();
});

function openPopup() {
    popup.classList.add("open-popup");
}

function closePopup() {
    popup.classList.remove("open-popup");
    document.getElementById("form").reset(); 
}