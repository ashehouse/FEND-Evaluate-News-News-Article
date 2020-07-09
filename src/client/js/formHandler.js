var validUrl = require('valid-url');

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('articleurl').value
    
    // Verify that input is valid url
    if (validUrl.isUri(formText)){
        console.log('Looks like an URI');
        postData('http//localhost:8080/article', formText)
    } else {
        console.log('Not a URI');
    }
    
   

}

const postData = async (path, input_url) => {
    await fetch(path, {
        method: "POST",
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({text: input_url}),
    });
    try {
        let newData = await response.text();
        // console.log(newData);
        return newData;
    } catch(error) {
        console.log('error', error);
    };
};

export { handleSubmit }
