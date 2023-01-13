class ReplyController {
    constructor(_ReplyService) {
        this.ReplyService = _ReplyService;
    }

    async getAll(req, res, next) {
        try {
            const { board_idx } = req.params;
            const result = await this.ReplyService.getServiceAll(board_idx);
            console.log(result);
            res.json(result);
        } catch (error) {
            next(error);
        }
    }

    async postOne(req, res, next) {
        try {
            const { userid, content } = req.body;
            const { board_idx } = req.params;
            console.log(userid, content, board_idx);
            const result = await this.ReplyService.postServiceOne({ userid, content, board_idx });
            res.json(result);
        } catch (error) {
            next(error);
        }
    }

    async putOne(req, res, next) {
        try {
            // 해시태그도 수정가능
            const { idx } = req.params;
            const { content } = req.body;
            const result = await this.ReplyService.putServiceOne({ idx, content });
            res.json();
        } catch (error) {
            next(error);
        }
    }

    async deleteOne(req, res, next) {
        try {
            const { idx } = req.params;
            console.log(idx);
            const result = await this.ReplyService.deleteServiceOne(idx);
            res.json();
        } catch (error) {
            next(error);
        }
    }
}

module.exports = ReplyController;

