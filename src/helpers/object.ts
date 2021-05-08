export const accessToNestedProperty = (object: object, propertiesString: string): any => {
    const propertiesArray = propertiesString.split('.');
  
    let result: any = object;
    for (const property of propertiesArray) {
      if (result[property]) {
        result = result[property];
      } else {
        result = undefined;
        break;
      }
    }
  
    return result;
};
  