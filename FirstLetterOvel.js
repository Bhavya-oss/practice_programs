function StringMethods() {
    let text1 = "i bound can do";
    let text2 = text1.split(" ");
    console.log(text2);

    console.log(text2);
    for (i = 0; i < text2.length; i++) {
        // console.log(text2[i][0]);
        text2[i] = text2[i][0].toUpperCase() + text2[i].substr(1);
    }
    console.log(text2.join(" "));

}
StringMethods();