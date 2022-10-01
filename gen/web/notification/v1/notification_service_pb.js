// @generated by protoc-gen-es v0.1.1 with parameter "target=js+dts"
// @generated from file notification/v1/notification_service.proto (package notification.v1, syntax proto3)
/* eslint-disable */
/* @ts-nocheck */

import {proto3} from "@bufbuild/protobuf";

/**
 * @generated from enum notification.v1.Provider
 */
export const Provider = proto3.makeEnum(
  "notification.v1.Provider",
  [
    {no: 0, name: "PROVIDER_UNSPECIFIED", localName: "UNSPECIFIED"},
    {no: 1, name: "PROVIDER_SLACK", localName: "SLACK"},
  ],
);

/**
 * @generated from message notification.v1.NotifyRequest
 */
export const NotifyRequest = proto3.makeMessageType(
  "notification.v1.NotifyRequest",
  () => [
    { no: 1, name: "information", kind: "message", T: NotifyRequest_Information },
  ],
);

/**
 * @generated from message notification.v1.NotifyRequest.Information
 */
export const NotifyRequest_Information = proto3.makeMessageType(
  "notification.v1.NotifyRequest.Information",
  () => [
    { no: 1, name: "content", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "destinations", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 3, name: "provider", kind: "enum", T: proto3.getEnumType(Provider) },
  ],
  {localName: "NotifyRequest_Information"},
);

/**
 * @generated from message notification.v1.NotifyResponse
 */
export const NotifyResponse = proto3.makeMessageType(
  "notification.v1.NotifyResponse",
  [],
);
