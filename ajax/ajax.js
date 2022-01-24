console.log("Ajax tutoruials in one video");

let fetchBtn = document.getElementById("fetchBtn");
fetchBtn.addEventListener("click", buttonClickHandler);

function buttonClickHandler() {
  console.log("You have clicked the fetchBtn");

  // Instantiate an xhr object
  const xhr = new XMLHttpRequest();

  // open to do on progress ( optional)
  xhr.open("POST", "http://dummy.restapiexample.com/api/v1/create", true);
  xhr.getResponseHeader('Content-type','application/json');

  xhr.onprogress = function () {
    console.log("On progress");
  };

  // xhr.onreadystatechange = function () {
  //   console.log("ready state is", xhr.readyState);
  // };

  // what to do when response is ready
  xhr.onload = function () {
    if (this.status === 200) {
      console.log(this.responseText);
    } else {
      console.log("Some error occured");
    }
  };
  
  // send the request
  params = `{"name":"suresh","Salary":"25252","id":"245879"}`
  xhr.send(params);
}

