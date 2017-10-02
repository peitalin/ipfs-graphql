import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
} from 'graphql';

/* eslint-disable max-len */
const SystemInfo = new GraphQLObjectType({
  name: 'CoreLogicSystemInfo',
  fields: () => ({
    instanceName: {
      type: GraphQLString,
      description: 'An instance identifier that can be used to assist with troubleshooting.',
    },
    requestDate: {
      type: GraphQLString,
      description: 'The date and time of the request in AEST',
    },
  }),
});

const SimpleAddress = new GraphQLObjectType({
  name: 'CoreLogicSimpleAddress',
  fields: () => ({
    careOf: {
      type: GraphQLString,
      description: 'The care of address if available.',
    },
    country: {
      type: GraphQLString,
      description: 'Simple address country if available.',
    },
    isDoNotMail: {
      type: GraphQLBoolean,
      description: 'Indicates if the address is registered on the do not mail register: TRUE = do not mail; FALSE or null = ok to mail.',
    },
    line1: {
      type: GraphQLString,
      description: 'Line 1 simple address if available.',
    },
    line2: {
      type: GraphQLString,
      description: 'Line 2 simple address if available.',
    },
    postcode: {
      type: GraphQLString,
      description: 'Simple address postcode if available.',
    },
    state: {
      type: GraphQLString,
      description: 'Simple address state if available.',
    },
    suburb: {
      type: GraphQLString,
      description: 'Simple address suburb if available.',
    },
  }),
});

const Person = new GraphQLObjectType({
  name: 'CoreLogicPerson',
  fields: () => ({
    firstName: {
      type: GraphQLString,
      description: 'The person\'s first name.',
    },
    initials: {
      type: GraphQLString,
      description: 'The person\'s initials.',
    },
    lastName: {
      type: GraphQLString,
      description: 'The person\'s last names',
    },
    middleNames: {
      type: GraphQLString,
      description: 'The person\'s middle names',
    },
  }),
});

const Phone = new GraphQLObjectType({
  name: 'CoreLogicPhone',
  fields: () => ({
    isDoNotCall: {
      type: GraphQLBoolean,
      description: 'Indicates if the phone number is registered on the do not call register. TRUE = do not call. FALSE or null = ok to call',
    },
    phoneNumber: {
      type: GraphQLString,
      description: 'The phone number.',
    },
  }),
});

const Company = new GraphQLObjectType({
  name: 'CoreLogicCompany',
  fields: () => ({
    abn: {
      type: GraphQLString,
      description: 'The company\'s ABN (Australian Business Number).',
    },
    acn: {
      type: GraphQLString,
      description: 'The company\'s ACN (Australian Company Number).',
    },
    companyName: {
      type: GraphQLString,
      description: 'The company name.',
    },
  }),
});

const Buyer = new GraphQLObjectType({
  name: 'CoreLogicBuyer',
  fields: () => ({
    company: {
      type: Company,
      description: 'Returns the company name, ABN and ACN if available otherwise they will not be returned.',
    },
    id: {
      type: GraphQLInt,
      description: 'A unique Id for the buyer',
    },
    mailingAddress: {
      type: SimpleAddress,
      description: 'Returns the simple (e.g. mailing) address of the person or company including care of address, address line 1 and 2, suburb, state, postcode and country if available otherwise they will not be returned. A Do Not Mail Flag is also available.',
    },
    person: {
      type: Person,
      description: 'Returns the first, middle and last name of the person if available otherwise they will not be returned.',
    },
  }),
});

const Vendor = new GraphQLObjectType({
  name: 'CoreLogicVendor',
  fields: () => ({
    company: {
      type: Company,
      description: 'The company name, ABN and ACN if available otherwise they will not be returned.',
    },
    id: {
      type: GraphQLInt,
      description: 'Unique Id for the vendor.',
    },
    mailingAddress: {
      type: SimpleAddress,
      description: 'The simple (e.g. mailing) address of the person or company including care of address, address line 1 and 2, suburb, state, postcode and country if available otherwise they will not be returned. A Do Not Mail Flag is also available.',
    },
    person: {
      type: Person,
      description: 'The first, middle and last name of the person if available otherwise they will not be returned.',
    },
  }),
});

const Agency = new GraphQLObjectType({
  name: 'CoreLogicAgency',
  fields: () => ({
    company: {
      type: Company,
      description: 'Returns the company name, ABN and ACN if available otherwise they will not be returned.',
    },
    phone: {
      type: Phone,
      description: 'The company phone number.',
    },
  }),
});

