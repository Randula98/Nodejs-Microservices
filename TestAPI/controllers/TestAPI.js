export const getTestAPI = async (req, res, next) => {
    res.send(`Hello from the Test Get api - no params`);
}

export const postTestAPI = async (req, res, next) => {
    res.send(`Hello from the Test Post api - ${req.params.param}`);
}

export const putTestAPI = async (req, res, next) => {
    res.send(`Hello from the Test Put api - ${req.params.param}`);
}
