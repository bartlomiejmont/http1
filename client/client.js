fetch('http://localhost:3000')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        replaceData(data);
    });

const replaceData = (data) => {
    document.getElementById('id').innerHTML = data.id;
    document.getElementById('username').innerHTML = data.username;
    document.getElementById('email').innerHTML = data.email;
}

const sendForm = () => {
    const form = document.getElementById('basicForm');
    const formData = new FormData(form);

    let object = {};
    formData.forEach((value, key) => object[key] = value);
    const jsonData = JSON.stringify(object);

    fetch('http://localhost:3000', {
        body: jsonData,
        method: "post",
        headers: {
			"Content-Type": "application/json",
		},
    })
    .then(response => response.json())
    .then(res => {
        document.getElementById('username').innerHTML = res.fname;
        document.getElementById('email').innerHTML = res.lname;
    })    
}

