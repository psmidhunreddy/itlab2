const timetableData = {

MTechCS: {
Monday:    ["E6","E6","SE(CS451)","SE(CS451)","", "E5","E5","E2","E2"],
Tuesday:   ["E1","E1","E3","E3","", "SELab","SELab","SELab","E4"],
Wednesday: ["E6","E6","E2","E2","", "E4","ITLab","ITLab","ITLab"],
Thursday:  ["E1","E1","SE(CS451)","Comm Skills","", "E5","E5","",""],
Friday:    ["E3","E3","E4","E4","", "Comm Skills","Comm Skills","",""]
},

MTechAI: {
Monday:    ["E6","E6","SE(CS451)","SE(CS451)","", "E5","E5","E2","E2"],
Tuesday:   ["E1","E1","E3","E3","", "SELab","SELab","SELab","E4"],
Wednesday: ["E6","E6","E2","E2","", "E4","ITLab","ITLab","ITLab"],
Thursday:  ["E1","E1","SE(CS451)","Comm Skills","", "E5","E5","",""],
Friday:    ["E3","E3","E4","E4","", "Comm Skills","Comm Skills","",""]
},

IMTII: {
Monday:    ["DFS","DFS","Discrete Maths","Discrete Maths","","","","",""],
Tuesday:   ["Engg Physics-2","DFS","Creativity","Creativity","Creativity","Creativity","","",""],
Wednesday: ["Math-II","Discrete Maths","Drawing","Drawing","Drawing","","","",""],
Thursday:  ["Physics-2","Physics-2","Drawing","Drawing","Drawing","","","",""],
Friday:    ["Math-II","Math-II","DFS Lab","DFS Lab","DFS Lab","","","",""]
},

IMTIV: {
Monday:    ["CBNOT","CBNOT","DBMS","DBMS","TOC","TOC","","",""],
Tuesday:   ["TOC","","UHV","UHV","UHV","","","",""],
Wednesday: ["","DBMS Lab","DBMS Lab","DBMS Lab","","","","",""],
Thursday:  ["CBNOT","","","CBNOT Lab","CBNOT Lab","CBNOT Lab","","",""],
Friday:    ["","","DBMS","","","","","",""]
},

IMTVI: {
Monday:    ["E6","E6","SE_NN","SE_NN","","","","S&S","S&S"],
Tuesday:   ["","SELab_NN","SELab_NN","SELab_NN","CG","CG","CN","S&S",""],
Wednesday: ["CE","CE","","","","","","",""],
Thursday:  ["E1","E1","CG","SE_NN","CN","CN","","",""],
Friday:    ["ITLab(CN)","ITLab(CN)","ITLab(CN)","CE","CG Lab","CG Lab","","",""]
},

IMTVIII: {
Monday:    ["E6","E6","","","", "E5","E5","E2","E2"],
Tuesday:   ["E1","E1","E3","E3","", "UHV","UHV","UHV","E4"],
Wednesday: ["E6","E6","E2","E2","", "E4","SPM","SPM","",""],
Thursday:  ["E1","E1","","","", "E5","E5","",""],
Friday:    ["E3","E3","E4","E4","", "SPM","","",""]
},

MCAII: {
Monday:    ["Int.Tech Lab","Int.Tech Lab","","","", "E5","E5","E2","E2"],
Tuesday:   ["E1","E1","E3","E3","", "Int.Tech","Int.Tech","OS",""],
Wednesday: ["DS","DS","E2","E2","", "E4","OS","OS",""],
Thursday:  ["OOP Lab","OOP Lab","OOP Lab","OOP","DS","DS Lab","DS Lab","DS Lab",""],
Friday:    ["E3","E3","E4","E4","", "OOP","OOP","",""]
}

};
var randomNumber = Math.floor(Math.random() * 10) + 1;

