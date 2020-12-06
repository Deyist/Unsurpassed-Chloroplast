/* Basic Variables*/

let cplast = document.getElementById("cplast")

let counter = document.getElementById("counter")

let counter2 = document.getElementById("counter2")

let settings = document.getElementById ("settings")

let help = document.getElementById ("help")

let quiznumber = 0

let quiznumber2 = 0

let q1 = document.getElementById('q1') 

let q2 = document.getElementById('q2') 

let q3 = document.getElementById('q3') 

//let q4 = document.getElementById('q4') 

let w1 = document.getElementById('w1') 

let w2 = document.getElementById('w2') 

let w3 = document.getElementById('w3')

//let w4 = document.getElementById('w4') 

let fourm = document.getElementById('fourm')


let myAudio = document.getElementById("myAudio")



/* ADD (Not neccesary?) */

let addFriend = document.getElementById("addThylakoid1")

let addGrandma = document.getElementById("addStroma1")




/* COUNTERS */

let ThylakoidC = document.getElementById("ThylakoidCounter")

let StromaC = document.getElementById("StromaCounter")

let granumC = document.getElementById("granumCounter")

let LumenC = document.getElementById("LumenCounter")

let mitochondriaC = document.getElementById("mitochondriaCounter")

let flowerC = document.getElementById("flowerCounter")

let gardenC = document.getElementById("gardenCounter")

let greenhouseC = document.getElementById("greenhouseCounter")



let H2OC = document.getElementById("H2Ocounter")

let ElectronsC = document.getElementById("ElectronsCounter")

let ATPC = document.getElementById("ATPCounter")

let NADPHC = document.getElementById("NADPHCounter")

let RuBisCOC = document.getElementById("RuBisCOCounter")


let app = document.getElementById("forApp")

/* Number of */
let numThylakoids = 0

let numStromas = 0

let numgranums = 0

let numLumen = 0

let nummitochondria = 0

let numflowers = 0

let numgardens = 0

let numgreenhouse = 0



let numH2O = 0

let numElectrons = 0

let numATP = 0

let numNADPH = 0

let numRuBisCO = 0






/* Interval (Time for idles) */
let intervalID = window.setInterval(ThylakoidHelper, 4000) 

let intervalID2 = window.setInterval(StromaHelper, 8000) 

let intervalID3 = window.setInterval(granumHelper, 6000) 

let intervalID4 = window.setInterval(LumenHelper, 10000) 

let intervalID5 = window.setInterval(mitochondriaHelper, 10000) 

let intervalID6 = window.setInterval(flowerHelper, 8000) 

let intervalID7 = window.setInterval(gardenHelper, 1500) 

let intervalID8 = window.setInterval(greenhouseHelper, 5000) 


//new
let quizbank =  new Map;
//photosynthesis
quizbank.set(0, 'There is nothing here sorry, this question broke, just hit the top one to avoid getting anything wrong.')
quizbank.set(1, 'What type of energy do plants and algae convert light energy into?')
quizbank.set(2,"What are the products of photosynthesis?");
quizbank.set(3,"Photosynthesis and Cellular respiration's inputs and ouputs are");
quizbank.set(4,"Disc-shaped structures in the chloroplast.");
quizbank.set(5,"What two molecules are made from light dependent reactions that get sent to the next step of photosynthesis?");
quizbank.set(6,"What chemicals do plants use to capture energy?");
quizbank.set(7,"Chlorophyll absorbs ___ and ____ light, and reflects ____ light");
quizbank.set(8,"When H2O is split in PSII, what is a waste product?");
quizbank.set(9,"What enzyme spins to produce ATP?");
quizbank.set(10,"How do high energy electrons get from PSII to PSI?");
quizbank.set(11,"What is transferred to electrons in PSII that makes them high energy?");
quizbank.set(12,"What does PI form energy-wise?");
quizbank.set(13,"What is the name of the cycle used in the synthesis part of photo-synthesis? (Comes after PII and PI)");
quizbank.set(14,"Three steps in the Calvin Cycle are...");
quizbank.set(15,"Fixation: ___ is fixed into ___ by Rubisco and makes 3-PG, Reduction: ___ and ___ are used to reduce 3-PG to G3P.");
quizbank.set(16,"Regneration: G3P is used to regenerate ___ in order for the calvin cycle to continue");