const Agent = new GraphQLObjectType({
  name: 'CoreLogicAgent',
  fields: () => ({
    agent: {
      type: GraphQLString,
      description: 'Returns the name of the agent who advertised the property.',
    },
    phone: {
      type: Phone,
      description: 'Agent Contact number',
    },
  }),
});

const Postcode = new GraphQLObjectType({
  name: 'CoreLogicPostCode',
  fields: () => ({
    id: {
      type: GraphQLInt,
      description: 'A unique postcode ID',
    },
    name: {
      type: GraphQLString,
      description: 'The postcode',
    },
    singleLine: {
      type: GraphQLString,
      description: 'A single line postcode level address',
    },
    state: {
      type: GraphQLString,
      description: 'The Australian state',
    },
  }),
});

const Locality = new GraphQLObjectType({
  name: 'CoreLogicLocality',
  fields: () => ({
    id: {
      type: GraphQLInt,
      description: 'A unique locality ID',
    },
    name: {
      type: GraphQLString,
      description: 'The name of the locality. Also known as suburb.',
    },
    postcode: {
      type: Postcode,
      description: 'Returns Postcode information including state and postcode',
    },
    singleLine: {
      type: GraphQLString,
      description: 'A single line locality level address.',
    },
  }),
});

const Street = new GraphQLObjectType({
  name: 'CoreLogicStree',
  fields: () => ({
    direction: {
      type: GraphQLString,
      description: 'The street direction.',
    },
    extension: {
      type: GraphQLString,
      description: 'The street extension.',
    },
    id: {
      type: GraphQLInt,
      description: 'A unique street Id.',
    },
    locality: {
      type: Locality,
      description: 'Returns locality information including locality name and well as postcode information.',
    },
    name: {
      type: GraphQLString,
      description: 'The name of the street.',
    },
    nameAndNumber: {
      type: GraphQLString,
      description: 'A single line street level address including dwelling number.',
    },
    singleLine: {
      type: GraphQLString,
      description: 'A single line street level address.',
    },
  }),
});

const Address = new GraphQLObjectType({
  name: 'CoreLogicAddress',
  fields: () => ({
    buildingComplexName: {
      type: GraphQLString,
      description: 'The building or complex name.',
    },
    councilArea: {
      type: GraphQLString,
      description: 'The name of the councilArea.',
    },
    endAlpha: {
      type: GraphQLString,
      description: 'The unit end Alpha if it is made up of a range (e.g. A-S).',
    },
    endNumber: {
      type: GraphQLInt,
      description: 'The unit end number if it is made up of a range (e.g. 46-51).',
    },
    isDerivedUnit: {
      type: GraphQLBoolean,
      description: 'Whether the data has been derived: True = unitNumber is derived from the lot number; False = unitNumber is not derived from the lot number.',
    },
    singleLine: {
      type: GraphQLString,
      description: 'A complete address in one line.',
    },
    startAlpha: {
      type: GraphQLString,
      description: 'The unit start Alpha if it is made up of a range (e.g. A-S).',
    },
    startNumber: {
      type: GraphQLInt,
      description: 'The unit start number if it is made up of a range (e.g. 46-51).',
    },
    street: {
      type: Street,
      description: 'Returns street details including name, extension, direction, single line and locality.',
    },
    unitAlpha: {
      type: GraphQLString,
      description: 'The unit alpha.',
    },
    unitNumber: {
      type: GraphQLInt,
      description: 'The unit number.',
    },
  }),
});

const PropertyAttributes = new GraphQLObjectType({
  name: 'CoreLogicPropertyAttributes',
  fields: () => ({
    bathrooms: {
      type: GraphQLInt,
      description: 'Number of bathrooms.',
    },
    bedrooms: {
      type: GraphQLInt,
      description: 'Number of bedrooms.',
    },
    carSpaces: {
      type: GraphQLInt,
      description: 'Number of car spaces.',
    },
    floorArea: {
      type: GraphQLFloat,
      description: 'Floor area of the property in square metres.',
    },
    isCalculatedLandArea: {
      type: GraphQLBoolean,
      description: 'For all states excluding Victoria: government land area is returned if available; otherwise CoreLogic calculated Land Area will be returned if available. For Victoria: CoreLogic calculated land area is returned if available, otherwise government land area will be returned if available. If land area data is not available, then this will not be returned.',
    },
    landArea: {
      type: GraphQLFloat,
      description: 'Land area of the property in square metres.',
    },
    lockUpGarages: {
      type: GraphQLInt,
      description: 'Number of lock up garages.',
    },
    roofMaterial: {
      type: GraphQLString,
      description: 'Roof material of the property.',
    },
    wallMaterial: {
      type: GraphQLString,
      description: 'Wall material of the property.',
    },
    yearBuilt: {
      type: GraphQLString,
      description: 'The approximate year in which the property was built.',
    },
  }),
});

