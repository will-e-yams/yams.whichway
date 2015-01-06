# yams.whichway.js
a jQuery plugin that adds orientation classes to the body tag

## Summary

On mobile devices, this will add the class `device-portrait` when the device is oriented portait and `device-landscape` when the device is oriented landscape.

## Requires

- [jQuery](#http://jQuery.com)

## Usage

```
<script type="text/javascript" src="yams.whichway.js"></script>
<script type="text/javascript">
    // add callbacks before document ready
    $.yams.whichway.addCallback(funcion(orientation) {
        console.log('orientation is now ' + orientation)
    })
</script> 
```