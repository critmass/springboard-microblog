const db = require("../db");
const express = require("express");
const router = express.Router({ mergeParams: true });

/** GET /        get comments for post
 *
 * => { id, text, post_id }
 *
 */

router.get("/", async function (req, res, next) {
    try {
        const result = await db.query(
                                "SELECT id, text, post_id FROM comments");
        return res.json(result.rows);
    } catch (err) {
        return next(err);
    }
});

/** DELETE /[id]      delete comment
 *
 * => { message: "deleted" }
 *
 */

router.delete("/:id", async function (req, res, next) {
    try {
        await db.query("DELETE FROM comments WHERE id=$1", [req.params.id]);
        return res.json({ message: "deleted" });
    } catch (err) {
        return next(err);
    }
});


module.exports = router;