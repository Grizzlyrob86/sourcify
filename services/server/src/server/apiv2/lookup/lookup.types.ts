import { Request } from "express";
import { Pagination, TypedResponse } from "../../types";
import { Match } from "../types";

export type ListContractsRequest = Request & {
  params: {
    chainId: string;
  };
};

export type ListContractsResponse = TypedResponse<{
  results: VerifiedContractMinimal[];
  pagination: Pagination;
}>;

export interface VerifiedContractMinimal {
  match: Match;
  creationMatch: Match;
  runtimeMatch: Match;
  chainId: string;
  address: string;
  verifiedAt: string;
}
