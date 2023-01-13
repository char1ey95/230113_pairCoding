class BoardRepository {
    constructor({ _models }){
        this.model = _models
    }

    async getRepositoryAll (){
        try {
            const result = await this.model.findAll()
        } catch (error) {
            
        }
    }

    // post
    async postRepositoryOne ({ userid, content }){
        try {
            const result = await this.model.create(userid, content)
        } catch (error) {
            
        }
    }

    // view
    async getRepositoryOne ({ idx }){
        try {
            const result = await this.model.findOne(idx)
        } catch (error) {
            
        }
    }

    async putRepositoryOne ({ idx, content }){
        try {
            const result = await this.model.update(idx, content)
        } catch (error) {
            
        }
    }

    async delete ({ idx }){
        try {
            const result = await this.model.destroy(idx)
        } catch (error) {
            
        }
    }
}

module.exports = BoardRepository