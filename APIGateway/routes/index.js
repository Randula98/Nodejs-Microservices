import express from "express";
import axios from "axios";
const router = express.Router();

const fakeapi = process.env.REACT_APP_FAKE_API_URI
const testapi = process.env.REACT_APP_FAKE_API_URI

router.get('/:param', (req, res) => {
    axios.get(`${fakeapi}/fakeapi/${req.params.param}`)
        .then(response => {
            console.log(response.data);
            res.send(response.data);
        })
        .catch(error => {
            console.log(error);
        });
});

router.post('/:param', (req, res) => {
    axios.post(`${fakeapi}/fakeapi/${req.params.param}`)
        .then(response => {
            console.log(response.data);
            res.send(response.data);
        })
        .catch(error => {
            console.log(error);
        });
});

router.put('/:param', (req, res) => {
    axios.put(`${fakeapi}/fakeapi/${req.params.param}`)
        .then(response => {
            console.log(response.data);
            res.send(response.data);
        })
        .catch(error => {
            console.log(error);
        });
});

export default router;