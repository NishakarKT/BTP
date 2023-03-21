export const index = (req, res) => {
    res.status(200).send({ msg: "Server is up and running!" });
};