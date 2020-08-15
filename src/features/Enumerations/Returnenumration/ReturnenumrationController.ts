import { ReturnEnumeration } from "./Returnenumration";

import { Request, Response } from "express";

export class ReturnEnumerationController {
  /**
   * Cunstructeer
   *
   * - D - Dependency inversion with open-closed principle
   */
  constructor(private getEnumeration: ReturnEnumeration) {}

  /**
   * Here we execute the function that will return
   */
  async execute(request: Request, response: Response) {
    try {
      const enumereationRequest = await this.getEnumeration.handle({
        enumCode: request.body.enumCode,
        language: request.body.language,
      });
    } catch (error) {
      return response.status(200).json({
        result: null,
        error: error.message,
      });
    }
  }
}
