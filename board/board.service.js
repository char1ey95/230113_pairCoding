class BoardService {
    constructor({ _BoardRepository,  }){
        this.BoardRepoistory = _BoardRepository
    }

    async getServiceAll(){
        try {
            const result = await this.BoardRepoistory.getRepositoryAll()
            return result
        } catch (error) {
            throw new Error(error)
        }
    }
    
    async postServiceOne(userid, content){
        try {
            const board = {}
            board.userid = userid
            board.content = content
            const result = await this.BoardRepoistory.postRepositoryOne(board)
            return result
        } catch (error) {
            throw new Error(error)
        }
    }
    
    async getServiceOne(idx){
        try {
            const board = {}
            board.idx = idx
            const result = await this.BoardRepoistory.getRepositoryOne(board)
            return result
        } catch (error) {
            throw new Error(error)
        }
    }
    
    async putServiceOne(idx, content){
        try {
            const board = {}
            board.idx = idx
            board.content = content
            const result = await this.BoardRepoistory.putRepositoryOne(board)
            return result
        } catch (error) {
            throw new Error(error)
        }
    }
    
    async deleteServiceOne(idx){
        try {
            const board = {}
            board.idx = idx
            const result = await this.BoardRepoistory.deleteRepositoryOne(board)
            return result
        } catch (error) {
            throw new Error(error)
        }
    }
    
}

module.exports = BoardService