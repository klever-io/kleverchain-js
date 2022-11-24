/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { FileDescriptorProto } from "ts-proto-descriptors";

export const protobufPackage = "google.protobuf";

/**
 * `Any` contains an arbitrary serialized protocol buffer message along with a
 * URL that describes the type of the serialized message.
 *
 * Protobuf library provides support to pack/unpack Any values in the form
 * of utility functions or additional generated methods of the Any type.
 *
 * Example 1: Pack and unpack a message in C++.
 *
 *     Foo foo = ...;
 *     Any any;
 *     any.PackFrom(foo);
 *     ...
 *     if (any.UnpackTo(&foo)) {
 *       ...
 *     }
 *
 * Example 2: Pack and unpack a message in Java.
 *
 *     Foo foo = ...;
 *     Any any = Any.pack(foo);
 *     ...
 *     if (any.is(Foo.class)) {
 *       foo = any.unpack(Foo.class);
 *     }
 *
 *  Example 3: Pack and unpack a message in Python.
 *
 *     foo = Foo(...)
 *     any = Any()
 *     any.Pack(foo)
 *     ...
 *     if any.Is(Foo.DESCRIPTOR):
 *       any.Unpack(foo)
 *       ...
 *
 *  Example 4: Pack and unpack a message in Go
 *
 *      foo := &pb.Foo{...}
 *      any, err := anypb.New(foo)
 *      if err != nil {
 *        ...
 *      }
 *      ...
 *      foo := &pb.Foo{}
 *      if err := any.UnmarshalTo(foo); err != nil {
 *        ...
 *      }
 *
 * The pack methods provided by protobuf library will by default use
 * 'type.googleapis.com/full.type.name' as the type URL and the unpack
 * methods only use the fully qualified type name after the last '/'
 * in the type URL, for example "foo.bar.com/x/y.z" will yield type
 * name "y.z".
 *
 * JSON
 * ====
 * The JSON representation of an `Any` value uses the regular
 * representation of the deserialized, embedded message, with an
 * additional field `@type` which contains the type URL. Example:
 *
 *     package google.profile;
 *     message Person {
 *       string first_name = 1;
 *       string last_name = 2;
 *     }
 *
 *     {
 *       "@type": "type.googleapis.com/google.profile.Person",
 *       "firstName": <string>,
 *       "lastName": <string>
 *     }
 *
 * If the embedded message type is well-known and has a custom JSON
 * representation, that representation will be embedded adding a field
 * `value` which holds the custom JSON in addition to the `@type`
 * field. Example (for message [google.protobuf.Duration][]):
 *
 *     {
 *       "@type": "type.googleapis.com/google.protobuf.Duration",
 *       "value": "1.212s"
 *     }
 */
export interface Any {
  /**
   * A URL/resource name that uniquely identifies the type of the serialized
   * protocol buffer message. This string must contain at least
   * one "/" character. The last segment of the URL's path must represent
   * the fully qualified name of the type (as in
   * `path/google.protobuf.Duration`). The name should be in a canonical form
   * (e.g., leading "." is not accepted).
   *
   * In practice, teams usually precompile into the binary all types that they
   * expect it to use in the context of Any. However, for URLs which use the
   * scheme `http`, `https`, or no scheme, one can optionally set up a type
   * server that maps type URLs to message definitions as follows:
   *
   * * If no scheme is provided, `https` is assumed.
   * * An HTTP GET on the URL must yield a [google.protobuf.Type][]
   *   value in binary format, or produce an error.
   * * Applications are allowed to cache lookup results based on the
   *   URL, or have them precompiled into a binary to avoid any
   *   lookup. Therefore, binary compatibility needs to be preserved
   *   on changes to types. (Use versioned type names to manage
   *   breaking changes.)
   *
   * Note: this functionality is not currently available in the official
   * protobuf release, and it is not used for type URLs beginning with
   * type.googleapis.com.
   *
   * Schemes other than `http`, `https` (or the empty scheme) might be
   * used with implementation specific semantics.
   */
  type_url?: string;
  /** Must be a valid serialized protocol buffer of the above specified type. */
  value?: Uint8Array;
}

function createBaseAny(): Any {
  return { type_url: "", value: new Uint8Array() };
}

