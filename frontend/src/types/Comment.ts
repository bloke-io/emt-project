import { Paper } from "./Paper";
import { User } from "./User";

export type Comment = {
    id: number;
    comment: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    science_paper: Paper;
    commentAuthor: User;
}