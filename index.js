var btns= document.querySelector(".btn")
var inputs= document.querySelector("#input")
var apiKeys ="BZZxdMM1uIazrO69cpbFmVqtAdvULmTCQuEdcrsV";
var imgmainBody = document.querySelector(".img-body")
var imgBox = document.querySelector(".img")
var imgTittleBox = document.querySelector(".img-title")
var loadingText = document.querySelector(".loading")
var errorbox = document.querySelector(".error")
var footerbox = document.querySelector(".footer")

btns.addEventListener("click" ,function(){
    loadingText.style.display="none"
    imgBox.innerHTML= "";
    imgTittleBox.innerHTML=""
    errorbox.innerHTML=""
    footerbox.style.display="none"


    var inputText = inputs.value;
    var year = inputText.slice(0,4)
    var month = inputText.slice(5,7)
    var date = inputText.slice(8,10)
    
    if(inputText===""){
        alert("Enter The Date")
        return;
        }
    getImage(year,month,date);
})


async function getImage(year,month,date){
   loadingText.style.display="block"
   var ftechData = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKeys}&date=${year}-${month}-${date}`)

   var ImageData = await ftechData.json();
    imgmainBody.style.display="flex"
      var imgUrl = ImageData.url;
      var imgdetails = ImageData.explanation;
      var imgheads = ImageData.title;
      
      loadingText.style.display="none"
   
      var setImg = document.createElement("img")
      setImg.alt="Image Not Available"
      setImg.setAttribute("src",imgUrl)
      imgBox.appendChild(setImg)
      
      var setImgHeading = document.createElement("H2")
      var setImgTitle = document.createElement("p")
       setImgHeading.innerHTML =`${imgheads}`
      setImgTitle.innerHTML = `${imgdetails}`;
      imgTittleBox.appendChild(setImgHeading)
      imgTittleBox.appendChild(setImgTitle)
       
   if(ImageData.code===400){
       imgmainBody.style.display="none"
    console.log("erroe")
    var errortext = ImageData.msg;
    var textset = document.createElement("h3")
    textset.innerHTML=errortext;
    errorbox.appendChild(textset)

   }
   
   
}

