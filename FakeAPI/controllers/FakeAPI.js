export const getFakeAPI = async (req, res, next) => {
    res.send(`Hello from the Fake Get api - no params`);
}

export const postFakeAPI = async (req, res, next) => {
    res.send(`Hello from the Fake Post api - ${req.params.param}`);
}

export const putFakeAPI = async (req, res, next) => {
    res.send(`Hello from the Fake Put api - ${req.params.param}`);
}
