export class HandBookComment
{
    commentId : number;
    commentUserId : number;
    comment : string;
    commentLikes : number;
    commentName : string;
    commentPostId : number;

    public constructor(commentId? : number, commentUserId? : number, comment? : string, commentLikes? : number, commentName? : string, commentPostId? : number){
        this.commentId = commentId;
        this.commentUserId = commentUserId;
        this.comment = comment;
        this.commentLikes = commentLikes;
        this.commentName = commentName;
        this.commentPostId = commentPostId;
    }

    public static createCommentFromJson(entity : any) : HandBookComment
    {
        let newComment : HandBookComment = new HandBookComment();
        newComment.commentId = entity.comment_id;
        newComment.comment = entity.comment;
        newComment.commentUserId = entity.userId;
        newComment.commentLikes = entity.comment_likes;
        newComment.commentName = entity.commentOwnerName;
        newComment.commentPostId = entity.commentPostId;

        return newComment;
    }
}