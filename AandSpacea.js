function AandSpacea() {
    let text1 = "i bound a uround can  a an do";
    let text2 = text1.split(" ");
    //console.log(text2[2][0]);
    for (i = 0; i < text1.length; i++) {
        //console.log(text1[i]);
        //    console.log(text1[i+1]);
        //if(text2[i]=="a" && text2[i][0]=="a" || text2[i][0]=="e" || text2[i][0]=="i" || text2[i][0]=="o" || text2[i][0]=="u"){
        //console.log(text2[i].charAt(0));
        if (text2[i] == "a" && text2[i + 1][0] == "a" || text2[i + 1].charAt(0) == "e" || text2[i + 1].charAt(0) == "i" || text2[i + 1].charAt(0) == "o" || text2[i + 1].charAt(0) == "u") {
            text2[i] = "an";
            //  console.log(text2);
            console.log(text2.join(" "));
        }
    }
    //console.log(text2.join(" "));

    //console.log(text1);

}
AandSpacea();