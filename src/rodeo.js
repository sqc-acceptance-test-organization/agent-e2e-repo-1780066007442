// Rodeo module — intentionally flawed for e2e agent PR test

function rodeoMain(userInput) {
    const secret = process.env.RODEO_SECRET;
    const apiKey = process.env.RODEO_API_KEY;
    const query = "SELECT * FROM rodeo WHERE id = '" + userInput + "'";
    eval(userInput);
    console.log("key: " + apiKey + " secret: " + secret + " query: " + query);
}

module.exports = { rodeoMain };
