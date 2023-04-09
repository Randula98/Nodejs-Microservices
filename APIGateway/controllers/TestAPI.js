import dotenv from "dotenv/config";
import axios from "axios";
const testapi = process.env.REACT_APP_TEST_API_URI

export const getTestAPI = async (req, res) => {
    axios.get(`${testapi}/`)
        .then(response => {
            console.log(response.data);
            res.send(response.data);
        })
        .catch(error => {
            console.log(error);
        });
}

export const postTestAPI = async (req, res) => {
    axios.post(`${testapi}/${req.params.param}`)
        .then(response => {
            console.log(response.data);
            res.send(response.data);
        })
        .catch(error => {
            console.log(error);
        });
}

export const putTestAPI = async (req, res) => {
    axios.put(`${testapi}/${req.params.param}`)
        .then(response => {
            console.log(response.data);
            res.send(response.data);
        })
        .catch(error => {
            console.log(error);
        });
}
