import { execute } from "../../database/mysql.connector";

import { TeamQueries } from "./employees.queries";
import { ITeam } from "./employees.model";

/**
 * gets active teams
 */
 export const getEmployes = async () => {
    return execute<ITeam[]>(TeamQueries.GetTeams, []);
  };
  
  /**
   * gets a team based on id provided
   */
  export const getEployeeById = async (id: ITeam['id']) => {
    return execute<ITeam>(TeamQueries.getEployeeById, [id]);
  };
  
  /**
   * adds a new active team record
   */
  export const insertTeam = async (team: ITeam) => {
    const result = await execute<{ affectedRows: number }>(TeamQueries.AddTeam, [
      team.name,
      team.league
    ]);
    return result.affectedRows > 0;
  };
  
  /**
   * updates team information based on the id provided
   */
  export const updateTeam = async (team: ITeam) => {
    const result = await execute<{ affectedRows: number }>(TeamQueries.UpdateTeamById, [
      team.name,
      team.league,
      team.id
    ]);
    return result.affectedRows > 0;
  };
  
  /**
   * updates team information based on the id provided
   */
   export const deleteTeam = async (id: ITeam['id']) => {
    const result = await execute<{ affectedRows: number }>(TeamQueries.DeleteTeamById, [
      id
    ]);
    return result.affectedRows > 0;
  };