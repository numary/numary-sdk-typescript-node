/**
 * Ledger API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Transaction } from './Transaction';
import { HttpFile } from '../http/http';

export class TransactionCursorAllOf {
    'data': Array<Transaction>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<Transaction>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TransactionCursorAllOf.attributeTypeMap;
    }

    public constructor() {
    }
}

