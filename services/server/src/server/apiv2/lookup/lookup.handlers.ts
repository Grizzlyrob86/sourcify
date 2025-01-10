import { ListContractsRequest, ListContractsResponse } from "./lookup.types";
import { Response, Request, NextFunction } from "express";

export async function listContractsEndpoint(
  req: ListContractsRequest,
  res: ListContractsResponse,
): Promise<ListContractsResponse> {
  const chainId = req.params.chainId;

  // todo
  return res.status(200).json({});
}
