To fetch data from an OData service, implement an [ODataStore](/Documentation/ApiReference/Data_Layer/ODataStore/). Use its properties to specify the service's [url](/Documentation/ApiReference/Data_Layer/ODataStore/Configuration/#url), [key](/Documentation/ApiReference/Data_Layer/ODataStore/Configuration/#key) data field, and OData [version](/Documentation/ApiReference/Data_Layer/ODataStore/Configuration/#version) if it is different from 2.
 
You can configure **ODataStore** as a standalone element (see [OData](/Documentation/Guide/Data_Binding/Specify_a_Data_Source/OData/) for details), but this demo assigns **ODataStore** settings to the [store](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/store/) field of the [DataSource](/Documentation/ApiReference/Data_Layer/DataSource/) configuration object. If you follow the same pattern in your application, make sure to set the **store**'s [type](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/store/#type) property to *"odata"*.
 
The **DataSource** configuration object allows you to sort, filter, group, and otherwise shape the store's data objects. This demo [filters](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#filter) data and [selects](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#select) a limited number of fields. 

### A 1-Click Solution for CRUD Web API Services with Role-based Access Control via EF Core

If you target .NET for your backend API, be sure to check out [Web API Service](https://docs.devexpress.com/eXpressAppFramework/403394/backend-web-api-service?utm_source=js.devexpress.com&utm_medium=referral&utm_campaign=xaf&utm_content=data-layer-odatastore) and register your [free copy today](https://www.devexpress.com/security-api-free?utm_source=js.devexpress.com&utm_medium=referral&utm_campaign=xaf&utm_content=data-layer-odatastore). The Solution Wizard scaffolds an OData v4 Web API Service (.NET 6+) with integrated authorization & CRUD operations powered by EF Core ORM. You can use OAuth2, JWT or custom authentication strategies alongside tools like Postman or Swagger (OpenAPI) for API testing.
The built-in Web API Service also filters out secured server data based on permissions granted to users. Advanced/enterprise functions include audit trail, endpoints to download reports, file attachments, check validation, obtain localized captions, etc.

To use the free Solution Wizard (which creates the Web API Service), run the Universal Component Installer from the [DevExpress Download Manager](https://www.devexpress.com/ClientCenter/DownloadManager/?utm_source=js.devexpress.com&utm_medium=referral&utm_campaign=xaf&utm_content=data-layer-odatastore) and use our predefined template in Visual Studio 2022+.

[Read Tutorial](https://docs.devexpress.com/eXpressAppFramework/404449/backend-web-api-service/get-started-with-web-api-service) | View Examples: [JavaScript (DevExtreme)](https://go.devexpress.com/XAF_Security_NonXAF_DevExtreme_OData.aspx) & [JavaScript (Svelte)](https://github.com/oliversturm/demo-dx-webapi-js/tree/stage-6) | [Watch Videos](https://www.youtube.com/watch?v=T7y4gwc1n4w&list=PL8h4jt35t1wiM1IOux04-8DiofuMEB33G)