//respiration
quizbank.set(17,"What is aerobic respiration?");
quizbank.set(18,"What is anaerobic respiration");
quizbank.set(19,"A cytoplasm is the material within a living cell exluding ____");
quizbank.set(20,"Anaerobic respiration occurs in the ___, while aerobic respiration occurs in the ___");
quizbank.set(21,"First step of cellular respiration");
quizbank.set(22,"What is glucose broken down into during glycolysis.");
quizbank.set(23,"Where does glycolysis occur?");
quizbank.set(24,"What are the three steps of Aerobic respiration?");
quizbank.set(25,"What does the krebs cycle require?");
quizbank.set(26,"Where does the Krebs Cycle occur?");
quizbank.set(27,"How many ATP per glucose model does the Krebs Cycle convert?");
quizbank.set(28,"What comes after the Krebs Cycle?");
quizbank.set(29,"How much ATP is produced per glucose molecule in reality.");
quizbank.set(30,"What happens to NADH and FADH2 after arriving at the electron transport chain?");
quizbank.set(31,"Anaerobic respiration stages");
quizbank.set(32,"Products of anaerobic respiration in Yeast");



let answerbank = new Map;
 //, document.getElementById("p2").textContent = "Thermal Energy", document.getElementById("p3").textContent = "Sugar", document.getElementById("p4").textContent = "C6H12O6" ); 
//A Q1
answerbank.set(1, "Chemical Energy")
answerbank.set(2, "Thermal Energy")
answerbank.set(3, "Glucose")

//C Q2
answerbank.set(4, "Oxygen")
answerbank.set(5, "Light, CO2, H2O")
answerbank.set(6, "O2, Glucose")

//B Q3
answerbank.set(7, "The same")
answerbank.set(8, "Opposites")
answerbank.set(9, "Completely different")

//A Q4
answerbank.set(10, "Thylakoids")
answerbank.set(11, "Grana")
answerbank.set(12, "Lumen")

//C Q5
answerbank.set(13, "H2O and CO2")
answerbank.set(14, "ADP and NADP+")
answerbank.set(15, "ATP and NADPH")

//B Q6
answerbank.set(16, "Chlorophyll")
answerbank.set(17, "Pigments")
answerbank.set(18, "C-Enzymes")

//C Q7
answerbank.set(19, "Red, Yellow, Blue")
answerbank.set(20, "Orange, Violet, Green")
answerbank.set(21, "Red, Blue, Green")

//A Q8
answerbank.set(22, "O2")
answerbank.set(23, "CO2")
answerbank.set(24, "ATP")

//C Q9
answerbank.set(25, "Enzyme-PII ")
answerbank.set(26, "Protein pump-ATP")
answerbank.set(27, "ATP synthase")

//C Q10
answerbank.set(28, "Facilitated Diffusion")
answerbank.set(29, "Active Transport Chain")
answerbank.set(30, "Electron Transport Chain")

//B Q11
answerbank.set(31, "Two hydrogen bonds")
answerbank.set(32, "Light energy")
answerbank.set(33, "A hydrogen that split from the H2O")

//B Q12
answerbank.set(34, "ATP")
answerbank.set(35, "NADPH")
answerbank.set(36, "G3P")

//A Q13
answerbank.set(37, "The Calvin Cycle")
answerbank.set(38, "The Kelvin Cycle")
answerbank.set(39, "Korvin's Cycle")

//C Q14
answerbank.set(40, "Generation, expansion, combustion")
answerbank.set(41, "Break-down, Synthesis, Production")
answerbank.set(42, "Fixation, reduction, regeneration")

//C Q15
answerbank.set(43, "G3P, RUBISCO, RuBP, ATP")
answerbank.set(44, "O2, H, ATP, C6H12O6")
answerbank.set(45, "CO2, RuBP, ATP, NADPH")

