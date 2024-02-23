The DataGrid can use the [Form](/Documentation/ApiReference/UI_Components/dxForm/) component to arrange cell editors when users modify a row. The Form allows users to edit values from [visible and hidden](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#visible) columns (see the `Notes` column).

To enable form edit mode, configure the following properties:
- Set **editing**.[mode](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/editing/#mode) to *"form"*
- Assign **true** to the [editing](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/editing/) object's [allowAdding](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/editing/#allowAdding), [allowUpdating](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/editing/#allowUpdating), and [allowDeleting](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/editing/#allowDeleting) properties.

A column's default editor is defined automatically based on this column's [dataType](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#dataType). To customize this editor or replace it with another editor, use the column's [formItem](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#formItem) object. This demo shows how to replace the default editor in the `Notes` column with a [TextArea](/Documentation/ApiReference/UI_Components/dxTextArea/). Refer to the [SimpleItem](/Documentation/ApiReference/UI_Components/dxForm/Item_Types/SimpleItem/) help topic for information on all settings that you can define in the **formItem** object. If you need more information about editor customization in DataGrid Form, review the following topic: [Customize Edit Form](/Documentation/Guide/UI_Components/DataGrid/Editing/#Customize_Edit_Form).

You can also set up the edit Form from scratch. The component's [configuration section](/Documentation/ApiReference/UI_Components/dxForm/) lists available settings. Specify these settings in the **editing**.[form](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/editing/#form) object. Refer to this object's description for more information about this edit mode's limitations.