import { Address } from '././address';
import { Attachment } from '././attachment';
import { Balances } from '././balances';
import { BatchPaymentDetails } from '././batchPaymentDetails';
import { BrandingTheme } from '././brandingTheme';
import { ContactGroup } from '././contactGroup';
import { ContactPerson } from '././contactPerson';
import { CurrencyCode } from '././currencyCode';
import { PaymentTerm } from '././paymentTerm';
import { Phone } from '././phone';
import { SalesTrackingCategory } from '././salesTrackingCategory';
import { ValidationError } from '././validationError';

export class Contact {
    /**
    * Xero identifier
    */
    'contactID'?: string;
    /**
    * ID for the destination of a merged contact. Only returned when using paging or when fetching a contact by ContactId or ContactNumber.
    */
    'mergedToContactID'?: string;
    /**
    * This can be updated via the API only i.e. This field is read only on the Xero contact screen, used to identify contacts in external systems (max length = 50). If the Contact Number is used, this is displayed as Contact Code in the Contacts UI in Xero.
    */
    'contactNumber'?: string;
    /**
    * A user defined account number. This can be updated via the API and the Xero UI (max length = 50)
    */
    'accountNumber'?: string;
    /**
    * Current status of a contact – see contact status types
    */
    'contactStatus'?: Contact.ContactStatusEnum;
    /**
    * Full name of contact/organisation (max length = 255)
    */
    'name'?: string;
    /**
    * First name of contact person (max length = 255)
    */
    'firstName'?: string;
    /**
    * Last name of contact person (max length = 255)
    */
    'lastName'?: string;
    /**
    * Company registration number (max length = 50)
    */
    'companyNumber'?: string;
    /**
    * Email address of contact person (umlauts not supported) (max length  = 255)
    */
    'emailAddress'?: string;
    /**
    * Skype user name of contact
    */
    'skypeUserName'?: string;
    /**
    * See contact persons
    */
    'contactPersons'?: Array<ContactPerson>;
    /**
    * Bank account number of contact
    */
    'bankAccountDetails'?: string;
    /**
    * Tax number of contact – this is also known as the ABN (Australia), GST Number (New Zealand), VAT Number (UK) or Tax ID Number (US and global) in the Xero UI depending on which regionalized version of Xero you are using (max length = 50)
    */
    'taxNumber'?: string;
    /**
    * The tax type from TaxRates
    */
    'accountsReceivableTaxType'?: string;
    /**
    * The tax type from TaxRates
    */
    'accountsPayableTaxType'?: string;
    /**
    * Store certain address types for a contact – see address types
    */
    'addresses'?: Array<Address>;
    /**
    * Store certain phone types for a contact – see phone types
    */
    'phones'?: Array<Phone>;
    /**
    * true or false – Boolean that describes if a contact that has any AP  invoices entered against them. Cannot be set via PUT or POST – it is automatically set when an accounts payable invoice is generated against this contact.
    */
    'isSupplier'?: boolean;
    /**
    * true or false – Boolean that describes if a contact has any AR invoices entered against them. Cannot be set via PUT or POST – it is automatically set when an accounts receivable invoice is generated against this contact.
    */
    'isCustomer'?: boolean;
    /**
    * The default sales line amount type for a contact. Only available when summaryOnly parameter or paging is used, or when fetch by ContactId or ContactNumber.
    */
    'salesDefaultLineAmountType'?: Contact.SalesDefaultLineAmountTypeEnum;
    /**
    * The default purchases line amount type for a contact Only available when summaryOnly parameter or paging is used, or when fetch by ContactId or ContactNumber.
    */
    'purchasesDefaultLineAmountType'?: Contact.PurchasesDefaultLineAmountTypeEnum;
    'defaultCurrency'?: CurrencyCode;
    /**
    * Store XeroNetworkKey for contacts.
    */
    'xeroNetworkKey'?: string;
    /**
    * The default sales account code for contacts
    */
    'salesDefaultAccountCode'?: string;
    /**
    * The default purchases account code for contacts
    */
    'purchasesDefaultAccountCode'?: string;
    /**
    * The default sales tracking categories for contacts
    */
    'salesTrackingCategories'?: Array<SalesTrackingCategory>;
    /**
    * The default purchases tracking categories for contacts
    */
    'purchasesTrackingCategories'?: Array<SalesTrackingCategory>;
    /**
    * The name of the Tracking Category assigned to the contact under SalesTrackingCategories and PurchasesTrackingCategories
    */
    'trackingCategoryName'?: string;
    /**
    * The name of the Tracking Option assigned to the contact under SalesTrackingCategories and PurchasesTrackingCategories
    */
    'trackingCategoryOption'?: string;
    'paymentTerms'?: PaymentTerm;
    /**
    * UTC timestamp of last update to contact
    */
    'updatedDateUTC'?: Date;
    /**
    * Displays which contact groups a contact is included in
    */
    'contactGroups'?: Array<ContactGroup>;
    /**
    * Website address for contact (read only)
    */
    'website'?: string;
    'brandingTheme'?: BrandingTheme;
    'batchPayments'?: BatchPaymentDetails;
    /**
    * The default discount rate for the contact (read only)
    */
    'discount'?: number;
    'balances'?: Balances;
    /**
    * Displays array of attachments from the API
    */
    'attachments'?: Array<Attachment>;
    /**
    * A boolean to indicate if a contact has an attachment
    */
    'hasAttachments'?: boolean;
    /**
    * Displays validation errors returned from the API
    */
    'validationErrors'?: Array<ValidationError>;
    /**
    * A boolean to indicate if a contact has an validation errors
    */
    'hasValidationErrors'?: boolean;
    /**
    * Status of object
    */
    'statusAttributeString'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "contactID",
            "baseName": "ContactID",
            "type": "string"
        },
        {
            "name": "mergedToContactID",
            "baseName": "MergedToContactID",
            "type": "string"
        },
        {
            "name": "contactNumber",
            "baseName": "ContactNumber",
            "type": "string"
        },
        {
            "name": "accountNumber",
            "baseName": "AccountNumber",
            "type": "string"
        },
        {
            "name": "contactStatus",
            "baseName": "ContactStatus",
            "type": "Contact.ContactStatusEnum"
        },
        {
            "name": "name",
            "baseName": "Name",
            "type": "string"
        },
        {
            "name": "firstName",
            "baseName": "FirstName",
            "type": "string"
        },
        {
            "name": "lastName",
            "baseName": "LastName",
            "type": "string"
        },
        {
            "name": "companyNumber",
            "baseName": "CompanyNumber",
            "type": "string"
        },
        {
            "name": "emailAddress",
            "baseName": "EmailAddress",
            "type": "string"
        },
        {
            "name": "skypeUserName",
            "baseName": "SkypeUserName",
            "type": "string"
        },
        {
            "name": "contactPersons",
            "baseName": "ContactPersons",
            "type": "Array<ContactPerson>"
        },
        {
            "name": "bankAccountDetails",
            "baseName": "BankAccountDetails",
            "type": "string"
        },
        {
            "name": "taxNumber",
            "baseName": "TaxNumber",
            "type": "string"
        },
        {
            "name": "accountsReceivableTaxType",
            "baseName": "AccountsReceivableTaxType",
            "type": "string"
        },
        {
            "name": "accountsPayableTaxType",
            "baseName": "AccountsPayableTaxType",
            "type": "string"
        },
        {
            "name": "addresses",
            "baseName": "Addresses",
            "type": "Array<Address>"
        },
        {
            "name": "phones",
            "baseName": "Phones",
            "type": "Array<Phone>"
        },
        {
            "name": "isSupplier",
            "baseName": "IsSupplier",
            "type": "boolean"
        },
        {
            "name": "isCustomer",
            "baseName": "IsCustomer",
            "type": "boolean"
        },
        {
            "name": "salesDefaultLineAmountType",
            "baseName": "SalesDefaultLineAmountType",
            "type": "Contact.SalesDefaultLineAmountTypeEnum"
        },
        {
            "name": "purchasesDefaultLineAmountType",
            "baseName": "PurchasesDefaultLineAmountType",
            "type": "Contact.PurchasesDefaultLineAmountTypeEnum"
        },
        {
            "name": "defaultCurrency",
            "baseName": "DefaultCurrency",
            "type": "CurrencyCode"
        },
        {
            "name": "xeroNetworkKey",
            "baseName": "XeroNetworkKey",
            "type": "string"
        },
        {
            "name": "salesDefaultAccountCode",
            "baseName": "SalesDefaultAccountCode",
            "type": "string"
        },
        {
            "name": "purchasesDefaultAccountCode",
            "baseName": "PurchasesDefaultAccountCode",
            "type": "string"
        },
        {
            "name": "salesTrackingCategories",
            "baseName": "SalesTrackingCategories",
            "type": "Array<SalesTrackingCategory>"
        },
        {
            "name": "purchasesTrackingCategories",
            "baseName": "PurchasesTrackingCategories",
            "type": "Array<SalesTrackingCategory>"
        },
        {
            "name": "trackingCategoryName",
            "baseName": "TrackingCategoryName",
            "type": "string"
        },
        {
            "name": "trackingCategoryOption",
            "baseName": "TrackingCategoryOption",
            "type": "string"
        },
        {
            "name": "paymentTerms",
            "baseName": "PaymentTerms",
            "type": "PaymentTerm"
        },
        {
            "name": "updatedDateUTC",
            "baseName": "UpdatedDateUTC",
            "type": "Date"
        },
        {
            "name": "contactGroups",
            "baseName": "ContactGroups",
            "type": "Array<ContactGroup>"
        },
        {
            "name": "website",
            "baseName": "Website",
            "type": "string"
        },
        {
            "name": "brandingTheme",
            "baseName": "BrandingTheme",
            "type": "BrandingTheme"
        },
        {
            "name": "batchPayments",
            "baseName": "BatchPayments",
            "type": "BatchPaymentDetails"
        },
        {
            "name": "discount",
            "baseName": "Discount",
            "type": "number"
        },
        {
            "name": "balances",
            "baseName": "Balances",
            "type": "Balances"
        },
        {
            "name": "attachments",
            "baseName": "Attachments",
            "type": "Array<Attachment>"
        },
        {
            "name": "hasAttachments",
            "baseName": "HasAttachments",
            "type": "boolean"
        },
        {
            "name": "validationErrors",
            "baseName": "ValidationErrors",
            "type": "Array<ValidationError>"
        },
        {
            "name": "hasValidationErrors",
            "baseName": "HasValidationErrors",
            "type": "boolean"
        },
        {
            "name": "statusAttributeString",
            "baseName": "StatusAttributeString",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return Contact.attributeTypeMap;
    }
}

export namespace Contact {
    export enum ContactStatusEnum {
        ACTIVE = <any> 'ACTIVE',
        ARCHIVED = <any> 'ARCHIVED',
        GDPRREQUEST = <any> 'GDPRREQUEST'
    }
    export enum SalesDefaultLineAmountTypeEnum {
        INCLUSIVE = <any> 'INCLUSIVE',
        EXCLUSIVE = <any> 'EXCLUSIVE',
        NONE = <any> 'NONE'
    }
    export enum PurchasesDefaultLineAmountTypeEnum {
        INCLUSIVE = <any> 'INCLUSIVE',
        EXCLUSIVE = <any> 'EXCLUSIVE',
        NONE = <any> 'NONE'
    }
}
