function xhrGetCategories(){
    console.log("issuing GET request");
    var xhr = new XMLHttpRequest();
    xhr.open("GET","/categories", true);
    xhr.setRequestHeader("Content-Type","application/json;charset=UTF=8");
    xhr.onreadystatechange = function()
    {
        if(xhr.readyState == 4 && xhr.status == 200){
            console.log(xhr.status)
            console.log("retrieving categories")
            parsedRepsonse = JSON.parse(xhr.response);
            console.log(parsedRepsonse);
        }
        else {
            console.log(xhr.status)
            console.log(xhr.response)
            console.log("unable to get content");
        }
    }
}

function xhrGetCard(){
    console.log("issuing GET request");
    var xhr = new XMLHttpRequest();
    xhr.open("GET","/cards", true);
    xhr.setRequestHeader("Content-Type","application/json;charset=UTF=8");
    xhr.onreadystatechange = function()
    {
        if(xhr.readyState == 4 && xhr.status == 200){
            console.log(xhr.status)
            console.log("retrieving categories")
            parsedRepsonse = JSON.parse(xhr.response);
            console.log(parsedRepsonse);
        }
        else {
            console.log(xhr.status)
            console.log(xhr.response)
            console.log("unable to get content");
        }
    }
}

function xhrGetCategories(){
    console.log("issuing GET request");
    var xhr = new XMLHttpRequest();
    xhr.open("GET","/cards", true);
    xhr.setRequestHeader("Content-Type","application/json;charset=UTF=8");
    xhr.onreadystatechange = function()
    {
        if(xhr.readyState == 4 && xhr.status == 200){
            console.log(xhr.status)
            console.log("retrieving categories")
            parsedRepsonse = JSON.parse(xhr.response);
            console.log(parsedRepsonse);
        }
        else {
            console.log(xhr.status)
            console.log(xhr.response)
            console.log("unable to get content");
        }
    }
}

function xhrGetCardCategories(){
    console.log("issuing GET request");
    var xhr = new XMLHttpRequest();
    xhr.open("GET","/cards", true);
    xhr.setRequestHeader("Content-Type","application/json;charset=UTF=8");
    xhr.onreadystatechange = function()
    {
        if(xhr.readyState == 4 && xhr.status == 200){
            console.log(xhr.status)
            console.log("retrieving categories")
            parsedRepsonse = JSON.parse(xhr.response);
            console.log(parsedRepsonse);
        }
        else {
            console.log(xhr.status)
            console.log(xhr.response)
            console.log("unable to get content");
        }
    }
}