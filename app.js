window.addEventListener('load', function() {
    let loadBtn = document.querySelector('#btn');

    loadBtn.addEventListener('click', function(element) {
        element.preventDefault();

        fetch("http://localhost/info2180-lab4/superheroes.php")
            .then(response => {
                if (response.ok) {
                    return response.text()
                } else {
                    return Promise.reject('something went wrong!')
                }
            })
            .then(data => {
                let result = document.querySelector('#results');
                alert(data)
            })
            .catch(error => console.log('There was an error: ' + error));
    });
});