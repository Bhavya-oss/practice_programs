function Hexadecimalhexa(n){

let b=n & 0xff;

console.log(b);
let g=(n>>8) & 0xff;
console.log(g)
let r=(n>>16)&0xff;
console.log(r);
let b2=(b*63)/255;
console.log(b2)
let g2=(g*31)/255;
console.log(g2);
let r2=(r*31)/255;
console.log(r2)
let pack=(r2<<11);
pack |=(g2<<6);
console.log(pack |=b2);
}

Hexadecimalhexa(0x102030)