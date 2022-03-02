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

import { Posting } from './Posting';
import { HttpFile } from '../http/http';

export class Transaction {
    'metadata'?: { [key: string]: any; };
    'postings': Array<Posting>;
    'reference'?: string;
    'timestamp': Date;
    'txid': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "{ [key: string]: any; }",
            "format": ""
        },
        {
            "name": "postings",
            "baseName": "postings",
            "type": "Array<Posting>",
            "format": ""
        },
        {
            "name": "reference",
            "baseName": "reference",
            "type": "string",
            "format": ""
        },
        {
            "name": "timestamp",
            "baseName": "timestamp",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "txid",
            "baseName": "txid",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Transaction.attributeTypeMap;
    }

    public constructor() {
    }
}

