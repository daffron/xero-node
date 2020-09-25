/**
 * Xero Payroll NZ
 * This is the Xero Payroll API for orgs in the NZ region.
 *
 * The version of the OpenAPI document: 2.3.2
 * Contact: api@xero.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { EmployeeLeave } from '././employeeLeave';
import { Pagination } from '././pagination';
import { Problem } from '././problem';

export class EmployeeLeaves {
    'pagination'?: Pagination;
    'problem'?: Problem;
    'leave'?: Array<EmployeeLeave>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "pagination",
            "baseName": "pagination",
            "type": "Pagination"
        },
        {
            "name": "problem",
            "baseName": "problem",
            "type": "Problem"
        },
        {
            "name": "leave",
            "baseName": "leave",
            "type": "Array<EmployeeLeave>"
        }    ];

    static getAttributeTypeMap() {
        return EmployeeLeaves.attributeTypeMap;
    }
}

