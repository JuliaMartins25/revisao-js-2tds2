let arsenal = ["laser", "metralhadora", "misseis", "bazuca", "granada"];

let ataques = [];

ataques.push("Robs");
ataques.push(arsenal[2]);
ataques.push(arsenal[0]);
ataques.push(arsenal[3]);
ataques.push(arsenal[1]);


for(let i = 0; i < ataques.length; i++) {
    if (i == 0) {
        console.log("nome do robô:", ataques[i]);
    } else {
        console.log("ataques " + i + ": " + ataques[i]);
    }
}
