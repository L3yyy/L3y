const instructions = document.createElement("span");
instructions.innerHTML = "‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ <strong>Type 'help' for a list of commands.</strong><br>‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ <strong>Type 'leyfetch' to fetch my social media profiles.</strong><br>‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ <strong>Type 'gui' to open the gui version.</strong><br><br>";
instructions.setAttribute("style", "color: #EBDBB2; font-family: monospace;");
document.body.appendChild(instructions);

function user() {
//Type 'help' for a list of commands.
//Type 'leyfetch' to fetch my social media profiles.
//Type 'projects' to see my projects.

    const my_span = document.createElement("span");
    my_span.innerHTML = "guest";
    my_span.setAttribute("style", "color:#EBDBB2");
    my_span.setAttribute("class", "console");

    document.body.appendChild(my_span);

    const my_span1 = document.createElement("span");
    my_span1.innerHTML = "@";
    my_span1.setAttribute("style", "color:white");
    my_span1.setAttribute("class", "console");

    document.body.appendChild(my_span1);

    const my_span2 = document.createElement("span");
    my_span2.innerHTML = "user";
    my_span2.setAttribute("style", "color:#EBDBB2");
    my_span2.setAttribute("class", "console");

    document.body.appendChild(my_span2);

    const my_span3 = document.createElement("span");
    my_span3.innerHTML = ":~ # ";
    my_span3.setAttribute("style", "color:white");
    my_span3.setAttribute("class", "console");

    document.body.appendChild(my_span3);

    const input = document.createElement("input");
    input.setAttribute("style", "color: grey; background: none; border: hidden; outline: none; font-family: monospace; width: 1000%;");
    input.setAttribute("id", "user_input");
    input.setAttribute("type", "text");
    input.setAttribute("autocomplete", "off");
    input.setAttribute("aria-autocomplete", "none");
    //removes autocomplete suggestions

    document.body.appendChild(input);

}

function br() {
    const linebreak = document.createElement("br");
    document.body.appendChild(linebreak);
}

function cons_value(value) {
    const cons_val = document.createElement("span");
    cons_val.setAttribute("style", "color: grey; ");
    cons_val.innerHTML = value;
    document.body.appendChild(cons_val);
}

function cons_valuebr(value) {
    const cons_val = document.createElement("span");
    cons_val.setAttribute("style", "color: grey; white-space: pre;");
    cons_val.innerHTML = value;
    document.body.appendChild(cons_val)
    br();
}

function cons_mp3br(filename) {
    const audio = document.createElement("audio");
    audio.src = filename;
    audio.autoplay = true;
    audio.style.display = "none";
    document.body.appendChild(audio);
}

