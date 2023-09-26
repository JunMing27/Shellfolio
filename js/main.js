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
  //help function
  if(newCMD=="help" && page ==1){
    $("#output").append("<div class='root inputOutputTxt' > " +cmd+"<br>"+
    "ls ~ to list all files and directories"+"<br>"+
    "cd ~ to change direcotry e.g. 'cd skills' or 'cd' to go back to root directory"+"<br>"+
    "cat ~ to print files e.g. 'cat projects.txt'"+"<br>"+
    "help ~ to view available commands"+"<br>"+
    "</div>");
    return;
  }
  else if(newCMD =="help" && page >2){
    $("#output").append("<div class='root2_1 inputOutputTxt' > " +cmd+"<br>"+
    "ls ~ to list all files and directories"+"<br>"+
    "cd ~ to change direcotry e.g. 'cd skills' or 'cd' to go back to root directory"+"<br>"+
    "cat ~ to print files e.g. 'cat projects.txt'"+"<br>"+
    "help ~ to view available commands"+"<br>"+
    "</div>");
    return;
  }

  // cd function (directory)
  if(newCMD=="cd skills" && page ==1){
    page =2.1;
    const divElement = document.getElementById('input');
    divElement.classList.replace('root', 'root2_1');
    $("#output").append("<div class='root inputOutputTxt' > " +cmd+"<br>");
    return;
  }
  else if (newCMD=="cd" && page ==1){
    $("#output").append("<div class='root inputOutputTxt' > " +cmd+"<br>"+"<span class='errorMsg'>"+ "You are at root directory!!" +" </span> "+ "</div>");
    return;
  }
  else if(newCMD =="cd" && page >1){
    page=1;
    const divElement = document.getElementById('input');
    divElement.classList.replace('root2_1', 'root');
    $("#output").append("<div class='root2_1 inputOutputTxt' > " +cmd+"<br>");
    return;
  }


  // ls function
  if(newCMD=="ls" && page==1){
    $("#output").append("<div class='root inputOutputTxt' > " +cmd+"<br>"+ "skills/ &nbsp; projects.txt &nbsp; achievements.txt &nbsp; certification.txt" +"<br>"+"</div>"
    // "<span class='infoMsg'>" + "Use 'cat' to view more information e.g. 'cat projects.txt'" +" </span> "+ "<br>"+"<span class='infoMsg'>" + "Use 'cd' to go to another dir e.g. 'cd skills'" +" </span> "+
    );
    return;
  }
  else if(newCMD=="ls" && page==2.1){
    $("#output").append("<div class='root2_1 inputOutputTxt' > " +cmd+"<br>"+ "software.txt &nbsp; cyber.txt &nbsp; general.txt" +"<br>"+"</div>");
    // "<span class='infoMsg'>" + "Use 'cat' to view more information e.g. 'cat skills.txt'" +" </span> "+
    return;
  }

  // cat function
  if(newCMD=="cat software.txt" && page==2.1){
    //skills.txt
    $("#output").append("<div class='root2_1 inputOutputTxt' > " +cmd+"<br>"+
    "<span class='infoMsg'>"+"[Software Engineering Skills]"+" </span> "+"<br>"+
    "Programming Language : C, C++, C#, Python, Java, JavaScript, PHP, SQL"+"<br>"+
    "Framework : Python FASTAPI"+"<br>"+
    "Configuration Language : Terraform"+"<br>"+
    "</div>");
    return;
  }
  else if(newCMD=="cat cyber.txt" && page==2.1){
    //skills.txt
    $("#output").append("<div class='root2_1 inputOutputTxt' > " +cmd+"<br>"+
    "<span class='infoMsg'>"+"[Cyber Security Skills]"+" </span> "+"<br>"+
    "Penetration Testing : Scanning Tools, Forensic Tools, Cracking Tools, BurpSuite, Wireshark, IDA, Bash_PowerShell_CMD Script, SQL_XSS_CMD Injections "+"<br>"+
    "Security Knowledge : System Networking, Cloud Computing, Active Directory and Windows Group Policy Management, VPN, Firewall, Anti-Virus"+"<br>"+
    "</div>");
    return;
  }
  else if(newCMD=="cat general.txt" && page==2.1){
    //skills.txt
    $("#output").append("<div class='root2_1 inputOutputTxt' > " +cmd+"<br>"+
    "<span class='infoMsg'>"+"[General IT Skills]"+" </span> "+"<br>"+
    "Framework & Tools : Kanban Board, Jira, Git, Github, Azure Repo, Jenkins "+"<br>"+
    "Virtualization / Container : VMware, Docker"+"<br>"+
    "</div>");
    return;
  }
  else if(newCMD=="cat projects.txt" && page==1){
    //projects.txt
    $("#output").append("<div class='root inputOutputTxt' > " +cmd+"<br>"+"1. Property Management System with C++ and Java"+"<br>"+"2. iiPet, a Hackathon Project"+"<br>"+"3. Shellfolio"+"<br>"+"4. Refer to my Github for More"+ "</div>");
    return;
  }
  else if(newCMD=="cat achievements.txt" && page==1){
    //achievements.txt
    $("#output").append("<div class='root inputOutputTxt' > " +cmd+"<br>"+"1. [Google Cloud x Tune Protect Hackathon] &nbsp; Champion"+"<br>"+"2. [OutSystem x CodeMePro Hackathon] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Top 10"+"<br>"+"3. [Google Appsheet Hackathon] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Participant"+"<br>"+"4. [APU x BAT CTF2023] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Participant"+"<br>"+"5. [APU Scholarship Merit] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Holder"+"<br>"+"6. Still Grinding....."+ "</div>");
    return;
  }
  else if(newCMD=="cat certification.txt" && page==1){
    //certification.txt
    $("#output").append("<div class='root inputOutputTxt' > " +cmd+"<br>"+"1. Ethical Hacking Essentials by EC-Council"+"<br>"+"2. Network Associate Routing & Switching (CCNA) by Cisco"+"<br>"+"3. Introduction to Networks by Cisco"+"<br>"+"4. Still Grinding....."+ "</div>");
    return;
  }
  else if (newCMD !="dsaygudasdasuygdasasdyu" && page ==1){
    $("#output").append("<div class='root inputOutputTxt' > " +cmd+"<br>"+"<span class='errorMsg'>"+ "Please type 'help' to view available commands" +" </span> "+ "</div>");
    return;
  }
  else if (newCMD !="dsaygudasdasuygdasasdyu" && page >1){
    $("#output").append("<div class='root2_1 inputOutputTxt' > " +cmd+"<br>"+"<span class='errorMsg'>"+ "Please type 'help' to view available commands" +" </span> "+ "</div>");
    return;
  }
  
}
