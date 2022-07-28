export default class Utils {
    static shortenAddress(val: string) { 
        return val.slice(0,5)+"..."+val.slice(val.length-4); 
    }
    
}