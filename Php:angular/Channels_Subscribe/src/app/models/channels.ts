import { Subscribers } from "./subscribers";

export interface Channels {
    id? : number;
    ownerId : number;
    name : string;
    description: string;
    subscribers : Subscribers[];
}