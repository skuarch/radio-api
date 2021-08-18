import { ClientInfo } from "../models/clientInfo.model.js";

export const saveClientInfo = async (clientInfo) => {    
   const result = await ClientInfo.create(clientInfo);   
   return result.dataValues;
}
