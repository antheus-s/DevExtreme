The [filterPanel](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/filterPanel/) displays the combined filter in the bottom of the TreeList. This filter is stored in the [filterValue](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#filterValue) property and consists of conditions that a user applied in the following UI elements: [filter row](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/filterRow/), [header filter](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/headerFilter/), [filterBuilder](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#filterBuilder). Users can deselect the checkbox in the filter panel to temporarily deactivate the current filter.

To display the filter panel, set the **filterPanel**.[visible](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/filterPanel/#visible) property to **true**. 

A click on the combined filter calls the integrated filter builder. You can configure it in the [filterBuilder](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#filterBuilder) object.

TreeList uses the DevExtreme [Popup](/Documentation/ApiReference/UI_Components/dxPopup/) component to display the integrated filter builder. The Popup's default configuration is defined automatically, but you can change it in the [filterBuilderPopup](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#filterBuilderPopup) object.