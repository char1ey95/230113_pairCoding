class BoardService {
    constructor( BoardRepository ){
        this.BoardRepoistory = BoardRepository
    }

    async getServiceAll(){
        try {
            const result = await this.BoardRepoistory.getRepositoryAll()
            return result
        } catch (error) {
            throw new Error(error)
        }
    }
    
    async postServiceOne({ userid, content, subject }){
        try {
            const board = {}
            board.userid = userid
            board.content = content
            board.subject = subject
            const result = await this.BoardRepoistory.postRepositoryOne(board)
            return result
        } catch (error) {
            throw new Error(error)
        }
    }
    
    async getServiceOne(id){
        try {
            const result = await this.BoardRepoistory.getRepositoryOne(id)
            return result
        } catch (error) {
            throw new Error(error)
        }
    }
    
    async putServiceOne({id, content}){
        try {
            const board = {}
            board.id = id
            board.content = content
            console.log(id, content)
            const result = await this.BoardRepoistory.putRepositoryOne(board)
            return result
        } catch (error) {
            throw new Error(error)
        }
    }
    
    async deleteServiceOne(id){
        try {
            const result = await this.BoardRepoistory.deleteRepositoryOne(id)
            return result
        } catch (error) {
            throw new Error(error)
        }
    }
    
}

module.exports = BoardService