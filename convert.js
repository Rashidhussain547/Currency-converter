function convert(){
    var pk = document.getElementById("pkr").value;

    var usa = pk*0.0057;
    var ero = pk*0.0049;
    var sdi = pk*0.022;
    var chi = pk*0.037;
    var uae = pk*0.021;


    document.getElementById("us").value=usa;
    document.getElementById("er").value=ero;
    document.getElementById("sd").value=sdi;
    document.getElementById("ch").value=chi;
    document.getElementById("ua").value=uae;
}


