You can use the Scheduler component to display and edit appointments from a local array. Use the [dataSource](/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#dataSource) property to bind the Scheduler to the array.

The Scheduler automatically displays appointments if source object field names match the names listed in the [dxSchedulerAppointment](/Documentation/ApiReference/UI_Components/dxScheduler/Interfaces/dxSchedulerAppointment/) help section. In this demo, the following fields illustrate this point: [text](/Documentation/ApiReference/UI_Components/dxScheduler/Interfaces/dxSchedulerAppointment/#text), [startDate](/Documentation/ApiReference/UI_Components/dxScheduler/Interfaces/dxSchedulerAppointment/#startDate), [endDate](/Documentation/ApiReference/UI_Components/dxScheduler/Interfaces/dxSchedulerAppointment/#endDate), and [allDay](/Documentation/ApiReference/UI_Components/dxScheduler/Interfaces/dxSchedulerAppointment/#allDay). If field names in your data source differ, specify them in **...Expr** properties ([textExpr](/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#textExpr), [startDateExpr](/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#startDateExpr), [endDateExpr](/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#endDateExpr), [allDayExpr](/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#allDayExpr), and so on).

For more information about binding to an array, refer to the following help topic: [Local Array](/Documentation/Guide/Data_Binding/Specify_a_Data_Source/Local_Array/).