//A Q16
answerbank.set(46, "RuBP")
answerbank.set(47, "Rubisco")
answerbank.set(48, "ATP Synthase")


//respiration

//B Q17
answerbank.set(49, "Process not using oxygen during cellular respiration")
answerbank.set(50, "Process using oxygen during cellular respiration")
answerbank.set(51, "Process that develops oxygen")

//A Q18
answerbank.set(52, "Process not using oxygen during cellular respiration")
answerbank.set(53, "Process using oxygen during cellular respiration")
answerbank.set(54, "Process that develops oxygen")

//C Q19
answerbank.set(55, "Organelles")
answerbank.set(56, "A cytoskeleton")
answerbank.set(57, "The nucleus")

//A Q20
answerbank.set(58, "cytosol, mitochondria")
answerbank.set(59, "mitochondria, cytosol")
answerbank.set(60, "cytoplasm, chloroplast")

//B Q21
answerbank.set(61, "Anaerobic respiration")
answerbank.set(62, "Glycolysis")
answerbank.set(63, "Aerobic respiration")

//B Q22
answerbank.set(64, "2 pyruvates, 3G3P, 2ATP")
answerbank.set(65, "2 pyruvates, 4 ATPS, 2 NADH")
answerbank.set(66, "3 pyruvates, 3 ATPS, 1 NADPH")

//A Q23
answerbank.set(67, "Cytoplasm")
answerbank.set(68, "Mitochondria")
answerbank.set(69, "Chloroplast")

//C Q24
answerbank.set(70, "Glycolysis, Calvin Cycle, Transport")
answerbank.set(71, "Glycolysis, Respiration, production")
answerbank.set(72, "Glycolysis, Krebs Cycle, Electron transport chain")

//B Q25
answerbank.set(73, "The presence of hydrogen")
answerbank.set(74, "The prescene of oxygen")
answerbank.set(75, "The prescene of carbon")

//C Q26
answerbank.set(76, "Inside the out mitchondria membrane")
answerbank.set(77, "Inside the cytoplasm")
answerbank.set(78, "Inside the inner mitchondria membrane")

//C Q27
answerbank.set(79, "3")
answerbank.set(80, "1")
answerbank.set(81, "2")

//A Q28
answerbank.set(82, "Electron Transport Chain")
answerbank.set(83, "Calvins Cycle")
answerbank.set(84, "Glycolysis")

//A Q29
answerbank.set(85, "29-30")
answerbank.set(86, "17-18")
answerbank.set(87, "45-50")

//B Q30
answerbank.set(88, "The hydrogen is removed as a waste product")
answerbank.set(89, "The hydrogen is removed and split into hydrogen ions and electrons.")
answerbank.set(90, "The hydrogen is returned into muscle cells and the electrons are sent through the transport chain.")

//C Q31
answerbank.set(91, "Glycolysis, Link reaction, Krebs cycle, electron transport chain")
answerbank.set(92, "P2, P1, Calvin Cycle")
answerbank.set(93, "Glycolysis, Fermentation")

//A Q32
answerbank.set(94, "Ethanol and CO2")
answerbank.set(95, "H2O and glucose")
answerbank.set(96, "G3P and NADP")


let array1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
let randum = array1[Math.floor(Math.random() * 29.9)]; 

/*Functions*/

//new

off2.addEventListener('click', offfunc)

function offfunc(){
   counter2.textContent = "off (Will say not a number unless turned back on)"
   
   while(counter2.textContent == off){
      document.getElementById("six").style.display = "none"
      console.log(quiznumber)
      console.log(quiznumber2)
      
   }
  
}
on2.addEventListener('click', onfunc)

function onfunc(){
   
   setTimeout(function(){ document.getElementById(counter2).textContent = "on" }, 25000);
   counter2.textContent = 0
   quiznumber = 0
   quiznumber2 = 0
   console.log(quiznumber)
   console.log(quiznumber2)
   
}


sub.addEventListener('click', subback)


