class BoardRepository {
    constructor( _models ){
        this.models = _models
    }

    async getRepositoryAll (){
        try {
            const result = await this.models.findAll({ raw : true })
            return result
        } catch (error) {
            throw new Error(error)
        }
    }

    // post
    async postRepositoryOne ({ userid, content, subject }){
        try {
            const result = await this.models.create({ userid, content, subject })
            return result
        } catch (error) {
            throw new Error(error)
        }
    }

    // view
    async getRepositoryOne ({ id }){
        try {
            const result = await this.models.findOne({ where : { id: id}})
            return result.dataValues
        } catch (error) {
            throw new Error(error)
        }
    }

    async putRepositoryOne ({ id, content }){
        try {
            const result = await this.models.update({ content }, { where : { id: id}})
            return result
        } catch (error) {
            throw new Error(error)
        }
    }

    async deleteRepositoryOne ( id ){
        try {
            const result = await this.models.destroy({ where : { id: id}})
            return result
        } catch (error) {
            throw new Error(error)
        }
    }
}

module.exports = BoardRepository