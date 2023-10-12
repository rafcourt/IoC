class Dependencies{
    private argsMap: object;

    public constructor(){
        this.argsMap = {};
    }

    public get(interfaceIdentifier: string){
        return this.argsMap[interfaceIdentifier];
    }

    public set(interfaceIdentifier: string, classDef: any, paramIndex: number){
        if(!this.argsMap[interfaceIdentifier]){
            this.argsMap[interfaceIdentifier] = [];
        }
        this.argsMap[interfaceIdentifier].splice(paramIndex, 0, classDef);
    }
}

const dependencies = new Dependencies();
function getDependencies(interfaceIdentifier: string){
    /**
     * Should be a recursive process
     */
    
    const deps = dependencies.get(interfaceIdentifier).map((classDef)=>new classDef());
    return deps;
}
function setDependencies(interfaceIdentifier: string, target: any, paramIndex: number){
    dependencies.set(interfaceIdentifier, target, paramIndex);
}

export { getDependencies, setDependencies }