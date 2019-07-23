var animalsAr = ['goat','pig','bird','dog'];

// render array to button
function renderArrayToButton(){
    document.querySelector('#target').innerHTML = '';
     for(i = 0; i < animalsAr.length; i++){
        let button = document.createElement('button');
        // let button = $('<button>');
        let buttonTxt = document.createTextNode(animalsAr[i]);
        button.append(buttonTxt);
        // button.text(animalsAr[i]);

        button.addEventListener('click', getGiphyData);
        // button.on('click', getGiphyData);

        document.querySelector('#target').append(button);
     }
}

// array push items in and array...
function addGifToArray(event){
    event.preventDefault();
    // get val from input text
    var inputText = document.querySelector('#input-box').value;

    // append data to the array
    animalsAr.push(inputText);

    document.querySelector('#input-box').value = '';

    renderArrayToButton();
   
}


$(document).ready(function () {

    $('#add-button').on('click', addGifToArray);
    renderArrayToButton();


});

function getGiphyData(e){
    e.preventDefault();
    console.log(this.innerText);
    
    var queryUrl = 'https://api.giphy.com/v1/gifs/search?api_key=VCtHRNm0rquIRq8e5hKxc3yp5uhoItho&q='+this.innerText+'&rating=g&limit=10';

    
     
        
        fetch(queryUrl)
        .then(function (data) { return data.json() })
        .then(function(json) {

            var gifsLink = json.data;
            console.log(json);

        for (i in  gifsLink) {
            $('.results').append("<img id='giffs' src=' "+ gifsLink[i].images.original.url+ " ' style='height:250px; width:250px; '/ >");
            
            
        } 


           
         })
        .catch(function(error) { console.error(error) })

         

   
    

}











// push item into with a mini function
// then loop through array
// function target id for add button
