import { HandBookPost } from "./hand-book-post";
import { HandBookComment } from "./hand-book-comment";

export class HandBookUser
{
    userId : number;
    userDataId : number;
    username: string;
    password: string;

    name : string;
    lastName: string;
    email: string;
    age: number;

    userComments : Array<HandBookComment>;
    userPosts : Array<HandBookPost>;

    public static createUserFromJson(entity: any) : HandBookUser
    {
        let newUser : HandBookUser = new HandBookUser();

        newUser.userId = entity.userId;
        newUser.userDataId = entity.userDataId;
        newUser.username = entity.username;
        newUser.password = entity.password;
        newUser.name = entity.name;
        newUser.lastName = entity.lastName;
        newUser.email = entity.correo;
        newUser.age = entity.edad;

        newUser.userComments = [];
        newUser.userPosts = [];

        for(let a = 0; a < entity.userComments.length; a++)
        {
            newUser.userComments.push(HandBookComment.createCommentFromJson(entity.userComments[a]));
        }

        for(let b = 0; b < entity.userPosts.length; b++)
        {
            newUser.userPosts.push(HandBookPost.createPostFromJson(entity.userPosts[b]));
        }

        return newUser;
    }

}