function subback(j){
   let wrong = counter.textContent/3
   w1.style.display = 'none'
   w2.style.display = 'none'
   w3.style.display = 'none'
   //w4.style.display = 'none'
   q1.style.display = 'none'
   q2.style.display = 'none'
   q3.style.display = 'none'
   //q4.style.display = 'none'
   document.getElementById('p1').style.display = "none"
   document.getElementById('p2').style.display = "none"
   document.getElementById('p3').style.display = "none"
   //document.getElementById('p4').style.display = "none"
   document.getElementById('sub').style.display = 'none'
   if(q1.value == 'Correct' && q1.checked){ 
      document.getElementById('x3').style.display = "block"
      document.getElementById('correct').style.display = 'block'
      document.getElementById('cplast').style.display = 'block'
   }else if(q2.value == 'Correct' && q2.checked){ 
      document.getElementById('x3').style.display = "block"
      document.getElementById('correct').style.display = 'block'
      document.getElementById('cplast').style.display = 'block'
   }else if(q3.value == 'Correct' && q3.checked){ 
      document.getElementById('x3').style.display = "block"
      document.getElementById('correct').style.display = 'block'
      document.getElementById('cplast').style.display = 'block'
   }else{
      document.getElementById('x3').style.display = "block"

      document.getElementById('cplast').style.display = 'block'
      counter.textContent -= Math.floor(wrong)
      
      document.getElementById('incorrect').style.display = 'block'
      
     
      
   }
}
less.addEventListener('click', lessfunc)

