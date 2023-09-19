// operadores lógicos 

/* Entre eles são :

&& (E)
|| (OU)
! (NÃO)

*/

let n1, n2, n3, nota4

n1 = 10 
n2 = 5
n3 = 15 
n4 = 2

console.log(n1>n2>n3>n4)
console.log((n1>n2) || (n3>n4))
console.log(n1*n2 > n3*n4)
console.log((n1/2) >= n2 && n4 > n3)
console.log((n1/2) >= n2 && !(n4 > n3))

id ( (n1 > n2) && (n3 > n4) )