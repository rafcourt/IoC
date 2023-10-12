import { getDependencies } from "./dependencies";

class Binding {
    private bindingMap: object;
    public constructor(){
        this.bindingMap = {};
    }
    public add(interfaceIdentifier: any, classDef: any){
        this.bindingMap[interfaceIdentifier] = classDef;
    }
    public get(interfaceIdentifier: string){
        const module = BindingMap[interfaceIdentifier];
        return new module(getDependencies(interfaceIdentifier))
    }
}

const BindingMap = new Binding();

export { BindingMap }