function lessfunc(){
   quiznumber-= 3
   if (quiznumber<= 0){
      quiznumber= 0
   }
   quiznumber2-= 1
   if (quiznumber2<= 0){
      quiznumber2= 0
   }
}
function workpls(j){ 
//This is the part you mess with in order to make the questions appear more/less frequently
   if(j % 50 == 0 && j > 1 ){
      



      if (quiznumber2 >32 && quiznumber2 < 1000){
         quiznumber = 0
         quiznumber2 = 0
        
        // document.getElementById('p4').textContent = answerbank.get(1)
       }
     
   quiznumber++
   quiznumber2++
   document.getElementById('cplast').style.display = 'none'
      document.getElementById('x3').style.display = "none"
      
      document.getElementById('incorrect').style.display = "none"
      document.getElementById('correct').style.display = "none"
      document.getElementById('p1').style.display = "block"
      document.getElementById('p2').style.display = "block"
      document.getElementById('p3').style.display = "block"
      //document.getElementById('p4').style.display = "block"
      document.getElementById('q1').style.display = "block"
      document.getElementById('q2').style.display = "block"
      document.getElementById('q3').style.display = "block"
      //document.getElementById('q4').style.display = "block"
      document.getElementById('w1').style.display = "block"
      document.getElementById('w2').style.display = "block"
      document.getElementById('w3').style.display = "block"
      //document.getElementById('w4').style.display = "block"
      
      document.getElementById('headSet3').textContent = quizbank.get(quiznumber2)
      document.getElementById('p1').textContent = answerbank.get(quiznumber)
      quiznumber++
      document.getElementById('p2').textContent = answerbank.get(quiznumber)
      quiznumber++
      document.getElementById('p3').textContent = answerbank.get(quiznumber)
     
      //document.getElementById('p4').textContent = answerbank.get(quiznumber)
      
      
     
      
      document.getElementById('six').style.display = 'block'
      q1.style.display = 'block'
      q2.style.display = 'block'
      q3.style.display = 'block'
      //q4.style.display = 'block'




      document.getElementById('sub').style.display = 'block'
      
      
      
      if (quiznumber2 == 2){
         document.getElementById('q1').value = "Incorrect"
         document.getElementById('q3').value = "Correct"
         let checking = document.getElementById(p3)
         console.log(checking)
      }else if (quiznumber2 == 3){
         document.getElementById('q3').value = "Incorrect"
         document.getElementById('q2').value = "Correct"
         let checking = document.getElementById(p3)
         console.log(checking)

         

      }else if (quiznumber2 == 1 || quiznumber == 0){
        
         document.getElementById('q2').value = "Incorrect"
         document.getElementById('q3').value = "Incorrect"
        
         document.getElementById('q1').value = "Correct"

         

      }else  if (quiznumber2 == 4){
         document.getElementById('q2').value = "Incorrect"
         document.getElementById('q1').value = "Correct"
         let checking = document.getElementById(p3)
         console.log(checking)
      }else  if (quiznumber2 == 5){
         document.getElementById('q1').value = "Incorrect"
         document.getElementById('q3').value = "Correct"
         let checking = document.getElementById(p3)
         console.log(checking)
      }else  if (quiznumber2 == 6){
         document.getElementById('q3').value = "Incorrect"
         document.getElementById('q2').value = "Correct"
         let checking = document.getElementById(p3)
         console.log(checking)
      }else  if (quiznumber2 == 7){
         document.getElementById('q2').value = "Incorrect"
         document.getElementById('q3').value = "Correct"
         let checking = document.getElementById(p3)
         console.log(checking)
      }else  if (quiznumber2 == 8){
         document.getElementById('q3').value = "Incorrect"
         document.getElementById('q1').value = "Correct"
         let checking = document.getElementById(p3)
         console.log(checking)
      }else  if (quiznumber2 == 9){
         document.getElementById('q1').value = "Incorrect"
         document.getElementById('q3').value = "Correct"
         let checking = document.getElementById(p3)
         console.log(checking)
      }else  if (quiznumber2 == 10){
         document.getElementById('q3').value = "Incorrect"
         document.getElementById('q3').value = "Correct"
         let checking = document.getElementById(p3)
         console.log(checking)
      }else  if (quiznumber2 == 11){
         document.getElementById('q3').value = "Incorrect"
         document.getElementById('q2').value = "Correct"
         let checking = document.getElementById(p3)
         console.log(checking)
      }else  if (quiznumber2 == 12){
         document.getElementById('q2').value = "Incorrect"
         document.getElementById('q2').value = "Correct"
         let checking = document.getElementById(p3)
         console.log(checking)
      }else  if (quiznumber2 == 13){
         document.getElementById('q2').value = "Incorrect"
         document.getElementById('q1').value = "Correct"
         let checking = document.getElementById(p3)
         console.log(checking)
      }else  if (quiznumber2 == 14){
         document.getElementById('q1').value = "Incorrect"
         document.getElementById('q3').value = "Correct"
         let checking = document.getElementById(p3)
         console.log(checking)
      }else  if (quiznumber2 == 15){
         document.getElementById('q3').value = "Incorrect"
         document.getElementById('q3').value = "Correct"
        
         let checking = document.getElementById(p3)
         console.log(checking)
      }else  if (quiznumber2 == 16){
         document.getElementById('q3').value = "Incorrect"
         document.getElementById('q1').value = "Correct"
        
         let checking = document.getElementById(p3)
         console.log(checking)
      }else  if (quiznumber2 == 17){
         document.getElementById('q1').value = "Incorrect"
         document.getElementById('q2').value = "Correct"
        
         let checking = document.getElementById(p3)
         console.log(checking)
      }else  if (quiznumber2 == 18){
         document.getElementById('q2').value = "Incorrect"
         document.getElementById('q1').value = "Correct"
        
         let checking = document.getElementById(p3)
         console.log(checking)
      }else  if (quiznumber2 == 19){
         document.getElementById('q1').value = "Incorrect"
         document.getElementById('q3').value = "Correct"
        
         let checking = document.getElementById(p3)
         console.log(checking)
      }else  if (quiznumber2 == 20){
         document.getElementById('q3').value = "Incorrect"
         document.getElementById('q1').value = "Correct"
        
         let checking = document.getElementById(p3)
         console.log(checking)
      }else  if (quiznumber2 == 21){
         document.getElementById('q1').value = "Incorrect"
         document.getElementById('q2').value = "Correct"
        
         let checking = document.getElementById(p3)
         console.log(checking)
      }else  if (quiznumber2 == 22){
         document.getElementById('q2').value = "Incorrect"
         document.getElementById('q2').value = "Correct"
        
         let checking = document.getElementById(p3)
         console.log(checking)
      }else  if (quiznumber2 == 23){
         document.getElementById('q2').value = "Incorrect"
         document.getElementById('q1').value = "Correct"
        
         let checking = document.getElementById(p3)
         console.log(checking)
      }else  if (quiznumber2 == 24){
         document.getElementById('q1').value = "Incorrect"
         document.getElementById('q3').value = "Correct"
        
         let checking = document.getElementById(p3)
         console.log(checking)
      }else  if (quiznumber2 == 25){
         document.getElementById('q3').value = "Incorrect"
         document.getElementById('q2').value = "Correct"
        
         let checking = document.getElementById(p3)
         console.log(checking)
      }else  if (quiznumber2 == 26){
         document.getElementById('q2').value = "Incorrect"
         document.getElementById('q3').value = "Correct"
        
         let checking = document.getElementById(p3)
         console.log(checking)
      }else  if (quiznumber2 == 27){
         document.getElementById('q3').value = "Incorrect"
         document.getElementById('q3').value = "Correct"
        
         let checking = document.getElementById(p3)
         console.log(checking)
      }else  if (quiznumber2 == 28){
         document.getElementById('q3').value = "Incorrect"
         document.getElementById('q1').value = "Correct"
        
         let checking = document.getElementById(p3)
         console.log(checking)
      }else  if (quiznumber2 == 29){
         document.getElementById('q1').value = "Incorrect"
         document.getElementById('q1').value = "Correct"
        
         let checking = document.getElementById(p3)
         console.log(checking)
      }else  if (quiznumber2 == 30){
         document.getElementById('q1').value = "Incorrect"
         document.getElementById('q2').value = "Correct"
        
         let checking = document.getElementById(p3)
         console.log(checking)
      }else  if (quiznumber2 == 31){
         document.getElementById('q2').value = "Incorrect"
         document.getElementById('q3').value = "Correct"
        
         let checking = document.getElementById(p3)
         console.log(checking)
      }else  if (quiznumber2 == 32){
         document.getElementById('q3').value = "Incorrect"
         document.getElementById('q1').value = "Correct"
        
         let checking = document.getElementById(p3)
         console.log(checking)
      }
     
      
      
      
      
   
   

  
  
   //no more new

   //var ss1 = quizbank.get(randum)
  // console.log(ss1)}
   
   
 } 
}


