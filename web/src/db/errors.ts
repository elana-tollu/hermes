export class NotFoundError extends Error {
    constructor(entity: string, id: string) {
      super(`Entity not found by Id: ${entity} ${id}`); 
      this.name = "NotFoundError"; 
    }
  }