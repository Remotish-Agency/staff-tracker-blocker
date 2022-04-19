var enableDebug = false;
var enableDateExpire = true;

// deleteCookie('staffDetector');

// Delete cookie
function deleteCookie(name) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

isCookieReal('hubspotapi');

function isCookieReal(name) {
    // If cookie name exists then return true.
    if (document.cookie.indexOf(name) != -1) {
        return true;
    }
    // If cookie name does not exist then return false.
    else {
        return false;
    }
}

// Read cookie value
function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
}

if (enableDebug) {
    // Create cookie called hubspotapi
    document.cookie = "hubspotapi=AAccUfuN7-RpG-mW5POkeowM1WIOCxWe9yuXaiX-AjZ0OdROLN17X__-uJb_y5NXKDoCy_Lu5pHC_hFDV4u5vurCnuAB0SzwWdBAD0I_ePAEXl3AOXmIFQPkj2TM4bRETKIGCQ227zMfzQ1PWuXQXS3F5sza9kCQA5AJJwvFoBhBiogTg9PZOBKi2Jpyq8ftuiF9eAvjUVl8dDYKzPeovJar5DfbvMgHxqIebTVWYlSeVDW-ORMGDn3D9OXeK3-HCRg7hZrx0r3HUiliBuuxZyDmeV1JuNFPajrgBXIYiYrt1EhYtVrY_XpfXb5jJwIsCWDT99h0n56LgF7qbAXaDpEiBXM6olSI7mwFIpKszkfIbQCpPdg16Rr67c3bXbkmBzR0RJTdpQ7_xLjYwYWJQeNRUU-RsFgOFOo4CCEWOrdsL84E7hKTJxc0fPmgiJQ9t4LKMFVZiJ41qmyi6bgs5Ltgtg1lh3IkViQSAdaeQPoGC2WyvISjDmoGpf4-FLkMKC47Gp3LuBpprXlXFEyQfd0P7AWvKVoXmrUUqleMljcD81bUSFcuQZ-nU84DtMyHnEa8hm4Spb4P7i6Y0f__FO-3xxDmCJ2iW5NVVHMzGJQawjAwKRSW6DxlygoSQHiNQB1VhY_GENOTSrR655I97vtbPkLAJOpQzx_tFwsdCjYw9CQiKALXYbxfugQp-3zWTBByF5x1gPllicj8yQQG5KiIV0zLHuX1wRH2bAxOw4mnYI653IbzPgjeEX4ZB1Iwndu6WGeJWAeqz22uNC7nMfiBdVKb4UoIU_vyXE5kqEkCaEAbbpA4GJe7eejlZR0gEDAHvXw7-3-sPZVCA0CfzRyXJ8XHWaGBXft3giFdJhacndRiLx_W4KuH8eq7SF6p2LlmSqq7k77acOpLql4FIy-wRcnTRwtFz8DdAu_850pDwikn70vzUjX2GXA1XZjPehimRdprDD9vNYOUz3sT_1Wj98WGPWEpfkGCg5zKZ6t2FU1WV1OqVXQMxBY-tqsLC6xOsJiPfcnnh04kJhYtHDgSluta8zwOKP50VJOD8HioV7qNVesVG0dKRMBt3aL_9uBgimVOrYNNnLEnJq9cRyqnCG2p0VS1aYqgfYDJYHY_f_WN7cSfxulndbKfhXbNvbu4Pp-zapwW2Mu61PyP5zV3gXM0yVpQUGQsGC1FyLAWrG25JVRZF2WS7iocJN7JzdLTMH0JLJk76bjDGnyQ2WaAKY1Bs8-CiiLu28uSWz3peDNaIAtRHBNPFQNlsc2ciyLqjGrhVxQHoMfFmrVnKoXaEYtqMFwbP4VdsX8sB0yS6ZC6nCcDdwyfsQDVdRjePzkciU7d9gvEjSjjBsIQXF7QK21J-AX2cqUfMtdUBOHmCuW8H8wcBB8zq-5Qw9Ew1-WqA8n6RVg8hSnuQmlbcXvSoiolJniwlx-j01kCh3oeTfUjffkuoJVyMfkqUgMd8R-xcxspJhn2mLTXKZ6gqjMq8m1F2QUWMfpUkTpm6OjicQp6XXrmlCqT_PI4T_dnqz2G3xFuAR7lxqi5a28KIRMAqu4P5ENGBcd34Kv6z5iPUSDoYx0m62nLu6TKGvnqCgdxO5_beXxFa_P7Yh_0uZl5y_Y4YNjJ8Yx94_HFoCiqnCq9l6Y19t-diwPiVZPWtxZl8S0Ir0QcFUy6iErzmYayDVwPJ6dqcoPLgYD2YSJgIPKED6gMjArcpKP_J3BEFfgxcI24hcVCiHlJQhgyu378X4tEfkovavCm7i7ojEUQtVmEhwl6QLo";
}

// if "staffDetector" exists and is different from false or null, run.
if (isCookieReal('staffDetector') != false && isCookieReal('staffDetector') != null) {
    console.log("You are a part of the staff, you have been detected previously.");
} else {
    console.log("New possible user detected.");
    if (isCookieReal('hubspotapi') == true) {
        // Add expiration of 7 days to "staffDetector" cookie
        if (enableDateExpire) {
            document.cookie = `staffDetector=${isCookieReal('hubspotapi')}; expires=${new Date(new Date().getTime() + 604800000).toUTCString()}`;
        } else {
            document.cookie = `staffDetector=${isCookieReal('hubspotapi')};`;
        }

        console.log('Staff detected! Attaching cookie to local storage.');
    } else {
        console.log('Normal user detected! No cookies being saved.');
    }
}