cplast.addEventListener('click', add)
cplast.addEventListener('click', workpls)

function add(){
   i = parseInt(counter.textContent)
   j = parseInt(counter2.textContent)
   n = parseInt(H2OC.textContent) 
   o = parseInt(ElectronsC.textContent)
   m = parseInt(ATPC.textContent)
   f = parseInt(NADPHC.textContent)
   h = parseInt(RuBisCOC.textContent)
   counter.textContent = i+ 1 + n + o * 8 + m * 32 + f * 150 + h * 1750
   counter2.textContent = j+ 1
   workpls(j + 1)
   
} 

function show_image(src, width, height, alt) {
   var img = document.createElement("img");
   img.src = src;
   img.width = width;
   img.height = height;
   img.alt = alt;
  
   // set the position
   img.style.position = 'absolute';
   
   
   img.style.top =  document.getElementById("forApp").clientHeight * Math.random() +"px";
   
   img.style.left = document.getElementById("forApp").clientWidth * Math.random() + 'px';
 
   document.body.appendChild(img);
   
   setTimeout(function(){ document.body.removeChild(img); }, 1000); 
 }
 document.getElementById('cplast').addEventListener('click', () =>
   show_image("images/sugar.png", 50, 50, 'cplast')

  
      
   

 );











function Thylakoid() {
   price = numThylakoids * 20 + 10 
   if (counter.textContent >= price){
      numThylakoids++
      counter.textContent -= price
      ThylakoidC.textContent = numThylakoids 
      
   }
}



function ThylakoidHelper() {
   n = numThylakoids
   c = counter.textContent
   c = parseInt(c)
   c += n
   counter.textContent = c
   
}
function Stroma() {
   price = numStromas * 50 + 400
   if (counter.textContent >= price){
      numStromas++
      counter.textContent -= price
      StromaC.textContent = numStromas
   }
}