const Contact = new GraphQLObjectType({
  name: 'CoreLogicContact',
  fields: () => ({
    company: {
      type: Company,
      description: 'Returns the company name, ABN and ACN if available otherwise they will not be returned.',
    },
    contactType: {
      type: GraphQLString,
      description: 'The contact type e.g. Owner, Phone, Marketing.',
    },
    email: {
      type: GraphQLString,
      description: 'Email address of the person or company.',
    },
    mailingAddress: {
      type: SimpleAddress,
      description: 'Returns the simple (or mailing) address of the person or company including care of address, address line 1 and 2, suburb, state, postcode and country if available otherwise they will not be returned. A Do Not Mail Flag is also available.',
    },
    person: {
      type: Person,
      description: 'Returns the first, middle, initials and last name of the person if available otherwise they will not be returned.',
    },
    phone: {
      type: Phone,
      description: 'Returns the phone number of the person or company including a Do Not Call Flag if appropriate.',
    },

  }),
});

const Coordinate = new GraphQLObjectType({
  name: 'CoreLogicCoordinate',
  fields: () => ({
    latitude: {
      type: GraphQLFloat,
      description: 'Latitude coordinate of the property.',
    },
    longitude: {
      type: GraphQLFloat,
      description: 'Longitude coordinate of the property.',
    },
  }),
});

const CurrentOwnership = new GraphQLObjectType({
  name: 'CoreLogicCurrentOwnership',
  fields: () => ({
    company: {
      type: Company,
      description: 'Name of Company who currently owns the property including companyName, abn and acn.',
    },
    mailingAddress: {
      type: SimpleAddress,
      description: 'Simple (e.g. mailing) address of the owner - either person or company.',
    },
    person: {
      type: Person,
      description: 'Name of the person who currently owns the property including firstName, middleNames and lastName',
    },
  }),
});

const ExternalReference = new GraphQLObjectType({
  name: 'CoreLogicExternalReference',
  fields: () => ({
    type: {
      type: GraphQLString,
      description: 'The type of external reference. Different types include:\'REA ID\'.',
    },
    value: {
      type: GraphQLString,
      description: 'The value for the external reference,',
    },
  }),
});

const Feature = new GraphQLObjectType({
  name: 'CoreLogicFeature',
  fields: () => ({
    abbreviation: {
      type: GraphQLString,
      description: 'An abbreviation of the feature.',
    },
    id: {
      type: GraphQLInt,
      description: 'The unique ID of the feature.',
    },
    name: {
      type: GraphQLString,
      description: 'The name of the feature.',
    },
    type: {
      type: GraphQLString,
      description: 'The type of the value field, e.g. the value field is 1 in the previous row hence the type is Integer.',
    },
    value: {
      type: GraphQLString,
      description: 'The value of the feature name.',
    },
  }),
});

