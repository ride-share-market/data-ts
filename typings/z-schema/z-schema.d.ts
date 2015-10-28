declare class ZSchema {
  validateSchema(schema: any): boolean;
  validate(json: string, schema: any): void;
  getLastErrors(): any;
}

declare module 'z-schema' {
  export = ZSchema
}
