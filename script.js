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

    fetch("./assets/books.json")
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
        let textNode2= document.createTextNode(i.autore);
        info.appendChild(textNode2)
        let textNode=document.createTextNode(i.title);
        info.appendChild(textNode);
        
        list.appendChild(info);
    }
       listContainer.appendChild(list)
}

fetch("./assets/books.json")
    .then( (response)=>response.json())
    .then(appendBookToHTMLList)
    .catch((error)=> console.log(error));
