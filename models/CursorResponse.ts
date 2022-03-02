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

import { Cursor } from './Cursor';
import { HttpFile } from '../http/http';

export class CursorResponse {
    'cursor'?: Cursor;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "cursor",
            "baseName": "cursor",
            "type": "Cursor",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CursorResponse.attributeTypeMap;
    }

    public constructor() {
    }
}
