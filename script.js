    // const httpRequest = new XMLHttpRequest();

    // httpRequest.onreadystatechange = gestisciRisposteDelServer;
    // httpRequest.open('GET', './assets/data.json');
    // httpRequest.send();



    // function gestisciRisposteDelServer() {
        
        
    //     console.log("readystate",httpRequest.readyState);
        
    //     console.log("status",httpRequest.status);

    //     console.log("response",httpRequest.responseText);

    //     if (httpRequest.readyState === 4 && httpRequest.status  === 200) {
    //         const arrayOfUsers = JSON.parse(httpRequest.responseText);
    //         console.log(arrayOfUsers);
    //     }
        
        // if (httpRequest.readyState === XMLHttpRequest.DONE) {
        //     if (httpRequest.status === 200) {
        //       alert(httpRequest.responseText);
        //     } else {
        //       alert('There was a problem with the request.');
        //     }
        //   }
       
    //}

    fetch("./assets/data.json")
    .then( (response)=>response.json())
    .then((data)=> console.log(data))
    .catch((error)=> console.log(error));
// https://opentdb.com/api.php?amount=10
// (error)=> console.log(error)
// (data)=> console.log(data)
//


//  function manageResponse(response) {
//      console.log(response);
//      return response.json();
//  }   

//  function onDataReady(data) {
//      let arrayOfBooks = [];
//      for (const user of data) {
         
//      }
//  }

//  function errorLog(error) {
//      console.log(error);
//  }


function appendBookToHTMLList(data) {
    let listContainer = document.getElementById("listBook");
    listContainer.className = "containerList";
    let list = document.createElement("ul");
    
    for (const i of data) {
        let info = document.createElement("li");
        // info.innerHTML=i.title;
        addTextToHTMLElement(info, i.title, true, 'boldest large-font');
        addTextToHTMLElement(info, i.autore, true, 'large-font');
        
        list.appendChild(info);
    }
       listContainer.appendChild(list)
}
function addTextToHTMLElement(htmlElement, text, isNewLine= false, classesName) {
    const span = document.createElement('span');
    span.className += classesName + " "
    let textNode2= document.createTextNode(text);
    span.appendChild(textNode2)
        htmlElement.appendChild(span)
        if (isNewLine) {
            const newLine = document.createElement('br');
            htmlElement.appendChild(newLine);
        }
}
fetch("./assets/books.json")
    .then( (response)=>response.json())
    .then(appendBookToHTMLList)
    .catch((error)=> console.log(error));