var text="Hi, I'm Midhun. Welcome to my portfolio.";
var index=0;
function typeIntro(){
    if(index<text.length){
        document.getElementById("heading").innerHTML+=text.charAt(index);
        index++;
        setTimeout(typeIntro,100);
    }
    if(index===text.length){
        document.getElementById("heading").innerHTML="&nbsp;";
        index=0;
    }
}
function changeView(){
  console.log(document.getElementById("view").value);
  var v=document.getElementById("view").value;
  document.getElementById("timetable").innerHTML="";
  document.getElementById("program").value="default";
  document.getElementById("eElective").value="default"; 
  if(v==1){
    document.getElementById("program").style.display="block";
    document.getElementById("eElective").style.display="none";
  }
  else if(v==2){
    document.getElementById("program").style.display="none";
    document.getElementById("eElective").style.display="block";
  }
}
function changeProg(){
  console.log(document.getElementById("program").value);
  var prog=document.getElementById("program").value;
  showTimetable(prog);
}
function changeeEle() {
    const bin=document.getElementById("eElective").value.slice(0,2);
    const course=document.getElementById("eElective").value.slice(2,);
    console.log(bin);
    if (bin === "default") return;
    const totalPeriods = 9;
    const days = ["Monday","Tuesday","Wednesday","Thursday","Friday"];
    let html = "<table class='timetable'>";
    html += "<tr><th>Day</th>";
    for (let i = 1; i <= totalPeriods; i++) {
        html += `<th>P${i}</th>`;
    }
    html += "</tr>";
    days.forEach(day => {
        html += `<tr><td>${day}</td>`;
        for (let i = 0; i < totalPeriods; i++) {
            let found = false;
            for (let program in timetableData) {
                const subject = timetableData[program][day][i];
                if (subject && subject.includes(bin)){
                    found = true;
                    break;
                }
            }
            if (found) {
                html += `<td>${course}</td>`;
            } else {
                html += `<td></td>`;
            }

        }

        html += "</tr>";
    });

    html += "</table>";

    document.getElementById("timetable").innerHTML = html;
}
function showTimetable(program) {
    const data = timetableData[program];
    const totalPeriods = 9;
    let html = "<table class='timetable'>";
    html += "<tr><th>Day</th>";
    for (let i = 1; i <= totalPeriods; i++) {
        html += `<th>P${i}</th>`;
    }

    html += "</tr>";

    for (let day in data) {
        html += `<tr><td>${day}</td>`;

        for (let i = 0; i < totalPeriods; i++) {

            if (data[day][i]) {
                html += `<td>${data[day][i]}</td>`;
            } else {
                html += `<td></td>`;
            }

        }

        html += "</tr>";
    }

    html += "</table>";

    document.getElementById("timetable").innerHTML = html;
}

function checkGuess() {
  var guess=Number(document.getElementById("guess").value);
  var message="";

  if (guess===randomNumber) {
    message="Wow! You guessed it!";
  } else if (guess > randomNumber) {
    message="Too high! Try again ";
  } else if (guess < randomNumber) {
    message="Too low! Try again";
  } else {
    message="Please enter a valid number!";
  }
  document.getElementById("guessResult").innerHTML=message;
}
function moveButton() {
  var btn=document.getElementById("catchBtn");
  var x=Math.floor(Math.random() * 80);
  var y=Math.floor(Math.random() * 80);
  btn.style.position="absolute";
  btn.style.left=x+"%";
  btn.style.top=y+"%";
}
window.onload=function() {
    moveInterval=setInterval(moveButton, 1000);
    typeIntro()
};
function clicked(){
    clearInterval(moveInterval);
    document.getElementById("catchBtn").innerHTML = "You caught me!";
    
}
function showGreeting() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  var greeting = "";

  if (hours < 12) {
    greeting = "Good Morning";
  } else if (hours < 17) {
    greeting = "Good Afternoon";
  } else if (hours < 21) {
    greeting = "Good Evening";
  } else {
    greeting = "Good Night";
  }

  document.getElementById("greeting").innerHTML = greeting;
  document.getElementById("time").innerHTML =
    "Current Time: " + hours + ":" + minutes + ":" + seconds;
}

showGreeting();
setInterval(showGreeting, 1000);



