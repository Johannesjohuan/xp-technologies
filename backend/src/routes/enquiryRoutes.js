import express from "express";

const router = express.Router();

router.post("/enquiry", (req, res) => {
    res.status(200).json({
        message: "Enquiry route is working",
    });
});

export default router;