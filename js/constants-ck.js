function eventTextLineChange(e){var t=$(this);bulkChangeTextForTab(e.data.grumpy,t.text(),t)}function onblur(){var e=$(this),t=e.html();if(e.data("enter")!==t){e.data("enter",t);e.trigger({type:"change",action:"save"})}return e}function onkeyup(){var e=$(this),t=e.html();if(e.data("before")!==t){e.data("before",t);e.trigger({type:"change",action:"update"})}return e}function onfocus(){var e=$(this);e.data("enter",e.html());e.data("before",e.html());return e}function setColumnTemplate(e,t){for(var n=0;n<t.columns.length;n++){var r=t.columns[n].sizes,i=e.find(t.columns[n].innerblock);for(var s=0;s<r.length;s++){fontsize=r[s].toString();var o=$("<p>").addClass("textline").css("font-size",fontsize+"px").attr("contenteditable",!0).text(t.text).on("focus",onfocus).on("keyup paste",onkeyup).on("blur",onblur).on("change",{grumpy:t},eventTextLineChange);i.append(o)}}}function setSplitSingleToDual(e,t,n){setColumnTemplate(e,t);setColumnTemplate(e,n)}function bulkChangeTextForTab(e,t,n){for(var r=0;r<e.columns.length;r++)$(e.tab).find(e.columns[r].innerblock).find(".textline").not(n).text(t)}function prepareAndShowFontLayout(){setColumnTemplate($("#typecontainer"),GRUMPIES.short);var e=document.createElement("div");e.setAttribute("style","width: 920px;");for(var t=28;t>8;t--){var n=document.createElement("p");n.setAttribute("class","sizelabel");n.textContent=t+"px";e.appendChild(n)}}var GRUMPIES={"short":{text:"",columns:[{sizes:[144],innerblock:"div"}]}};