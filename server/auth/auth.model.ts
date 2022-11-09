import { Request } from "express";

export interface IUser {
        id: string;
        name: string;
        pwd: string;
        email: string;
        isActive: boolean;
        createdBy: string;
        _created: string;
        _updated: string;
        _deleted: string;
    
};


export interface IGetUserReq extends Request { }
export interface IAddUserReq extends Request { }
export interface IUpdateUserReq extends Request { }
export interface IDeleteUserReq extends Request { }



