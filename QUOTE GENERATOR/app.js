// https://api.quotable.io/random  ----> JSON Format ---> Javascript Object

// JSON and javascript Object

// rule is whenever u consider json all keys should be in double quotes
// but in js object will return even without double quotes

const myButton = document.getElementById("btn1")

const myQuote = document.getElementById("myquote")

const myAuthor =  document.getElementById("myauthor")

const copy  =  document.getElementById("copy")

const volume = document.getElementById("volume-up")

const myContainer = document.getElementById("container")

const myLoader = document.getElementById("loader")

function first(){
//Initially the container should be visible not the loader
myContainer.hidden = false
myLoader.hidden = true
}

function second(){
//when button is clicked loader should be visible but not container
myLoader.hidden = false
myContainer.hidden = true
}

first()




myButton.addEventListener('click', async function(){ //when await is used function chnges to async

    //Logic where container should be hidden and loader should be visible
    second()

    const response = await fetch("https://api.quotable.io/random") // why await becoz the data will be read by taking some time and later that data will be kept in respose variable
    let quotes =  await response.json() // ----> convert json to js objects why await here basically read json data in which quote is represented and convert to js object takes time so will wait until then then final js object will kept in quotes variable 
    //this above line of code says that json is converted to js objects.
   
    myQuote.innerText = quotes.content// <span id="myquote"></span>
    myAuthor.innerText = quotes.author// <span id="myauthor"></span>
    
    first()

})

copy.addEventListener('click',function() {
    
    //Logic to copy code
    navigator.clipboard.writeText(myQuote.innerText)

})

volume.addEventListener('click',function() {

    //Logic to read out that quote
   let speech= new SpeechSynthesisUtterance(myQuote.innerText)
   speechSynthesis.speak(speech)

})





