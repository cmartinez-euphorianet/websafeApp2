function readyfunction() {


//$(document).on('click', 'li', function() {

//});

//jQuery( document ).ready(function(){
   var wsColorNames = new Array;
   wsColorNames = [ "AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black", "BlanchedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray", "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "DarkOrange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "DimGray", "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite", "Gold", "GoldenRod", "Gray", "Green", "GreenYellow", "HoneyDew", "HotPink", "IndianRed ", "Indigo ", "Ivory", "Khaki", "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan", "LightGoldenRodYellow", "LightGray", "LightGreen", "LightPink", "LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSteelBlue", "LightYellow", "Lime", "LimeGreen", "Linen", "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", "MidnightBlue", "MintCream", "MistyRose", "Moccasin", "NavajoWhite", "Navy", "OldLace", "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen", "PaleTurquoise", "PaleVioletRed", "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue", "Purple", "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen", "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue", "SlateGray", "Snow", "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Wheat", "White", "WhiteSmoke", "Yellow", "YellowGreen" ];
   var wsColorHexCode = new Array;
   wsColorHexCode = [ "#F0F8FF", "#FAEBD7", "#00FFFF", "#7FFFD4", "#F0FFFF", "#F5F5DC", "#FFE4C4", "#000000", "#FFEBCD", "#0000FF", "#8A2BE2", "#A52A2A", "#DEB887", "#5F9EA0", "#7FFF00", "#D2691E", "#FF7F50", "#6495ED", "#FFF8DC", "#DC143C", "#00FFFF", "#00008B", "#008B8B", "#B8860B", "#A9A9A9", "#006400", "#BDB76B", "#8B008B", "#556B2F", "#FF8C00", "#9932CC", "#8B0000", "#E9967A", "#8FBC8F", "#483D8B", "#2F4F4F", "#00CED1", "#9400D3", "#FF1493", "#00BFFF", "#696969", "#1E90FF", "#B22222", "#FFFAF0", "#228B22", "#FF00FF", "#DCDCDC", "#F8F8FF", "#FFD700", "#DAA520", "#808080", "#008000", "#ADFF2F", "#F0FFF0", "#FF69B4", "#CD5C5C", "#4B0082", "#FFFFF0", "#F0E68C", "#E6E6FA", "#FFF0F5", "#7CFC00", "#FFFACD", "#ADD8E6", "#F08080", "#E0FFFF", "#FAFAD2", "#D3D3D3", "#90EE90", "#FFB6C1", "#FFA07A", "#20B2AA", "#87CEFA", "#778899", "#B0C4DE", "#FFFFE0", "#00FF00", "#32CD32", "#FAF0E6", "#FF00FF", "#800000", "#66CDAA", "#0000CD", "#BA55D3", "#9370DB", "#3CB371", "#7B68EE", "#00FA9A", "#48D1CC", "#C71585", "#191970", "#F5FFFA", "#FFE4E1", "#FFE4B5", "#FFDEAD", "#000080", "#FDF5E6", "#808000", "#6B8E23", "#FFA500", "#FF4500", "#DA70D6", "#EEE8AA", "#98FB98", "#AFEEEE", "#DB7093", "#FFEFD5", "#FFDAB9", "#CD853F", "#FFC0CB", "#DDA0DD", "#B0E0E6", "#800080", "#FF0000", "#BC8F8F", "#4169E1", "#8B4513", "#FA8072", "#F4A460", "#2E8B57", "#FFF5EE", "#A0522D", "#C0C0C0", "#87CEEB", "#6A5ACD", "#708090", "#FFFAFA", "#00FF7F", "#4682B4", "#D2B48C", "#008080", "#D8BFD8", "#FF6347", "#40E0D0", "#EE82EE", "#F5DEB3", "#FFFFFF", "#F5F5F5", "#FFFF00", "#9ACD32" ]
   var wsColorRGBCode = new Array;
   wsColorRGBCode = [ "240, 248, 255", "250, 235, 215", "0, 255, 255", "127, 255, 212", "240, 255, 255", "245, 245, 220", "255, 228, 196", "0, 0, 0", "255, 235, 205", "0, 0, 255", "138, 43, 226", "165, 42, 42", "222, 184, 135", "95, 158, 160", "127, 255, 0", "210, 105, 30", "255, 127, 80", "100, 149, 237", "255, 248, 220", "220, 20, 60", "0, 255, 255", "0, 0, 139", "0, 139, 139", "184, 134, 11", "169, 169, 169", "0, 100, 0", "189, 183, 107", "139, 0, 139", "85, 107, 47", "255, 140, 0", "153, 50, 204", "139, 0, 0", "233, 150, 122", "143, 188, 143", "72, 61, 139", "47, 79, 79", "0, 206, 209", "148, 0, 211", "255, 20, 147", "0, 191, 255", "105, 105, 105", "30, 144, 255", "178, 34, 34", "255, 250, 240", "34, 139, 34", "255, 0, 255", "220, 220, 220", "248, 248, 255", "255, 215, 0", "218, 165, 32", "128, 128, 128", "0, 128, 0", "173, 255, 47", "240, 255, 240", "255, 105, 180", "205, 92, 92", "75, 0, 130", "255, 255, 240", "240, 230, 140", "230, 230, 250", "255, 240, 245", "124, 252, 0", "255, 250, 205", "173, 216, 230", "240, 128, 128", "224, 255, 255", "250, 250, 210", "211, 211, 211", "144, 238, 144", "255, 182, 193", "255, 160, 122", "32, 178, 170", "135, 206, 250", "119, 136, 153", "176, 196, 222", "255, 255, 224", "0, 255, 0", "50, 205, 50", "250, 240, 230", "255, 0, 255", "128, 0, 0", "102, 205, 170", "0, 0, 205", "186, 85, 211", "147, 112, 219", "60, 179, 113", "123, 104, 238", "0, 250, 154", "72, 209, 204", "199, 21, 133", "25, 25, 112", "245, 255, 250", "255, 228, 225", "255, 228, 181", "255, 222, 173", "0, 0, 128", "253, 245, 230", "128, 128, 0", "107, 142, 35", "255, 165, 0", "255, 69, 0", "218, 112, 214", "238, 232, 170", "152, 251, 152", "175, 238, 238", "219, 112, 147", "255, 239, 213", "255, 218, 185", "205, 133, 63", "255, 192, 203", "221, 160, 221", "176, 224, 230", "128, 0, 128", "255, 0, 0", "188, 143, 143", "65, 105, 225", "139, 69, 19", "250, 128, 114", "244, 164, 96", "46, 139, 87", "255, 245, 238", "160, 82, 45", "192, 192, 192", "135, 206, 235", "106, 90, 205", "112, 128, 144", "255, 250, 250", "0, 255, 127", "70, 130, 180", "210, 180, 140", "0, 128, 128", "216, 191, 216", "255, 99, 71", "64, 224, 208", "238, 130, 238", "245, 222, 179", "255, 255, 255", "245, 245, 245", "255, 255, 0", "154, 205, 50" ];
   var wsOrderAtoZ = new Array;
   wsOrderAtoZ = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140];
   wsOrderLight = [ 8, 26, 36, 52, 81, 96, 98, 113, 131, 57, 91, 22, 23, 28, 32, 29, 117, 45, 99, 120, 24, 35, 83, 122, 12, 37, 41, 72, 38, 43, 90, 86, 16, 20, 50, 88, 129, 62, 31, 3, 10, 14, 15, 21, 30, 40, 46, 49, 77, 78, 80, 100, 101, 114, 128, 139, 140, 51, 126, 109, 11, 74, 39, 89, 42, 134, 116, 125, 84, 27, 56, 53, 82, 133, 102, 85, 106, 34, 115, 17, 18, 25, 119, 87, 130, 33, 13, 55, 118, 65, 135, 124, 71, 59, 111, 4, 69, 123, 73, 75, 104, 64, 112, 132, 103, 105, 68, 136, 95, 94, 70, 47, 108, 110, 7, 67, 9, 63, 2, 6, 107, 19, 66, 76, 60, 79, 93, 97, 138, 121, 1, 5, 44, 54, 58, 61, 92, 48, 127, 137];
   wsOrderMatiz = [ 102, 90, 39, 55, 61, 106, 20, 110, 70, 115, 81, 32, 12, 43, 56, 65, 114, 127, 93, 118, 133, 33, 17, 101, 71, 122, 99, 140, 29, 53, 121, 117, 16, 119, 108, 109, 79, 15, 62, 7, 30, 13, 2, 130, 95, 9, 107, 94, 100, 136, 97, 44, 24, 50, 19, 49, 63, 59, 103, 27, 52, 98, 6, 67, 77, 139, 76, 54, 58, 26, 34, 45, 78, 69, 104, 37, 14, 112, 64, 40, 124, 73, 120, 86, 129, 1, 42, 128, 92, 126, 74, 75, 88, 18, 82, 4, 116, 134, 72, 89, 132, 83, 135, 91, 96, 113, 22, 28, 111, 60, 10, 46, 80, 48, 125, 35, 87, 85, 11, 57, 31, 38, 84, 36, 131, 23, 105, 3, 21, 66, 5, 8, 41, 51, 25, 123, 68, 47, 138, 137];
   for (c = 0; c < wsOrderAtoZ.length; c++){
       var wPs = eval(wsOrderAtoZ[c]-1);
       jQuery("<li style='background:"+wsColorNames[wPs]+"'><i></i><span>"+wsColorNames[wPs]+"</span></li>)").appendTo(".color-list ul");
   } 
//});
}