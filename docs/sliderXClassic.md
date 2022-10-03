---
title: SliderXClassic
sidebar_position: 2
---

Classic slider component with full range implementing all the available easy styling possibilities.

### Props

|             Name | Type                                 | Optional | Default | Description                                                       |
| ---------------: | ------------------------------------ | -------- | ------- | ----------------------------------------------------------------- |
|          **min** | number                               | true     | 0       | Minimum value                                                     |
|          **max** | number                               | true     | 100     | Maximum value                                                     |
|         **step** | number                               | true     | 1       | Specifies the number intervals                                    |
|    **className** | string                               | true     |         | Additional classname to add to the component                      |
|     **onChange** | function                             | true     |         | Returns the HTMLinput change event                                |
|       **colors** | array                                | true     |         | Array of RGB,RGBA or HEX colors                                   |
| **defaultValue** | number                               | true     | min     | Sets the initial value of the slider                              |
|           **id** | string                               | true     |         | Custom ID which overwrites the default generated random ID        |
|      **options** | [EnumSliderXOptions](sliderXOptions) | true     |         | Slider behavior options. Use [EnumSliderXOptions](sliderXOptions) |
|        **value** | number                               | true     |         | Controls the value of the slider externally.                      |
