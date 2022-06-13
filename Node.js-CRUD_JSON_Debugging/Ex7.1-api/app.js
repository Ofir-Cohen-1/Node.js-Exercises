import axios from "axios";
import chalk from "chalk";
import request from "request";
import fetch from "node-fetch";

const getDataByAxios = async () => {
    try {
        const { data } = await axios.get(
            "https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1"
        );
        console.log((data));
    } catch (err) {
        console.log(chalk.red.inverse(err));
    }
};

await getDataByAxios();

const getDataByRequest = () => {
    const options = {
        url: "https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1",
        method: "GET",
    };
    request(options, function (err, res, body) {
        let json = JSON.parse(body);
        console.log(json);
        console.error("error:", err);
        console.log("statusCode:", res && res.statusCode);
        console.log("body:", body);
    });
};

// getDataByRequest();

const getDataByAnotherModule = async () => {
    const response = await fetch("https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1");
    const data = await response.json();
    console.log(data);
};

// getDataByAnotherModule();