const RentPropertyCampaign = new GraphQLObjectType({
  name: 'CoreLogicRentPropertyCampaign',
  fields: () => ({
    advertisementId: {
      type: GraphQLInt,
      description: 'A unique identifier for the current or last for rent advertisement.',
    },
    agency: {
      type: Agency,
      description: 'The current or last agency advertising the property for rent.',
    },
    agent: {
      type: Agent,
      description: 'The current or last agent advertising the property for rent.',
    },
    daysOnMarket: {
      type: GraphQLInt,
      description: 'The number of days the property was available for rent for the campaign. For active campaigns, this is the difference between the fromDate and today\'s date in number of days. If the campaign is expired, and: more than 1 ad received, the DoM will be the difference between the fromDate and the last ad date (toDate); or only 1 ad ever received the DoM will be 7, meaning it must have been advertised for a minimum of 7 days.',
    },
    fromDate: {
      type: GraphQLString,
      description: 'The from date of the for rent property campaign in format YYYY-MM-DD.i.e. the date of the first advertisement recorded in the for rent property campaign.',
    },
    isActiveCampaign: {
      type: GraphQLBoolean,
      description: 'Specifies the state of the property\'s advertising campaign. If true, then the campaign is currently active, meaning that the property is still on the market for rent and has a listing date within the last 30 days.',
    },
    period: {
      type: GraphQLString,
      description: 'The period associated with the for rent price in the current or last advertisement: W = weekly; M = monthly; A = annual; P = per square meter per month.',
    },
    price: {
      type: GraphQLInt,
      description: 'The amount that the property is advertised as for rent in the current or last advertisement.',
    },
    priceDescription: {
      type: GraphQLString,
      description: 'The description of the for rent price in the current or last advertisement (e.g. P.O.A or Offers Over).',
    },
    toDate: {
      type: GraphQLString,
      description: 'The to date of the for rent property campaign in format YYYY-MM-DD.i.e. the date of the current or last advertisement recorded by RP Data in the for rent property campaign.',
    },
  }),
});

const AgencyCampaign = new GraphQLObjectType({
  name: 'CoreLogicAgencyCampaign',
  fields: () => ({
    advertisementId: {
      type: GraphQLInt,
      description: 'A unique identifier for the current or last for sale advertisement.',
    },
    agency: {
      type: Agency,
      description: 'The current or last agency who ran the for sale agency campaign.',
    },
    daysListed: {
      type: GraphQLInt,
      description: 'The number of days the property was listed/advertised for sale for the campaign (regardless of if there was a sale or not). Campaign is active: then the daysListed will be the difference between the fromDate and today\'s date. Campaign is expired (and more than 1 ad received): then the daysListed will be the difference between the fromDate and the last ad date. Campaign is expired (and only 1 ad ever received): then the daysListed will be 7, meaning it must have been advertised for a minimum of 7 days.',
    },
    daysOnMarket: {
      type: GraphQLInt,
      description: 'The number of days the property was available for sale for the campaign - the difference between the fromDate and the saleDate in number of days. If the saleDate occurred before the fromDate, then the daysOnMarket will be 1. If the campaign does not have a sale, and: campaign is active: then the DoM will be the difference between the fromDate and today\'s date; or campaign is expired (and more than 1 ad received): then the DoM will be the difference between the fromDate and the last ad date; or campaign is expired (and only 1 ad ever received): then the DoM will be 7, meaning it must have been advertised for a minimum of 7 days.',
    },
    fromDate: {
      type: GraphQLString,
      description: 'The date of the first advertisement recorded in the for sale property campaign in the format YYYY-MM-DD.',
    },
    isActiveCampaign: {
      type: GraphQLBoolean,
      description: 'Specifies the state of the property\'s advertising campaign. If true, then the campaign is currently active, meaning that the property is still on the market and has a listing date within the last 60 days.',
    },
    saleDate: {
      type: GraphQLString,
      description: 'The date of the property\'s sale in the format YYYY-MM-DD. If there is no sale associated with the campaign, then this field will not be returned.',
    },
    toDate: {
      type: GraphQLString,
      description: 'The date of the latest/last advertisement recorded in the for sale property campaign in the format YYYY-MM-DD.',
    },
  }),
});

