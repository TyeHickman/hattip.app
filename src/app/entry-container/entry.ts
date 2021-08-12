import { ObjectUnsubscribedError } from "rxjs";

export interface Entry {
    journalId: string;
    entryId: string;
    title: string;
    body: string;
    createdOn: Date;
    streakAtCreation: number;
}