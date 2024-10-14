import { UseMutationResult } from "@tanstack/react-query";
import { CreateTokenSchema } from "@/core/schemas/create-token-schema";

export namespace UseCreateToken {
  export type Params = {
    data: CreateTokenSchema
  }
  export type ReturnType = UseMutationResult<
    {
      transactionHash: string
      transactionUrl: string
      owner: string
    },
    Error,
    Params
  >
  export type FunctionType = () => ReturnType
}