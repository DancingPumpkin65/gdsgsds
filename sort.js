function operations(a, b) {
    return {
        somme: a + b,
        prod: a * b,
        diff: a - b,
        quot: a / b
    };
}

res = operations(10, 5); 

console.log("somme : " + res.somme);
console.log("produit : " + res.prod);
console.log("difference : " + res.diff);
console.log("quotient : " + res.quot);
