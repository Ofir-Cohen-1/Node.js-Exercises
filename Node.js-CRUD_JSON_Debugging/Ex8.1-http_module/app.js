import https from "https";

const url = "https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1";
const request = https.get(url, (response) => {
    let data = "";
    response.on("data", (chunk) => {
        data += chunk.toString();
    });

    response.on("end", () => {
        const body = JSON.parse(data);
        console.log(body);
    });
});

request.on("error", (error) => {
    console.log("An error", error);
});
request.end();