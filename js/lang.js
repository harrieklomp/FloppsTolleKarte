function langEN()
{
  trackAction("langEN");
  $.i18n.setLng("en", function(t) { $(document).i18n(); });
}

function langDE()
{
  trackAction("langDE");
  $.i18n.setLng("de", function(t) { $(document).i18n(); });
}

function trans(key) {
    if (typeof($.t) === typeof(Function)) {
        return $.t(key);
    } else {
        return key;
    }
}

var lang = "en";
function TT(en, de)
{
  return (lang == "en") ? en : de;
}
