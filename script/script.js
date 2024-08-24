const formData = document.getElementById("form")

formData.addEventListener("submit",function(formDetails){
    formDetails.preventDefault()
    let name = document.getElementById("fullName").value; 
    let email = document.getElementById("email").value;
    let age = document.getElementById("age").value;
    let gender = document.querySelector('input[name="gender"]:checked')?.value; 
    let hobies = Array.from(document.querySelectorAll('input[name="hobbies"]:checked')).map(hobby => hobby.value);
    

    const userDetails = document.getElementById("result")
    userDetails.innerHTML = `
    <h3>UserDetails :</h3>
    <p>Name: ${name}</p>
    <p>Email: ${email}</p>
    <p>Age: ${age}</p>
    <p>Gender: ${gender}</p>
    <p>Hobbies: ${hobies}</p>
    `
})

