const express = require("express");
const router = express.Router();
require("dotenv").config();

const client_id = process.env.NAVER_CLOUD_ID;
const client_secret = process.env.NAVER_CLOUD_SECRET;

router.post("/", (req, res) => {
  const { query } = req.body;
  const api_url = "https://openapi.naver.com/v1/papago/n2mt";
  const request = require("request");
  const options = {
    url: api_url,
    form: { source: "en", target: "ko", text: query },
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      "X-Naver-Client-Id": client_id,
      "X-Naver-Client-Secret": client_secret,
    },
  };
  request.post(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(body);
      const result = JSON.parse(body);
      console.log(result);
      const translatedText = result.message.result.translatedText;
      return res.status(200).send({
        message: translatedText,
      });
    } else {
      console.error("error =", response ? response.statusCode : error);
      return res.status(500).send({
        message: "번역 실패",
      });
    }
  });
});

module.exports = router;
