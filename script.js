const API_KEY = "uJ7qIRZgL7N7dRLf6aoSAs7mtYejClrYnp1wKehs"

const root= document.getElementById("root");
const messageDiv = document.createElement("div");

const fetchApod = async function(){
  const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);

  console.log(response);

  if(response.status===200){
    console.log("Fetch was successful");

    messageDiv.innerText = "Fetch was successful";

    const apodData = await response.json();
    console.log(apodData);

  } else{
    console.log("Fetch was NOT successful");
    messageDiv.innerText = "Fetch was NOT successful";
  
  }
  root.append(messageDiv);
};
fetchApod();

