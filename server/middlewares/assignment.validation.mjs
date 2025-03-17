export const validateCreateAssignment = (req, res, next) => {
    if (!req.body.title) {
        return res.status(400).json({
            message: "กรุณาส่งข้อมูล Title ของโพสต์เข้ามาด้วย"
        })
    };

    if (!req.body.content) {
        return res.status(400).json({
            message: "กรุณาส่งข้อมูล Content ของโพสต์เข้ามาด้วย"
        })
    }

    if (!req.body.category) {
        return res.status(400).json({
            message: "กรุณาส่งข้อมูล Category ของโพสต์เข้ามาด้วย"
        })
    }

    if (!req.body.email) {
        return res.status(400).json({
            message: "กรุณาส่งข้อมูล Email ของโพสต์เข้ามาด้วย"
        })
    }

    function validateEmail(email) {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return regex.test(email);
    };
    if (!validateEmail(req.body.email)) {
        return res.status(400).json({
            message: "กรุณาส่งข้อมูล Email ของโพสต์เข้ามาด้วย"
        })
    }

    const categoryList = ["Math", "English", "Biology"];
    const hasCategoryList = categoryList.includes(req.body.category);
    if (!hasCategoryList) {
        return res.status(400).json({
            message: "กรุณาส่งข้อมูล Category ตามที่กำหนด เช่น 'Math', 'English' หรือ 'Biology'"
        })
    }

    if (req.body.content.length < 500 || req.body.content.length > 1000) {
        return res.status(400).json({
            message: "กรุณาส่งข้อมูล Content ของโพสต์ตามที่กำหนดมากกว่า 500 ตัวอักษรและไม่เกิน 1000 ตัวอักษร"
        })
    }

    next();
}

