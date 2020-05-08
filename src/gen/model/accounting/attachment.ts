/**
 * Accounting API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.1.2
 * Contact: api@xero.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export class Attachment {
    /**
    * Unique ID for the file
    */
    'attachmentID'?: string;
    /**
    * Name of the file
    */
    'fileName'?: string;
    /**
    * URL to the file on xero.com
    */
    'url'?: string;
    /**
    * Type of file
    */
    'mimeType'?: string;
    /**
    * Length of the file content
    */
    'contentLength'?: number;
    /**
    * Include the file with the online invoice
    */
    'includeOnline'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "attachmentID",
            "baseName": "AttachmentID",
            "type": "string"
        },
        {
            "name": "fileName",
            "baseName": "FileName",
            "type": "string"
        },
        {
            "name": "url",
            "baseName": "Url",
            "type": "string"
        },
        {
            "name": "mimeType",
            "baseName": "MimeType",
            "type": "string"
        },
        {
            "name": "contentLength",
            "baseName": "ContentLength",
            "type": "number"
        },
        {
            "name": "includeOnline",
            "baseName": "IncludeOnline",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return Attachment.attributeTypeMap;
    }
}