const PropertyCampaign = new GraphQLObjectType({
  name: 'CoreLogicPropertyCampaign',
  fields: () => ({
    advertisementId: {
      type: GraphQLInt,
      description: 'A unique identifier for the current or last for sale advertisement.',
    },
    agency: {
      type: Agency,
      description: 'The current or last agency advertising the property for sale.',
    },
    agent: {
      type: Agent,
      description: 'The current or last agent advertising the property for sale.',
    },
    auctionDate: {
      type: GraphQLString,
      description: 'The date the auction has been scheduled, in the format YYYY-MM-DD.',
    },
    auctionTime: {
      type: GraphQLString,
      description: 'The time of the day that the auction has been scheduled, in 24hr format.',
    },
    daysListed: {
      type: GraphQLInt,
      description: 'The number of days the property was listed/advertised for sale for the campaign (regardless of if there was a sale or not). Campaign is active: then the daysListed will be the difference between the fromDate and today\'s date. Campaign is expired (and more than 1 ad received): then the daysListed will be the difference between the fromDate and the last ad date. Campaign is expired (and only 1 ad ever received): then the daysListed will be 7, meaning it must have been advertised for a minimum of 7 days.',
    },
    daysOnMarket: {
      type: GraphQLInt,
      description: 'The number of days the property was available for sale for the campaign - the difference between the fromDate and the saleDate in number of days. If the saleDate occurred before the fromDate, then the daysOnMarket will be 1. If the campaign does not have a sale, and: campaign is active: then the DoM will be the difference between the fromDate and today\'s date; or campaign is expired (and more than 1 ad received): then the DoM will be the difference between the fromDate and the last ad date; or campaign is expired (and only 1 ad ever received): then the DoM will be 7, meaning it must have been advertised for a minimum of 7 days.',
    },
    firstAdvertisementPrice: {
      type: GraphQLFloat,
      description: 'The advertisement price that the property was first listed as the for sale campaign. This value must not be displayed and is only used for calculations; the priceDescription is the only value permitted for display.',
    },
    fromDate: {
      type: GraphQLString,
      description: 'The date of the first advertisement recorded in the for sale property campaign in the format YYYY-MM-DD.',
    },
    isActiveCampaign: {
      type: GraphQLBoolean,
      description: 'Specifies the state of the property\'s advertising campaign. If true, then the campaign is currently active, meaning that the property is still on the market and has a listing date within the last 60 days.',
    },
    latestAdvertisementPrice: {
      type: GraphQLFloat,
      description: 'The latest/last advertisement price that the property was listed at in the for sale campaign. This value must not be displayed and is only used for calculations; the priceDescription is the only value permitted for display.',
    },
    listingMethod: {
      type: GraphQLString,
      description: 'The latest/last listing method that the property was listed as in for the for sale campaign. For example, these include \'Normal Sale\', \'Auction\', etc.',
    },
    percentPriceVariationAtSale: {
      type: GraphQLFloat,
      description: 'Calculated as the percentage difference between the first advertisement price and the sale price in the campaign. Displayed as a percent, rounded with a precision of 2. Negative values will be prefixed with "-"; for example: "percentPriceVariationAtSale":-1.25. If the first price in the campaign is not disclosed, then the percentPriceVariationAtSale will be 0.',
    },
    percentPriceVariationFirstToLast: {
      type: GraphQLFloat,
      description: 'Calculated as the percentage difference between the first advertisement price and the latest advertisement price in the advertisement campaign. Displayed as a percent, rounded with a precision of 2. Negative values will be prefixed with "-"; for example: "percentPriceVariationFirstToLast":-3.55. If the first price in the campaign is not disclosed, then the percentPriceVariationFirstToLast will be 0.',
    },
    priceDescription: {
      type: GraphQLString,
      description: 'The latest/last price description that the property was listed at in for the for sale campaign.It is recommended that integrators use this field for display of the advertisement price.',
    },
    saleDate: {
      type: GraphQLString,
      description: 'The date of the property\'s sale in the format YYYY-MM-DD. If there is no sale associated with the campaign, then this field will not be returned.',
    },
    toDate: {
      type: GraphQLString,
      description: 'The date of the latest/last advertisement recorded in the for sale property campaign in the format YYYY-MM-DD.',
    },
  }),
});

const Legal = new GraphQLObjectType({
  name: 'CoreLogicLegal',
  fields: () => ({
    dateIssued: {
      type: GraphQLString,
      description: 'The date of issue as supplied by the Valuer General.',
    },
    frontage: {
      type: GraphQLString,
      description: 'The property frontage measurement as supplied by the Valuer General.',
    },
    heritageRegistered: {
      type: GraphQLString,
      description: 'If applicable - describes the type of Heritage that applies to the property. Queensland Heritage Flag: Flags that the property exists on the heritage register.',
    },
    mapReference: {
      type: GraphQLString,
      description: 'Reference point for Valuers when accessing the Northern Territory Valuer General Maps.',
    },
    mapScale: {
      type: GraphQLString,
      description: 'The scale that the map is in. Reference point for Valuers when accessing the Northern Territory Valuer General Maps.',
    },
    mapSheet: {
      type: GraphQLString,
      description: 'Reference point for Valuers when accessing the Northern Territory Valuer General Maps.',
    },
    realPropertyDescription: {
      type: GraphQLString,
      description: 'This description is built from the lot and plan as well as the parish or the volume and folio and location. This is also known as RPD.',
    },
    vgMeasurement: {
      type: GraphQLString,
      description: 'Valuer General supplied approximate measurements of the parcel dimensions including frontage and other boundaries.',
    },
    vgNumber: {
      type: GraphQLString,
      description: 'Valuer General Number. Not available for NT.',
    },
    vgoMap: {
      type: GraphQLString,
      description: 'Reference point for Valuers when accessing the West Australian Valuer Generals Maps.',
    },
  }),
});