export const Any = {
  encode(message: Any, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type_url !== undefined && message.type_url !== "") {
      writer.uint32(10).string(message.type_url);
    }
    if (message.value !== undefined && message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Any {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAny();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type_url = reader.string();
          break;
        case 2:
          message.value = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Any {
    return {
      type_url: isSet(object.type_url) ? String(object.type_url) : "",
      value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(),
    };
  },

  toJSON(message: Any): unknown {
    const obj: any = {};
    message.type_url !== undefined && (obj.type_url = message.type_url);
    message.value !== undefined &&
      (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Any>, I>>(object: I): Any {
    const message = createBaseAny();
    message.type_url = object.type_url ?? "";
    message.value = object.value ?? new Uint8Array();
    return message;
  },
};

type ProtoMetaMessageOptions = {
  options?: { [key: string]: any };
  fields?: { [key: string]: { [key: string]: any } };
  oneof?: { [key: string]: { [key: string]: any } };
  nested?: { [key: string]: ProtoMetaMessageOptions };
};

export interface ProtoMetadata {
  fileDescriptor: FileDescriptorProto;
  references: { [key: string]: any };
  dependencies?: ProtoMetadata[];
  options?: {
    options?: { [key: string]: any };
    services?: {
      [key: string]: { options?: { [key: string]: any }; methods?: { [key: string]: { [key: string]: any } } };
    };
    messages?: { [key: string]: ProtoMetaMessageOptions };
    enums?: { [key: string]: { options?: { [key: string]: any }; values?: { [key: string]: { [key: string]: any } } } };
  };
}

export const protoMetadata: ProtoMetadata = {
  fileDescriptor: FileDescriptorProto.fromPartial({
    "name": "google/protobuf/any.proto",
    "package": "google.protobuf",
    "dependency": [],
    "publicDependency": [],
    "weakDependency": [],
    "messageType": [{
      "name": "Any",
      "field": [{
        "name": "type_url",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "type_url",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "value",
        "number": 2,
        "label": 1,
        "type": 12,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "value",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }],
    "enumType": [],
    "service": [],
    "extension": [],
    "options": {
      "javaPackage": "com.google.protobuf",
      "javaOuterClassname": "AnyProto",
      "javaMultipleFiles": true,
      "javaGenerateEqualsAndHash": false,
      "javaStringCheckUtf8": false,
      "optimizeFor": 1,
      "goPackage": "google.golang.org/protobuf/types/known/anypb",
      "ccGenericServices": false,
      "javaGenericServices": false,
      "pyGenericServices": false,
      "phpGenericServices": false,
      "deprecated": false,
      "ccEnableArenas": false,
      "objcClassPrefix": "GPB",
      "csharpNamespace": "Google.Protobuf.WellKnownTypes",
      "swiftPrefix": "",
      "phpClassPrefix": "",
      "phpNamespace": "",
      "phpMetadataNamespace": "",
      "rubyPackage": "",
      "uninterpretedOption": [],
    },
    "sourceCodeInfo": {
      "location": [{
        "path": [4, 0],
        "span": [124, 0, 157, 1],
        "leadingComments":
          ' `Any` contains an arbitrary serialized protocol buffer message along with a\n URL that describes the type of the serialized message.\n\n Protobuf library provides support to pack/unpack Any values in the form\n of utility functions or additional generated methods of the Any type.\n\n Example 1: Pack and unpack a message in C++.\n\n     Foo foo = ...;\n     Any any;\n     any.PackFrom(foo);\n     ...\n     if (any.UnpackTo(&foo)) {\n       ...\n     }\n\n Example 2: Pack and unpack a message in Java.\n\n     Foo foo = ...;\n     Any any = Any.pack(foo);\n     ...\n     if (any.is(Foo.class)) {\n       foo = any.unpack(Foo.class);\n     }\n\n  Example 3: Pack and unpack a message in Python.\n\n     foo = Foo(...)\n     any = Any()\n     any.Pack(foo)\n     ...\n     if any.Is(Foo.DESCRIPTOR):\n       any.Unpack(foo)\n       ...\n\n  Example 4: Pack and unpack a message in Go\n\n      foo := &pb.Foo{...}\n      any, err := anypb.New(foo)\n      if err != nil {\n        ...\n      }\n      ...\n      foo := &pb.Foo{}\n      if err := any.UnmarshalTo(foo); err != nil {\n        ...\n      }\n\n The pack methods provided by protobuf library will by default use\n \'type.googleapis.com/full.type.name\' as the type URL and the unpack\n methods only use the fully qualified type name after the last \'/\'\n in the type URL, for example "foo.bar.com/x/y.z" will yield type\n name "y.z".\n\n\n JSON\n ====\n The JSON representation of an `Any` value uses the regular\n representation of the deserialized, embedded message, with an\n additional field `@type` which contains the type URL. Example:\n\n     package google.profile;\n     message Person {\n       string first_name = 1;\n       string last_name = 2;\n     }\n\n     {\n       "@type": "type.googleapis.com/google.profile.Person",\n       "firstName": <string>,\n       "lastName": <string>\n     }\n\n If the embedded message type is well-known and has a custom JSON\n representation, that representation will be embedded adding a field\n `value` which holds the custom JSON in addition to the `@type`\n field. Example (for message [google.protobuf.Duration][]):\n\n     {\n       "@type": "type.googleapis.com/google.protobuf.Duration",\n       "value": "1.212s"\n     }\n\n',
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 0, 2, 0],
        "span": [153, 2, 22],
        "leadingComments":
          ' A URL/resource name that uniquely identifies the type of the serialized\n protocol buffer message. This string must contain at least\n one "/" character. The last segment of the URL\'s path must represent\n the fully qualified name of the type (as in\n `path/google.protobuf.Duration`). The name should be in a canonical form\n (e.g., leading "." is not accepted).\n\n In practice, teams usually precompile into the binary all types that they\n expect it to use in the context of Any. However, for URLs which use the\n scheme `http`, `https`, or no scheme, one can optionally set up a type\n server that maps type URLs to message definitions as follows:\n\n * If no scheme is provided, `https` is assumed.\n * An HTTP GET on the URL must yield a [google.protobuf.Type][]\n   value in binary format, or produce an error.\n * Applications are allowed to cache lookup results based on the\n   URL, or have them precompiled into a binary to avoid any\n   lookup. Therefore, binary compatibility needs to be preserved\n   on changes to types. (Use versioned type names to manage\n   breaking changes.)\n\n Note: this functionality is not currently available in the official\n protobuf release, and it is not used for type URLs beginning with\n type.googleapis.com.\n\n Schemes other than `http`, `https` (or the empty scheme) might be\n used with implementation specific semantics.\n\n',
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 0, 2, 1],
        "span": [156, 2, 18],
        "leadingComments": " Must be a valid serialized protocol buffer of the above specified type.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }],
    },
    "syntax": "proto3",
  }),
  references: { ".google.protobuf.Any": Any },
  dependencies: [],
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

function bytesFromBase64(b64: string): Uint8Array {
  if (globalThis.Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (globalThis.Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
