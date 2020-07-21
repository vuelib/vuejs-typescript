import XRegExp from "xregexp";

const CHAR_MAP = {
    // Czech
    Č: "C",
    Ď: "D",
    Ě: "E",
    Ň: "N",
    Ř: "R",
    Š: "S",
    Ť: "T",
    Ů: "U",
    Ž: "Z",
    č: "c",
    ď: "d",
    ě: "e",
    ň: "n",
    ř: "r",
    š: "s",
    ť: "t",
    ů: "u",
    ž: "z",
    ý: "y",
    á: "a",
    í: "i",
    ú: "u",
    é: "e"
};

const DEFAULTS = {
    delimiter: "-",
    limit: undefined,
    lowercase: true,
    replacements: {},
    transliterate: typeof XRegExp === "undefined" ? true : false
};

export const urlSlug = (s: String, opt?: any) => {
    s = String(s);
    opt = Object(opt);

    // Merge options
    for (var k in DEFAULTS) {
        if (!opt.hasOwnProperty(k)) {
            opt[k] = DEFAULTS[k];
        }
    }

    // Make custom replacements
    for (var k in opt.replacements) {
        s = s.replace(RegExp(k, "g"), opt.replacements[k]);
    }

    // Transliterate characters to ASCII
    if (opt.transliterate) {
        for (var k in CHAR_MAP) {
            s = s.replace(RegExp(k, "g"), CHAR_MAP[k]);
        }
    }

    // Replace non-alphanumeric characters with our delimiter
    var alnum =
        typeof XRegExp === "undefined"
            ? RegExp("[^a-z0-9]+", "ig")
            : XRegExp("[^\\p{L}\\p{N}]+", "ig");
    s = s.replace(alnum, opt.delimiter);

    // Remove duplicate delimiters
    s = s.replace(RegExp("[" + opt.delimiter + "]{2,}", "g"), opt.delimiter);

    // Truncate slug to max. characters
    s = s.substring(0, opt.limit);

    // Remove delimiter from ends
    s = s.replace(
        RegExp("(^" + opt.delimiter + "|" + opt.delimiter + "$)", "g"),
        ""
    );

    return opt.lowercase ? s.toLowerCase() : s;
};
