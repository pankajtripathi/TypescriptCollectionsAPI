var md5 = require('md5');

/**
 * 
 * 
 * @export
 * @class Algorithm
 */
export class Algorithm{

    /**
     * 
     * 
     * @param {string} data
     * @returns {string}
     * 
     * @memberOf Algorithm
     */
    public static generateHashMD5(data:string):string{
        return md5(data);
    }

}