const Parcel = new GraphQLObjectType({
  name: 'CoreLogicParcel',
  fields: () => ({
    area: {
      type: GraphQLString,
      description: 'Land area of the parcel with unit.',
    },
    block: {
      type: GraphQLString,
      description: 'The block for the parcel.',
    },
    displayName: {
      type: GraphQLString,
      description: 'This represents the display name of the parcel type.',
    },
    displayValue: {
      type: GraphQLString,
      description: 'This represents the concatenated display value of the parcel attributes.',
    },
    hundred: {
      type: GraphQLString,
      description: 'A hundred is a geographic division which historically was used to divide a larger region into smaller administrative divisions. They are only used in SA and NT.',
    },
    isPrimaryPlan: {
      type: GraphQLBoolean,
      description: 'Represents the first lot and plan numbers in the real property description. This is not applicable for properties in ACT.',
    },
    landAuthority: {
      type: GraphQLString,
      description: 'The name of the local authority.',
    },
    location: {
      type: GraphQLString,
      description: 'Typically refers to town or region (e.g. Darwin, Alice Springs, Elliott). N.B. can reference a hundred as the known region.',
    },
    lot: {
      type: GraphQLString,
      description: 'The lot number for the parcel.',
    },
    lotAlpha: {
      type: GraphQLString,
      description: 'The alpha prefix for the lot number.',
    },
    lotPart: {
      type: GraphQLString,
      description: 'The lot part for the lot number.',
    },
    plan: {
      type: GraphQLString,
      description: 'The plan number for the parcel. This is different to the survey plan which is per property.',
    },
    planType: {
      type: GraphQLString,
      description: 'The type of plan for the parcel (e.g. DP, RP, SP).',
    },
    referenceSection: {
      type: GraphQLString,
      description: 'This it the reference or description of the section that the property is located on. A section is an area nominally one square mile, containing 640 acres (260 ha), with 36 sections making up one survey township on a rectangular grid.',
    },
    section: {
      type: GraphQLString,
      description: 'The section for the parcel.',
    },
    sectionPart: {
      type: GraphQLString,
      description: 'The section part for the parcel.',
    },
    surveyPlan: {
      type: GraphQLString,
      description: 'The Survey Plan and only exists for properties in NT.It is not the same as Plan. Plan, lot and location are per parcel while survey plan is per property.',
    },
  }),
});

const PropertyPhoto = new GraphQLObjectType({
  name: 'CoreLogicPropertyPhoto',
  fields: () => ({
    isDefaultPhoto: {
      type: GraphQLBoolean,
      description: 'Indicates if the photo is the property\'s default photo.Results are sorted by returning results if isDefaultPhoto=true, followed by scanDate descending.',
    },
    largePhotoUrl: {
      type: GraphQLString,
      description: 'Large size photo URL. Photo size 768x512.',
    },
    mediumPhotoUrl: {
      type: GraphQLString,
      description: 'Medium size photo URL. Photo size 470x313.',
    },
    scanDate: {
      type: GraphQLString,
      description: 'The date the image was created in format YYYY-MM-DD. Results sorted by returning results if isDefaultPhoto=true, followed by scanDate descending.',
    },
    thumbnailPhotoUrl: {
      type: GraphQLString,
      description: 'Thumbnail photo URL. Photo size 120x8',
    },
  }),
});

