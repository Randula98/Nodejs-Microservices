import dotenv from "dotenv/config";
import axios from "axios";
const fakeapi = process.env.REACT_APP_FAKE_API_URI

export const getFakeAPI = async (req, res) => {
    axios.get(`${fakeapi}/`)
        .then(response => {
            console.log(response.data);
            res.send(response.data);
        })
        .catch(error => {
            console.log(error);
        });
}

export const postFakeAPI = async (req, res) => {
    axios.post(`${fakeapi}/${req.params.param}`)
        .then(response => {
            console.log(response.data);
            res.send(response.data);
        })
        .catch(error => {
            console.log(error);
        });
}

export const putFakeAPI = async (req, res) => {
    axios.put(`${fakeapi}/${req.params.param}`)
        .then(response => {
            console.log(response.data);
            res.send(response.data);
        })
        .catch(error => {
            console.log(error);
        });
}
