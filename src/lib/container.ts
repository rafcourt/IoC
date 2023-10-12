import { BindingMap } from "./binding";
class Container {
    public bind(interfaceIdentifier: any, classDef: any) {
        BindingMap.add(interfaceIdentifier, classDef);
    }

    public get(interfaceIdentifier: string){
        /**
         * return a new instance of the class bound to the interface
         * get the all of the args from the Interface
         */
        return BindingMap.get(interfaceIdentifier);
    }
};

export { Container } 
