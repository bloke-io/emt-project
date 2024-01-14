import { User } from "./User";
import { PaperPDF } from "./PaperPDF";

export type Paper = {
    id: number;
    title: string;
    reviewEndDate: Date,
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    PaperPDF: PaperPDF;
    author: User;
    reviewers: User[];
    comments: Comment[];
}