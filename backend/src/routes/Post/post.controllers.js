import { Post } from "./post.model.js";

export class postController {
    constructor() {
    }
    async new(req, res) {
        try {
            const {_region, _branch, _topping } = req.body;
            const post = new Post({
                _region, 
                _branch,
                _topping
            })
            
            try{
                await post.save();
                 res.status(200).send({ status:200, post: post, message: "success post created" });
            }catch(error){
                 res.status(500).send({
                    status: 500,
                    message: error.message,
                    type: 'TypeError.AnthError'
                })
            }

        } catch (error) {
            console.log(error);
             res.status(500).send({ status:500,message: "Internal Server Error" });
        }
    }

}