const SalesHistory = new GraphQLObjectType({
  name: 'CoreLogicSalesHistory',
  fields: () => ({
    agency: {
      type: Agency,
      description: 'Details of the agency who sold the property.',
    },
    agent: {
      type: Agent,
      description: 'Details of the agent who sold the property.',
    },
    buyerList: {
      type: new GraphQLList(Buyer),
      description: 'Details of the buyers involved in the sale.',
    },
    chattelsPrice: {
      type: GraphQLInt,
      description: 'Indicates the price for movable personal properties in the sale. Only returned for properties in NZ.',
    },
    contractDate: {
      type: GraphQLString,
      description: 'Refers to the sale date of the property (not the settlement date) in format YYYY-MM-DD. Sales within the Sales History List are sorted descending by contractDate.',
    },
    isAgentsAdvice: {
      type: GraphQLBoolean,
      description: 'Indicates if the sale record was advised by an Agent: True = is an Agents Advice record; False = is a Valuer General record.',
    },
    isDerivedAgency: {
      type: GraphQLBoolean,
      description: 'Indicates if the agency has been derived from the listing record. This will only return if True (thus, null indicates it is not derived).',
    },
    isDerivedAgent: {
      type: GraphQLBoolean,
      description: 'Indicates if the agent has been derived from the listing record. This will only return if True (thus, null indicates it is not derived).',
    },
    isReaRecentSale: {
      type: GraphQLBoolean,
      description: 'Indicates if the sale record is flagged as an REA recent sale.',
    },
    netPrice: {
      type: GraphQLInt,
      description: 'Indicates the amount paid less GST, chattels and other transfer prices. Only returned for properties in NZ.',
    },
    otherPrice: {
      type: GraphQLInt,
      description: 'Indicates the amount paid for anything not classed as chattel in the saleOnly returned for properties in NZ.',
    },
    price: {
      type: GraphQLInt,
      description: 'The complete price that the property sold for as reported by Agents Advice or the Valuer General.',
    },
    settlementDate: {
      type: GraphQLString,
      description: 'Refers to the settlement date of the property (not the contract date) in format YYYY-MM-DD.',
    },
    transferId: {
      type: GraphQLInt,
      description: 'The unique transfer Id for the sale.',
    },
    type: {
      type: GraphQLString,
      description: 'Refers to the type of sale as notified by the Valuer General (e.g. Part Sale, Normal Sale, etc.).',
    },
    vendorList: {
      type: new GraphQLList(Vendor),
      description: 'Details of the vendors (sellers) involved in the sale.',
    },
    vendorRelationship: {
      type: GraphQLString,
      description: 'Details of any relationship that may have existed between the buyer and vendor. Helps to determine if the transaction was at arms length.Only returned for properties in QLD.',
    },
  }),
});

const SiteValue = new GraphQLObjectType({
  name: 'CoreLogicSiteValue',
  fields: () => ({
    date: {
      type: GraphQLString,
      description: 'The date that the valuation was made in format YYYY-MM-DD. Site Values within the Site Value List are sorted descending by date. Dates are not returned for properties in Northern Territory (NT).',
    },
    type: {
      type: GraphQLString,
      description: 'The type of valuation. Available value are: UCV (Unimproved Capital Value (Land Value)) , SV (Site Value) or CV (Capital Value).',
    },
    value: {
      type: GraphQLInt,
      description: 'The UCV, SV or CV of a property.',
    },
  }),
});

const Site = new GraphQLObjectType({
  name: 'CoreLogicSite',
  fields: () => ({
    landUsePrimary: {
      type: GraphQLString,
      description: 'The Primary Land Use e.g. single residential dwelling.',
    },
    landUseSecondary: {
      type: GraphQLString,
      description: 'The Secondary Land Use e.g. single residential dwelling.',
    },
    siteValueList: {
      type: new GraphQLList(SiteValue),
      description: 'A list of current and historical site values for the property as determind by the governing authority',
    },
    zoneCodeLocal: {
      type: GraphQLString,
      description: 'The local zone code.',
    },
    zoneDescriptionLocal: {
      type: GraphQLString,
      description: 'The local zone description e.g. Residential B R4.',
    },
  }),
});