function cmd(){

    const my_user_input = document.getElementById("user_input");
    console.log(my_user_input.value);
    const cons_val = document.createElement("cons_val");
    cons_value(my_user_input.value);

    if (my_user_input.value == "clear" || my_user_input.value == "-cl") {

        document.body.innerHTML = "";
        user();
        
        return;

    }   else if (my_user_input.value == "help" || my_user_input.value == "-h") {
        br();

        //clear, help, leyfetch, projects
        cons_valuebr(" ");
        cons_valuebr("welcome to my portfolio! here are some commands you can use:");
        cons_valuebr("------------------------------------------------------------");
        cons_valuebr("help,     -h              lists all the available commands.");
        cons_valuebr("leyfetch, -lf             fetches my social media profiles.");
        cons_valuebr("clear,    -cl             clears the terminal.");
        cons_valuebr("projects, -pr             shows the projects i've worked on.");
        cons_valuebr("restart,  -rt             refreshes the website for a new start.");
        cons_valuebr("about,    -ab             shows information behind the developer of <br>                          <strong>L3Y Terminal</strong>.");
        cons_valuebr("gui,      -g              opens the GUI version of this terminal.");
        cons_valuebr("sudo -i,                  use the L3Y Terminal as root.");

        my_user_input.value = "";
        br();

        
    }   else if (my_user_input.value == "leyfetch" || my_user_input.value == "-lf") {

        br();
        cons_valuebr(" ");
        cons_valuebr("    <label style='color:#EBDBB2'>/\\_____/\\        email</label>: kuffiwrld999<label style='color:#EBDBB2'>@</label>gmail.com");
        cons_valuebr("   <label style='color:#EBDBB2'>/</label>  <label style='color:white'>o   o</label>  <label style='color:#EBDBB2'>\\</label>       <label style='color:#EBDBB2'>--------------------------------------------------");
        cons_valuebr("  <label style='color:#EBDBB2'>(</label> <label style='color:white'>==  ^  == </label><label style='color:#EBDBB2'>)</label>      <label style='color:#EBDBB2'>discord</label>: <u><a href='https://discord.gg/wV86RZUR7V'>https://discord.gg/wV86RZUR7V</a></u>");
        cons_valuebr("   <label style='color:#EBDBB2'>)         (       facebook</label>: <u><a href='https://www.facebook.com/LLUVSICC/'>https://www.facebook.com/LLUVSICC/</a></u>");
        cons_valuebr("  <label style='color:#EBDBB2'>(           )      youtube</label>: <u><a href='https://www.youtube.com/@prodbyluvsic'>https://www.youtube.com/@prodbyluvsic</a></u>");
        cons_valuebr(" <label style='color:#EBDBB2'>( (  )   (  ) )     onlyfans</label>: <u><a href='https://only-fans.me/ley'>https://only-fans.me/ley</a></u>");
        cons_valuebr("<label style='color:#EBDBB2'>(__(__)___(__)__)    github</label>: <u><a href='https://github.com/L3yyy'>https://github.com/L3yyy</a></u>");
        cons_valuebr(" ");

    }   else if (my_user_input.value == "kamote") {

        br();
        cons_mp3br("kamote_cmd.wav");
        cons_valuebr("▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄");
        cons_valuebr("██░███░█░████░▄▄▀█▄░▄████▄██░▄▄███░██░▄▄▀█░▄▄▀█░▄▄▄███░▄▄▀█░▄▄▀█░▄▀▄░█░▄▄▀█░▄▄▀██");
        cons_valuebr("██░█░█░█░▄▄░█░▀▀░██░█████░▄█░▄████░██░▀▀░█░██░█░█▄▀███░██░█░▀▀░█░█▄█░█░▀▀░█░██░██");
        cons_valuebr("██▄▀▄▀▄█▄██▄█▄██▄██▄████▄▄▄█▄█████▄▄█▄██▄█▄██▄█▄▄▄▄███▄██▄█▄██▄█▄███▄█▄██▄█▄██▄██");

        my_user_input.value = "";

    }   else if (my_user_input.value == "restart" || my_user_input.value == "-rt") {
        br();
        cons_valuebr("restarting...");
        location.reload();

    } else if (my_user_input.value == "projects" || my_user_input.value == "-pr") {
        br();
        cons_valuebr(" ");
        cons_valuebr("these are the projects i have worked on; big and small.");
        cons_valuebr("------------------------------------------------------------");
        cons_valuebr("L3Y KALKYU              <a href='https://l3yyy.github.io/L3Y-KALKYU' target='_blank'>https://l3yyy.github.io/L3Y-KALKYU</a>")
        // window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ&start_radio=1&pp=ygUXbmV2ZXIgZ29ubmEgZ2l2ZSB5b3UgdXCgBwE%3D', '_blank');
        br();
    
    } else if (my_user_input.value == "sudo -i") {
        br();
        window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ&start_radio=1&pp=ygUXbmV2ZXIgZ29ubmEgZ2l2ZSB5b3UgdXCgBwE%3D', '_blank');
        br();

    } else if (my_user_input.value == "about" || my_user_input.value == "-a") {
        br();
        cons_valuebr(" ");
        cons_valuebr("<label style='color:#8F8CF2'><h3>@L3yyy</h3></label><br>Hola! I'm L3yyy, a 17 year old dev-hobbyist from the Philippines.<br>I've loved computers since I was 4 years old. I started coding at the<br>age of 12 and have been learning ever since. My goal is to become<br>a full-stack developer and maybe take on some freelance work");
        cons_valuebr(" ");
        my_user_input.value = "";

    } else if (my_user_input.value == "gui" || my_user_input.value == "-g") {
        br();
        cons_valuebr("opening GUI version...");
        window.open('https://l3yyy.github.io/L3Y-GUI/', '_blank');
        br();

    } else if (my_user_input == "whoami") {
        br();
        cons_valuebr("guest user")

    } else {
        br();
        cons_valuebr(`<span style="color:red">${my_user_input.value}</span> command not found`);
    } 

    my_user_input.remove()
    user();

}

user();

function loop() {
    requestAnimationFrame(loop);
    const my_user_input = document.getElementById("user_input");
    my_user_input.focus();

    if (
        my_user_input.value == "help" ||
        my_user_input.value == "projects" ||
        my_user_input.value == "leyfetch" ||
        my_user_input.value == "clear" ||
        my_user_input.value == "" ||
        my_user_input.value == "restart" ||
        my_user_input.value == "about" ||
        my_user_input.value == "-h" ||
        my_user_input.value == "-lf" ||
        my_user_input.value == "-cl" ||
        my_user_input.value == "-pr" ||
        my_user_input.value == "-rt" ||
        my_user_input.value == "-a" ||
        my_user_input.value == "-g" ||
        my_user_input.value == "gui" ||
        my_user_input.value == "kamote" ||
        my_user_input.value == "sudo -i" ||
        my_user_input.value == "sudo" ||
        my_user_input.value == "sudo "
    ) {
        my_user_input.setAttribute("style", "color: #EBDBB2; background: none; border: hidden; outline: none; font-family: monospace");
    } else {
        my_user_input.setAttribute("style", "color: red; background: none; border: hidden; outline: none; font-family: monospace");
    }
}
loop();

document.addEventListener("keypress", function(e) {

    if (e.key == "Enter"){
        cmd();
    }

  });

document.addEventListener("keydown", function(e) {
    if (e.ctrlKey && e.key.toLowerCase() === "c" && !e.shiftKey) {
        e.preventDefault();
    }

    if (e.ctrlKey && e.key.toLowerCase() === "a") {
        e.preventDefault();
    }

    if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "c") {
        const copy_alert = document.createElement("div");
        copy_alert.textContent = "Copied!";
        copy_alert.style.position = "fixed";
        document.body.appendChild;
        setTimeout(() => copy_alert.remove(), 1000);

        return;
    }
});
