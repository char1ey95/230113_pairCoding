class BoardController {
    constructor( _BoardService ){
        this.BoardService = _BoardService
    }

    async getAll(req, res, next){
        try {
            const result = await this.BoardService.getServiceAll()
            res.json(result) // [ {}, {}, ... ]
        } catch (error) {
            next(error)
        }
    }
    
    async postOne(req, res, next){
        try {
            // 해시태그 post
            const { userid, content, subject } = req.body
            const result = await this.BoardService.postServiceOne({ userid, content, subject })
            res.json(result)
        } catch (error) {
            next(error)
        }
    }
    
    async getOne(req, res, next){
        try {
            // 좋아요 가져오기
            const { id } = req.params
            const result = await this.BoardService.getServiceOne({ id })
            res.json(result)
        } catch (error) {
            next(error)
        }
    }
    
    async putOne(req, res, next){
        try {
            // 해시태그도 수정가능
            const { id } = req.params
            const { content } = req.body
            const result = await this.BoardService.putServiceOne({id, content})
            res.json(result)
        } catch (error) {
            next(error)
        }
    }
    
    async deleteOne(req, res, next){
        try {
            const { id } = req.params
            const result = await this.BoardService.deleteServiceOne(id)
            res.json(result)
        } catch (error) {
            next(error)
        }
    }
    
}

module.exports = BoardController