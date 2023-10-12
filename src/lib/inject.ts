import { setDependencies } from "./dependencies";
/**
 * capture the constructor parameters for the target 
 */
function inject(interfaceIdentifier:string){
    return (target: any, key: any, paramIndex: number) => {
        setDependencies(interfaceIdentifier, target, paramIndex);
    }
}

export { inject } 
