// @generated by protoc-gen-es v0.1.1 with parameter "target=js+dts"
// @generated from file automation/v1/release_service.proto (package automation.v1, syntax proto3)
/* eslint-disable */
/* @ts-nocheck */

import {proto3, StringValue, Timestamp} from "@bufbuild/protobuf";

/**
 * @generated from message automation.v1.CreateReleasePRRequest
 */
export const CreateReleasePRRequest = proto3.makeMessageType(
  "automation.v1.CreateReleasePRRequest",
  () => [
    { no: 1, name: "repository", kind: "enum", T: proto3.getEnumType(CreateReleasePRRequest_Repository) },
    { no: 2, name: "last_release_time", kind: "message", T: Timestamp },
  ],
);

/**
 * @generated from enum automation.v1.CreateReleasePRRequest.Repository
 */
export const CreateReleasePRRequest_Repository = proto3.makeEnum(
  "automation.v1.CreateReleasePRRequest.Repository",
  [
    {no: 0, name: "REPOSITORY_UNSPECIFIED", localName: "UNSPECIFIED"},
    {no: 1, name: "REPOSITORY_EZ", localName: "EZ"},
    {no: 2, name: "REPOSITORY_EM", localName: "EM"},
    {no: 3, name: "REPOSITORY_EA", localName: "EA"},
    {no: 4, name: "REPOSITORY_FC", localName: "FC"},
    {no: 5, name: "REPOSITORY_PA", localName: "PA"},
    {no: 6, name: "REPOSITORY_FMC", localName: "FMC"},
  ],
);

/**
 * @generated from message automation.v1.CreateReleasePRResponse
 */
export const CreateReleasePRResponse = proto3.makeMessageType(
  "automation.v1.CreateReleasePRResponse",
  () => [
    { no: 1, name: "url", kind: "message", T: StringValue },
  ],
);
