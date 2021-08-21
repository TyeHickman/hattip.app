import { ObjectUnsubscribedError } from "rxjs";
import { Entry } from "./entry-container/entry";

export interface Journal {
    id: string;
    name: string;
    prompt: string;
    entries?: [Entry];
    currentStreak?: number;
    longestStreak?: number;
    createdOn?: Date;
    lastUpdate?: Date
}