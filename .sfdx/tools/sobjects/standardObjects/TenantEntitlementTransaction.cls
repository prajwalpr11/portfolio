// This file is generated as an Apex representation of the
//     corresponding sObject and its fields.
// This read-only file is used by the Apex Language Server to
//     provide code smartness, and is deleted each time you
//     refresh your sObject definitions.
// To edit your sObjects and their fields, edit the corresponding
//     .object-meta.xml and .field-meta.xml files.

global class TenantEntitlementTransaction {
    global Id Id;
    global Boolean IsDeleted;
    global Datetime CreatedDate;
    global User CreatedBy;
    global Id CreatedById;
    global Datetime LastModifiedDate;
    global User LastModifiedBy;
    global Id LastModifiedById;
    global Datetime SystemModstamp;
    global String EntitlementCardDefDevlName;
    global Double Quantity;
    global Datetime StartDate;
    global Datetime EndDate;
    global String EntitlementTransactionType;
    global String EntitlementTransactionSubType;
    global TenantEntitlementTransaction RelatedTntEntitlementTrxn;
    global Id RelatedTntEntitlementTrxnId;
    global Organization MgmtOrg;
    global Id MgmtOrgId;
    global String MgmtOrgOrder;
    global String MgmtOrgOrderItem;
    global String MgmtOrgContract;
    global String MgmtOrgEntitlementTransaction;
    global String MgmtOrgEntitlementSchedule;
    global String MgmtOrgRelatedEntitlementTrxn;
    global String MgmtEntitlementTrxn;
    global String UsageTypeDef;
    global String UsageSubType0;
    global String UsageSubType1;
    global String UsageSubType2;
    global Double Multiplier;
    global Double Unit;
    global Double RawQuantity;
    global String BusinessEnvType;
    global List<TenantEntitlementTransaction> RelatedTntEntitlementTrxns;
    global List<FlowExecutionErrorEvent> ContextRecord;
    global List<FlowRecordRelation> RelatedRecord;

    global TenantEntitlementTransaction () 
    {
    }
}