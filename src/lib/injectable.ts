function injectable(){
  return function <T extends { new (...args: any[]): {} }>(target:T) {
    /**
     * To avoid duplicate injection, 
     * check here that type has not been made injectable already
     */
      
    return target;
  };
}

export { injectable } 

