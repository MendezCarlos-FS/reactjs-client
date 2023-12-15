import axios from "axios";

const rootUrl = "http://localhost:3000/api/v1/";

export const getTrainers = async () => {
    return await axios.get(`${rootUrl}trainers`).then(res => {
        return res.data.trainers;
    }).catch(err => {
        if (err.response) {
            if (err.response.data) {
                if (err.response.data.message) {
                    console.error(err.response.data.message);
                }
                else {
                    console.error(err.response.data);
                }
            }
            else {
                console.error(err.response);
            }
        }
        else {
            console.error(err.message);
        }
    });
}

export const createTrainer = async (trainer) => {
    return await axios.post(`${rootUrl}trainers`, {trainer}).then(res => {
            return true;
        }
    ).catch(err => {
        if (err.response) {
            if (err.response.data) {
                if (err.response.data.message) {
                    console.error(err.response.data.message);
                }
                else {
                    console.error(err.response.data);
                }
            }
            else {
                console.error(err.response);
            }
        }
        else {
            console.error(err.message);
        }

        return false;
    });
}

export const deleteTrainer = async (trainerName) => {
    return await axios.delete(`${rootUrl}trainers/${trainerName}`).then(res => {
            return true;
        }
    ).catch(err => {
        if (err.response) {
            if (err.response.data) {
                if (err.response.data.message) {
                    console.error(err.response.data.message);
                }
                else {
                    console.error(err.response.data);
                }
            }
            else {
                console.error(err.response);
            }
        }
        else {
            console.error(err.message);
        }

        return false;
    });
}