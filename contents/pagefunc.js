//
function goIdx(sakuinId){
//alert("test1 "+top.headFrame.linkPath.hid.value);
	top.headFrame.linkPath.hid.value = sakuinId;
	top.bodyFrame.document.location.href = "body.html";
//¥Ø¥Ã¥À¡¼¤Î¥×¥EÀ¥¦¥ó¥á¥Ë¥å¡¼¤òÉ½¼¨¤¹¤E
	top.headFrame.document.all.item('headTreeForm').style.display = 'block';
}
function goBodyChg(htmlFile){
	top.bodyFrame.document.location.href = htmlFile;
//¥Ø¥Ã¥À¡¼¤Î¥×¥EÀ¥¦¥ó¥á¥Ë¥å¡¼¤ò±£¤¹
	top.headFrame.document.all.item('headTreeForm').style.display = 'none';
}
function linkPathSet(){
// ³¨ÌÜ¼¡¡¢º÷°ú¤«¤é¥Eó¥¯¤¹¤EÈ¤­¤Ë¡¢¥Ø¥Ã¥À¡¼¤Î±£¤·ID ¤ò¼èÆÀ¤¹¤E
var linkPath = top.headFrame.linkPath.hid.value;
var linkPathDir = linkPath.substring(0, 4);
	if (top.headFrame.linkPath.hid.value != "nothing"){
//¥»¥Ã¥È¤µ¤EÆ¤¤¤ED ¤¬7·ES123456)¤Î¥Eó¥¯Àè¤ËÂĞ±ş¡£¤½¤EÊ³°¤ÏÄÌ¾EÎËÜÊ¸(10·å°Ê¾å¤ÎID)
//mylinkSet() ¤Ï¡¢data/honbun.js ¤Îfunction
		if (linkPath.length == 7) {
			linkPath = mylinkSet(linkPath);
		}
		document.location.href = "../" + linkPathDir + "/" + linkPath + ".html";
		top.headFrame.linkPath.hid.value = "nothing"
		chgFile = "../../" + "tree" + linkPath.substring(1,2) + ".html";
		chgLev = "tree" + linkPath.substring(1,2) + ".html";
// ¥×¥EÀ¥¦¥ó¤Î¥á¥Ë¥å¡¼ÊÑ¹¹
		top.headFrame.document.F1.S1.value = chgLev;
// º¸¥Ú¡¼¥¸¤ÎÊÑ¹¹
		parent.menuFrame.document.location.href = chgFile; // ¡ÖS904001a17¡×->¡Ö../../tree9.html¡×;
	}
}
//º÷°ú¥Ú¡¼¥¸ÍÑ¸¡ºE
function idxsearch(idxId){
idx_ID = ['idx_ea','idx_eb','idx_ec','idx_ed','idx_ee','idx_ef','idx_eg','idx_eh','idx_ei','idx_ej','idx_ek','idx_el','idx_em','idx_en','idx_eo','idx_ep','idx_er','idx_es','idx_et','idx_eu','idx_ev','idx_ew','idx_ey'];
	for(i = 0; i < idx_ID.length; i++){
		if(idxId == idx_ID[i]){
			parent.main.document.all.item(idx_ID[i]).style.display = "block";
			parent.main.document.location.href = 'sakuin_main.html#top';
		}
		else{
			parent.main.document.all.item(idx_ID[i]).style.display = "none";
		}
	}
}
//ÇÛÀş¿Ş¥Ú¡¼¥¸ÍÑ¸¡ºE
function haisenzuSearch(idxId){
idx_ID = ['idx_ea','idx_eb','idx_ec','idx_ed','idx_ee','idx_ef','idx_eg','idx_eh','idx_ei','idx_ek','idx_en','idx_eo','idx_ep','idx_er','idx_es','idx_et','idx_ev','idx_ew','idx_ks','idx_st'];
	for(i = 0; i < idx_ID.length; i++){
		if(idxId == idx_ID[i]){
			parent.main.document.all.item(idx_ID[i]).style.display = "block";
			parent.main.document.location.href = "wiring_main_result.html#top";
			for(j = 1; j < idx_ID.length; j++){
				parent.main.document.all.item('top_' + j).style.display = 'none';
			}
		}
		else{
			parent.main.document.all.item(idx_ID[i]).style.display = "none";
		}
	}
}
//ÇÛÀş¿Ş¥Ú¡¼¥¸Á´ÉôÉ½¼¨
function haisenzuAll(){
idx_ID = ['idx_ea','idx_eb','idx_ec','idx_ed','idx_ee','idx_ef','idx_eg','idx_eh','idx_ei','idx_ek','idx_en','idx_eo','idx_ep','idx_er','idx_es','idx_et','idx_ev','idx_ew','idx_ks','idx_st'];
	for(i = 0; i < idx_ID.length; i++){
		if(parent.main.document.all.item(idx_ID[i]).style.display == 'none'){
			parent.main.document.all.item(idx_ID[i]).style.display = 'block';
		}
	}
	for(j = 1; j < idx_ID.length; j++){
			parent.main.document.all.item('top_' + j).style.display = 'block';
	}
}
//DTC¥³¡¼¥É¸¡ºE¥Õ¥©¡¼¥à¤ÎÃÍ¤ò¥Ø¥Ã¥À¤Î±£¤·¥Õ¥©¡¼¥à¤ËÆş¤EE
function sendInput(){
inputData = document.myForm1.myMes.value;
top.headFrame.linkPath.hid.value = inputData;
top.bodyFrame.document.location.href = 'dtc_result.html';
}
//DTC¥³¡¼¥É¸¡ºE¥Ø¥Ã¥À¤Î±£¤·¥Õ¥©¡¼¥à¤ÎÃÍ¤ò¼õ¤±¼è¤Ã¤ÆÂĞ±ş¤·¤¿¥Ú¡¼¥¸¤ËÈô¤Ğ¤¹
function DTCsearch(){
inputData = top.headFrame.linkPath.hid.value;
DTCId = ['11','12','13','14','15','16','21','22','23','24','25','26','27','28','29','31','32','33','34','35','36','37','38','41','42','43','44','45','46','47','51','52','53','54','55','56','57','61','62','63','64','65','66','71','72','73','74','76','81','85','P0011','P0021','P0030','P0031','P0032','P0037','P0038','P0101','P0102','P0103','P0107','P0108','P0112','P0113','P0117','P0118','P0122','P0123','P0125','P0130','P0131','P0132','P0133','P0134','P0137','P0138','P0139','P0140','P0171','P0172','P0222','P0223','P0230','P0244','P0245','P0246','P0301','P0302','P0303','P0304','P0327','P0328','P0335','P0340','P0345','P0400','P0410','P0413','P0414','P0418','P0420','P0458','P0459','P0462','P0463','P0502','P0503','P0512','P0513','P0519','P0562','P0563','P0600','P0604','P0605','P0607','P0638','P0691','P0692','P0700','P0705','P0712','P0713','P0715','P0719','P0720','P0724','P0725','P0731','P0732','P0733','P0734','P0736','P0741','P0743','P0748','P0753','P0758','P0763','P0768','P0801','P0851','P0852','P1137','P1160','P1410','P1418','P1492','P1493','P1494','P1495','P1496','P1497','P1498','P1499','P1518','P1521','P1560','P1570','P1571','P1572','P1574','P1576','P1577','P1706','P1707','P1718','P1817','P2004','P2005','P2006','P2007','P2008','P2009','P2011','P2012','P2016','P2017','P2021','P2022','P2088','P2089','P2092','P2093','P2100','P2101','P2102','P2103','P2109','P2111','P2122','P2123','P2127','P2128','P2135','P2138','P2228','P2229','P2432','P2433','P2440','P2441','P2444','P2503','P2504'];
	matchFlg = 0;
	for(i = 0; i < DTCId.length; i++){
		if(inputData == DTCId[i]){
			matchFlg = 1;
		}
	}
	if(matchFlg == 1){
		document.all.item(inputData).style.display = 'block';
	}
	else if(top.headFrame.linkPath.hid.value == 'ALL'){
		for(j = 0; j < DTCId.length; j++){
			document.all.item(DTCId[j]).style.display = 'block';
		}
		for(k = 1; k < (DTCId.length / 5) + 1; k++){
			document.all.item('top_' + k).style.display = 'block';
		}
	}
	else{
		document.all.item('head').style.display = 'none';
		document.all.item('etc').style.display = 'block';
		document.all.item('etc2').style.display = 'none';
	}
}
//DTC¥³¡¼¥É¸¡ºEÁ´É½¼¨ÍÑ
function DTCAll(){
top.headFrame.linkPath.hid.value = 'ALL';
top.bodyFrame.document.location.href = 'dtc_result.html';
}

