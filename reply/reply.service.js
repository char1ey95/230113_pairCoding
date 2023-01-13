class ReplyService {
    constructor(_ReplyRepository) {
        this.ReplyRepository = _ReplyRepository;
    }

    async getServiceAll(board_idx) {
        try {
            const result = await this.ReplyRepository.getRepositoryAll(board_idx);
            const respone = result.map((v) => {
                return v.dataValues;
            });
            return respone;
        } catch (error) {
            throw new Error(error);
        }
    }

    async postServiceOne({ userid, content, board_idx }) {
        try {
            const result = await this.ReplyRepository.postRepositoryOne({ userid, content, board_idx });
            return result;
        } catch (error) {
            throw new Error(error);
        }
    }

    async getServiceOne(idx) {
        try {
            const board = {};
            board.idx = idx;
            const result = await this.ReplyRepository.getRepositoryOne(board);
            return result;
        } catch (error) {
            throw new Error(error);
        }
    }

    async putServiceOne({ idx, content }) {
        try {
            const result = await this.ReplyRepository.putRepositoryOne({ idx, content });
            return result;
        } catch (error) {
            throw new Error(error);
        }
    }

    async deleteServiceOne(idx) {
        try {
            const result = await this.ReplyRepository.delete(idx);

            return result;
        } catch (error) {
            throw new Error(error);
        }
    }
}

module.exports = ReplyService;

