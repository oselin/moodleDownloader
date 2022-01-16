function DOMtoString(document_root) {
  var html = '',
      node = document_root.firstChild;
  while (node) {
      switch (node.nodeType) {
      case Node.ELEMENT_NODE:
          html += node.outerHTML;
          break;
      case Node.TEXT_NODE:
          html += node.nodeValue;
          break;
      case Node.CDATA_SECTION_NODE:
          html += '<![CDATA[' + node.nodeValue + ']]>';
          break;
      case Node.COMMENT_NODE:
          html += '<!--' + node.nodeValue + '-->';
          break;
      case Node.DOCUMENT_TYPE_NODE:
          // (X)HTML documents are identified by public identifiers
          html += "<!DOCTYPE " + node.name + (node.publicId ? ' PUBLIC "' + node.publicId + '"' : '') + (!node.publicId && node.systemId ? ' SYSTEM' : '') + (node.systemId ? ' "' + node.systemId + '"' : '') + '>\n';
          break;
      }
      node = node.nextSibling;
  }
  console.log(html);
  return html;
}


function downloader(){
  var qtdiframe = document.getElementsByTagName('iframe').length;
  console.log("QUANTIDADE DE IFRAMES ENCONTRADOS: " + qtdiframe)
  for (var i = 0; i <= qtdiframe; i++) {
      var iframe = document.getElementsByTagName('iframe')[i]; 
      console.log("IFRAME ENCONTRADO: " + iframe)
      window.open(iframe.src, '_blank');
  };

  // @author Rob W <http://stackoverflow.com/users/938089/rob-w>
// Demo: var serialized_html = DOMtoString(document);


chrome.runtime.sendMessage({
  action: "getSource",
  source: DOMtoString(document)
});
  
  



/*
  var vids = document.getElementsByTagName('video');
  console.log(".....");
  console.log(vids);
  // vids is an HTMLCollection
  for( var i = 0; i < vids.length; i++ ){

    var mylink = vids.item(i).src;
    console.log( mylink );
    console.log(i);
    
    var namefile = prompt("Inserisci nome del file", "default");

    if (namefile == null || namefile == "") {
      namefile = "default";
    }

    //var mylink = "https://kmc.l2l.cineca.it/p/126/sp/12600/playManifest/entryId/0_w4e7r8sr/flavorId/0_9gl416wb/format/url/protocol/https/a.mp4?referrer=aHR0cHM6Ly9rYWYtMTI2cHJvZC5kaWRhdHRpY2FvbmxpbmUudW5pdG4uaXQ=&ks=djJ8MTI2fIDJosGM3f0CUDL4DZx69j86t8uXLSDWzdYjdR2r9ZTrXl9T_7_MI9O77t_7LGrsQrZB71YVqjvoK0-63emNyrx25fuO19n1K0ioOTC1oOzivCa6r_3rCW_ICnb1xjMzowc-Edtstk8519KMS_LduwkP1zqDWJV_R0yh9AEbkEZW_AF9tIhb9KWSpSZxkca_7jRdcTtSwUuTzcvGh2MNI9qnqtophupOd-Ub0XVM7qDv8a6eoHG_2lI8TVzB7lzebCRGjvZa_wkxsAaUJc38EWhvjQzYVSnoOLD-gp1hH_ocioqmdk73jRbGPdsiRniOFvqpnIJp5EMG7iwfevoj0fdUiCGZGrkkKvf4VitOlaUsAC2qf18Ytw-EfZzbaYwdl1-UwUakrD96SakF6ThqQcOTYPQm_pBS-zt1sqwfL13sKFAfMaYPK_fjl4djWuzj67uscuVt-WulL-C85oykWHk=&playSessionId=e2dfab06-b7db-9591-4011-3ce9c9d3747f&clientTag=html5:v2.89&playbackContext=83368&uiConfId=23449808";
    //global.fetch = require("node-fetch");

    fetch(mylink)
      .then((res) => { return res.blob(); })
      .then((data) => {
        var a = document.createElement("a");
        a.href = window.URL.createObjectURL(data);
        a.download = namefile;
        a.click();
      });
    }*/

    alert("Download iniziato");
}

document.onreadystatechange = function()
{
    if(document.readyState === 'complete')
    {
        // Initialize butotn with users's prefered color
        console.log('ok');

        downloader();
    }
}

