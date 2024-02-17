//Bot POPUP

var bot = document.getElementById("poptext");

// bot.onclick = function() {
//    modal.style.display = "popuptext";
//  }

 function openForm() {
  document.getElementById("botHelp").style.display = "block";
}

function closeForm() {
  document.getElementById("botHelp").style.display = "none";
}

// function chatResponse(){

// num = Math.ceil(Math.random()*3);

// var greets = ["hello", "hi", "hey"]

// for (var i=0; i< greets.length; i++){
//   if (greets[i] >= 1){
//     alert(greets[num]);
//   }
// }


// }
// chatResponse();

//  console.log(num);
function chatResponse(){
  var factList= ["Katherine Johnson, an African-American space scientist and mathematician, is a leading figure in American space history and has made enormous contributions to America’s aeronautics and space programs by her incorporation of computing tools.",
  "Ada Lovelace is considered to be the founder of scientific computing and the first computer programmer.",
  "Ruth Rogan Benerito was an American chemist and pioneer in bioproducts.",
  "Edith Clarke was a pioneering electrical engineer at the turn of the 20th century.",
  "Mary Engle Pennington was an American chemist at the turn of the 20th century.",
  "In 1993, Dr. Ellen Ochoa became the first Hispanic woman to go to space when she served on a nine-day mission aboard the space shuttle Discovery.",
  "Isolating enriched uranium was one of the most difficult aspects of the Manhattan Project, which produced the first nuclear bombs during World War II.",
  "Virginia H. Holsinger was an American chemist known for her research on dairy products and food security issues.",
  "Rear Admiral Grace Murray Hopper was at the forefront of computer and programming language development from the 1930s through the 1980s.",
  "Rachel Carson was a marine biologist and environmentalist — whose groundbreaking book, Silent Spring, has been credited as the catalyst for the modern environmental movement.",
  "Despite growing up as a self-described outcast, Maria Klawe pursed her passion for technology and became a prominent computer scientist. ",
  "Barbara McClintock was an American geneticist and is still considered to be one of the world’s most prestigious cytogeneticists. ",
  "Dorothy Lavinia Brown was the first African American female surgeon. She practiced in the Southeastern U.S. during the 1900s.",
  "Rebecca Lee Crumpler was the first African American woman to become a physician. She graduated from the New England Female Medical College as a Doctor of Medicine in 1864.",
  "Mary Jackson was NASA’s first African American female engineer. She became an aeronautical engineer in 1958. She devoted her career as an engineer to creating reports and helping other women get STEM positions at NASA.",
  "Dr. Shirley Jackson was the second African American woman to graduate with a PhD in physics in the U.S., and the first African American woman to graduate with a PhD from the Massachusetts Institute of Technology (MIT). She received the National Medal of Science in 2015 during the presidency of Barack Obama.",
  "Dr. Gladys West was responsible for the mathematics that brought about the invention of the Global Positioning System (GPS). Her important work at the U.S. Naval Weapons Laboratory helped with outer space discoveries related to planets in the solar system as well as Earth. She programmed the mathematics and calculations for the complex computer that eventually became known as a GPS."]
  
  
  // for (var i=0; i<factList.length-1; i++){
  //   alert(factList[i]);

  // }

  num = Math.ceil(Math.random()*13)
  alert(factList[num]);
  
  
}
