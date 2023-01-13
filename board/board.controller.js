class BoardController {
    constructor({ _BoardService,  }){
        this.BoardService = _BoardService
    }

    async getAll(req, res, next){
        try {
            const result = await this.BoardService.getServiceAll()
            res.json()
        } catch (error) {
            next(error)
        }
    }
    
    async postOne(req, res, next){
        try {
            // 해시태그 post
            const { userid, content } = req.body
            const result = await this.BoardService.postServiceOne(userid, content)
            res.json()
        } catch (error) {
            next(error)
        }
    }
    
    async getOne(req, res, next){
        try {
            // 좋아요 가져오기
            const { idx } = req.params
            const result = await this.BoardService.getServiceOne(idx)
            res.json()
        } catch (error) {
            next(error)
        }
    }
    
    async putOne(req, res, next){
        try {
            // 해시태그도 수정가능
            const { idx } = req.params
            const { content } = req.body
            const result = await this.BoardService.putServiceOne(idx, content)
            res.json()
        } catch (error) {
            next(error)
        }
    }
    
    async deleteOne(req, res, next){
        try {
            const { idx } = req.params
            const result = await this.BoardService.deleteServiceOne(idx)
            res.json()
        } catch (error) {
            next(error)
        }
    }
    
}

module.exports = BoardController