function StromaHelper() {
   n = numStromas
   c = counter.textContent
   c = parseInt(c)
   c += n * 20
   counter.textContent = c
}



function granum() {
   price = numgranums * 200 + 2000
   if (counter.textContent >= price){
      numgranums++
      counter.textContent -= price
      granumC.textContent = numgranums
   }
}



function granumHelper() {
   n = numgranums
   c = counter.textContent
   c = parseInt(c)
   c += n * 100
   counter.textContent = c

}



function Lumen() {
   price = numLumen * 2500 + 15000
   if (counter.textContent >= price){
      numLumen++
      counter.textContent -= price
      LumenC.textContent = numLumen
   }
}



function LumenHelper() {
   n = numLumen
   c = counter.textContent
   c = parseInt(c)
   c += n * 550
   counter.textContent = c
}




function mitochondria() {
   price = nummitochondria * 30000 + 120000
   if (counter.textContent >= price){
      nummitochondria++
      counter.textContent -= price
      mitochondriaC.textContent = nummitochondria
   }
}



function mitochondriaHelper() {
   n = nummitochondria
   c = counter.textContent
   c = parseInt(c)
   c += n * 3500
   counter.textContent = c

}



function flower() {
   price = numflowers * 1200000 + 1200000
   if (counter.textContent >= price){
      numflowers++
      counter.textContent -= price
      flowerC.textContent = numflowers
      
   }
}



function flowerHelper() {
   n = numflowers
   c = counter.textContent
   c = parseInt(c)
   c += n * 25000
   counter.textContent = c

}



function garden() {
   price = numgardens * 10000000 + 15000000
   if (counter.textContent >= price){
      numgardens++
      counter.textContent -= price
      gardenC.textContent = numgardens
   }
}



function gardenHelper() {
   n = numgardens
   c = counter.textContent
   c = parseInt(c)
   c += n * 120000
   counter.textContent = c

}



function greenhouse() {
   price = numgreenhouse * 150000000 + 300000000
   if (counter.textContent >= price){
      numgreenhouse++
      counter.textContent -= price
      greenhouseC.textContent = numgreenhouse
   }
}



function greenhouseHelper() {
   n = numgreenhouse
   c = counter.textContent
   c = parseInt(c)
   c += n * 10000000
   counter.textContent = c
   
}






   






/* PER CLICK */

function H2Of() {
price = numH2O * 200 + 200
   if (counter.textContent >= price){
      numH2O++
      counter.textContent -= price
      H2OC.textContent = numH2O 
     
     
   }
}



function Electrons(){
   price = numElectrons * 400 + 800
   if (counter.textContent >= price){
      numElectrons++
      counter.textContent -= price
      ElectronsC.textContent = numElectrons
   }
     
}




function ATPfunc(){
   price = numATP * 3500 + 8000
   if (counter.textContent >= price){
      numATP++
      counter.textContent -= price
      ATPC.textContent = numATP
   }
     
}




function NADPHfunc(){
   price = numNADPH * 25000 + 50000
   if (counter.textContent >= price){
      numNADPH++
      counter.textContent -= price
      NADPHC.textContent = numNADPH
   }
     
}





function RuBisCOfunc(){
   price = numRuBisCO* 1000000 + 1000000
   if (counter.textContent >= price){
      numRuBisCO++
      counter.textContent -= price
      RuBisCOC.textContent = numRuBisCO
   }
     
}


function SetOpacity( imageid, opacity ) {
   var s= document.getElementById(imageid).style;
   s.opacity = ( opacity / 100 );
   s.MozOpacity = ( opacity / 100 );
   s.KhtmlOpacity = ( opacity / 100 );
   s.filter = 'alpha(opacity=' + opacity + ')';
}
SetOpacity('mainplast', 95);











/* EXTRA NOTES
    while(true){
      setTimeout(function(){
         n = numberOfFriends 
         counter.textContent += n 
     ,100000 })
    }
     
 Adding number # = number added per click
 i = counter.textContent
 i = parseInt(i)
 counter.textContent = i + (#)
 */