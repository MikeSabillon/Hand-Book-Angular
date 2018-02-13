import { HandBookComment } from "./hand-book-comment";

export class HandBookPost
{
    postId : number;
    postUserId : number;
    postContent : string;
    postComments : Array<HandBookComment>;
    postNameOwner : string;
    postUserLikes : Array<Number> = [];

    public static createPostFromJson(entity : any) : HandBookPost
    {
        let newPost : HandBookPost = new HandBookPost();
        newPost.postId = entity.id;
        newPost.postContent = entity.postContent;
        newPost.postUserId = entity.postOwnerId;
        newPost.postNameOwner = entity.postOwnerName;
        newPost.postUserLikes = entity.postUserLikes;

        newPost.postComments = [];

        if(entity.postComments.length > 0)
        {
            for(let a = 0; a < entity.postComments.length; a++)
            {
                newPost.postComments.push(HandBookComment.createCommentFromJson(entity.postComments[a]));
            }
        }

        return newPost;
    }

}