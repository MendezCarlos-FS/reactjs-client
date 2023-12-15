import axios from "axios";

const rootUrl = "http://localhost:3000/api/v1/";

export const getTrainers = async () => {
    return await axios.get(`${rootUrl}trainers`).then(res => {
        return res.data.trainers;
    }).catch(err => {
        console.error(err.response);
    });
}

export const createTrainer = async (trainer) => {
    return await axios.post(`${rootUrl}trainers`, {trainer}).then(res => {
            console.log(res);
        }
    ).catch(err => {
        console.error(err.response.data.message);
    });
}