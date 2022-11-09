
import { execute } from "../database/mysql.connector";
import bcrypt from "bcryptjs"

/**
 * signup new user base for testing
 */

// export const insertTeam = async (team: ITeam) => {
//     const result = await execute<{ affectedRows: number }>(TeamQueries.AddTeam, [
//         team.name,
//         team.league
//     ]);
//     return result.affectedRows > 0;
// };

export const encryptPassword = async (pwd: string) => {
    const salt: Promise<string> = bcrypt.genSalt(10);
    await salt.then((salted)=>{
        console.log(salted);
        return bcrypt.hash(pwd, salted);
    });
};


export const comparePassword = async (password: string, receivedPassword: string) => {
    return await bcrypt.compare(password, receivedPassword)
};