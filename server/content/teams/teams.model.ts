import { Request } from "express";

export interface ITeam {
        id: string;
        name: string;
        league: string,
        isActive: boolean
};


export interface IGetTeamReq extends Request { }
export interface IAddTeamReq extends Request { }
export interface IUpdateTeamReq extends Request { }
export interface IDeleteTeamReq extends Request { }



