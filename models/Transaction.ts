/**
 * Ledger API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v1.7.0-beta.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Posting } from './Posting';
import { Volume } from './Volume';
import { HttpFile } from '../http/http';

export class Transaction {
    'postings': Array<Posting>;
    'reference'?: string;
    'metadata'?: { [key: string]: any; };
    'txid': number;
    'preCommitVolumes'?: { [key: string]: { [key: string]: Volume; }; };
    'postCommitVolumes'?: { [key: string]: { [key: string]: Volume; }; };

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
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
            "name": "metadata",
            "baseName": "metadata",
            "type": "{ [key: string]: any; }",
            "format": ""
        },
        {
            "name": "txid",
            "baseName": "txid",
            "type": "number",
            "format": ""
        },
        {
            "name": "preCommitVolumes",
            "baseName": "preCommitVolumes",
            "type": "{ [key: string]: { [key: string]: Volume; }; }",
            "format": ""
        },
        {
            "name": "postCommitVolumes",
            "baseName": "postCommitVolumes",
            "type": "{ [key: string]: { [key: string]: Volume; }; }",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Transaction.attributeTypeMap;
    }

    public constructor() {
    }
}

