import axios from "axios";

const rootUrl = "http://localhost:3000/api/v1/";

export const getTrainers = async () => {
    return await axios.get(`${rootUrl}trainers`).then(res => {
        return res.data;
    }).catch(err => {
        throw err;
    });
}

export const createTrainer = async (trainer) => {
    return await axios.post(`${rootUrl}trainers`, {trainer}).then(res => {
            return res.data;
        }
    ).catch(err => {
        throw err;
    });
}

export const deleteTrainer = async (trainerName) => {
    return await axios.delete(`${rootUrl}trainers/${trainerName}`).then(res => {
            return res.data;
        }
    ).catch(err => {
        throw err;
    });
}