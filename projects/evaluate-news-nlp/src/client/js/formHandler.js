function handleSubmit(e) {
    e.preventDefault()

    const apiKey = '9f7225fb95e956c7abd63fb730ab2d7a'
    const apiUrl = "https://api.meaningcloud.com/sentiment-2.1?key="
    // check what text was put into the form field
    const inputUrl = document.getElementById('name').value
    console.log(inputUrl)
    Client.checkText(apiUrl, apiKey, inputUrl)
    .then(function(data){
        const confidence = data.confidence;
        console.log("Confidence: ",confidence)
        const subjectivity = data.subjectivity;
        console.log("Subjectivity :", subjectivity)
        const score = data.score_tag;
        console.log("Score :" , score)
        document.getElementById('result').innerHTML=`Confidence: ${confidence}`;
        document.getElementById('objectivity').innerHTML=`Subjectivity: ${subjectivity}`;
        document.getElementById('score').innerHTML=`Score: ${score}`;
        
        });
    };

    
    /* Function to GET Web API Data*/
    const checkText = async (apiUrl, apiKey, inputUrl) => {
        //console.log(apiUrl+zip+apiKey)
        // fetch api
        const response = await fetch(`${apiUrl}${apiKey}&lang=auto&url=${inputUrl}`)
        console.log("Response in checkText: ",response)
        try {
            const textData = await response.json();
            //console.log(weatherData);
            return textData;
        } catch(error){
            console.log('Error in checkText: ', error);
     }
    }
    






export { handleSubmit }
export { checkText }
//export { postData }
//export { updateUI }
