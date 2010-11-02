/*! Copyright (c) 2010 Burin Asavesna (http://helloburin.com)
 * Licensed under the MIT License (LICENSE.txt).
 */
(function($) {
    // boxShadow get hooks
    var div = document.createElement('div'),
    divStyle = div.style,
    support = $.support;

    support.boxShadow = 
    divStyle.MozBoxShadow === ''? 'MozBoxShadow' :
    (divStyle.MsBoxShadow === ''? 'MsBoxShadow' :
    (divStyle.WebkitBoxShadow === ''? 'WebkitBoxShadow' : 
    (divStyle.OBoxShadow === ''? 'OBoxShadow' :
    (divStyle.BoxShadow === ''? 'BoxShadow' :
    false))));

    // helper function to inject a value into an existing string
    // is there a better way to do this? it seems like a common pattern
    function insert_into(string, value, index) {
        var parts  = string.split(/\s/);
        parts[index] = value;
        return parts.join(" ");
    }

    if ($.support.boxShadow) {
        $.cssHooks.boxShadow = {
            get: function( elem, computed, extra ) {
                return $.css(elem, support.boxShadow);
            },
            set: function( elem, value ) {
                elem.style[ support.boxShadow ] = value;
            }
        };
        
        $.cssHooks.boxShadowColor = {
            get: function ( elem, computed, extra ) {
                return $.css(elem, support.boxShadow).split(/\)\s/)[0] + ')';
            },
            set: function( elem, value ) {
                elem.style[ support.boxShadow ] = value + " " + $.css(elem, support.boxShadow).split(/\)\s/)[1];
            }
        };
        
        $.cssHooks.boxShadowBlur = {
            get: function ( elem, computed, extra ) {
                return $.css(elem, support.boxShadow).split(/\s/)[5];
            },
            set: function( elem, value ) {
                elem.style[ support.boxShadow ] = insert_into($.css(elem, support.boxShadow), value, 5);
            }
        };
        
        $.cssHooks.boxShadowSpread = {
            get: function ( elem, computed, extra ) {
                return $.css(elem, support.boxShadow).split(/\s/)[6];
            },
            set: function( elem, value ) {
                elem.style[ support.boxShadow ] = insert_into($.css(elem, support.boxShadow), value, 6);
            }
        };
        
        
        $.cssHooks.boxShadowX = {
            get: function ( elem, computed, extra ) {
                return $.css(elem, support.boxShadow).split(/\s/)[3];
            },
            set: function( elem, value ) {
                elem.style[ support.boxShadow ] = insert_into($.css(elem, support.boxShadow), value, 3);
            }
        };
        
        
        $.cssHooks.boxShadowY = {
            get: function ( elem, computed, extra ) {
                return $.css(elem, support.boxShadow).split(/\s/)[4];
            },
            set: function( elem, value ) {
                elem.style[ support.boxShadow ] = insert_into($.css(elem, support.boxShadow), value, 4);
            }
        };
        
    }

})(jQuery);