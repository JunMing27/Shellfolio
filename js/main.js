//Main function (typewriter)
$.fn.typewriter = function(callback) {
  this.find('.typewriter-content').each(function() {
    var c = $(this),
      b = c.html(),
      a = 0,
      d = 0;
    c.html("");
    var e = function() {
      if ("<" == b.substring(a, a + 1)) {
        var f = new RegExp(/<span class="instant"/),
          g = new RegExp(/<span class="clear"/);
        if (b.substring(a, b.length).match(f)) a += b.substring(a, b.length).indexOf("</span>");
        else if (b.substring(a, b.length).match(g)) d = a, a += b.substring(a, b.length).indexOf("</span>");
        else
          for (;
            ">" != b.substring(a, a + 1);) a++
      }
      c.html(b.substring(d, a++) + (a & 1 ? "" : "_"));
      if (a >= b.length) {
        // Typewriter animation is complete, call the callback
        callback();
      } else {
        setTimeout(e, 25);
      }
    };
    e();
  });
  return this
};

function displayBlockAfterTypeWriter(){
    document.getElementById("inputOutput").style.display = "block";
    $("#cmd").focus();
}

$(".terminal").typewriter(displayBlockAfterTypeWriter)

//output 
let page=1; //create a page value so i can implement directory demonstration
function enterAndGetOutput(cmd){
  newCMD = cmd.toLowerCase()
  if(newCMD=="ls"){
    $("#output").append("<div class='root inputOutputTxt' > " +cmd+"<br>"+ "skills.txt &nbsp; projects.txt &nbsp; achievements.txt &nbsp; certification.txt" +"<br>"+"<span class='infoMsg'>" + "Use 'cat' to view more information e.g. 'cat skills.txt'" +" </span> "+"</div>");
  }
  else if(newCMD=="cat skills.txt"){
    //skills.txt
    $("#output").append("<div class='root inputOutputTxt' > " +cmd+"<br>"+
    "<span class='infoMsg'>"+"[Cyber Security Skills]"+" </span> "+"<br>"+
    "Penetration Testing : Scanning Tools, Forensic Tools, Cracking Tools, BurpSuite, Wireshark, IDA, Bash_PowerShell_CMD Script, SQL_XSS_CMD Injections "+"<br>"+
    "Security Knowledge : System Networking, Cloud Computing, Active Directory and Windows Group Policy Management, VPN"+"<br>"+
    "<span class='infoMsg'>"+"[Software Engineering Skills]"+" </span> "+"<br>"+
    "Programming Language : C, C++, C#, Python, Java, JavaScript, PHP, SQL"+"<br>"+
    "Framework : Python FASTAPI"+"<br>"+
    "Configuration Language : Terraform"+"<br>"+
    "</div>");
  }
  else if(newCMD=="cat projects.txt"){
    //projects.txt
    $("#output").append("<div class='root inputOutputTxt' > " +cmd+"<br>"+"1. Property Management System with C++ and Java"+"<br>"+"2. iiPet, a Hackathon Project"+"<br>"+"3. Shellfolio"+"<br>"+"4. Refer to my Github for More"+ "</div>");
  }
  else if(newCMD=="cat achievements.txt"){
    //achievements.txt
    $("#output").append("<div class='root inputOutputTxt' > " +cmd+"<br>"+"1. [Google Cloud x Tune Protect Hackathon] &nbsp; Champion"+"<br>"+"2. [OutSystem x CodeMePro Hackathon] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Top 10"+"<br>"+"3. [Google Appsheet Hackathon] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Participant"+"<br>"+"4. [APU x BAT CTF2023] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Participant"+"<br>"+"5. [APU Scholarship Merit] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Holder"+"<br>"+"6. Still Grinding....."+ "</div>");
  }
  else if(newCMD=="cat certification.txt"){
    //certification.txt
    $("#output").append("<div class='root inputOutputTxt' > " +cmd+"<br>"+"1. Ethical Hacking Essentials by EC-Council"+"<br>"+"2. Network Associate Routing & Switching (CCNA) by Cisco"+"<br>"+"3. Introduction to Networks by Cisco"+"<br>"+"4. Still Grinding....."+ "</div>");
  }
  else{
    $("#output").append("<div class='root inputOutputTxt' > " +cmd+"<br>"+"<span class='errorMsg'>"+ "Please type 'ls' to view the files" +" </span> "+ "</div>");
  }
}