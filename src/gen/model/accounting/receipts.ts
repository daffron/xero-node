/**
 * Accounting API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.0.2
 * Contact: api@xero.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Receipt } from './receipt';

export class Receipts {
    'receipts'?: Array<Receipt>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "receipts",
            "baseName": "Receipts",
            "type": "Array<Receipt>"
        }    ];

    static getAttributeTypeMap() {
        return Receipts.attributeTypeMap;
    }
}
