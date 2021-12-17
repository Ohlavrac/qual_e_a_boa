const express = require("express");
const router = express.Router();
const path = require("path");
const Establishment = require("./models/Establishment");

/*Responsavel por pegar os dados vindo do client*/
const bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({extended:false}));
router.use(bodyParser.json());

const crypto = require("crypto");
const DATA_ENCRYPT = {
    algorithm : "aes256",
    secret : "chaves",
    type : "hex",
    codification: "utf8"
};

const encrypt = (password) => {
    const cipher = crypto.createCipher(DATA_ENCRYPT.algorithm, DATA_ENCRYPT.secret);
    cipher.update(password);
    return cipher.final(DATA_ENCRYPT.type);
}

function decrypt(password) {
    const decipher = crypto.createDecipher(DATA_ENCRYPT.algorithm, DATA_ENCRYPT.secret);
    decipher.update(password, DATA_ENCRYPT.type);
    return decipher.final();
};

router.get("/", (req, res) => {
    res.send("Estabelecimento Adicionado")
});

router.get("/accountForEstablishment", (req, res) => {
    res.sendFile(path.join(__dirname, "src", "views", "accountForEstablishment.html"))
});

router.post("/addEstablishment", async (req, res) => {
    const check_email_availability = await Establishment.findOne({where: {email: req.body.email}});
    if (check_email_availability === null) {
        Establishment.create({
            owner_name: req.body.owner_name,
            establishment_name: req.body.establishment_name,
            email: req.body.email,
            password: encrypt(req.body.password),
            bio: req.body.bio,
            url_image: req.body.url_image,
            street: req.body.street,
            neighborhood: req.body.neighborhood,
            number: req.body.number,
            city: req.body.city,
            account_type: 1 //Define 1 pois é um user de estabelecimento
        }).then(() => {
            res.redirect("/");
        }).catch((error) => {
            console.log("ERRO: "+ error);
        })
    } else {
        console.log(Establishment.email);
        console.log("Email ja esta em uso");
        res.redirect("/accountForEstablishment");
    }
})


module.exports = router;