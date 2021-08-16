import { ObjectUnsubscribedError } from "rxjs";

export interface Entry {
    journalId: string;
    entryId?: string;
    prompt: string;
    entryTitle: string;
    entryBody: string;
    // createdOn: Date;
    createdOn: string;
    streakAtCreation: number;
}