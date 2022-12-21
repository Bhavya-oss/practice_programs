function VowelUpperCase() {
    let text1 = "i bound  an can do";
    let text2 = text1.split(" ");
    for (i = 0; i < text2.length; i++) {
        console.log(text2[i]);

        if (text2[i] == "a" | text2[i] == "e" | text2[i] == "i" | text2[i] == "o" | text2[i] == "u") {
            console.log(text2[i]);
            console.log(text2[i].toUpperCase());
            // if(text2[i]=="a",)
        }

    }
}
VowelUpperCase();