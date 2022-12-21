function Hexadecimalhexa(n){
   
    r=n>>11&0x1f;
    g=(n>>5)&0x03f;
    b=(n)&0x001f;
    r=((r/31)*255);
    console.log(r);
    g=((g/63)*255);
    console.log(g);
    b=((b/31)*255);
    console.log(b);
    rgb = r << 16 | g <<   8 | b;
    console.log(rgb);
 }
    Hexadecimalhexa(0x94ac)