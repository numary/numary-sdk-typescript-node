/**
 * Ledger API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.2.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Transaction } from './Transaction';
import { HttpFile } from '../http/http';

export class ScriptResult {
    'details'?: string;
    'errorCode'?: ScriptResultErrorCodeEnum;
    'errorMessage'?: string;
    'transaction'?: Transaction;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "details",
            "baseName": "details",
            "type": "string",
            "format": ""
        },
        {
            "name": "errorCode",
            "baseName": "error_code",
            "type": "ScriptResultErrorCodeEnum",
            "format": ""
        },
        {
            "name": "errorMessage",
            "baseName": "error_message",
            "type": "string",
            "format": ""
        },
        {
            "name": "transaction",
            "baseName": "transaction",
            "type": "Transaction",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ScriptResult.attributeTypeMap;
    }

    public constructor() {
    }
}


export type ScriptResultErrorCodeEnum = "INTERNAL" | "INSUFFICIENT_FUND" | "COMPILATION_FAILED" | "NO_SCRIPT" ;

