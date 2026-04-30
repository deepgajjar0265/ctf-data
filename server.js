const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static(".")); // serve index.html

const FLAG = "FLAG{flag_is_07656c6c}";

app.post("/check", (req, res) => {
    const userFlag = req.body.flag;

    if (userFlag === FLAG) {
        return res.json({ success: true });
    } else {
        return res.json({ success: false });
    }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});