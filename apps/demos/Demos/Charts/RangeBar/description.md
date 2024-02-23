This demo illustrates the range bar [series type](/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/#type). 

You can use range bars to display value ranges that correspond to specified arguments. Each point in a range bar series has one argument and two values. The [argumentField](/Documentation/ApiReference/UI_Components/dxChart/Series_Types/RangeBarSeries/#argumentField) supplies arguments while the [rangeValue1Field](/Documentation/ApiReference/UI_Components/dxChart/Series_Types/RangeBarSeries/#rangeValue1Field) and [rangeValue2Field](/Documentation/ApiReference/UI_Components/dxChart/Series_Types/RangeBarSeries/#rangeValue2Field) supply bar start and end point values.

To create multiple range bar series, use the [series](/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/) array to declare each series and the [commonSeriesSettings](/Documentation/ApiReference/UI_Components/dxChart/Configuration/commonSeriesSettings/) object to specify the common series type. In this object, you can implement parameters specific to the [range bar series](/Documentation/ApiReference/UI_Components/dxChart/Series_Types/RangeBarSeries/) type. For example, this demo specifies a [minimum bar size](/Documentation/ApiReference/UI_Components/dxChart/Series_Types/RangeBarSeries/#minBarSize) for all series.