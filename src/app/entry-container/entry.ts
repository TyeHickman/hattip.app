import { ObjectUnsubscribedError } from "rxjs";

export interface User {
    journalId: string;
    entryId: string;
    title: string;
    body: string;
    createdOn: Date;
}