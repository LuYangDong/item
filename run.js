<script type="text/javascript">
function runCode(num){   
    var obj=document.getElementsByTagName("textarea");   
    for(var i=0;i<obj.length;i++){   
        if(num==i){   
            var newWin=window.open('',"_blank",'');   
            newWin.document.open('text/html','replace');   
            newWin.opener=null  
            var testCode=obj[num].value;   
            newWin.document.write(testCode);   
            newWin.document.close();   
        }                  
    }   
}   
/*****�������Ϊhtmlҳ�棬�ֽ׶�ֻ֧��IE******/  
//firefox�����ݵ���Ҫԭ�������Ϊff��֧��execCommand('saveas','','filename');         
function saveCode(num){   
    var obj=document.getElementsByTagName("textarea");   
    for(var i=0;i<obj.length;i++){   
        if(num==i){   
            var newWin=window.open('','_blank','top=10000');   
            newWin.document.open('text/html','replace');   
            var testCode=obj[num].value;   
            newWin.document.write(testCode);   
            newWin.document.execCommand('saveas','','code.htm');   
            newWin.close();   
        }   
    }   
}   
function copyCode(num){   
    var obj=document.getElementsByTagName("textarea");   
    for(var i=0;i<obj.length;i++){   
        if(num==i){        
            var testCode=obj[num].value;   
            if(copy2Clipboard(testCode)!=false)   
            {   
                alert("���ɵĴ����Ѿ����Ƶ�ճ���壬�����ʹ��Ctrl+V ������Ҫ�ĵط�ȥ��Ŷ��  ");   
            }   
        }   
    }   
}   
copy2Clipboard=function(txt){   
    if(window.clipboardData){   
        window.clipboardData.clearData();   
        window.clipboardData.setData("Text",txt);   
    }   
    else if(navigator.userAgent.indexOf("Opera")!=-1){   
        window.location=txt;   
    }   
    else if(window.netscape){   
        try{netscape.security.PrivilegeManager.enablePrivilege(   
"UniversalXPConnect");   
    }   
    catch(e){   
        alert("����firefox��ȫ�������������м������������򿪡�about:config����signed.applets.codebase_principal_support������Ϊtrue��֮������");   
        return false;   
    }   
    var clip=Components.classes['@mozilla.org/widget/clipboard;1'].createInstance(Components.interfaces.nsIClipboard);   
    if(!clip)   
    return;   
    var trans=Components.classes['@mozilla.org/widget/transferable;1'].createInstance(Components.interfaces.nsITransferable);   
    if(!trans)   
    return;   
    trans.addDataFlavor('text/unicode');   
    var str=new Object();   
    var len=new Object();   
    var str=Components.classes["@mozilla.org/supports-string;1"].createInstance(Components.interfaces.nsISupportsString);   
    var copytext=txt;str.data=copytext;trans.setTransferData("text/unicode",str,copytext.length*2);   
    var clipid=Components.interfaces.nsIClipboard;if(!clip)   
    return false;   
    clip.setData(trans,null,clipid.kGlobalClipboard);   
    }   
}      
</script>