const Title = new GraphQLObjectType({
  name: 'CoreLogicTitle',
  fields: () => ({
    feeCode: {
      type: GraphQLString,
      description: 'Similar to Tenure Reference, but available for properties located in all other states.',
    },
    folio: {
      type: GraphQLString,
      description: 'Forms one part of the Volume Folio descriptor for a property. Does not display for properties in SA.',
    },
    instrument: {
      type: GraphQLInt,
      description: 'Provides the document ID for performing an Instrument/Dealing search with the Land Titles office.',
    },
    ownerCode: {
      type: GraphQLString,
      description: 'Denotes the ownership type and whether this is Private, Council, State Government, Commonwealth etc.',
    },
    tenureNumber: {
      type: GraphQLString,
      description: 'If the tenureReference of the property is leasehold this is the equivalent of a rental agreement number.',
    },
    tenureReference: {
      type: GraphQLString,
      description: 'The tenure can be freehold or leasehold and will only be returned for properties in NT and New Zealand. Also referred to as \'Fee Code\' in other States.',
    },
    titleIndicator: {
      type: GraphQLString,
      description: 'If there is more than one title for the property it will be indicated in the Title Indicator.',
    },
    titlePrefix: {
      type: GraphQLString,
      description: 'The prefix of the title.Only available for properties in SA and WA.',
    },
    titleReference: {
      type: GraphQLString,
      description: 'Title reference number.Does not display for properties in QLD and VIC.',
    },
    titleSuffix: {
      type: GraphQLString,
      description: 'The suffix of the title.Only available for properties in WA.',
    },
    volume: {
      type: GraphQLString,
      description: 'Forms one part of the Volume Folio descriptor for a property. Does not display for properties in SA.',
    },
  }),
});

const Property = new GraphQLObjectType({
  name: 'CoreLogicProperty',
  fields: () => ({
    address: {
      type: Address,
      description: 'The address of the property record.',
    },
    attributes: {
      type: PropertyAttributes,
      description: 'Details of attributes of the property. e.g.: bedrooms, bathrooms, land area etc.',
    },
    contactList: {
      type: new GraphQLList(Contact),
      description: 'A list of contacts for the property.',
    },
    coordinate: {
      type: Coordinate,
      description: 'The longitude and latitude location of the property.',
    },
    currentOwnershipList: {
      type: new GraphQLList(CurrentOwnership),
      description: 'A list of the current owner(s) of the property. May only appear as a surname in some states. Note: This is not returned for properties located within the Northern Territory.',
    },
    externalReferenceList: {
      type: new GraphQLList(ExternalReference),
      description: 'A list of external references relating to the property.',
    },
    featureList: {
      type: new GraphQLList(Feature),
      description: 'A list of features related to the property.',
    },
    forRentPropertyCampaignList: {
      type: new GraphQLList(RentPropertyCampaign),
      description: 'A list of For Rent advertisements for the property grouped at the property campaign level.',
    },
    forSaleAgencyCampaignList: {
      type: new GraphQLList(AgencyCampaign),
      description: 'A list of For Sale advertisements for the property grouped into agency level campaigns and returned in descending order by campaign from date.',
    },
    forSalePropertyCampaignList: {
      type: new GraphQLList(PropertyCampaign),
      description: 'A list of For Sale advertisements for the property grouped at the property campaign level and returned in descending order by campaign from date.',
    },
    id: {
      type: GraphQLInt,
      description: 'The unique CoreLogic RP Data property Id.',
    },
    legal: {
      type: Legal,
      description: 'Legal descriptors for the property; this data varies by State.',
    },
    occupancyType: {
      type: GraphQLString,
      description: 'Details of the property\'s occupancy type. Available values include: Owner Occupied; Rented; Government Owned - Rented; and Government Owned - Other.',
    },
    parcelList: {
      type: new GraphQLList(Parcel),
      description: 'A list of land parcel information for the property; this data varies per State.',
    },
    propertyPhotoList: {
      type: new GraphQLList(PropertyPhoto),
      description: 'A list of the available property photo URLs.',
    },
    propertySubType: {
      type: GraphQLString,
      description: 'The sub type of the property. This is a concatenation of the propertyType and propertySubTypeShort.This is the recommended display value when identifying a property type.',
    },
    propertySubTypeShort: {
      type: GraphQLString,
      description: 'The short sub type of the property. This corresponds to the propertyType and provides a more descriptive indication of the property type.',
    },
    propertyType: {
      type: GraphQLString,
      description: 'The type of the property. e.g.: HOUSE, UNIT, etc.',
    },
    saleList: {
      type: new GraphQLList(SalesHistory),
      description: 'A list of the property\'s sales made up of Agents Advice and Valuer General data sorted descending by contract date.',
    },
    site: {
      type: Site,
      description: 'Details of the property\'s site including site values, land use and zoning information.',
    },
    title: {
      type: Title,
      description: 'Property title information; this data varies per State',
    },
  }),
});

export default new GraphQLObjectType({
  name: 'CoreLogicPropertyResponse',
  fields: () => ({
    property: { type: Property },
    systemInfo: { type: SystemInfo },
  }),
});

