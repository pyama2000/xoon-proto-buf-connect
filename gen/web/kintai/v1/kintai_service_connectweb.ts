// @generated by protoc-gen-connect-web v0.2.1 with parameter "target=ts"
// @generated from file kintai/v1/kintai_service.proto (package kintai.v1, syntax proto3)
/* eslint-disable */
/* @ts-nocheck */

import {FinishRequest, FinishResponse, StartRequest, StartResponse} from "./kintai_service_pb.js";
import {MethodKind} from "@bufbuild/protobuf";

/**
 * @generated from service kintai.v1.KintaiService
 */
export const KintaiService = {
  typeName: "kintai.v1.KintaiService",
  methods: {
    /**
     * @generated from rpc kintai.v1.KintaiService.Start
     */
    start: {
      name: "Start",
      I: StartRequest,
      O: StartResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc kintai.v1.KintaiService.Finish
     */
    finish: {
      name: "Finish",
      I: FinishRequest,
      O: FinishResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;
