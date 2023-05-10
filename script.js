const API_KEY = "uJ7qIRZgL7N7dRLf6aoSAs7mtYejClrYnp1wKehs"
const API_DATE = "2023-05-01"
const root= document.getElementById("root");
const messageDiv = document.createElement("div");

const fetchApod = async function(){
  const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${API_DATE}`);

  console.log(response);

  if(response.status===200){
    console.log("Fetch was successful");

    messageDiv.innerText = "Fetch was successful";

    const apodData = await response.json();
    console.log(apodData);


    const h1= document.createElement("h1");
    h1.innerText= apodData.title;

    const img = document.createElement("img");
    img.src= apodData.url;
    root.append(h1, img);

  } else{
    console.log("Fetch was NOT successful");
    messageDiv.innerText = "Fetch was NOT successful";
  
  }
  root.append(messageDiv);
};
fetchApod();

