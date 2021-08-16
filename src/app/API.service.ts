/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type CreateJournalInput = {
  id?: string | null;
  name: string;
  currentStreak?: number | null;
  longestStreak?: number | null;
  createdOn?: string | null;
  lastUpdate?: string | null;
};

export type ModelJournalConditionInput = {
  name?: ModelStringInput | null;
  currentStreak?: ModelIntInput | null;
  longestStreak?: ModelIntInput | null;
  createdOn?: ModelStringInput | null;
  lastUpdate?: ModelStringInput | null;
  and?: Array<ModelJournalConditionInput | null> | null;
  or?: Array<ModelJournalConditionInput | null> | null;
  not?: ModelJournalConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type Journal = {
  __typename: "Journal";
  id: string;
  name: string;
  entries?: ModelEntryConnection | null;
  currentStreak?: number | null;
  longestStreak?: number | null;
  createdOn?: string | null;
  lastUpdate?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ModelEntryConnection = {
  __typename: "ModelEntryConnection";
  items?: Array<Entry | null> | null;
  nextToken?: string | null;
};

export type Entry = {
  __typename: "Entry";
  id: string;
  prompt: string;
  entryTitle: string;
  entryBody?: string | null;
  journalId: string;
  journal?: Journal | null;
  createdOn?: string | null;
  streakAtCreation?: number | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateJournalInput = {
  id: string;
  name?: string | null;
  currentStreak?: number | null;
  longestStreak?: number | null;
  createdOn?: string | null;
  lastUpdate?: string | null;
};

export type DeleteJournalInput = {
  id: string;
};

export type CreateEntryInput = {
  id?: string | null;
  prompt: string;
  entryTitle: string;
  entryBody?: string | null;
  journalId: string;
  createdOn?: string | null;
  streakAtCreation?: number | null;
};

export type ModelEntryConditionInput = {
  prompt?: ModelStringInput | null;
  entryTitle?: ModelStringInput | null;
  entryBody?: ModelStringInput | null;
  journalId?: ModelIDInput | null;
  createdOn?: ModelStringInput | null;
  streakAtCreation?: ModelIntInput | null;
  and?: Array<ModelEntryConditionInput | null> | null;
  or?: Array<ModelEntryConditionInput | null> | null;
  not?: ModelEntryConditionInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type UpdateEntryInput = {
  id: string;
  prompt?: string | null;
  entryTitle?: string | null;
  entryBody?: string | null;
  journalId?: string | null;
  createdOn?: string | null;
  streakAtCreation?: number | null;
};

export type DeleteEntryInput = {
  id: string;
};

export type ModelJournalFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  currentStreak?: ModelIntInput | null;
  longestStreak?: ModelIntInput | null;
  createdOn?: ModelStringInput | null;
  lastUpdate?: ModelStringInput | null;
  and?: Array<ModelJournalFilterInput | null> | null;
  or?: Array<ModelJournalFilterInput | null> | null;
  not?: ModelJournalFilterInput | null;
};

export type ModelJournalConnection = {
  __typename: "ModelJournalConnection";
  items?: Array<Journal | null> | null;
  nextToken?: string | null;
};

export type ModelEntryFilterInput = {
  id?: ModelIDInput | null;
  prompt?: ModelStringInput | null;
  entryTitle?: ModelStringInput | null;
  entryBody?: ModelStringInput | null;
  journalId?: ModelIDInput | null;
  createdOn?: ModelStringInput | null;
  streakAtCreation?: ModelIntInput | null;
  and?: Array<ModelEntryFilterInput | null> | null;
  or?: Array<ModelEntryFilterInput | null> | null;
  not?: ModelEntryFilterInput | null;
};

export type CreateJournalMutation = {
  __typename: "Journal";
  id: string;
  name: string;
  entries?: {
    __typename: "ModelEntryConnection";
    items?: Array<{
      __typename: "Entry";
      id: string;
      prompt: string;
      entryTitle: string;
      entryBody?: string | null;
      journalId: string;
      createdOn?: string | null;
      streakAtCreation?: number | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  currentStreak?: number | null;
  longestStreak?: number | null;
  createdOn?: string | null;
  lastUpdate?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateJournalMutation = {
  __typename: "Journal";
  id: string;
  name: string;
  entries?: {
    __typename: "ModelEntryConnection";
    items?: Array<{
      __typename: "Entry";
      id: string;
      prompt: string;
      entryTitle: string;
      entryBody?: string | null;
      journalId: string;
      createdOn?: string | null;
      streakAtCreation?: number | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  currentStreak?: number | null;
  longestStreak?: number | null;
  createdOn?: string | null;
  lastUpdate?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteJournalMutation = {
  __typename: "Journal";
  id: string;
  name: string;
  entries?: {
    __typename: "ModelEntryConnection";
    items?: Array<{
      __typename: "Entry";
      id: string;
      prompt: string;
      entryTitle: string;
      entryBody?: string | null;
      journalId: string;
      createdOn?: string | null;
      streakAtCreation?: number | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  currentStreak?: number | null;
  longestStreak?: number | null;
  createdOn?: string | null;
  lastUpdate?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateEntryMutation = {
  __typename: "Entry";
  id: string;
  prompt: string;
  entryTitle: string;
  entryBody?: string | null;
  journalId: string;
  journal?: {
    __typename: "Journal";
    id: string;
    name: string;
    entries?: {
      __typename: "ModelEntryConnection";
      nextToken?: string | null;
    } | null;
    currentStreak?: number | null;
    longestStreak?: number | null;
    createdOn?: string | null;
    lastUpdate?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdOn?: string | null;
  streakAtCreation?: number | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateEntryMutation = {
  __typename: "Entry";
  id: string;
  prompt: string;
  entryTitle: string;
  entryBody?: string | null;
  journalId: string;
  journal?: {
    __typename: "Journal";
    id: string;
    name: string;
    entries?: {
      __typename: "ModelEntryConnection";
      nextToken?: string | null;
    } | null;
    currentStreak?: number | null;
    longestStreak?: number | null;
    createdOn?: string | null;
    lastUpdate?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdOn?: string | null;
  streakAtCreation?: number | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteEntryMutation = {
  __typename: "Entry";
  id: string;
  prompt: string;
  entryTitle: string;
  entryBody?: string | null;
  journalId: string;
  journal?: {
    __typename: "Journal";
    id: string;
    name: string;
    entries?: {
      __typename: "ModelEntryConnection";
      nextToken?: string | null;
    } | null;
    currentStreak?: number | null;
    longestStreak?: number | null;
    createdOn?: string | null;
    lastUpdate?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdOn?: string | null;
  streakAtCreation?: number | null;
  createdAt: string;
  updatedAt: string;
};

export type GetJournalQuery = {
  __typename: "Journal";
  id: string;
  name: string;
  entries?: {
    __typename: "ModelEntryConnection";
    items?: Array<{
      __typename: "Entry";
      id: string;
      prompt: string;
      entryTitle: string;
      entryBody?: string | null;
      journalId: string;
      createdOn?: string | null;
      streakAtCreation?: number | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  currentStreak?: number | null;
  longestStreak?: number | null;
  createdOn?: string | null;
  lastUpdate?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListJournalsQuery = {
  __typename: "ModelJournalConnection";
  items?: Array<{
    __typename: "Journal";
    id: string;
    name: string;
    entries?: {
      __typename: "ModelEntryConnection";
      nextToken?: string | null;
    } | null;
    currentStreak?: number | null;
    longestStreak?: number | null;
    createdOn?: string | null;
    lastUpdate?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type GetEntryQuery = {
  __typename: "Entry";
  id: string;
  prompt: string;
  entryTitle: string;
  entryBody?: string | null;
  journalId: string;
  journal?: {
    __typename: "Journal";
    id: string;
    name: string;
    entries?: {
      __typename: "ModelEntryConnection";
      nextToken?: string | null;
    } | null;
    currentStreak?: number | null;
    longestStreak?: number | null;
    createdOn?: string | null;
    lastUpdate?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdOn?: string | null;
  streakAtCreation?: number | null;
  createdAt: string;
  updatedAt: string;
};

export type ListEntriesQuery = {
  __typename: "ModelEntryConnection";
  items?: Array<{
    __typename: "Entry";
    id: string;
    prompt: string;
    entryTitle: string;
    entryBody?: string | null;
    journalId: string;
    journal?: {
      __typename: "Journal";
      id: string;
      name: string;
      currentStreak?: number | null;
      longestStreak?: number | null;
      createdOn?: string | null;
      lastUpdate?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdOn?: string | null;
    streakAtCreation?: number | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type OnCreateJournalSubscription = {
  __typename: "Journal";
  id: string;
  name: string;
  entries?: {
    __typename: "ModelEntryConnection";
    items?: Array<{
      __typename: "Entry";
      id: string;
      prompt: string;
      entryTitle: string;
      entryBody?: string | null;
      journalId: string;
      createdOn?: string | null;
      streakAtCreation?: number | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  currentStreak?: number | null;
  longestStreak?: number | null;
  createdOn?: string | null;
  lastUpdate?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateJournalSubscription = {
  __typename: "Journal";
  id: string;
  name: string;
  entries?: {
    __typename: "ModelEntryConnection";
    items?: Array<{
      __typename: "Entry";
      id: string;
      prompt: string;
      entryTitle: string;
      entryBody?: string | null;
      journalId: string;
      createdOn?: string | null;
      streakAtCreation?: number | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  currentStreak?: number | null;
  longestStreak?: number | null;
  createdOn?: string | null;
  lastUpdate?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteJournalSubscription = {
  __typename: "Journal";
  id: string;
  name: string;
  entries?: {
    __typename: "ModelEntryConnection";
    items?: Array<{
      __typename: "Entry";
      id: string;
      prompt: string;
      entryTitle: string;
      entryBody?: string | null;
      journalId: string;
      createdOn?: string | null;
      streakAtCreation?: number | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  currentStreak?: number | null;
  longestStreak?: number | null;
  createdOn?: string | null;
  lastUpdate?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateEntrySubscription = {
  __typename: "Entry";
  id: string;
  prompt: string;
  entryTitle: string;
  entryBody?: string | null;
  journalId: string;
  journal?: {
    __typename: "Journal";
    id: string;
    name: string;
    entries?: {
      __typename: "ModelEntryConnection";
      nextToken?: string | null;
    } | null;
    currentStreak?: number | null;
    longestStreak?: number | null;
    createdOn?: string | null;
    lastUpdate?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdOn?: string | null;
  streakAtCreation?: number | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateEntrySubscription = {
  __typename: "Entry";
  id: string;
  prompt: string;
  entryTitle: string;
  entryBody?: string | null;
  journalId: string;
  journal?: {
    __typename: "Journal";
    id: string;
    name: string;
    entries?: {
      __typename: "ModelEntryConnection";
      nextToken?: string | null;
    } | null;
    currentStreak?: number | null;
    longestStreak?: number | null;
    createdOn?: string | null;
    lastUpdate?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdOn?: string | null;
  streakAtCreation?: number | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteEntrySubscription = {
  __typename: "Entry";
  id: string;
  prompt: string;
  entryTitle: string;
  entryBody?: string | null;
  journalId: string;
  journal?: {
    __typename: "Journal";
    id: string;
    name: string;
    entries?: {
      __typename: "ModelEntryConnection";
      nextToken?: string | null;
    } | null;
    currentStreak?: number | null;
    longestStreak?: number | null;
    createdOn?: string | null;
    lastUpdate?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdOn?: string | null;
  streakAtCreation?: number | null;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateJournal(
    input: CreateJournalInput,
    condition?: ModelJournalConditionInput
  ): Promise<CreateJournalMutation> {
    const statement = `mutation CreateJournal($input: CreateJournalInput!, $condition: ModelJournalConditionInput) {
        createJournal(input: $input, condition: $condition) {
          __typename
          id
          name
          entries {
            __typename
            items {
              __typename
              id
              prompt
              entryTitle
              entryBody
              journalId
              createdOn
              streakAtCreation
              createdAt
              updatedAt
            }
            nextToken
          }
          currentStreak
          longestStreak
          createdOn
          lastUpdate
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateJournalMutation>response.data.createJournal;
  }
  async UpdateJournal(
    input: UpdateJournalInput,
    condition?: ModelJournalConditionInput
  ): Promise<UpdateJournalMutation> {
    const statement = `mutation UpdateJournal($input: UpdateJournalInput!, $condition: ModelJournalConditionInput) {
        updateJournal(input: $input, condition: $condition) {
          __typename
          id
          name
          entries {
            __typename
            items {
              __typename
              id
              prompt
              entryTitle
              entryBody
              journalId
              createdOn
              streakAtCreation
              createdAt
              updatedAt
            }
            nextToken
          }
          currentStreak
          longestStreak
          createdOn
          lastUpdate
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateJournalMutation>response.data.updateJournal;
  }
  async DeleteJournal(
    input: DeleteJournalInput,
    condition?: ModelJournalConditionInput
  ): Promise<DeleteJournalMutation> {
    const statement = `mutation DeleteJournal($input: DeleteJournalInput!, $condition: ModelJournalConditionInput) {
        deleteJournal(input: $input, condition: $condition) {
          __typename
          id
          name
          entries {
            __typename
            items {
              __typename
              id
              prompt
              entryTitle
              entryBody
              journalId
              createdOn
              streakAtCreation
              createdAt
              updatedAt
            }
            nextToken
          }
          currentStreak
          longestStreak
          createdOn
          lastUpdate
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteJournalMutation>response.data.deleteJournal;
  }
  async CreateEntry(
    input: CreateEntryInput,
    condition?: ModelEntryConditionInput
  ): Promise<CreateEntryMutation> {
    const statement = `mutation CreateEntry($input: CreateEntryInput!, $condition: ModelEntryConditionInput) {
        createEntry(input: $input, condition: $condition) {
          __typename
          id
          prompt
          entryTitle
          entryBody
          journalId
          journal {
            __typename
            id
            name
            entries {
              __typename
              nextToken
            }
            currentStreak
            longestStreak
            createdOn
            lastUpdate
            createdAt
            updatedAt
          }
          createdOn
          streakAtCreation
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateEntryMutation>response.data.createEntry;
  }
  async UpdateEntry(
    input: UpdateEntryInput,
    condition?: ModelEntryConditionInput
  ): Promise<UpdateEntryMutation> {
    const statement = `mutation UpdateEntry($input: UpdateEntryInput!, $condition: ModelEntryConditionInput) {
        updateEntry(input: $input, condition: $condition) {
          __typename
          id
          prompt
          entryTitle
          entryBody
          journalId
          journal {
            __typename
            id
            name
            entries {
              __typename
              nextToken
            }
            currentStreak
            longestStreak
            createdOn
            lastUpdate
            createdAt
            updatedAt
          }
          createdOn
          streakAtCreation
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateEntryMutation>response.data.updateEntry;
  }
  async DeleteEntry(
    input: DeleteEntryInput,
    condition?: ModelEntryConditionInput
  ): Promise<DeleteEntryMutation> {
    const statement = `mutation DeleteEntry($input: DeleteEntryInput!, $condition: ModelEntryConditionInput) {
        deleteEntry(input: $input, condition: $condition) {
          __typename
          id
          prompt
          entryTitle
          entryBody
          journalId
          journal {
            __typename
            id
            name
            entries {
              __typename
              nextToken
            }
            currentStreak
            longestStreak
            createdOn
            lastUpdate
            createdAt
            updatedAt
          }
          createdOn
          streakAtCreation
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteEntryMutation>response.data.deleteEntry;
  }
  async GetJournal(id: string): Promise<GetJournalQuery> {
    const statement = `query GetJournal($id: ID!) {
        getJournal(id: $id) {
          __typename
          id
          name
          entries {
            __typename
            items {
              __typename
              id
              prompt
              entryTitle
              entryBody
              journalId
              createdOn
              streakAtCreation
              createdAt
              updatedAt
            }
            nextToken
          }
          currentStreak
          longestStreak
          createdOn
          lastUpdate
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetJournalQuery>response.data.getJournal;
  }
  async ListJournals(
    filter?: ModelJournalFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListJournalsQuery> {
    const statement = `query ListJournals($filter: ModelJournalFilterInput, $limit: Int, $nextToken: String) {
        listJournals(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            entries {
              __typename
              nextToken
            }
            currentStreak
            longestStreak
            createdOn
            lastUpdate
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListJournalsQuery>response.data.listJournals;
  }
  async GetEntry(id: string): Promise<GetEntryQuery> {
    const statement = `query GetEntry($id: ID!) {
        getEntry(id: $id) {
          __typename
          id
          prompt
          entryTitle
          entryBody
          journalId
          journal {
            __typename
            id
            name
            entries {
              __typename
              nextToken
            }
            currentStreak
            longestStreak
            createdOn
            lastUpdate
            createdAt
            updatedAt
          }
          createdOn
          streakAtCreation
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetEntryQuery>response.data.getEntry;
  }
  async ListEntries(
    filter?: ModelEntryFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListEntriesQuery> {
    const statement = `query ListEntries($filter: ModelEntryFilterInput, $limit: Int, $nextToken: String) {
        listEntries(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            prompt
            entryTitle
            entryBody
            journalId
            journal {
              __typename
              id
              name
              currentStreak
              longestStreak
              createdOn
              lastUpdate
              createdAt
              updatedAt
            }
            createdOn
            streakAtCreation
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListEntriesQuery>response.data.listEntries;
  }
  OnCreateJournalListener: Observable<
    SubscriptionResponse<OnCreateJournalSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateJournal {
        onCreateJournal {
          __typename
          id
          name
          entries {
            __typename
            items {
              __typename
              id
              prompt
              entryTitle
              entryBody
              journalId
              createdOn
              streakAtCreation
              createdAt
              updatedAt
            }
            nextToken
          }
          currentStreak
          longestStreak
          createdOn
          lastUpdate
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateJournalSubscription>>;

  OnUpdateJournalListener: Observable<
    SubscriptionResponse<OnUpdateJournalSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateJournal {
        onUpdateJournal {
          __typename
          id
          name
          entries {
            __typename
            items {
              __typename
              id
              prompt
              entryTitle
              entryBody
              journalId
              createdOn
              streakAtCreation
              createdAt
              updatedAt
            }
            nextToken
          }
          currentStreak
          longestStreak
          createdOn
          lastUpdate
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateJournalSubscription>>;

  OnDeleteJournalListener: Observable<
    SubscriptionResponse<OnDeleteJournalSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteJournal {
        onDeleteJournal {
          __typename
          id
          name
          entries {
            __typename
            items {
              __typename
              id
              prompt
              entryTitle
              entryBody
              journalId
              createdOn
              streakAtCreation
              createdAt
              updatedAt
            }
            nextToken
          }
          currentStreak
          longestStreak
          createdOn
          lastUpdate
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteJournalSubscription>>;

  OnCreateEntryListener: Observable<
    SubscriptionResponse<OnCreateEntrySubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateEntry {
        onCreateEntry {
          __typename
          id
          prompt
          entryTitle
          entryBody
          journalId
          journal {
            __typename
            id
            name
            entries {
              __typename
              nextToken
            }
            currentStreak
            longestStreak
            createdOn
            lastUpdate
            createdAt
            updatedAt
          }
          createdOn
          streakAtCreation
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateEntrySubscription>>;

  OnUpdateEntryListener: Observable<
    SubscriptionResponse<OnUpdateEntrySubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateEntry {
        onUpdateEntry {
          __typename
          id
          prompt
          entryTitle
          entryBody
          journalId
          journal {
            __typename
            id
            name
            entries {
              __typename
              nextToken
            }
            currentStreak
            longestStreak
            createdOn
            lastUpdate
            createdAt
            updatedAt
          }
          createdOn
          streakAtCreation
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateEntrySubscription>>;

  OnDeleteEntryListener: Observable<
    SubscriptionResponse<OnDeleteEntrySubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteEntry {
        onDeleteEntry {
          __typename
          id
          prompt
          entryTitle
          entryBody
          journalId
          journal {
            __typename
            id
            name
            entries {
              __typename
              nextToken
            }
            currentStreak
            longestStreak
            createdOn
            lastUpdate
            createdAt
            updatedAt
          }
          createdOn
          streakAtCreation
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteEntrySubscription>>;
}
