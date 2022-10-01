// @generated by protoc-gen-es v0.1.1 with parameter "target=ts"
// @generated from file kintai/v1/kintai_service.proto (package kintai.v1, syntax proto3)
/* eslint-disable */
/* @ts-nocheck */

import type {BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage} from "@bufbuild/protobuf";
import {Message, proto3, StringValue} from "@bufbuild/protobuf";

/**
 * @generated from message kintai.v1.StartRequest
 */
export class StartRequest extends Message<StartRequest> {
  /**
   * @generated from field: kintai.v1.StartRequest.Place place = 1;
   */
  place = StartRequest_Place.UNSPECIFIED;

  /**
   * @generated from field: repeated google.protobuf.StringValue slack_channel_names = 2 [deprecated = true];
   * @deprecated
   */
  slackChannelNames: StringValue[] = [];

  /**
   * @generated from field: repeated google.protobuf.StringValue slack_channels = 3;
   */
  slackChannels: StringValue[] = [];

  constructor(data?: PartialMessage<StartRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "kintai.v1.StartRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "place", kind: "enum", T: proto3.getEnumType(StartRequest_Place) },
    { no: 2, name: "slack_channel_names", kind: "message", T: StringValue, repeated: true },
    { no: 3, name: "slack_channels", kind: "message", T: StringValue, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StartRequest {
    return new StartRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StartRequest {
    return new StartRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StartRequest {
    return new StartRequest().fromJsonString(jsonString, options);
  }

  static equals(a: StartRequest | PlainMessage<StartRequest> | undefined, b: StartRequest | PlainMessage<StartRequest> | undefined): boolean {
    return proto3.util.equals(StartRequest, a, b);
  }
}

/**
 * @generated from enum kintai.v1.StartRequest.Place
 */
export enum StartRequest_Place {
  /**
   * @generated from enum value: PLACE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: PLACE_HOME = 1;
   */
  HOME = 1,

  /**
   * @generated from enum value: PLACE_OFFICE = 2;
   */
  OFFICE = 2,
}
// Retrieve enum metadata with: proto3.getEnumType(StartRequest_Place)
proto3.util.setEnumType(StartRequest_Place, "kintai.v1.StartRequest.Place", [
  { no: 0, name: "PLACE_UNSPECIFIED" },
  { no: 1, name: "PLACE_HOME" },
  { no: 2, name: "PLACE_OFFICE" },
]);

/**
 * @generated from message kintai.v1.StartResponse
 */
export class StartResponse extends Message<StartResponse> {
  constructor(data?: PartialMessage<StartResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "kintai.v1.StartResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StartResponse {
    return new StartResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StartResponse {
    return new StartResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StartResponse {
    return new StartResponse().fromJsonString(jsonString, options);
  }

  static equals(a: StartResponse | PlainMessage<StartResponse> | undefined, b: StartResponse | PlainMessage<StartResponse> | undefined): boolean {
    return proto3.util.equals(StartResponse, a, b);
  }
}

/**
 * @generated from message kintai.v1.FinishRequest
 */
export class FinishRequest extends Message<FinishRequest> {
  /**
   * @generated from field: repeated google.protobuf.StringValue slack_channels = 1;
   */
  slackChannels: StringValue[] = [];

  /**
   * @generated from field: optional string content = 2;
   */
  content?: string;

  constructor(data?: PartialMessage<FinishRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "kintai.v1.FinishRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "slack_channels", kind: "message", T: StringValue, repeated: true },
    { no: 2, name: "content", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FinishRequest {
    return new FinishRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FinishRequest {
    return new FinishRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FinishRequest {
    return new FinishRequest().fromJsonString(jsonString, options);
  }

  static equals(a: FinishRequest | PlainMessage<FinishRequest> | undefined, b: FinishRequest | PlainMessage<FinishRequest> | undefined): boolean {
    return proto3.util.equals(FinishRequest, a, b);
  }
}

/**
 * @generated from message kintai.v1.FinishResponse
 */
export class FinishResponse extends Message<FinishResponse> {
  constructor(data?: PartialMessage<FinishResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "kintai.v1.FinishResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FinishResponse {
    return new FinishResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FinishResponse {
    return new FinishResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FinishResponse {
    return new FinishResponse().fromJsonString(jsonString, options);
  }

  static equals(a: FinishResponse | PlainMessage<FinishResponse> | undefined, b: FinishResponse | PlainMessage<FinishResponse> | undefined): boolean {
    return proto3.util.equals(FinishResponse, a, b);
  }
}
