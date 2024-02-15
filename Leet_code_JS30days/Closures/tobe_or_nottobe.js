/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return {
        toBe: (another)=>{
            if (val !== another) throw new Error("Not Equal");
            else return true;
        },
        notToBe: (another)=>{
            if (val === another) throw new Error("Equal");
            else return true
        }
    };
};